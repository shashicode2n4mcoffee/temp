import '../Styles/EventPulse.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import moment from 'moment'
import WidgetTitle from './WidgetTitle'
import { URLS, URL_CONTEXT } from '../Configs/urls'
import { getTimeFrames } from '../Utils/getTimeFrames'
import { currencyFormatter } from '../Utils/currencyFormatter'
import { connect } from 'react-redux'
import { fetchEventPluseRequest } from '../Redux/actions/eventPulseActions'
import { getEventPulseCardColor } from '../Utils/eventPulseCardColor'
import ChartDataModal from './ChartDataModal'
import EventCard from './EventCard'
import { WIDGET_ITEMS_NAMES } from '../Configs/widget-items'
import EventBriefingModal from './EventBriefingModal'
import EventsXaxis from './EventsXaxis'

const sections = [
  {
    time: '00AM - 5AM',
    data: [
      {
        title: 'PPI MoM',
        time: '21/08/2023 02AM',
        description:
          'In Germany, the Producer Price Inflation MoM measures a month-over-month change in the price of goods and services sold by manufacturers and producers in the wholesale market.',
      },
    ],
  },
  {
    time: '05AM - 10AM',
    data: [
      {
        title: 'Consumer Confidence Spain',
        time: '21/08/2023 7AM',
        description:
          'In Spain, the Consumer Confidence survey is made by phone and covers 1,000 individuals aged over 16 who are representative of Spanish society as a whole. The questionnaire focuses on current economic and financial situation, savings intention as well as on expected developments regarding general and personal economic situation and major purchases of durable goods. The index shows the difference between the percentage share of persons that are optimistic and the percentage of persons that are pessimistic. The index measures consumer confidence on a scale of 0 to 200, where 0 indicates extreme lack of confidence, 100 neutrality and 200 extreme confidence.',
      },
      {
        title: 'Consumer Confidence Japan',
        time: '21/08/2023 8:45AM',
        description:
          'In Spain, the Consumer Confidence survey is made by phone and covers 1,000 individuals aged over 16 who are representative of Spanish society as a whole. The questionnaire focuses on current economic and financial situation, savings intention as well as on expected developments regarding general and personal economic situation and major purchases of durable goods. The index shows the difference between the percentage share of persons that are optimistic and the percentage of persons that are pessimistic. The index measures consumer confidence on a scale of 0 to 200, where 0 indicates extreme lack of confidence, 100 neutrality and 200 extreme confidence.',
      },
    ],
  },
  {
    time: '10AM - 2PM',
    data: [
      {
        title: 'Balance of Trade',
        time: '21/08/2023 12:30AM',
        description:
          'Switzerland has been running consistent trade surpluses. The biggest trade surpluses are recorded with the US, India, the UK, China, Hong Kong, Japan and Singapore; and the largest deficits were recorded with the UAE, Germany, Ireland, Italy and Thailand.',
      },
      {
        title: 'Current Account',
        time: '21/08/2023 01:00PM',
        description:
          'Current Account is the sum of the balance of trade (exports minus imports of goods and services), net factor income (such as interest and dividends) and net transfer payments (such as foreign aid).',
      },
      {
        title: 'Balance of Trade',
        time: '21/08/2023 2PM',
        description:
          'Switzerland has been running consistent trade surpluses. The biggest trade surpluses are recorded with the US, India, the UK, China, Hong Kong, Japan and Singapore; and the largest deficits were recorded with the UAE, Germany, Ireland, Italy and Thailand.',
      },
      {
        title: 'Current Account',
        time: '21/08/2023 2PM',
        description:
          'Current Account is the sum of the balance of trade (exports minus imports of goods and services), net factor income (such as interest and dividends) and net transfer payments (such as foreign aid).',
      },
    ],
  },
  {
    time: '02PM - 8PM',
    data: [
      {
        title: 'Redbook YoY',
        time: '21/08/2023 7PM',
        show: true,
        description:
          'The Johnson Redbook Index is a sales-weighted of year-over-year same-store sales growth in a sample of large US general merchandise retailers representing about 9,000 stores. Same-store sales are sales in stores continuously open for 12 months or longer. By dollar value, the Index represents over 80% of the equivalent  retail sales series collected and published by the US Department of Commerce. Redbook compiles the Index by collecting and interpreting performance estimates from retailers. The Index and its sub-groups are sales-weighted aggregates of these estimates. Weeks are retail weeks (Sunday to Saturday), and equally weighted within the month.',
      },
      {
        title: 'Existing Home Sales',
        time: '21/08/2023 7:30PM',
        show: true,
        description:
          'In the United States, Existing Home Sales occur when the mortgages are closed. Mortgage closing usually takes place 30-60 days after the sales contract is closed.',
      },
    ],
  },
  // {
  //   time: '4PM - 8PM',
  //   data: [
  //     {
  //       title: 'Curde Oil Stock',
  //       time: '21/08/2023 6PM',
  //       description:
  //         'Stocks of crude oil refer to the weekly change of the crude oil supply situation.',
  //     },
  //     {
  //       title: 'Central Government Debt',
  //       time: '21/08/2023 6:45PM',
  //       description:
  //         'In Turkey, Government Debt refers to the central government gross debt stock in local and foreign currencies.',
  //     },
  //   ],
  // },
  {
    time: '8PM - 12AM',
    data: [
      {
        title: 'HCOB PMI Flash',
        time: '21/08/2023 9:35PM',
        description:
          'The HCOB France Composite Output Index, which is a weighted average of the Manufacturing Output Index and the Services Business Activity Index, tracks business trends across private sector activity. The index tracks variables such as sales, new orders, employment, inventories and prices; and varies between 0 and 100, with a reading above 50 indicating an overall increase compared to the previous month, and below 50 an overall decrease.',
      },
    ],
  },
]

