import React, { useEffect } from "react";
import { AdvancedChart } from "react-tradingview-embed";

const TradingViewWidget = () => {
  return (
    <AdvancedChart
      widgetProps={{
        symbol: "NASDAQ:AAPL",
        interval: "1",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        calendar: true,
        container_id: "tradingview_0dabd",
        height:"400px"
      }}
    />
  );
};

export default TradingViewWidget;
