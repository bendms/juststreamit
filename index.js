var best_movie = document.querySelector(".best_movie")
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

// FUNCTIONS FOR SCROLLING SLIDERS

function scrollLeftFirstSlider() {
  var lastLi = slider1.firstElementChild.lastElementChild;
  slider1.firstElementChild.insertBefore(lastLi, slider1.firstElementChild.firstElementChild);
}

function scrollRightFirstSlider() {
  var firstLi = slider1.firstElementChild.firstElementChild;
  slider1.firstElementChild.appendChild(firstLi);
}

function scrollLeftSecondSlider() {
  var lastLi = slider2.firstElementChild.lastElementChild;
  slider2.firstElementChild.insertBefore(lastLi, slider2.firstElementChild.firstElementChild);
}

function scrollRightSecondSlider() {
  var firstLi = slider2.firstElementChild.firstElementChild;
  slider2.firstElementChild.appendChild(firstLi);
}

function scrollLeftThirdSlider() {
  var lastLi = slider3.firstElementChild.lastElementChild;
  slider3.firstElementChild.insertBefore(lastLi, slider3.firstElementChild.firstElementChild);
}

function scrollRightThirdSlider() {
  var firstLi = slider3.firstElementChild.firstElementChild;
  slider3.firstElementChild.appendChild(firstLi);
}

function scrollLeftFourthSlider() {
  var lastLi = slider4.firstElementChild.lastElementChild;
  slider4.firstElementChild.insertBefore(lastLi, slider4.firstElementChild.firstElementChild);
}

function scrollRightFourthSlider() {
  var firstLi = slider4.firstElementChild.firstElementChild;
  slider4.firstElementChild.appendChild(firstLi);
}

rightBtn.addEventListener('click', scrollRightFirstSlider);
leftBtn.addEventListener('click', scrollLeftFirstSlider);
rightBtn2.addEventListener('click', scrollRightSecondSlider);
leftBtn2.addEventListener('click', scrollLeftSecondSlider);
rightBtn3.addEventListener('click', scrollRightThirdSlider);
leftBtn3.addEventListener('click', scrollLeftThirdSlider);
rightBtn4.addEventListener('click', scrollRightFourthSlider);
leftBtn4.addEventListener('click', scrollLeftFourthSlider);

// FUNCTION TO GET ALL IMAGE FROM CUSTOM API

function getBestMovie() {
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(response => response.json())
    .then(data => {
      button = document.createElement("button");
      var img = document.getElementById("best_movie_picture");
      img.src = data.results[0].image_url;
      best_movie.appendChild(img);
    });
  }
  
getBestMovie();

  function getBestMovies() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7")
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < 7; i++) {
          li = document.createElement("li");
          button = document.createElement("button");
          var id = data.results[i].id;
          img = document.createElement("img");
          img.setAttribute("id", id)
          img.src = data.results[i].image_url;
          li.appendChild(button);
          button.appendChild(img);
          slider1.firstElementChild.appendChild(li);
          var btn = document.getElementById(id);
          btn.addEventListener("click", function(id) {
            console.log("hello click");
            modal.style.display = "block";
            fetch("http://localhost:8000/api/v1/titles/" + id.target.id)  
              .then(response => response.json())
              .then(data => {
                var imgModal = document.getElementById("modal_picture");
                imgModal.src = data.image_url;
                var title = document.getElementById("modal_title");
                title.innerHTML = data.title;
                var genre = document.getElementById("modal_genre");
                genre.innerHTML = data.genres;
                var year = document.getElementById("modal_year");
                year.innerHTML = data.date_published;
                var rate = document.getElementById("modal_rate");
                rate.innerHTML = data.rated;
                var imdbScore = document.getElementById("modal_imdb_score");
                imdbScore.innerHTML = data.imdb_score;
                var director = document.getElementById("modal_director");
                director.innerHTML = data.director;
                var actors = document.getElementById("modal_actors");
                actors.innerHTML = data.actors;
                var duration = document.getElementById("modal_duration");
                duration.innerHTML = data.duration;
                var country = document.getElementById("modal_country");
                country.innerHTML = data.country;
                var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
                worldwideGrossIncome.innerHTML = data.worldwide_gross_income;
                var description = document.getElementById("modal_description");
                description.innerHTML = data.description;
              });
          });
        }
      });
  }



getBestMovies();

function getBestScienceFictionMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score&page_size=7")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 7; i++) {
        li = document.createElement("li");
        button = document.createElement("button");
        var id = data.results[i].id;
        img = document.createElement("img");
        img.setAttribute("id", id)
        img.src = data.results[i].image_url;
        li.appendChild(button);
        button.appendChild(img);
        slider2.firstElementChild.appendChild(li);
        var btn = document.getElementById(id);
        btn.addEventListener("click", function(id) {
          console.log("hello click");
          modal.style.display = "block";
          fetch("http://localhost:8000/api/v1/titles/" + id.target.id)  
            .then(response => response.json())
            .then(data => {
              var imgModal = document.getElementById("modal_picture");
              imgModal.src = data.image_url;
              var title = document.getElementById("modal_title");
              title.innerHTML = data.title;
              var genre = document.getElementById("modal_genre");
              genre.innerHTML = data.genres;
              var year = document.getElementById("modal_year");
              year.innerHTML = data.date_published;
              var rate = document.getElementById("modal_rate");
              rate.innerHTML = data.rated;
              var imdbScore = document.getElementById("modal_imdb_score");
              imdbScore.innerHTML = data.imdb_score;
              var director = document.getElementById("modal_director");
              director.innerHTML = data.director;
              var actors = document.getElementById("modal_actors");
              actors.innerHTML = data.actors;
              var duration = document.getElementById("modal_duration");
              duration.innerHTML = data.duration;
              var country = document.getElementById("modal_country");
              country.innerHTML = data.country;
              var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
              worldwideGrossIncome.innerHTML = data.worldwide_gross_income;
              var description = document.getElementById("modal_description");
              description.innerHTML = data.description;
            });
        });
      }
    });
}

getBestScienceFictionMovies();

function getBestAdventureMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score&page_size=7")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 7; i++) {
        li = document.createElement("li");
        button = document.createElement("button");
        var id = data.results[i].id;
        img = document.createElement("img");
        img.setAttribute("id", id)
        img.src = data.results[i].image_url;
        li.appendChild(button);
        button.appendChild(img);
        slider3.firstElementChild.appendChild(li);
        var btn = document.getElementById(id);
        btn.addEventListener("click", function(id) {
          console.log("hello click");
          modal.style.display = "block";
          fetch("http://localhost:8000/api/v1/titles/" + id.target.id)  
            .then(response => response.json())
            .then(data => {
              var imgModal = document.getElementById("modal_picture");
              imgModal.src = data.image_url;
              var title = document.getElementById("modal_title");
              title.innerHTML = data.title;
              var genre = document.getElementById("modal_genre");
              genre.innerHTML = data.genres;
              var year = document.getElementById("modal_year");
              year.innerHTML = data.date_published;
              var rate = document.getElementById("modal_rate");
              rate.innerHTML = data.rated;
              var imdbScore = document.getElementById("modal_imdb_score");
              imdbScore.innerHTML = data.imdb_score;
              var director = document.getElementById("modal_director");
              director.innerHTML = data.director;
              var actors = document.getElementById("modal_actors");
              actors.innerHTML = data.actors;
              var duration = document.getElementById("modal_duration");
              duration.innerHTML = data.duration;
              var country = document.getElementById("modal_country");
              country.innerHTML = data.country;
              var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
              worldwideGrossIncome.innerHTML = data.worldwide_gross_income;
              var description = document.getElementById("modal_description");
              description.innerHTML = data.description;
            });
        });
      }
    });
}

getBestAdventureMovies();

function getBestActionMovies() {
  fetch("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 7; i++) {
        li = document.createElement("li");
        button = document.createElement("button");
        var id = data.results[i].id;
        img = document.createElement("img");
        img.setAttribute("id", id)
        img.src = data.results[i].image_url;
        li.appendChild(button);
        button.appendChild(img);
        slider4.firstElementChild.appendChild(li);
        var btn = document.getElementById(id);
        btn.addEventListener("click", function(id) {
          console.log("hello click");
          modal.style.display = "block";
          fetch("http://localhost:8000/api/v1/titles/" + id.target.id)  
            .then(response => response.json())
            .then(data => {
              var imgModal = document.getElementById("modal_picture");
              imgModal.src = data.image_url;
              var title = document.getElementById("modal_title");
              title.innerHTML = data.title;
              var genre = document.getElementById("modal_genre");
              genre.innerHTML = data.genres;
              var year = document.getElementById("modal_year");
              year.innerHTML = data.date_published;
              var rate = document.getElementById("modal_rate");
              rate.innerHTML = data.rated;
              var imdbScore = document.getElementById("modal_imdb_score");
              imdbScore.innerHTML = data.imdb_score;
              var director = document.getElementById("modal_director");
              director.innerHTML = data.director;
              var actors = document.getElementById("modal_actors");
              actors.innerHTML = data.actors;
              var duration = document.getElementById("modal_duration");
              duration.innerHTML = data.duration;
              var country = document.getElementById("modal_country");
              country.innerHTML = data.country;
              var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
              worldwideGrossIncome.innerHTML = data.worldwide_gross_income;
              var description = document.getElementById("modal_description");
              description.innerHTML = data.description;
            });
        });
      }
    });
}

getBestActionMovies();

// FUNCTION FOR MODALS TO OPEN AND CLOSE

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}