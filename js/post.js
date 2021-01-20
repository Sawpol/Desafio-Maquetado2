const showPost = (post)=>{
    console.log('el post')
    console.log(post)
}

if(window.location.pathname === '/post.html'){
    const url = new URLSearchParams(location.search)
    const id = url.get('id')
    fetchData(`https://reto-js-default-rtdb.firebaseio.com/posts/${id}/.json`,'GET')
    .then(res =>{
        showPost(res)
    })
    .catch(error=>{
        console.log('error al mostrar el post')
        console.log(error)
    })
}