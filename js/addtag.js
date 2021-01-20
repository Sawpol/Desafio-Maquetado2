console.log('<---- ... Cosole Ready TAG ---->')

//requestAjax(
//    `https://reto-js-default-rtdb.firebaseio.com/tag/.json`,
//    showResponse,
//    'POST', {
//    tag: "JavaScript"
//}
//

const createTags = (data) => {
    // create
    fetch(`https://reto-js-default-rtdb.firebaseio.com/tags/.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .then(tag => {
            console.log(tag)
            location.pathname = '/'
        })
        .catch(err => {
            console.log(err)
        })
}

//if (location.pathname === "/newtag.html") {
// createTags()
//}





let send__tag = document.querySelector('#formulario')

if (send__tag) {

    send__tag.addEventListener('submit', function (event) {

        event.preventDefault()

        console.log(event.taget)


        let tag = $('#post__tag').val()


        if (tag) {
            createTags({
                tag: tag
            })
        } else {

            $('#errorTag').removeClass('d-none')

        }







    })
}