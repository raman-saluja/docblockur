
$(function() {
  $(".docs-sidebar a[href]").click(function() {

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top - 100
              }, 800);
              
              if($(this).parent('li').parent('ul').hasClass('sub-menu')){

                $('.docs-sidebar > li li').removeClass('active');
                $(this).parent('li').addClass('active');
                console.log( $(this).parent('li').hasClass('active') );
                $(this).parent('li').parent('ul').parent('li').addClass('active');

              }else{

                $('.docs-sidebar li > ul > li').removeClass('active');
                $(this).parent('li').addClass('active');

              }

              return false;
          }
      }


  });


});

window.sideBarScroll = function() {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > ($(".docs-sidebar")[0].getBoundingClientRect().top )) {
       $('.docs-sidebar').addClass('docs-sidebar-fixed');
  }else{
       $('.docs-sidebar').removeClass('docs-sidebar-fixed');
  }
}

$(document).ready(function() {

   $(".docs-sidebar").scrollspy({
    offset: 600
   });

   $('.docs-sidebar').attr( 'style', 'min-height: '+( window.innerHeight - $('.docs-sidebar').data( 'scroll-offset' ) ) +'px' );

  sideBarScroll();

  $(window).on('scroll', function(event) {
      sideBarScroll();
  });

})
