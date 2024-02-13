import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currency
  return (
    <li className="list-item">
      <div className="logo-title-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values-container">  
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
      
    </li>
  )
}

export default CryptocurrencyItem