import React, { useRef } from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import useWindowSize  from '../hooks/useWindowSize'

interface Props {
  children: React.ReactNode[]
}

export const Graphic: React.FC = ({children} : Props) => {
  const { width } = useWindowSize()
  const squareRef = useRef(null)

  let interval = 29
  let widthCalc = 500

  if (width > 1000) {
    widthCalc = 500
  } else {
    widthCalc = 100
  }

  if (width > 1300) {
    interval = 29
  } else if(width >= 500 && width <= 1300) {
    interval = 59
  } else {
    interval = 89
  }

  return (
    <>
    <div ref={squareRef}></div>
    <div  style={{ display: "block" }}>
      <AreaChart width={width - widthCalc} height={350} data={children}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="historicalPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e3eaf7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#e3eaf7" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="minute" interval={interval} />
        <YAxis type="number" domain={['auto', 'auto']} tickCount={6} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="average" stroke="var(--blue)" fillOpacity={1} fill="url(#historicalPrice)" />
      </AreaChart>
    </div>
    </>
  )
}
