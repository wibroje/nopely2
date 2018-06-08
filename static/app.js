$(document).ready(function(){

const say = console.log;
const rando = Math.floor(Math.random() * 100);

say('hi bb')

let fantasyGen = 'https://api.themoviedb.org/3/genre/14/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;
let scifiGen = 'https://api.themoviedb.org/3/genre/878/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;
let horrorGen = 'https://api.themoviedb.org/3/genre/27/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;
let romanceGen = 'https://api.themoviedb.org/3/genre/10749/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

	$('#fantasy-btn').on('click', function(){

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
			    	$('#ajax-response').html(response)
			    },
			    complete:function(success){
			    	
			    },
			    error:function (xhr, textStatus, thrownError){
			        window.location.href = "/users/home"
			    }
			});
		});
	});

	$('#scifi-btn').on('click', function(){

		$.get(scifiGen, function(response){
			const item = response.results[Math.floor(Math.random()*response.results.length)];

			let title = item.title;
			let overview = item.overview;
			let poster = item.poster_path;

			$.ajax({
			    url:"/users/post_movie/",
			    type: "POST",
			    data: {title: title, poster: poster, overview: overview},
			    success:function(response){
			    	$('#ajax-response').html(response)
			    },
			    complete:function(success){
			    	
			    },
			    error:function (xhr, textStatus, thrownError){
			        window.location.href = "/users/home"
			    }
			});
		});
	});

	$('#horror-btn').on('click', function(){

		$.get(horrorGen, function(response){
			const item = response.results[Math.floor(Math.random()*response.results.length)];

			let title = item.title;
			let overview = item.overview;
			let poster = item.poster_path;

			$.ajax({
			    url:"/users/post_movie/",
			    type: "POST",
			    data: {title: title, poster: poster, overview: overview},
			    success:function(response){
			    	$('#ajax-response').html(response)
			    },
			    complete:function(success){
			    	
			    },
			    error:function (xhr, textStatus, thrownError){
			        window.location.href = "/users/home"
			    }
			});
		});
	});

	$('#romance-btn').on('click', function(){

		$.get(romanceGen, function(response){
			const item = response.results[Math.floor(Math.random()*response.results.length)];

			let title = item.title;
			let overview = item.overview;
			let poster = item.poster_path;

			$.ajax({
			    url:"/users/post_movie/",
			    type: "POST",
			    data: {title: title, poster: poster, overview: overview},
			    success:function(response){
			    	$('#ajax-response').html(response)
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

