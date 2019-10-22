let search=document.getElementById("searchText");
search.addEventListener('keypress',e=>{
    let searchText=e.target.value;
    getmovies(searchText);//calling get movies function

});

function getmovies(searchText){
    let api=`http://www.omdbapi.com/?s=${searchText}&apikey=4143fc0c`;
  window.fetch(api).then(data =>{
      //console.log(data);//next step converting response data into  json object
      //hoe to convert response object into json object
    // let rest=  data.json();//
    // console.log(rest);//it will give promise pending go to next step
    let rest=  data.json();
    rest.then(movie=>{
        // console.log(movie.Search);
        // //if resolve executing then block
        let movies=movie.Search;
        let output= '';
        for (let imdbmovie of movies) {
            output +=`
            <h1>${imdbmovie.Title}</h1>
            <P>${imdbmovie.Year}</p>
            <P>${imdbmovie.imbdID}</P>
            <P>${imdbmovie.Type}</P>
            <img src=${imdbmovie.Poster} />
            `;
            document.getElementById("template").innerHTML=output;
        }

    }).catch(err=>console.log(err))
  }).catch(err=>
      console.log(err)
  );// fetching data from omdb server
}