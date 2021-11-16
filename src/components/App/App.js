import React from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

// This is static data for use in building the Business component.
const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

// This is a static array for use in passing data between components.
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
]


class App extends React.Component {

  searchYelp(term, location, sortBy) {
    // simulated search function
    console.log(` Searching Yelp with... term: ${term},   location: ${location},  sort:${sortBy}`)
  }

  render() {
    return(
      <div className='APP'>
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={businesses}/>
      </div>
    )
  }
}

export default App;
