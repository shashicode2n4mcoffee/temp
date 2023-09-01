import React, { useState, useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import ReactDOM from 'react-dom'
import 'chart.js/auto'
import TooltipContent from './TooltipContent'

const findSentiment = (value) => {
  if (value < 33) return 'red'
  if (value > 66) return 'green'
  return 'orange'
}
const labelsValues = [10, 70, 56]
const dataPoints = [10, 30, 50]
const backgroundColorValues = dataPoints.map((item) => findSentiment(item))

const BarChart = () => {
  const [data, setData] = useState({
    labels: labelsValues,
    datasets: [
      {
        label: 'Bar Chart Example',
        data: dataPoints,
        backgroundColor: backgroundColorValues,
      },
    ],
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 100)
      const newData = {
        labels: [...data.labels, Math.floor(Math.random() * 100)],
        datasets: [
          {
            ...data.datasets[0],
            data: [...dataPoints, rand],
            backgroundColor: [...backgroundColorValues, findSentiment(rand)],
          },
        ],
      }
      console.info(newData)

      setData(newData)
    }, 100000)

    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, [data])

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: ({ chart, tooltip }) => {
          if (tooltip && tooltip.dataPoints && tooltip.dataPoints.length) {
            const index = tooltip.dataPoints[0].dataIndex
            const value = tooltip.dataPoints[0].formattedValue

            const tooltipContent = (
              <TooltipContent value={value} label={data.labels[index]} />
            )

            const tooltipElement =
              chart.canvas.parentNode.querySelector('#custom-tooltip')

            if (tooltipElement) {
              ReactDOM.render(tooltipContent, tooltipElement)
              tooltipElement.style.display = 'block'

              // Position the tooltip relative to the chart
              const position = chart.canvas.getBoundingClientRect()
              tooltipElement.style.left = position.left + tooltip.caretX + 'px'
              tooltipElement.style.top =
                position.top + tooltip.caretY + 200 + 'px'

              console.log(
                '====',
                position.left + tooltip.caretX,
                position.top + tooltip.caretY
              )
            }
          } else {
            const tooltipElement =
              chart.canvas.parentNode.querySelector('#custom-tooltip')

            if (tooltipElement) {
              ReactDOM.unmountComponentAtNode(tooltipElement)
              tooltipElement.style.display = 'none'
            }
          }
        },
      },
    },
  }

  const chartStyle = {
    backgroundColor: 'black',
    width: '100%',
  }

  const tooltipRef = useRef(null)

  return (
    <div style={{ height: '400px', backgroundColor: 'black' }}>
      <div
        id='custom-tooltip'
        ref={tooltipRef}
        style={{ position: 'absolute', display: 'none' }}
      ></div>
      <Bar data={data} options={options} style={chartStyle} />
    </div>
  )
}

export default BarChart
