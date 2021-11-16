import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        }

        // Options to sort Yelp API results
        // https://www.yelp.com/developers/documentation/v3/business_search
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
        }
    }

    // lets us dynamically set the class values
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } else {return ''}
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return (
                <li 
                    key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)}
                    // binding this and current option to onClick handler
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >
                    {sortByOption}
                </li>)
        })
    }


    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>

            </div>
        )
    }
}

export default SearchBar