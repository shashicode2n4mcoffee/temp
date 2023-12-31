import '../Styles/SentimentsChart.scss'

import React, { useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import { connect } from 'react-redux'
import { fetchSentimentSignalRequest } from '../Redux/actions/sentimentSignalActions'

const LineCharts = ({ fetchSentimentSignal }) => {
  const [sentimentData, setSentimentData] = useState([
    {
      name: 'NASDAQ',
      type: 'line',
      data: [120, 132, 101, 34, 90, 230, 210],
    },
    {
      name: 'NSE',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'ARCA',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ])
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    fetchSentimentSignal()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSentimentData((prevData) => {
        const simulateData = prevData.map((item) => {
          const randomValue = Math.floor(Math.random() * 100)
          return {
            ...item,
            data: [...item.data.slice(1), randomValue],
          }
        })
        return simulateData
      })
    }, 100000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const option = {
      title: {
        text: 'Sentiment',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['NASDAQ', 'NSE', 'ARCA'],
      },
      toolbox: {
        feature: {
          // saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['AAPL', 'NIFTY', 'BANKNIFTY', 'MSFT', 'DB', 'BANKNIFTY', 'CS'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: sentimentData,
    }
    setChartOptions(option)
  }, [sentimentData])

  return <ReactEcharts option={chartOptions} style={{ height: 400 }} />
}

const mapStateToProps = (state) => ({
  sentimentSignal: state.sentimentSignal.data,
  loading: state.users.loading,
  error: state.users.error,
})

const mapDispatchToProps = {
  fetchSentimentSignal: fetchSentimentSignalRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(LineCharts)
