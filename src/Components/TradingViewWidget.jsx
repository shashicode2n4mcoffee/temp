import { Box } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { AdvancedChart } from "react-tradingview-embed";

let tvScriptLoadingPromise;

const TradingViewWidget = () => {
  const [symbolValue, setSymbolValue] = useState("EURUSD");
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_e3e5b") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          symbol: symbolValue,
          interval: "D",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          calendar: true,
          container_id: "tradingview_94104",
          height: "400px",
          width: "100%",
          container_id: "tradingview_e3e5b",
        });
      }
    }
  }, []);

  return (
    <Box className="tradingview-widget-container" sx={{ height: "400px" }}>
      <div id="tradingview_e3e5b" />
    </Box>
  );
};

export default TradingViewWidget;
