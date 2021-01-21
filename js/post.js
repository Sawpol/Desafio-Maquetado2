const showPost = (post) => {
    const htmlPost = `
    <img src="imagenes/aws.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h1 class="card-title main-text">${post.title}
            </h5>

            <div class="d-flex align-items-start hash-article">
                <p class="p-1 mb-1 bg-warning text-dark hash-article">${post.tags}
                </p>
                <p class="p-1 mb-1 bg-info text-dark hash-article">${post.tags}</p>
            </div>
            <div class="d-flex align-items-center content-margin-align">
                <div class="size-avatar-post">
                    <img src=${post.urlPhoto} alt="avatar" class="avatar m-3">
                </div>
                <div>
                    <p class="card-text"><small class="text-muted">Last updated 3
                            mins
                            ago</small></p>
                </div>
            </div>
            <p>${post.content}</p>


            <strong>${post.content}</strong>





    </div>
    `
    $('#post_content').html(htmlPost)
}

if (window.location.pathname === '/post-1.html') {
    console.log('pagina cargada')
    const url = new URLSearchParams(location.search)
    const id = url.get('postId')
    console.log(id)
    fetchData(`https://reto-js-default-rtdb.firebaseio.com/posts/${id}/.json`, 'GET')
        .then(res => {
            showPost(res)
        })
        .catch(error => {
            console.log('error al mostrar el post')
            console.log(error)
        })
}