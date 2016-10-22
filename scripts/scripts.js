/*---Notification---*/
$('.notifications__item').click(function(){
  $(this).addClass('is-active').siblings().removeClass('is-active');
});


/*---Alert----*/
$('.sectionAlert__item').click(function(){
  $('.element').toggleClass('is-active');
});


/*---Modal---*/
$('.sectionModal .sectionModal__profile').click(function(){
  $('.sectionModal__overlay').addClass('is-active');
  setTimeout(function(){
    $('.sectionModal__overlay').removeClass('is-active');
  }, 5000);
});