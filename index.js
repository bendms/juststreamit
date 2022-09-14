var slider = document.querySelector('.slider');
var sliders = document.querySelectorAll('.slider');
var slider1 = document.querySelector('.slider1');
var slider2 = document.querySelector('.slider2');
var slider3 = document.querySelector('.slider3');
var slider4 = document.querySelector('.slider4');
var li = slider.querySelectorAll('ul li');
var leftBtnAll = document.querySelectorAll('button.left');
var rightBtnAll = document.querySelectorAll('button.right');
var leftBtn = slider.querySelector('button.left');
var rightBtn = slider.querySelector('button.right');
var leftBtn2 = slider2.querySelector('button.left');
var rightBtn2 = slider2.querySelector('button.right');
var leftBtn3 = slider3.querySelector('button.left');
var rightBtn3 = slider3.querySelector('button.right');
var leftBtn4 = slider4.querySelector('button.left');
var rightBtn4 = slider4.querySelector('button.right');
var value = li.length;

// for (var i = 0; i < sliders.length; i++) {  
//   sliders[i].firstElementChild.firstElementChild.style.width = li.length * 400 + 300 + 'px';
// }
// slider.firstElementChild.style.width = max-content;

function scrollRightFirstSlider() {
  console.log('right');
  var newContent = slider.firstElementChild.firstElementChild.firstElementChild.cloneNode(true);
  slider.firstElementChild.firstElementChild.appendChild(newContent);
  slider.firstElementChild.firstElementChild.removeChild(slider.firstElementChild.firstElementChild.firstElementChild);
}

function scrollLeftFirstSlider() {
  console.log('left');
  var newContent = slider.firstElementChild.firstElementChild.lastElementChild.cloneNode(true);
  slider.firstElementChild.firstElementChild.insertBefore(newContent, slider.firstElementChild.firstElementChild.firstElementChild);
  slider.firstElementChild.firstElementChild.removeChild(slider.firstElementChild.firstElementChild.lastElementChild);
}

function scrollLeftSecondSlider() {
  console.log('left');
  var newContent = slider2.firstElementChild.lastElementChild.cloneNode(true);
  slider2.firstElementChild.insertBefore(newContent, slider2.firstElementChild.firstElementChild);
  slider2.firstElementChild.removeChild(slider2.firstElementChild.lastElementChild);
}

function scrollRightSecondSlider() {
  console.log('right');
  var newContent = slider2.firstElementChild.firstElementChild.cloneNode(true);
  slider2.firstElementChild.appendChild(newContent);
  slider2.firstElementChild.removeChild(slider2.firstElementChild.firstElementChild);
}

function scrollLeftThirdSlider() {
  console.log('left');
  var newContent = slider3.firstElementChild.lastElementChild.cloneNode(true);
  slider3.firstElementChild.insertBefore(newContent, slider3.firstElementChild.firstElementChild);
  slider3.firstElementChild.removeChild(slider3.firstElementChild.lastElementChild);
}

function scrollRightThirdSlider() {
  console.log('right');
  var newContent = slider3.firstElementChild.firstElementChild.cloneNode(true);
  slider3.firstElementChild.appendChild(newContent);
  slider3.firstElementChild.removeChild(slider3.firstElementChild.firstElementChild);
}

function scrollLeftFourthSlider() {
  console.log('left');
  var newContent = slider4.firstElementChild.lastElementChild.cloneNode(true);
  slider4.firstElementChild.insertBefore(newContent, slider4.firstElementChild.firstElementChild);
  slider4.firstElementChild.removeChild(slider4.firstElementChild.lastElementChild);
}

function scrollRightFourthSlider() {
  console.log('right');
  var newContent = slider4.firstElementChild.firstElementChild.cloneNode(true);
  slider4.firstElementChild.appendChild(newContent);
  slider4.firstElementChild.removeChild(slider4.firstElementChild.firstElementChild);
}


// for (var i = 0; i < rightBtnAll.length; i++) {
//   rightBtnAll[i].addEventListener('click', scrollRight(i));
// }
// for (var i = 0; i < leftBtnAll.length; i++) {
//   leftBtnAll[i].addEventListener('click', scrollLeft(i));
// }

rightBtn.addEventListener('click', scrollRightFirstSlider);
leftBtn.addEventListener('click', scrollLeftFirstSlider);
rightBtn2.addEventListener('click', scrollRightSecondSlider);
leftBtn2.addEventListener('click', scrollLeftSecondSlider);
rightBtn3.addEventListener('click', scrollRightThirdSlider);
leftBtn3.addEventListener('click', scrollLeftThirdSlider);
rightBtn4.addEventListener('click', scrollRightFourthSlider);
leftBtn4.addEventListener('click', scrollLeftFourthSlider);

// console.log(rightBtnAll[1]);

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

  function getBestMovies() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < 5; i++) {
          li = document.createElement("li");
          img = document.createElement("img");
          img.src = data.results[i].image_url;
          li.appendChild(img);
          slider1.firstElementChild.appendChild(li);
          slider1.firstElementChild.removeChild(slider1.firstElementChild.firstElementChild);
        }
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2")
      .then(response => response.json())
      .then(data => {
        for (var j = 0; j < 2; j++) {
          li = document.createElement("li");
          img = document.createElement("img");
          img.src = data.results[j].image_url;
          li.appendChild(img);
          slider1.firstElementChild.appendChild(li);
          slider1.firstElementChild.removeChild(slider1.firstElementChild.firstElementChild);
        }
      });
      });
    }

getBestMovies();

function getBestScienceFictionMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 5; i++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[i].image_url;
        li.appendChild(img);
        slider2.firstElementChild.appendChild(li);
        slider2.firstElementChild.removeChild(slider2.firstElementChild.firstElementChild);
      }
  fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score&page=2")
    .then(response => response.json())
    .then(data => {
      for (var j = 0; j < 2; j++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[j].image_url;
        li.appendChild(img);
        slider2.firstElementChild.appendChild(li);
        slider2.firstElementChild.removeChild(slider2.firstElementChild.firstElementChild);
      }
    });
    });
  }

getBestScienceFictionMovies();

function getBestAdventureMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 5; i++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[i].image_url;
        li.appendChild(img);
        slider3.firstElementChild.appendChild(li);
        slider3.firstElementChild.removeChild(slider3.firstElementChild.firstElementChild);
      }
  fetch("http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score&page=2")
    .then(response => response.json())
    .then(data => {
      for (var j = 0; j < 2; j++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[j].image_url;
        li.appendChild(img);
        slider3.firstElementChild.appendChild(li);
        slider3.firstElementChild.removeChild(slider3.firstElementChild.firstElementChild);
      }
    });
    });
  }


getBestAdventureMovies();

function getBestActionMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 5; i++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[i].image_url;
        li.appendChild(img);
        slider4.firstElementChild.appendChild(li);
        slider4.firstElementChild.removeChild(slider4.firstElementChild.firstElementChild);
      }
  fetch("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page=2")
    .then(response => response.json())
    .then(data => {
      for (var j = 0; j < 2; j++) {
        li = document.createElement("li");
        img = document.createElement("img");
        img.src = data.results[j].image_url;
        li.appendChild(img);
        slider4.firstElementChild.appendChild(li);
        slider4.firstElementChild.removeChild(slider4.firstElementChild.firstElementChild);
      }
    });
    });
  }

getBestActionMovies();