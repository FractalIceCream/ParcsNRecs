
let url = `https://developer.nps.gov/api/v1/activities?q=astronomy&api_key=${process.env.API_KEY}`;
const test = async(event) => {
    try {
        const response = await fetch(url)
    } catch (error) {
        
    }
}