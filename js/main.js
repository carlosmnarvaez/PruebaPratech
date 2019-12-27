if ($(window).width() > 767) {
  $( ".dropdown , dropdown-menu" ).hover(function() {
      $(this).addClass( "show" );
      $(this).find('.dropdown-menu').addClass( "show" );
    }, function() {
      $(this).removeClass( "show" );
      $(this).find('.dropdown-menu').removeClass( "show" );
    }
  );
}



function filtrar_por_categoria(movies,categoria) {
    var matches=[];
    movies.forEach(function(movie) {
       if(movie.categories.indexOf(categoria)!==-1) {
         matches.push(movie);
       }
    });
    return matches;
}


$.getJSON("movies.json", function(data) {
  
  jQuery('.filtro').click(function() {
     var categoria=jQuery(this).val();
     var movies = filtrar_por_categoria(data.data,categoria);
     
     jQuery('#movies').empty();
     movies.forEach(function(movie) {


        // var li_movie = jQuery('<li class="col-md-3">'+movie.title+'<p class="col-md-12">'+movie.teaser+'</p><img src=' + movie.image + '></img></li>');

        var li_movie = ""+
            "<li class='col-md-3'>"+
              "<div class='content_img_tabs'>"+
                  "<div class='hover'><figure><img class='image' src=" + movie.image + "></img></figure></div>"+
                  "<div class='middle'>"+

                    "<p class='title'>"+movie.title+"</p>"+

                    "<a href="+movie.now+" class='btn_one'>WATCH NOW</a>"+
                    "<a href="+movie.info+" class='btn_two'>MORE INFO</a>"+

                  "</div>"+
              "</div>"+
            "</li>";





        jQuery('#movies').append(li_movie);
     });




  });


$('.nav-item').mouseover(function(){
    $('.nav-item').removeClass("active");
    $(this).addClass("active");
});



$(document).ready(function(){
  $('#activo').trigger('click') 
});

$('.filtro').click(function(){
    $('.filtro').removeClass("filtro_active");
    $(this).addClass("filtro_active");
});


});


