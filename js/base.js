//---- PARA BORRAR USUARIOS
/* requestAjax(
    'https://reto-js-default-rtdb.firebaseio.com/posts.json',
    showResponse,
    'DELETE'
) */

const fetchData = (url, metod, data = {}) => {
    return new Promise((resolve, reject) => {
        const params = {
            method: metod,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, params).then(res => res.json())
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
