import { useState } from "react";
import useCoinPrice from "../hooks/useCoinPrice";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const {loading, error, price} = useCoinPrice(currency)
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);


    /* useEffect(() => {
        let ignore = false;
        axios
            .get(
              `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
            )
            .then((response) => {
                if (!ignore) setPrice(response.data.bitcoin[currency.toLowerCase()])
            });
        return () => {
            ignore = true;
        }
    }, [currency]);
    */
   
  
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => {
            setCurrency(e.target.value);}}>
          {options}
        </select>
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <h4 id="rate">{currency}: {price}</h4>}
    </div>
  );
}
