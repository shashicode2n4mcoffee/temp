import '../Styles/EventPulse.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import moment from 'moment'
import { URLS, URL_CONTEXT } from '../Configs/urls'
import { connect } from 'react-redux'
import { fetchEventPluseRequest } from '../Redux/actions/eventPulseActions'
import EventCard from './EventCard'
import { WIDGET_ITEMS_NAMES } from '../Configs/widget-items'
import EventPulseModal from './EventPulseModal'
import EventsXaxis from './EventsXaxis'
import useIntervalTask from '../Hooks/useIntervalTask'
import { urlGenerator } from '../Utils/urlGenerator'

const sections = [
  {
    startDate: '2023-04-17T00:00:00',
    endDate: '2023-04-17T04:00:00',
    data: [],
  },
  {
    startDate: '2023-04-17T04:00:00',
    endDate: '2023-04-17T08:00:00',
    data: [
      {
        id: '4571',
        title: 'WPI Food (YoY) (Mar)',
        currency: 'INR',
        summary:
          'The WPI index that measures and tracks the changes in price of all food related goods in the stages before the retail level.',
        importance: 'Low',
        time: '2023-04-17T06:30:00',
      },
      {
        id: '4572',
        title: 'WPI Inflation (YoY) (Mar)',
        currency: 'INR',
        summary:
          'The Wholesale Price Index (WPI) reports the change in the price of goods sold by wholesalers across India.The higher this number is the stronger the affect on consumer inflation.A reading that is stronger than forecast is generally supportive (bullish) for the INR, while a weaker than forecast reading is generally negative (bearish) for the INR.',
        importance: 'Moderate',
        time: '2023-04-17T06:30:00',
      },
      {
        id: '4573',
        title: 'WPI Fuel (YoY) (Mar)',
        currency: 'INR',
        summary:
          'The WPI index that measures and tracks the changes in price of all fuel related goods in the stages before the retail level.',
        importance: 'Low',
        time: '2023-04-17T06:30:00',
      },
      {
        id: '4574',
        title: 'WPI Manufacturing Inflation (YoY) (Mar)',
        currency: 'INR',
        summary:
          'The WPI index that measures and tracks the changes in price of all manufacturing related goods in the stages before the retail level.',
        importance: 'Low',
        time: '2023-04-17T06:30:00',
      },
    ],
  },
  {
    startDate: '2023-04-17T08:00:00',
    endDate: '2023-04-17T12:00:00',
    data: [],
  },
  {
    startDate: '2023-08-24T12:00:00',
    endDate: '2023-08-24T16:00:00',
    data: [
      {
        id: '4588',
        title: 'NY Empire State Manufacturing Index (Apr)',
        currency: 'USD',
        summary:
          'The Empire State Manufacturing Index rates the relative level of business conditions in the state of New York. A level above zero points to improving conditions, below indicates worsening conditions. The reading is compiled from a survey of about 200 manufacturers in New York state.A reading that is stronger than forecast is generally supportive (bullish) for the USD, while a weaker than forecast reading is generally negative (bearish) for the USD.',
        importance: 'Moderate',
        time: '2023-04-17T12:30:00',
      },
      {
        id: '4596',
        title: 'NAHB Housing Market Index (Apr)',
        currency: 'USD',
        summary:
          'The National Association of Home Builders (NAHB) Housing Market Index (HMI) is a survey of 900 home builders who rate the relative level of current and future single-family home sales. A reading above 50 indicates a favourable outlook on home sales; below indicates a negative outlook.A reading that is stronger than forecast is generally supportive (bullish) for the USD, while a weaker than forecast reading is generally negative (bearish) for the USD.',
        importance: 'Low',
        time: '2023-04-17T14:00:00',
      },
      {
        id: '4598',
        title: '3-Month Bill Auction',
        currency: 'USD',
        summary:
          'The figures displayed in the calendar represent the rate on the Treasury Bill auctioned.U.S. Treasury Bills have maturities of a few days to one year. Governments issue treasuries to borrow money to cover the gap between the amount they receive in taxes and the amount they spend to refinance existing debt and/or to raise capital. The rate on a Treasury Bill represents the return an investor will receive by holding the bill for its entire duration. All bidders receive the same rate at the highest accepted bid.Yield fluctuations should be monitored closely as an indicator of the government debt situation. Investors compare the average rate at auction to the rate at previous auctions of the same security.',
        importance: 'Low',
        time: '2023-04-17T15:30:00',
      },
      {
        id: '4599',
        title: '6-Month Bill Auction',
        currency: 'USD',
        summary:
          'The figures displayed in the calendar represent the rate on the Treasury Bill auctioned.U.S. Treasury Bills have maturities of a few days to one year. Governments issue treasuries to borrow money to cover the gap between the amount they receive in taxes and the amount they spend to refinance existing debt and/or to raise capital. The rate on a Treasury Bill represents the return an investor will receive by holding the bill for its entire duration. All bidders receive the same rate at the highest accepted bid.Yield fluctuations should be monitored closely as an indicator of the government debt situation. Investors compare the average rate at auction to the rate at previous auctions of the same security.',
        importance: 'Low',
        time: '2023-04-17T15:30:00',
      },
    ],
  },
  {
    startDate: '2023-04-17T16:00:00',
    endDate: '2023-04-17T20:00:00',
    data: [],
  },
  {
    startDate: '2023-04-17T20:00:00',
    endDate: '2023-04-18T00:00:00',
    data: [
      {
        id: '4600',
        title: 'TIC Net Long-Term Transactions (Feb)',
        currency: 'USD',
        summary:
          'Treasury International Capital (TIC) Net Long-Term Transactions measures the difference in value between foreign long-term securities purchased by U.S. citizens and U.S. long-term securities purchased by foreign investors. Demand for domestic securities and currency demand are directly linked because foreigners must buy the U.S. dollars to purchase U.S. securities.A reading that is stronger than forecast is generally supportive (bullish) for the USD, while a weaker than forecast reading is generally negative (bearish) for the USD.',
        importance: 'Moderate',
        time: '2023-04-17T20:00:00',
      },
      {
        id: '4601',
        title: 'Overall Net Capital Flow (Feb)',
        currency: 'USD',
        summary:
          "This indicator shows the Sum of [(U.S. securities + Foreign stocks and bonds (Negative figures indicate net sales by foreigners to U.S residents or a net outflow of capital from the United States.) Minus estimated unrecorded principal repayments to foreigners on domestic corporate and agency asset-backed securities + estimated foreign acquisitions of U.S. equities through stock swaps - estimated U.S. acquisitions of foreign equities through stock swaps + increase in nonmarketable Treasury Bonds and Notes Issued to Official Institutions and Other Residents of Foreign Countries)+(monthly changes in banks' and broker/dealers' custody liabilities.)+(TIC, Change in Banks' Own Net Dollar- Denominated Liabilities)] TIC data cover most components of international financial flows, but do not include data on direct investment flows, which are collected and published by the Department of Commerce's Bureau of Economic Analysis.A higher than expected reading should be taken as positive/bullish for the USD , while a lower than expected reading should be taken as negative/bearish for the USD.",
        importance: 'Low',
        time: '2023-04-17T20:00:00',
      },
      {
        id: '4602',
        title: 'US Foreign Buying, T-bonds (Feb)',
        currency: 'USD',
        summary:
          'Net purchases of U.S treasury bonds & notes by major foreign sector. (Negative figures indicate net sales by foreigners to U.S residents or a net outflow of capital from the United States.) A higher than expected reading should be taken as positive/bullish for the USD , while a lower than expected reading should be taken as negative/bearish for the USD.',
        importance: 'Low',
        time: '2023-04-17T20:00:00',
      },
      {
        id: '4603',
        title: 'TIC Net Long-Term Transactions including Swaps (Feb)',
        currency: 'USD',
        summary:
          'TIC Net Long-Term Transactions number is the sum of gross purchases by foreigners from US residents minus gross sales by foreigners to US residents. The components used to calculate long term flows are US Treasury bonds and notes, US government agency bonds, US corporate bonds, US corporate stocks, foreign bonds and foreign stocks. (TIC signifies: Treasury International Capital Flows). A higher than expected number should be taken as positive to the USD, while a lower than expected number as negative.',
        importance: 'Low',
        time: '2023-04-17T20:00:00',
      },
    ],
  },
]