const EventBrief = ({
  title,
  eventPulse,
  fetchEventPluseRequest,
  selectedSymbol,
  selectedTime,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({ title: '', summary: '' })
  const divRef = useRef(null)
  const [divWidth, setDivWidth] = useState(0)

  useEffect(() => {
    const timeFramesDates = getTimeFrames(selectedTime?.time)
    const data = {
      url: `${URL_CONTEXT.baseContext}${URLS.eventDashboard}?startDate=${
        timeFramesDates?.startDate
      }&endDate=${timeFramesDates?.endDate}&currencyPair=${currencyFormatter(
        selectedSymbol
      )}`,
    }
    fetchEventPluseRequest(data)
  }, [selectedTime, selectedSymbol])

  useEffect(() => {
    updateDivWidth()
    window.addEventListener('resize', updateDivWidth)
    return () => {
      window.removeEventListener('resize', updateDivWidth)
    }
  }, [])

  const updateDivWidth = () => {
    if (divRef.current) {
      setDivWidth(divRef.current.clientWidth - 20)
    }
  }

  return (
    <Grid
      container
      spacing={1}
      style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        overflow: 'scroll',
        height: '100%',
        position: 'relative',
      }}
      ref={divRef}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        {sections?.map((section, index) => (
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: `${divWidth / sections?.length}px`,
            }}
          >
            <div
              key={index}
              style={{
                overflow: 'scroll',
                height: '240px',
                display: 'flex',
                flexDirection: 'column-reverse',
                position: 'relative',
                width: 'inherit',
              }}
            >
              {section?.data?.map((sec, i) => (
                <Box
                  style={{
                    margin: '.25rem',
                  }}
                >
                  <EventCard
                    time={sec.time}
                    title={sec.title}
                    description={sec.description}
                    xAxis={section?.time}
                    selectedTime={selectedTime}
                    setModalData={setModalData}
                    setModalOpen={setModalOpen}
                    cardType={WIDGET_ITEMS_NAMES.EVENT_BRIEFING}
                  />
                </Box>
              ))}
            </div>
            <Box
              sx={{
                height: '3px',
                backgroundColor: '#7a7b7b',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></Box>
            <Box
              style={{
                height: '30px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: 'black',
              }}
            >
              <EventsXaxis timeframe={selectedTime?.time} time={section} />
            </Box>
          </Box>
        ))}
      </Box>
      <EventBriefingModal
        open={modalOpen}
        setOpen={setModalOpen}
        data={modalData}
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  eventPulse: state.eventPulse.eventPulse,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
  selectedTime: state.widgetsBar.selectedTime,
  selectedSymbol: state.widgetsBar.selectedSymbol,
})

const mapDispatchToProps = {
  fetchEventPluseRequest: fetchEventPluseRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBrief)
