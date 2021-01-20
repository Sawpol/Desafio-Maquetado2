console.log('<---- ... Cosole Ready TAG ---->')

//requestAjax(
//    `https://reto-js-default-rtdb.firebaseio.com/tag/.json`,
//    showResponse,
//    'POST', {
//    tag: "JavaScript"
//}
//

const createPosts = (data) => {
    // create
    fetch(`https://reto-js-default-rtdb.firebaseio.com/posts/.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            // location.pathname = '/'
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

        // console.log(event.taget)


        let title = $('#title-post').val()
        let organization = $('#org-post').val()
        let author = $('#author-post').val()
        let content = $('#content-post').val()
        let date = $('#date-post').val()
        let urlPhoto = $('#url-post').val()
        let tags = $('#tags-post').val()
        let mtr = $('#mtr-post').val()

        // let dataNewPost = {
        //             title: title,
        //             organization: organization,
        //             author: author,
        //             content: content,
        //             date: date,
        //             urlPhoto: urlPhoto,
        //             tags: tags,
        //             mtr: mtr
        //         }

        // console.log(dataNewPost)
        
        
        if (title=== '' || organization=== '' || author=== '' || content=== '' || date=== '' || urlPhoto=== '' || tags=== '' || mtr=== '' ) {
           $('#errorTag').removeClass('d-none')
        } else {
            let dataNewPost = {
                title: title,
                organization: organization,
                author: author,
                content: content,
                date: date,
                urlPhoto: urlPhoto,
                tags: tags,
                mtr: mtr
            }
            console.log(dataNewPost)
            createPosts(dataNewPost)
        }
      
    })
}