const findPresentEvents = (startDate, endDate) => {
  return moment().isBetween(moment(startDate), moment(endDate))
}
const EventPulse = ({
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
    fetchEventPluseRequest(
      urlGenerator(
        URL_CONTEXT.baseContext,
        URLS.eventDashboard,
        selectedSymbol,
        selectedTime
      )
    )
  }, [selectedTime, selectedSymbol])

  useIntervalTask(
    fetchEventPluseRequest,
    5 * 60 * 1000,
    urlGenerator(
      URL_CONTEXT.baseContext,
      URLS.eventDashboard,
      selectedSymbol,
      selectedTime
    )
  )

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
        {eventPulse?.map((section, index) => (
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: `${divWidth / (eventPulse?.length || 6)}px`,
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
              {section?.data?.length ? (
                section?.data?.map((sec, index) => (
                  <Box
                    style={{
                      margin: '.25rem',
                    }}
                    key={index}
                  >
                    <EventCard
                      time={sec.time}
                      title={sec.title}
                      description={sec.summary}
                      xAxis={`${moment(section.startDate).format(
                        'HH:MM'
                      )}-${moment(section.endDate).format('HH:MM')}`}
                      selectedTime={selectedTime}
                      setModalData={setModalData}
                      setModalOpen={setModalOpen}
                      show={findPresentEvents(
                        section.startDate,
                        section.endDate
                      )}
                      cardType={WIDGET_ITEMS_NAMES.EVENT_PULSE}
                      width={divWidth / eventPulse?.length}
                    />
                  </Box>
                ))
              ) : (
                <Box
                  style={{
                    margin: '.5rem',
                  }}
                >
                  <EventCard
                    time={null}
                    title='No Event'
                    description={null}
                    xAxis={section?.time}
                    selectedTime={selectedTime}
                    setModalData={setModalData}
                    setModalOpen={setModalOpen}
                    cardType={WIDGET_ITEMS_NAMES.EVENT_PULSE}
                  />
                </Box>
              )}
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
      <EventPulseModal
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

export default connect(mapStateToProps, mapDispatchToProps)(EventPulse)
