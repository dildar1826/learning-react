import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currency, setCurrency] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('pkr')
  const [currencyList, setCurrencyList] = useState([])
  const [data, setData] = useState({})
  const [convertedAmount, setConvertedAmount] = useState(0)

  useEffect(() => {
    async function fetchList() {
      let res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
      let json = await res.json()
      setCurrencyList(Object.keys(json.usd))
    }
    fetchList()
  }, [])

  useEffect(() => {
    async function fetchCurrency(curr) {
      await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[curr]))
      
    }
    fetchCurrency(fromCurrency)
  },[fromCurrency])

  const handleConvert = () => {
    if (data && data[toCurrency]) {
      let result = currency * data[toCurrency]
      setConvertedAmount(result)
    }
  }

  return (
  <>
  <div className='main'>
    <div className='container'>
      <div className='placeholders'>
        <input type="number" placeholder="Enter Amount" onChange={(e) => setCurrency(e.target.value)} />
        <button id='btn' onClick={handleConvert}>convert</button>
        <input 
        type="number" 
        placeholder="Converted Amount" 
        value={convertedAmount}
        readOnly />
      </div>
    </div>

    <div className='currency-dropdowns'>
      <div>
        <label>From: </label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyList.map((c) => (
            <option key={c} value={c}>{c.toUpperCase()}</option>
          ))}
        </select>
      </div>
      <div>
        <label>To: </label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyList.map((c) => (
            <option key={c} value={c}>{c.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
</>
  )
}

export default App