require('dotenv').config()
const axios = require('axios')

const applicationId = process.env.ASTRO_APP_ID
const applicationSecret = process.env.ASTRO_APP_SECRET
const authString = (`${applicationId}:${applicationSecret}`)
const BASE_URL = "https://api.astronomyapi.com/api/v2/"
const bodiesUrl = "https://api.astronomyapi.com/api/v2/bodies" //<--- get list of available bodies
// const BODY_POSITION_URL = "bodies/positions"
// https://api.astronomyapi.com/api/v2/bodies/positions
// ?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2023-07-24&to_date=2023-07-24&time=14%3A04%3A15


const config = {
    headers: {
        "Authorization": `Basic ${Buffer.from(authString).toString('base64')}`
    }
}


// testing getting available celestial bodies from API endpoint:
const getPlanets = async () => {
    let planets = await axios.get(bodiesUrl, config)
      .then(response => {
        console.log(response.data);
    })
      .catch(error => {
        console.error(error);
      });
}
getPlanets()


// Search bodies positions by user lat/long
// let longitude = '';
// let latitude = '';
