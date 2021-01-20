// leer posts de la base de datos 
const urlDB = 'https://reto-js-default-rtdb.firebaseio.com/posts/.json'
const readPosts = () => {
    let options =  {
        method: 'GET'
    }
    fetch(urlDB, options)
    .then(response => {
        // console.log(response["-MRS2_a-g_BffHN0g_vX"])
        return response.json()
    })
    .then((data) => {  
        console.log(data["-MRS2_a-g_BffHN0g_vX"])
        // showUsers(users)
    })
    .catch(err => {
        console.log(err)
    })
}