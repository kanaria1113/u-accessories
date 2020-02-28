$(function(){
  function scrolltoNews() {
    $('html,body').animate({scrollTop:720});
  }
  function scrooltoProfile() {
    $('html,body').animate({scrollTop:1380});
  }
  function scrooltoContact() {
    $('html,body').animate({scrollTop:1740});
  }
  $(".menu_icon_news").click(function(){
    scrolltoNews()
  })
  $(".menu_icon_profile").click(function(){
    scrooltoProfile()
  })
  $(".menu_icon_contact").click(function(){
    scrooltoContact()
  })
});

