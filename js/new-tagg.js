// leer taggs de la base de datos 
const urlDB = 'https://reto-js-default-rtdb.firebaseio.com/tags/.json'
const readTags = () => {
    let options =  {
        method: 'GET'
    }
    fetch(urlDB, options)
    .then(response => {
        return response.json()
    })
    .then((data) => {  
        console.log(data)
        // showUsers(users)
    })
    .catch(err => {
        console.log(err)
    })
}