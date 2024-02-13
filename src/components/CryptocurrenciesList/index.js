import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrrenciesHeader = () => (
    <div className="crypto-table">
      <p className="list-coin-heading">Coin Type</p>
      <div className="values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrrenciesView = () => {
    const {currencyList} = this.props
    return (
      <div className="crypto-currencies-list">
        {this.renderCryptoCurrrenciesHeader()}
        <ul className="currencies-list">
          {currencyList.map(item => (
            <CryptocurrencyItem key={item.id} currency={item} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currency-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        {this.renderCryptoCurrrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList