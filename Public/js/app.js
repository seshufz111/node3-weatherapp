const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent ='From JavaScript'

// search eventlister e is called event Object referesh the browser

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent ='Loading...'
    messageTwo.textContent=''


    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
            
        }
    })

})

})

// console.log('Client SIde JavaScript is Loaded')
// console.log('Working')

// Browser HTTP Requests with Fetch
// fetch is function api
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
// fetch('http://localhost:5000/weather?address=!')
//     })

// })


// fetch('/weather?address='+location).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.location)
//         }
//     })

// })