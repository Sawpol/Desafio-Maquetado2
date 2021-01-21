const showListPosts = (posts)=>{
    let countpost=0
    let postsHtml =''
    let postsKeys =[]

    for (const key in posts) {
       postsKeys.push(key)
    }

    const reversed = postsKeys.reverse()
    console.log('reversed')
    console.log(reversed)
    for (const postId of reversed) {
        const post = posts[postId]
        console.log(post)
        postsHtml += `<div class="card mb-3 d-flex-row">
        <img class="card-img-top " src="${countpost ===0?post.urlPhoto:''}">
        <div class="d-flex align-items-center">

            <div class="size-avatar">

                <img src="imagenes/avatar.jpg" alt="avatar" class="avatar m-3">
            </div>

            <div class="size-p-avatar">

                <p class="font-weight-light"> Muhimen <small class="text-muted">
                        Dec 3 (7hours)</small></p>

            </div>
        </div>

        <div>
            <div class="card-body main-body-card">

                <a href="post-1.html?postId=${postId}">
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
                                class="text-muted save-text-font">3 mins
                                read</small>
                        </p>
                        <button type="button"
                            class="btn btn-secondary d-flex flex-row-reverse  save-button">Save</button>
                    </div>
                </div>


            </div>

        </div>


    </div>`
        countpost +=1
    }
    $('#posts_list').html(postsHtml)
}

fetchData('https://reto-js-default-rtdb.firebaseio.com/posts/.json', 'GET')
.then(res=>{
    showListPosts(res)
})
.catch(error=>{
    console.log('Error al cargar lista de posts')
    console.log(error)
})