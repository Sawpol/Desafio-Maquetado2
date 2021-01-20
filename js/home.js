const showTaggs = (tags) => {
    let htmltags = ''
    for (const record in tags) {
        const tag = `
       <a class="mb-2 d-flex" href="">
            <li>#${tags[record].tag}</li>
        </a>
       `
        htmltags += tag
    }

    $('#list_tags').html(htmltags)
}



fetchData('https://reto-js-default-rtdb.firebaseio.com/tags/.json', 'GET')
    .then(res => {
        showTaggs(res)
    })


