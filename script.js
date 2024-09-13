function showLoading() {
  document.getElementById('loading').style.display = 'block'

  setTimeout(function () {
    window.location.href = 'page2.html'
  }, 3000)
}

function redirectAfterDelay(url ) {
  setTimeout(function() {
    window.location.href = url; 
  } ); 
}