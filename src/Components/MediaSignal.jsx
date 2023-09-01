import '../Styles/MediaSignal.scss'

import React, { useEffect, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import ReactEcharts from 'echarts-for-react'
import { Box } from '@mui/material'
import moment from 'moment'
import { fetchMediaSignalRequest } from '../Redux/actions/mediaSignalActions'
import { URLS, URL_CONTEXT } from '../Configs/urls'
import { impactFinder } from '../Utils/impactFinder'
import { getColor } from '../Utils/getColor'
import MediaSignalModal from './MediaSignalModal'
import useIntervalTask from '../Hooks/useIntervalTask'
import { urlGenerator } from '../Utils/urlGenerator'

const MediaSignal = ({
  fetchMediaSignal,
  mediaSignal,
  selectedSymbol,
  selectedTime,
  title,
}) => {
  const [barchartOptions, setBarchartOptions] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({ title: '', summary: '' })

  const fetchMediaSignalCallback = useCallback(() => {
    console.log('REDNERDS CHECK : ', selectedSymbol, selectedTime)
    fetchMediaSignal(
      urlGenerator(
        URL_CONTEXT.baseContext,
        URLS.mediaSignal,
        selectedSymbol,
        selectedTime
      )
    )
  }, [selectedSymbol, selectedTime])

  useEffect(() => {
    fetchMediaSignalCallback()
  }, [fetchMediaSignalCallback])

  useIntervalTask(
    fetchMediaSignal,
    5 * 60 * 1000,
    urlGenerator(
      URL_CONTEXT.baseContext,
      URLS.mediaSignal,
      selectedSymbol,
      selectedTime
    )
  )

  useEffect(() => {
    getOptions()
  }, [mediaSignal])

  const getData = useCallback(() => {
    return mediaSignal?.map((signal) => ({
      value: impactFinder(signal?.impact),
      itemStyle: {
        color: getColor(signal.sentiment),
      },
    }))
  }, [mediaSignal])

  const getTime = useCallback(() => {
    return mediaSignal?.map((timeItem) =>
      moment(timeItem.time).format('DD-MM-YYYY HH:MM')
    )
  }, [mediaSignal])

  const getOptions = useCallback(() => {
    const options = {
      xAxis: {
        type: 'category',
        data: getTime(),
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      backgroundColor: '$primary-color',
      grid: {
        top: 60,
        left: 30,
        right: 60,
        bottom: 30,
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        enterable: true,
        leaveable: false,
        formatter: (params) => {
          return `
            <div class="custom-tooltip">
              <p>Title: ${mediaSignal[params[0].dataIndex]?.title?.substring(
                0,
                50
              )}....</p>
            </div>
          `
        },
      },
      series: [
        {
          data: getData(),
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: 4,
            },
          },
          animationEasing: 'elasticOut',
          animationDelay: (idx) => idx * 10,
          animationDelayUpdate: (idx) => idx * 10,
        },
      ],
    }

    setBarchartOptions(options)
  }, [getData])

  function onChartClick(param, echarts) {
    setModalOpen(true)
    setModalData({
      title: mediaSignal[param.dataIndex].title,
      summary: mediaSignal[param.dataIndex].summary,
      time: mediaSignal[param.dataIndex].time,
      link: mediaSignal[param.dataIndex].link,
    })
  }

  return (
    <Box className='categories-bar-chart'>
      <ReactEcharts
        theme='dark'
        option={barchartOptions}
        onEvents={{
          click: onChartClick,
        }}
      />
      <MediaSignalModal
        open={modalOpen}
        setOpen={setModalOpen}
        data={modalData}
      />
    </Box>
  )
}

const mapStateToProps = (state) => ({
  mediaSignal: state.mediaSignal?.data,
  loading: state.users.loading,
  error: state.users.error,
  selectedTime: state.widgetsBar.selectedTime,
  selectedSymbol: state.widgetsBar.selectedSymbol,
})

const mapDispatchToProps = {
  fetchMediaSignal: fetchMediaSignalRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaSignal)
