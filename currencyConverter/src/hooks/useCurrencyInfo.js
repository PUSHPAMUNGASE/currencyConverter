import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency = "USD") {
  const [data, setData] = useState({});
  const API_KEY = "a822c5557a-5191db47b1-sy7wwj"; // 🔁 Replace with your actual FastForex key

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch(`https://api.fastforex.io/fetch-all?from=${baseCurrency}&api_key=${API_KEY}`);
        const result = await response.json();
        setData(result?.results || {});
        console.log("Exchange Rates:", result?.results);
      } catch (error) {
        console.error("Error fetching FastForex data:", error);
      }
    }

    fetchRates();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
