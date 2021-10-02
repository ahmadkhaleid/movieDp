// AJAX stand for asencrounes(i dont know exact time to recive data) javascript and XML  => its a technique to deal with database without refresh page 
// xml => طريقة لكتابة الداتا مثل  JSON 
// ولكن هي طريقة قدية قبل  2005 
// e272103ebdf710435a66618104305b13   API key

var Movies
var Tv
var myhttp = new XMLHttpRequest()
myhttp.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=e272103ebdf710435a66618104305b13')
myhttp.send()

myhttp.addEventListener("readystatechange",function(){
    if(myhttp.readyState == 4 && myhttp.status == 200 ){
       Movies = JSON.parse(myhttp.response).results.slice(0,7)
       displayPosts(Movies,"m")
       
    }
})





var myhttp2 = new XMLHttpRequest()
myhttp2.open('GET','https://api.themoviedb.org/3/trending/tv/day?api_key=e272103ebdf710435a66618104305b13')
myhttp2.send()





myhttp2.addEventListener("readystatechange",function(){
    if(myhttp2.readyState == 4 && myhttp2.status == 200 ){
       Tv = JSON.parse(myhttp2.response).results.slice(0,7)
       displayPosts(Tv,"t")
       
    }
})

function displayPosts(data,type){
    var cartona =`<div class="align-self-center col-md-3 py-5"><h2>${type=="m" ? "TRINGING MOVIES" :"TRINGING TV"}</h2></div>`
    for (let i = 0; i < Movies.length; i++) {
        cartona+=
        cartona=`<div class="col-md-3 py-5">
        <div class="position-relative py-2">
       <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="">
       <h2>${type=="m" ? data[i].title :data[i].name}</h2>
        <p>${data[i].overview.split(" ").slice(0,10).join(' ')}</p>
        <div class="vote position-absolute bg-info  ">${data[i].vote_average
        }</div>
        </div>
    </div>`
        
    }
    if(type=="m"){
        document.getElementById('demo').innerHTML=cartona
    }
    else{document.getElementById('demo2').innerHTML=cartona
}
}

