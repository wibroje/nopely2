$(document).ready(function(){

const say = console.log;
const rando = Math.floor(Math.random() * 100);

let fantasyGen = 'https://api.themoviedb.org/3/genre/14/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

	$('#movie-btn').on('click', function(){

		$.get(fantasyGen, function(response){
			const item = response.results[Math.floor(Math.random()*response.results.length)];

			let title = item.title;
			let overview = item.overview;
			let poster = item.poster_path;

			$.ajax({
			    url:"/users/post_movie/",
			    type: "POST",
			    data: {title: title, poster: poster, overview: overview},
			    success:function(response){
			    	$('#ajax-response').append(response)
			    },
			    complete:function(success){
			    	
			    },
			    error:function (xhr, textStatus, thrownError){
			        window.location.href = "/users/home"
			    }
			});
		});
	});
});

