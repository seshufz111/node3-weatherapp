const request = require('request')



// encodeURIComponent(address) call string
const geocode = (address, callback)=>{
  const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2VzaHVmejExMSIsImEiOiJjazV3MWt2ZWEwNG9rM25ueGI0eGtqNHZjIn0.l_idd4n4Qph6MaPIG_A1Vg'

  request({url:url,json:true},(error,response)=>{
      if(error){
          callback('Unable to Connect Weatherapp Services')
      }
      else if(response.body.features.length ===0){
          callback('Unbale to Find the Location & Try another Search')
      }
      else{
          callback(undefined, {
            latitide: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location:response.body.features[0].place_name
          })
      }
  })
}

module.exports = geocode;