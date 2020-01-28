const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/6b52517eaae85ecb26f64491c985b615/37.8267,-122.4233'

    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to Connect Weatherapp Services', undefined)
        }
        else if(response.body.error){
            callback('Unbale to Find the Location',undefined)

        }
        else{
            callback(undefined,response.body.daily.data[0].summary + ' It is Currently ' + response.body.currently.temperature +  ' degree is out.  There is a ' + response.body.currently.precipProbability +' % chance of Rain')

        }

    })
}



module.exports = forecast