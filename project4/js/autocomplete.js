$(document).ready(function () {
    $(function () {
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
