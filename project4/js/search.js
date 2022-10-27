$(document).ready(function () {
    $(function () {
      var songs = [
        'sunset',
        'get evil',
        'riorr',
        'season change',
        'sky scrapers',
        'wicked',
        'permanent damage',
        'reflection',
        'good vibes',
        'sweet love',
      ];
      $('#songs').autocomplete({
        source: songs,
      });
    });
  });