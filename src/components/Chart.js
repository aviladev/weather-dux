import React from 'react'
import SparkLine from 'react-sparkline-canvas'
import _ from 'lodash'

const average = (data) =>
  _.round(_.sum(data) / data.length)

const Chart = ({data, unit}) => {
  return (
    <div>
      <SparkLine
        data={data}
        width={180}
        height={120}
        strokeColor={{
          '0': '#007AC9',
          '100': '#00c972'
        }}
        gradDirection="row"
      />
      <div>{average(data)} {unit}</div>
    </div>
  )
}

export default Chart
