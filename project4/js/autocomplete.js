//jquery autocomplete function
$(document).ready(function () {
    $(function () {
      //input array to autocomplete
      var songs = [
        'sunset',
        'get evil',
        'riorr',
        'seasons change',
        'sky scrapers',
        'wicked',
        'permanent damage',
        'reflection',
        'good vibes',
        'sweet love',
      ];
    
      $('#song').autocomplete({
        source: songs,
      });
    });
  });
