
$(document).ready(function()    {

  function headerFade(){

    var delay=1000;
    $("#title").fadeIn(3000);
    setTimeout(function() {
      $('.blurb').fadeIn(4000);
    }, delay);

}

headerFade();




  function workBelt(){

    $('.thumb-unit').click(function() {
        $('.work-belt').css('left', '-100%');
        $('.work-container').show();
         event.preventDefault();
      });


      $('.work-return').click(function() {
        $('.work-belt').css('left','0%');
        $('.work-container').hide(800);
         event.preventDefault();

      });
  }
  workBelt();

  function workLoad(){

    $.ajaxSetup ({cache: true});
    $('.thumb-unit').click(function() {
      var $this = $(this);
      var newTitle = $this.find('strong').text();
      var newFolder = $this.data('folder');
      var spinner ='<div class="loader">Loading...</div>';
      var newHTML= newFolder + '.html';
     $('.project-load').html(spinner).load(newHTML);
     $('.project-title').text(newTitle);

    })


  }
  workLoad();






});



