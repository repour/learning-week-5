import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

function App() {

  const [time, setTime] = useState()
  setInterval(() => {

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // month = month + 1;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const currentTime = "Currency quote day:" + " " + year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;

    setTime(currentTime)
  }, 1000)



  ///////////////////////////////////////////////////
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RIAL');
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    RIAL: 50000,
    EUR: 0.9,
    AED: 0.5,
    CNY: 0.8,
  });

  // Function to handle "From" amount change
  const handleAmountFromChange = (e) => {
    setAmountFrom(e.target.value);
    setAmountTo(null); // Reset the "To" amount when "From" amount changes
  };

  // Function to handle "To" amount change
  const handleAmountToChange = (e) => {
    setAmountTo(e.target.value);
    setAmountFrom(null); // Reset the "From" amount when "To" amount changes
  };

  // Function to handle "From" currency change
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  // Function to handle "To" currency change
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setAmountTo(amountFrom);
    } else {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      if (amountFrom !== null) {
        const result = (amountFrom * rate)//.toFixed(2);
        setAmountTo(result);
      } else if (amountTo !== null) {
        const result = (amountTo / rate)//.toFixed(2);
        setAmountFrom(result);
      }
    }
  }, [amountFrom, amountTo, fromCurrency, toCurrency]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <p className="border"></p>
      <p className="currBalance">
        Exchange Rate ({fromCurrency} to {toCurrency}):{' '}
        {exchangeRates[toCurrency]}
      </p>
      <p className='currentDate'>{time}</p>
      <div className="currencySection">
        <div className="firstInput">
          <input
            type="number"
            value={amountFrom || ''}
            onChange={handleAmountFromChange}
          />
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="secondInput">
          <input
            type="number"
            value={amountTo || ''}
            onChange={handleAmountToChange}
          />
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
  //////////////////////////////////////////////////
//   return (
//     <>
//       <div className='container'>
//         <h1>Currency calculator</h1>
//         <p className='border'></p>
//         <p className='currBalance'></p>
//         <p className='currentDate'>{time}</p>
//         <div className='currencySection'>
//           <div className='firstInput'>
//             <input type="number" />
//             <select id="firstCurrency" onChange={check}>
//               <option value="EUR">EUR</option>
//               <option value="USD">USD</option>
//               <option value="RIAL">RIAL</option>
//               <option value="AED">AED</option>
//               <option value="CNY">CNY</option>
//             </select>
//           </div>
//           <div className='secondInput'>
//             <input type="number" onChange={check} />
//             <select id="secondCurrency">
//               <option value="USD">USD</option>
//               <option value="EUR">EUR</option>
//               <option value="RIAL">RIAL</option>
//               <option value="AED">AED</option>
//               <option value="CNY">CNY</option>
//             </select>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

export default App




/////////////////////////////////////////////////

