import React, { useRef, useEffect, useState } from 'react';
import moment from 'moment';
import Head from 'next/head'
import axios from 'axios'

import useWindowSize from '../hooks/useWindowSize'

import { ResponsiveContainer } from 'recharts';

import { Graphic } from '../components/Graphic'
import { CompanyGraphIcon } from '../components/CompanyGraphIcon'

import { Container, Body, DashboardHeader, DashboardInput, DashboardGraphics, DashboardGraphicsHeader, RecentCompanies, RecentCompaniesHeader, RecentCompaniesCard, RecentCompaniesCardContent, Menu, RightTab, Profile, FavoriteCompanies, FavoriteCompaniesHeader, FavoriteCompaniesBody } from '../styles/pages'

interface ICompanies {
  symbol: string
  exchange: string
  name: string
  date: string
  isEnabled: boolean
  type: string
  region: string
  currency: string
  iexId: string
  figi: string
  cik: string
}

interface ICompany {
  symbol: string
  companyName: string
  close: number
  latestPrice: number
  change: number
  changePercent: number
}

interface IHistoricalPrice {
  average: number
  close: number
  date: string
  high: number
  label: string
  low: number
  minute: string
  notional: number
  numberOfTrades: number
  open: number
  volume: number
}

const Home: React.FC<void> = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([])
  const [company, setCompany] = useState<ICompany>()
  const [historicalPrice, sethistoricalPrice] = useState<IHistoricalPrice>()

  const [input, setInput] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const [searches, setSearches] = useState([])
  const [favorites, setFavorites] = useState([])

  const { width } = useWindowSize()
  const squareRef = useRef(null)
  let teste;
  if (width > 1000) {
    teste = 450
  } else {
    teste = 45
  }

  useEffect(() => {
    async function loadCompanies(): Promise<void> {
      const companies = await axios
        .get('https://cloud.iexapis.com/stable/ref-data/symbols?token=?')
        .then(response => response.data)
      setCompanies(companies)
    }
    loadCompanies()
  }, [])

  async function loadCompany(symbol: string): Promise<void> {
    const company = await axios
      .get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_?`)
      .then(response => response.data)
    loadHistoricalPrices(company.symbol)
    handleAddCompanySearches(company)
    setCompany(company)
    setInput('')
  }

  async function loadHistoricalPrices(symbol: string): Promise<void> {
    const historicalPrice = await axios
      .get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/1d?token=pk_?`)
      .then(response => response.data)
    sethistoricalPrice(historicalPrice)
  }

  function getCompaniesList(companies) {

    if (companies) {
      return companies.map((company: ICompanies, i) => {
        return (
          <div key={i} onClick={() => loadCompany(company.symbol)}>
            <p><span>{company.symbol}</span> - {company.name}</p>
          </div>
        )
      })
    }
    return null
  }

  const updateInput = async (input) => {
    const filtered = companies.filter(company => {
      if (input != '' && input.length > 3) {
        return company.name.toLowerCase().includes(input.toLowerCase())
      }
      return null
    })
    setInput(input)
    setFilteredCompanies(filtered)
  }

  function handleAddCompanyFavorites(company) {
    if (favorites && !favorites.some(favoritesCompany => favoritesCompany.symbol == company.symbol)) {
      setFavorites(favorites => [...favorites, company])
    }
  }

  function handleAddCompanySearches(company) {
    if (searches && !searches.some(searchesCompany => searchesCompany.symbol == company.symbol)) {
      setSearches(searches => [...searches, company])
    }
  }

  function handleRemoveCompanyFavorites(symbol) {
    const Company = favorites.filter((company) => company.symbol !== symbol)
    setFavorites(Company)
  }

  function checkIsfavorite(company) {
    if (favorites && favorites.some(favoritesCompany => favoritesCompany.symbol == company.symbol)) {
      return <img src="starFull.svg" />
    }
    return <img src="star.svg" alt="" style={{ cursor: 'pointer' }} onClick={() => handleAddCompanyFavorites(company)} />
  }

  function formatValue(value) {
    const result = value * 100
    return result.toFixed(3)
  }

  return (
    <Container>
      <Head>
        <title>IMA - Dashboard</title>
      </Head>

      <Menu>
        <img src="imaLogo.svg" alt="Level" />
        <a href="">
          <img src="iconHome.svg" alt="Level" />
        </a>
      </Menu>

      <Body>
        <DashboardHeader>
          <img src="icon-dashboard.svg" alt="" />
          <h5>Dashboard</h5>
        </DashboardHeader>

        <DashboardInput>
          <input
            value={input}
            placeholder={"Buscar empresa"}
            onChange={(e) => updateInput(e.target.value)}
          />
          <button>
            <img src="search.svg" alt="" />
          </button>
        </DashboardInput>

        <DashboardGraphics>
          {input !== '' ? (getCompaniesList(filteredCompanies)) : (company !== undefined ? (
            <>
              <DashboardGraphicsHeader>
                <div>
                  {checkIsfavorite(company)}
                  <div>
                    <span>{company.symbol}</span>
                    <p>{company.companyName.split('-')[0]}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <span>
                      {company.change > 0 ? (
                        <img src="graphUp.svg" alt="" />
                      ) : (
                        <img src="graphDown.svg" alt="" />
                      )}
                      ${company.close === null
                        ? company.latestPrice
                        : company.close}
                    </span>
                    {company.change > 0 ? (
                      <span style={{ color: "var(--green)" }}>+${formatValue(company.changePercent)}%</span>
                    ) : (
                      <span style={{ color: "var(--red)" }}>${formatValue(company.changePercent)}%</span>
                    )}
                  </div>
                </div>
              </DashboardGraphicsHeader>
              <ResponsiveContainer ref={squareRef} width="100%" height="100%">
                <Graphic children={historicalPrice} />
              </ResponsiveContainer>
            </>)
            : (''))}
        </DashboardGraphics>

        <RecentCompanies>
          <RecentCompaniesHeader>
            <div>
              <img src="recentCompaniesIcon.svg" alt="" />
              <h5>Empressas recentes</h5>
            </div>
            <img src="frame.svg" alt="" />
          </RecentCompaniesHeader>

          <RecentCompaniesCard width={`${width - teste}px`}>
            {searches !== undefined
              ? searches.map((company: ICompany) => {
                return (
                  <RecentCompaniesCardContent key={company.symbol}>
                    {checkIsfavorite(company)}
                    <img src={`https://logo.clearbit.com/${company.companyName.split(' ')[0]}.com?size=36`} alt="" />
                    <div style={{ cursor: 'pointer' }} onClick={() => loadCompany(company.symbol)}>
                      <span>{company.symbol}</span>
                      <p>{company.companyName.split('-')[0]}</p>
                    </div>
                    {company.change > 0 ? (
                      <span style={{ color: "var(--green)" }}>+{formatValue(company.changePercent)}%</span>
                    ) : (
                      <span style={{ color: "var(--red)" }}>{formatValue(company.changePercent)}%</span>
                    )}
                    <CompanyGraphIcon children={company} />
                  </RecentCompaniesCardContent>
                );
              })
              : ""}
          </RecentCompaniesCard>
        </RecentCompanies>
      </Body>

      <RightTab>
        <Profile>
          <img src="profile.svg" alt="" />
          <span>Georg Augusto</span>
          <img src="chevronDown.svg" alt="" />
        </Profile>

        <FavoriteCompanies>
          <FavoriteCompaniesHeader>
            <img src="starFull.svg" alt="" />
            <h5>Empressas favoritas</h5>
          </FavoriteCompaniesHeader>

          {favorites !== undefined
            ? favorites.map((company: ICompany) => {
              return (
                <FavoriteCompaniesBody key={company.symbol}>
                  <div>
                    <div>
                      <img src={`https://logo.clearbit.com/${company.companyName.split(' ')[0]}.com?size=36`} alt="" />

                      <div style={{ cursor: 'pointer' }} onClick={() => loadCompany(company.symbol)}>
                        <span>{company.symbol}</span>
                        <p>{company.companyName.split('-')[0]}</p>
                      </div>
                    </div>
                    <div>
                      {company.change > 0 ? (
                        <span style={{ color: "var(--green)" }}>+{formatValue(company.changePercent)}%</span>
                      ) : (
                        <span style={{ color: "var(--red)" }}>{formatValue(company.changePercent)}%</span>
                      )}
                      <CompanyGraphIcon children={company.change} />
                    </div>
                  </div>
                  <img
                    onClick={() => handleRemoveCompanyFavorites(company.symbol)}
                    src="trash.svg"
                    alt=""
                    style={{ cursor: 'pointer' }}
                  />
                </FavoriteCompaniesBody>
              );
            })
            : ""}
        </FavoriteCompanies>
      </RightTab>
    </Container>
  )
}

export default Home
