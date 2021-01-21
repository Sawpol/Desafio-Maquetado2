const showListPosts = (posts) => {
    let postsHtml = ''
    for (const postId in posts) {

        const post = posts[postId]
        postsHtml += `<div class="card mb-3 d-flex-row">
        <img class="card-img-top " src="imagenes/aws.webp">
        <div class="d-flex align-items-center">

            <div class="size-avatar">

            <img src=${post.urlPhoto} alt="avatar" class="avatar m-3">
            </div>

            <div class="size-p-avatar">

                <p class="font-weight-light">${post.author}<small class="text-muted">
                        ${post.date}</small></p>

            </div>
        </div>

        <div>
            <div class="card-body main-body-card">


                <a href="post-1.html">
                    <p class="card-text font-weight-bold h2">${post.title}
                    </p>
                </a>
                <div class="d-flex font-size-hash">
                    <a href="#">
                        <h1 class="font-size-hash">#webdev</h1>
                    </a>
                    <a href="#">
                        <h1 class="font-size-hash">#git</h1>
                    </a>
                    <a href="#">
                        <h1 class="font-size-hash">#saludos</h1>
                    </a>
                </div>
                <div class="d-flex flex-row  justify-content-between">

                    <div
                        class="d-flex justify-content-center images-size-articles">

                        <ul class="nav navbar justify-content-center">
                            <li class="nav-item mr-3">
                                <a href="#"><img type="image/svg+xml"
                                        src="imagenes/SVG/icon-like.svg"
                                        alt="Twitter"> 10
                                    reactions</a>
                            </li>
                            <li class="nav-item mr-4">
                                <a href="#"><img
                                        src="imagenes/SVG/icon-comment.svg"
                                        alt="Twitter"> 2 comments </a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center save-text-font">
                        <p class="card-text"><small
                                class="text-muted save-text-font">${post.mtr}
                                read</small>
                        </p>
                        <button type="button"
                            class="btn btn-secondary d-flex flex-row-reverse  save-button">Save</button>
                    </div>
                </div>


            </div>

        </div>


    </div>`
    }
    $('#posts_list').html(postsHtml)
}

fetchData('https://reto-js-default-rtdb.firebaseio.com/posts/.json', 'GET')
    .then(res => {
        showListPosts(res)
    })
    .catch(error => {
        console.log('Error al cargar lista de posts')
        console.log(error)
    })