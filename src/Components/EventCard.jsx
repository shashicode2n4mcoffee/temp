import '../Styles/EventCard.scss'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import moment from 'moment'
import { WIDGET_ITEMS_NAMES } from '../Configs/widget-items'

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

const EventCard = ({
  time,
  title,
  description,
  xAxis,
  selectedTime,
  setModalOpen,
  setModalData,
  show,
  cardType,
}) => {
  const [cardColor, setCardColor] = useState({
    bgColor: '#1f2937',
    color: '#7a7b7b',
    titleColor: 'white',
  })

  useEffect(() => {
    // setCardColor(getEventPulseCardColor(selectedTime?.time, xAxis))
    if (show) {
      setCardColor({ bgColor: 'white', color: 'black', titleColor: 'black' })
    }
  }, [xAxis, selectedTime, show])

  const onHandleSelectEventPulse = (title, description) => {
    setModalData({ title: title, summary: description })
    setModalOpen(true)
  }

  const onHandleSelectEventBreifing = (title, description) => {
    setModalData({ title: title, summary: description })
    setModalOpen(true)
  }

  useEffect(() => {
    if (xAxis === '00AM-4AM') {
      const startTime = moment('12:00 AM', 'h:mm A')
      const endTime = moment('4:00 AM', 'h:mm A')
      const timeToCheck = moment()
      if (timeToCheck.isBetween(startTime, endTime)) {
        setCardColor({ bgColor: 'white', color: 'black' })
      } else {
        setCardColor({
          bgColor: '#1f2937',
          color: '#7a7b7b',
        })
      }
    } else if (xAxis === '04AM-8AM') {
      const startTime = moment('04:00 AM', 'h:mm A')
      const endTime = moment('08:00 AM', 'h:mm A')
      const timeToCheck = moment()
      if (timeToCheck.isBetween(startTime, endTime)) {
        setCardColor({ bgColor: 'white', color: 'black' })
      } else {
        setCardColor({
          bgColor: '#1f2937',
          color: '#7a7b7b',
        })
      }
    } else if (xAxis === '8AM-12PM') {
      const startTime = moment('08:00 AM', 'h:mm A')
      const endTime = moment('12:00 PM', 'h:mm A')
      const timeToCheck = moment()
      if (timeToCheck.isBetween(startTime, endTime)) {
        setCardColor({ bgColor: 'white', color: 'black' })
      } else {
        setCardColor({
          bgColor: '#1f2937',
          color: '#7a7b7b',
        })
      }
    } else if (xAxis === '12PM-4PM') {
      console.log('SASHHI')
      const startTime = moment('12:00 PM', 'h:mm A')
      const endTime = moment('04:00 PM', 'h:mm A')
      const timeToCheck = moment()
      if (timeToCheck.isBetween(startTime, endTime)) {
        setCardColor({ bgColor: 'white', color: 'black' })
      } else {
        setCardColor({
          bgColor: '#1f2937',
          color: '#7a7b7b',
        })
      }
    }
  }, [time])

  return (
    <Card
      className='event-card'
      style={{
        backgroundColor: cardColor?.bgColor,
        color: cardColor.color,
        width: '92%',
        margin: 'auto',
      }}
    >
      <CardContent
        className='card-content'
        onClick={
          cardType === WIDGET_ITEMS_NAMES.EVENT_PULSE
            ? () => onHandleSelectEventPulse(title, description)
            : () => onHandleSelectEventBreifing(title, description)
        }
      >
        <Typography
          className='title'
          variant='subtitle1'
          color={cardColor.titleColor}
        >
          {title}
        </Typography>
        <Box style={{ width: 'inherit' }}>
          {cardType === WIDGET_ITEMS_NAMES.EVENT_PULSE && (
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'inherit',
              }}
            >
              {time && (
                <Typography className='time-text' color='#7a7b7b'>
                  {!moment().isAfter(moment(time))
                    ? 'Yet to be Announced'
                    : 'Announced'}
                </Typography>
              )}
              {description && (
                <KeyboardArrowRightIcon
                  className='arrow-icon'
                  style={{ color: cardColor?.color }}
                />
              )}
            </Box>
          )}
          {cardType === WIDGET_ITEMS_NAMES.EVENT_BRIEFING && (
            <Box display='flex' justifyContent='center' flexDirection='column'>
              <Typography
                className='time-text'
                color='#60A5FA'
                variant='subtitle2'
              >
                Key Highlights
              </Typography>
              <Typography
                className='time-text'
                color='#60A5FA'
                variant='subtitle2'
              >
                Video Transcripts
              </Typography>
              <Typography
                className='time-text'
                color='#60A5FA'
                variant='subtitle2'
              >
                Compare to 2022
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

export default EventCard
