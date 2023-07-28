import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import ChartDataModal from './ChartDataModal'
import { fetchUsersRequest } from '../Redux/actions/usersActions'
import { connect } from 'react-redux'
import { findSentiment } from '../Utils/findSentiment'
import { fetchMediaSignalRequest } from '../Redux/actions/mediaSignalActions'
import { getTimeFrames } from '../Utils/getTimeFrames'
import { URLS, URL_CONTEXT } from '../Configs/urls'

const getColor = { positive: 'green', negetive: 'red', neutral: 'orange' }
const CategoriesBarChart = ({
  fetchMediaSignal,
  mediaSignal,
  selectedSymbol,
  selectedTime,
}) => {
  const [data, setData] = useState([
    {
      impact: 30,
      sentiment: 'positive',
      news: 'News1',
    },
    {
      impact: 50,
      sentiment: 'neutral',
      news: 'News2',
    },
    {
      impact: 69,
      sentiment: 'negetive',
      news: 'News3',
    },
    {
      impact: 23,
      sentiment: 'positive',
      news: 'News4',
    },
    {
      impact: 80,
      sentiment: 'positive',
      news: 'News5',
    },
    {
      impact: 10,
      sentiment: 'neutral',
      news: 'News6',
    },
    {
      impact: 60,
      sentiment: 'negetive',
      news: 'News7',
    },
    {
      impact: 23,
      sentiment: 'positive',
      news: 'News8',
    },
  ])

  const [barchartOptions, setBarchartOptions] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const timeFramesDates = getTimeFrames(selectedTime?.time)
    const data = {
      url: `${URL_CONTEXT.baseContext}${URLS.mediaSignal}?startDate=${timeFramesDates?.startDate}&endDate=${timeFramesDates?.endDate}&currencyPair=${selectedSymbol}`,
    }
    fetchMediaSignal(data)
  }, [selectedTime, selectedSymbol])

  const getData = useCallback((data) => {
    let filteredData = []
    for (let i = 0; i < data.length; i++) {
      filteredData.push({
        value: data[i]?.impact,
        itemStyle: {
          color: getColor[data[i].sentiment],
        },
      })
    }
    return filteredData
  }, [])

  const getNews = useCallback((data) => {
    const news = data?.map((newsItem) => {
      return newsItem.news
    })
    return news
  }, [])

  const getOptions = useCallback(
    (data) => {
      const options = {
        title: {
          text: 'Media Signals',
          left: 'left',
        },
        xAxis: {
          type: 'category',
          data: getNews(data),
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          enterable: true,
          leaveable: false,

          formatter: (params) => {
            const { name, value } = params[0]
            return `<div class="custom-tooltip"><p>News : ${name}</p>
            <p>Sentiment :${value}</p>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>`
          },
        },
        series: [
          {
            data: getData(data),
            type: 'bar',
          },
        ],
      }

      setBarchartOptions(options)
    },
    [getData]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 100)
      let simulateData = data.slice()
      simulateData.shift()
      simulateData = [
        ...data,
        {
          impact: randomValue,
          sentiment: findSentiment(randomValue),
          news: `News${randomValue}`,
        },
      ]

      getOptions(simulateData)
    }, 100000)

    return () => clearInterval(interval)
  }, [])

  function onChartClick(param, echarts) {
    console.log('On CHARTS CLICK', param, echarts)
    setModalOpen(true)
  }

  useEffect(() => {
    getOptions([
      {
        impact: 30,
        sentiment: 'positive',
        news: 'News1',
      },
      {
        impact: 50,
        sentiment: 'neutral',
        news: 'News2',
      },
      {
        impact: 69,
        sentiment: 'negetive',
        news: 'News3',
      },
      {
        impact: 23,
        sentiment: 'positive',
        news: 'News4',
      },
      {
        impact: 80,
        sentiment: 'positive',
        news: 'News5',
      },
      {
        impact: 10,
        sentiment: 'neutral',
        news: 'News6',
      },
      {
        impact: 60,
        sentiment: 'negetive',
        news: 'News7',
      },
      {
        impact: 23,
        sentiment: 'positive',
        news: 'News8',
      },
    ])
  }, [getOptions, getData])

  return (
    <>
      <ReactEcharts
        theme='dark'
        option={barchartOptions}
        onEvents={{
          click: onChartClick,
        }}
      />
      <ChartDataModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

const mapStateToProps = (state) => ({
  mediaSignal: state.mediaSignal.data,
  loading: state.users.loading,
  error: state.users.error,
  selectedTime: state.widgetsBar.selectedTime,
  selectedSymbol: state.widgetsBar.selectedSymbol,
})

const mapDispatchToProps = {
  fetchMediaSignal: fetchMediaSignalRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBarChart)
