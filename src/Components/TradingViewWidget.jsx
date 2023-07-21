import { Box } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { AdvancedChart } from "react-tradingview-embed";
import { connect } from "react-redux";

let tvScriptLoadingPromise;

const TradingViewWidget = ({ seletcedSymbol, selectedTime }) => {
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
          symbol: seletcedSymbol || "USDEUR",
          interval: selectedTime || "1D",
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
  }, [seletcedSymbol, selectedTime]);

  return (
    <Box className="tradingview-widget-container" sx={{ height: "400px" }}>
      <div id="tradingview_e3e5b" />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  seletcedSymbol: state.widgetsBar?.seletcedSymbol,
  selectedTime: state.widgetsBar?.selectedTime,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
});

export default connect(mapStateToProps)(TradingViewWidget);
