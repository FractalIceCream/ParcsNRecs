const { npsUrl, apiKey } = require('../config/connection');

module.exports = {

    get_by_StateCode: async (stateCode) => {
        const url = `${npsUrl}parks?stateCode=${stateCode}&api_key=${apiKey}`;
        const parksData = await fetch(url);
        return parksData.json();
    },
    get_by_ParkCode: async (parkCodes) => {
        const parkCodeStr = parkCodes.join('%20');
        console.log(parkCodeStr);
        const url = `${npsUrl}parks?parkCode=${parkCodeStr}&limit=${parkCodes.length}&api_key=${apiKey}`;
        const parksData = await fetch(url);
        return parksData.json();
    },
  };
  