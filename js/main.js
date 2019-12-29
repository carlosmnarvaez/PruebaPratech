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



function filtrar_por_categoria(cursos,categoria) {
    var matches=[];
    cursos.forEach(function(curso) {
       if(curso.categories.indexOf(categoria)!==-1) {
         matches.push(curso);
       }
    });
    return matches;
}


$.getJSON("cursos.json", function(data) {
  
  jQuery('.filtro').click(function() {
     var categoria=jQuery(this).val();
     var cursos = filtrar_por_categoria(data.data,categoria);
     
     jQuery('#cursos').empty();
     cursos.forEach(function(curso) {


        // var li_curso = jQuery('<li class="col-md-3">'+curso.title+'<p class="col-md-12">'+curso.teaser+'</p><img src=' + curso.image + '></img></li>');

        var li_curso = ""+
            "<li class='col-md-3'>"+
              "<div class='content_img_tabs'>"+
                  "<div class='hover'><figure><img class='image' src=" + curso.image + "></img></figure></div>"+
                  "<div class='middle'>"+

                    "<p class='title'>"+curso.title+"</p>"+

                    "<a href="+curso.now+" class='btn_one'>Realizar</a>"+
                    "<a href="+curso.info+" class='btn_two'>Más información</a>"+

                  "</div>"+
              "</div>"+
            "</li>";





        jQuery('#cursos').append(li_curso);
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


