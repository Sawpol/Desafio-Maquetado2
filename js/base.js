console.log('<---- ... Cosole Ready ---->')

const urlDB = 'https://reto-js-default-rtdb.firebaseio.com'

// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            /* console.log(this.response) */
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}

// put y post
const showResponse = (response) => {
    console.log(response)
}

/* `$(urlDB)/posts/.json`, */

// requestAjax(
//     `https://reto-js-default-rtdb.firebaseio.com/posts/.json`,
//     showResponse,
//     'POST', {
//         title: "titulo",
//         organization: "CCA",
//         author: "Juan de Dios",
//         content: "Contenido lorem",
//         dateCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
//         dateUpdated: moment().format('MMMM Do YYYY, h:mm:ss a'),
//         urlPhoto: "https://loremflicker.com/320/240/person",
//         tags: " demo1 demo2",
//         mtr: 2
//     }
// )

//---- PARA BORRAR USUARIOS
/* requestAjax(
    'https://reto-js-default-rtdb.firebaseio.com/posts.json',
    showResponse,
    'DELETE'
) */

const fetchData = (url,metod,data={})=>{
    return new Promise((resolve, reject) => {
        const params ={
            method:metod,
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }
    
        fetch(url,params).then(res=> res.json())
        .catch(error => {
            console.error('Error:', error)
            reject(error)
        })
        .then(response => {
            console.log('Success:', response)
            resolve(response)
        });
    });
}