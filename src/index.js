import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('div[ttt="proj-detail"]').on('click', function(event) {
  var x = event.target;
  document.getElementById(x.getAttribute("for")).style.display = "block";
});

$('div[class="display-details"]').on('click', function(event) {
  var x = document.getElementsByClassName("display-details");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
});

initSr();
initTilt();
