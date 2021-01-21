const showPost = (post)=>{
    const htmlPost = `
    <img src="imagenes/aws.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h1 class="card-title main-text">${post.title}
            </h5>
            <div class="d-flex align-items-start hash-article">
                <p class="p-1 mb-1 bg-warning text-dark hash-article">#watercooler
                </p>
                <p class="p-1 mb-1 bg-info text-dark hash-article">#performance</p>
            </div>
            <div class="d-flex align-items-center content-margin-align">
                <div class="size-avatar-post">
                    <img src="imagenes/avatar.jpg" alt="avatar" class="avatar m-3">
                </div>
                <div>
                    <p class="card-text"><small class="text-muted">Last updated 3
                            mins
                            ago</small></p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
                totam necessitatibus sit autem cumque, tempore officiis quasi
                repudiandae distinctio voluptatum molestiae enim cum saepe nam
                asperiores maxime nobis dolorum sapiente illum perspiciatis harum
                dignissimos? Voluptas pariatur quaerat sunt consequuntur earum,
                alias ea nostrum id hic iste animi illum natus dignissimos dolor qui
                sit maxime molestias aperiam. Id voluptate veniam corporis.</p>


            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                nostrum esse deleniti voluptates cupiditate, ex accusantium
                veritatis nobis, fugiat quos nesciunt aliquid consectetur. Fuga,
                ipsa?</strong>





    </div>
    `
    $('#post_content').html(htmlPost)
}

if(window.location.pathname === '/post-1.html'){
    console.log('pagina cargada')
    const url = new URLSearchParams(location.search)
    const id = url.get('postId')
    console.log(id)
    fetchData(`https://reto-js-default-rtdb.firebaseio.com/posts/${id}/.json`,'GET')
    .then(res =>{
        showPost(res)
    })
    .catch(error=>{
        console.log('error al mostrar el post')
        console.log(error)
    })
}