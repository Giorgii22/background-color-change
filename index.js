const bkchange = document.querySelectorAll(".bkchange");

bkchange.forEach(function(element) {
  element.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() *255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
  });
});
