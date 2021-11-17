import {yelpAPIKey} from './_Credentials'

const Yelp = {
    search(term, location, sortBy) {
        const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        const CORSAnywhere = 'https://cors-anywhere.herokuapp.com/'

        const settings = {
            headers: {
                Authorization: `Bearer ${yelpAPIKey}`
            }
        }
        return fetch(CORSAnywhere+endpoint, settings).then(
            response => {return response.json()}
        ).then( jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc: null,
                        name: "null",
                        address: 'null',
                        city: 'null',
                        state: 'null',
                        zipCode: 'null',
                        category: 'null',
                        rating: 4,
                        reviewCount: 4,
                    }
                })
            }
        })
    }
}

export default Yelp