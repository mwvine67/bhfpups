$(function () {

  function initSearchBox() {
    var pages = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,

      prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
      minLength: 0,
      highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
      });

    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      window.location.href = suggestion.url;
    });
  }

  function styleContentToMD() {
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');
  }

  initSearchBox();
  styleContentToMD();
});

$('.dropdown').mouseenter(function() { 
  if(!$('.navbar-toggle').is(':visible')) { 
    $(this).addClass('open'); } 
}); 

$('.dropdown').mouseleave(function() { 
  if(!$('.navbar-toggle').is(':visible')) { 
    $(this).removeClass('open'); } 
});

/*
$(document).ready(function(){
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(200);
    });  
});
*/
