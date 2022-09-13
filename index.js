var slider = document.querySelector('.slider');
var li = slider.querySelectorAll('ul li');
var leftBtn = slider.querySelector('button.left');
var rightBtn = slider.querySelector('button.right');
var value = li.length;

slider.firstElementChild.style.width = li.length * 400 + 300 + 'px';

function scrollRight() {
  var newContent = slider.firstElementChild.firstElementChild.cloneNode(true);
  slider.firstElementChild.appendChild(newContent);
  slider.firstElementChild.removeChild(slider.firstElementChild.firstElementChild);
}

function scrollLeft() {
  var newContent = slider.firstElementChild.lastElementChild.cloneNode(true);
  slider.firstElementChild.insertBefore(newContent, slider.firstElementChild.firstElementChild);
  slider.firstElementChild.removeChild(slider.firstElementChild.lastElementChild);
}
rightBtn.addEventListener('click', scrollRight);
leftBtn.addEventListener('click', scrollLeft);

function getBestMovie() {
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(response => response.json())
  .then(data => {
    var img = document.getElementById("best_movie_picture");
    img.src = data.results[0].image_url;
    body.best_movie.appendChild(img);
  });
}

getBestMovie();