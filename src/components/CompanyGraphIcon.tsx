import React from 'react'

interface ICompany {
  symbol: string
  companyName: string
  close: number
  latestPrice: number
  change: number
  changePercent: number
  children: number
}

export const CompanyGraphIcon: React.FC = ({ change }: ICompany) => {
  return (
    change > 0 ? (
      <img src="graphUp.svg" alt="" />
    ) : (
      <img src="graphDown.svg" alt="" />
    )
  )
}
