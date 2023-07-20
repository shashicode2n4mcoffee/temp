import React, { useCallback, useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import ChartDataModal from "./ChartDataModal";
import { fetchUsersRequest } from "../Redux/actions/usersActions";
import { connect } from "react-redux";
import { findSentiment } from "../Utils/findSentiment";

const getColor = { positive: "green", negetive: "red", neutral: "orange" };
const CategoriesBarChart = ({ fetchUsers }) => {
  const [data, setData] = useState([
    {
      impact: 80,
      sentiment: "positive",
      news: "News1",
    },
    {
      impact: 10,
      sentiment: "neutral",
      news: "News1",
    },
    {
      impact: 60,
      sentiment: "negetive",
      news: "News1",
    },
    {
      impact: 23,
      sentiment: "positive",
      news: "News1",
    },
  ]);

  const [barchartOptions, setBarchartOptions] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const getData = useCallback((data) => {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
      filteredData.push({
        value: data[i]?.impact,
        itemStyle: {
          color: getColor[data[i].sentiment],
        },
      });
    }
    console.log("2", filteredData);
    return filteredData;
  }, []);

  const getNews = useCallback((data) => {
    const news = data?.map((newsItem) => {
      return newsItem.news;
    });
    return news;
  }, []);

  const getOptions = useCallback(
    (data) => {
      const options = {
        xAxis: {
          type: "category",
          data: getNews(data),
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          enterable: true,
          leaveable: false,

          formatter: (params) => {
            const { name, value } = params[0];
            return `<div class="custom-tooltip"><p>News : ${name}</p>
            <p>Sentiment :${value}</p>
            </div>`;
          },
        },
        series: [
          {
            data: getData(data),
            type: "bar",
          },
        ],
      };
      console.log("3", options);

      setBarchartOptions(options);
    },
    [getData]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 100);
      let simulateData = data.slice();
      console.info("=====SIMULATED DATA==== ", simulateData);
      simulateData.shift();
      simulateData = [
        ...data,
        {
          impact: randomValue,
          sentiment: findSentiment(randomValue),
          news: `News${randomValue}`,
        },
      ];

      getOptions(simulateData);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  function onChartClick(param, echarts) {
    console.log("On CHARTS CLICK", param, echarts);
    setModalOpen(true);
  }

  useEffect(() => {
    getOptions([
      {
        impact: 80,
        sentiment: "positive",
        news: "News1",
      },
      {
        impact: 10,
        sentiment: "neutral",
        news: "News1",
      },
      {
        impact: 60,
        sentiment: "negetive",
        news: "News1",
      },
      {
        impact: 23,
        sentiment: "positive",
        news: "News1",
      },
      {
        impact: 80,
        sentiment: "positive",
        news: "News1",
      },
      {
        impact: 10,
        sentiment: "neutral",
        news: "News1",
      },
      {
        impact: 60,
        sentiment: "negetive",
        news: "News1",
      },
      {
        impact: 23,
        sentiment: "positive",
        news: "News1",
      },
    ]);
  }, [getOptions, getData]);

  return (
    <>
      <ReactEcharts
        theme="dark"
        option={barchartOptions}
        onEvents={{
          click: onChartClick,
        }}
      />
      <ChartDataModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBarChart);
