$(window).on( 'load', function(){
  setTimeout(function () {
    $('body').addClass('page-loading-step1');
  }, 300 );
  setTimeout(function () {
    $('body').addClass('page-loading-step2');
  }, 3000 );
  setTimeout(function () {
    $('body').addClass('page-loading-step3');
  }, 4500 );
  setTimeout(function () {
    $('body').addClass('page-loading-step4');
  }, 5000 );
});