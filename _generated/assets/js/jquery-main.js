$( document ).ready(function() {
  $('.info-buy').addClass('info-buy-display');
  setTimeout(function(){  $('.info-buy').removeClass('info-buy-display'); $('.info-buy').css('display', 'none'); }, 7000);
  $('#info-buy-close').click(function() {
  $('.info-buy').removeClass('info-buy-display');
   $('.info-buy').css('display', 'none');
  });
// if($( window ).width()<768){
// var  slWd=$( window ).width()/2.2;
// $('.swiper-slide').width( slWd);

// }
// $( window ).load(function() {
//   $('.info-buy').addClass('info-buy-display');
// setTimeout(function(){  $('.info-buy').removeClass('info-buy-display'); }, 7000);
//   $('#info-buy-close').click(function() {
//   $('.info-buy').removeClass('info-buy-display');
//   });
// });

});
