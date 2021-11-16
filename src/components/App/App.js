import React from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

// This is static data for use in building the Business component.
// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// This is a static array for use in passing data between components.
// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ]


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, sortBy) {
    // simulated search function
    // console.log(` Searching Yelp with... term: ${term},   location: ${location},  sort:${sortBy}`)
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    })
  }

  render() {
    return(
      <div className='APP'>
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
