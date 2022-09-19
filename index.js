var best_movie = document.querySelector(".best_movie")
var slider = document.querySelector('.slider');
var sliders = document.querySelectorAll('.slider');
var slider1 = document.querySelector('.slider1');
var slider2 = document.querySelector('.slider2');
var slider3 = document.querySelector('.slider3');
var slider4 = document.querySelector('.slider4');
var listOfSliders = [slider2, slider3, slider4]
var listOfCategories = ['Sci-Fi', 'Romance', 'Music']
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

  function getBestMovies() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=8")
      .then(response => response.json())
      .then(data => {
        button = document.createElement("button");
        var id = data.results[0].id;
        var img = document.getElementById("best_movie_picture");
        img.setAttribute("id", id)
        img.src = data.results[0].image_url;
        button.appendChild(img);
        best_movie.appendChild(button);
        var btn = document.getElementById(id);
        button.addEventListener("click", function(id) {
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
            director.innerHTML = data.directors;
            var actors = document.getElementById("modal_actors");
            actors.innerHTML = data.actors;
            var duration = document.getElementById("modal_duration");
            duration.innerHTML = data.duration + " min";
            var country = document.getElementById("modal_country");
            country.innerHTML = data.countries;
            var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
            worldwideGrossIncome.innerHTML = data.worldwide_gross_income + " $";
            var description = document.getElementById("modal_description");
            description.innerHTML = data.description;
            if (title.textContent == "undefined" || title.textContent == "" || title.textContent == "null") {
              document.getElementById("th_title").style.display = "none";
              document.getElementById("modal_title").style.display = "none";
            } if (genre.textContent == "undefined" || genre.textContent == "" || genre.textContent == "null") {
              document.getElementById("th_genre").style.display = "none";
              document.getElementById("modal_genre").style.display = "none";
            } if (year.textContent == "undefined" || year.textContent == "" || year.textContent == "null") {
              document.getElementById("th_year").style.display = "none";
              document.getElementById("modal_year").style.display = "none";
            } if (rate.textContent == "Not rated or unkown rating" || rate.textContent == "" || rate.textContent == "null") {
              document.getElementById("th_rate").style.display = "none";
              document.getElementById("modal_rate").style.display = "none";
            } if (imdbScore.textContent == "undefined" || imdbScore.textContent == "" || imdbScore.textContent == "null") {
              document.getElementById("th_imdb_score").style.display = "none";
              document.getElementById("modal_imdb_score").style.display = "none";
            } if (director.textContent == "undefined" || director.textContent == "" || director.textContent == "null") {
              document.getElementById("th_director").style.display = "none";
              document.getElementById("modal_director").style.display = "none";
            } if (actors.textContent == "undefined" || actors.textContent == "" || actors.textContent == "null") {
              document.getElementById("th_actors").style.display = "none";
              document.getElementById("modal_actors").style.display = "none";
            } if (duration.textContent == "undefined" || duration.textContent == "" || duration.textContent == "null") {
              document.getElementById("th_duration").style.display = "none";
              document.getElementById("modal_duration").style.display = "none";
            } if (country.textContent == "undefined" || country.textContent == "" || country.textContent == "null") {
              document.getElementById("th_country").style.display = "none";
              document.getElementById("modal_country").style.display = "none";
            } if (worldwideGrossIncome.textContent == "undefined " || worldwideGrossIncome.textContent == "" || worldwideGrossIncome.textContent == "null $") {
              document.getElementById("th_worldwide_gross_income").style.display = "none";
              document.getElementById("modal_worldwide_gross_income").style.display = "none";
            } if (description.textContent == "undefined" || description.textContent == "" || description.textContent == "null" || description.textContent == "Add a Plot »") {
              document.getElementById("th_description").style.display = "none";
              document.getElementById("modal_description").style.display = "none";
          }
        })
      });
        for (var i = 1; i < 8; i++) {
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
              director.innerHTML = data.directors;
              var actors = document.getElementById("modal_actors");
              actors.innerHTML = data.actors;
              var duration = document.getElementById("modal_duration");
              duration.innerHTML = data.duration + " min";
              var country = document.getElementById("modal_country");
              country.innerHTML = data.countries;
              var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
              worldwideGrossIncome.innerHTML = data.worldwide_gross_income + " $";
              var description = document.getElementById("modal_description");
              description.innerHTML = data.description;
              if (title.textContent == "undefined" || title.textContent == "" || title.textContent == "null") {
                document.getElementById("th_title").style.display = "none";
                document.getElementById("modal_title").style.display = "none";
              } if (genre.textContent == "undefined" || genre.textContent == "" || genre.textContent == "null") {
                document.getElementById("th_genre").style.display = "none";
                document.getElementById("modal_genre").style.display = "none";
              } if (year.textContent == "undefined" || year.textContent == "" || year.textContent == "null") {
                document.getElementById("th_year").style.display = "none";
                document.getElementById("modal_year").style.display = "none";
              } if (rate.textContent == "Not rated or unkown rating" || rate.textContent == "" || rate.textContent == "null") {
                document.getElementById("th_rate").style.display = "none";
                document.getElementById("modal_rate").style.display = "none";
              } if (imdbScore.textContent == "undefined" || imdbScore.textContent == "" || imdbScore.textContent == "null") {
                document.getElementById("th_imdb_score").style.display = "none";
                document.getElementById("modal_imdb_score").style.display = "none";
              } if (director.textContent == "undefined" || director.textContent == "" || director.textContent == "null") {
                document.getElementById("th_director").style.display = "none";
                document.getElementById("modal_director").style.display = "none";
              } if (actors.textContent == "undefined" || actors.textContent == "" || actors.textContent == "null") {
                document.getElementById("th_actors").style.display = "none";
                document.getElementById("modal_actors").style.display = "none";
              } if (duration.textContent == "undefined" || duration.textContent == "" || duration.textContent == "null") {
                document.getElementById("th_duration").style.display = "none";
                document.getElementById("modal_duration").style.display = "none";
              } if (country.textContent == "undefined" || country.textContent == "" || country.textContent == "null") {
                document.getElementById("th_country").style.display = "none";
                document.getElementById("modal_country").style.display = "none";
              } if (worldwideGrossIncome.textContent == "undefined " || worldwideGrossIncome.textContent == "" || worldwideGrossIncome.textContent == "null $") {
                document.getElementById("th_worldwide_gross_income").style.display = "none";
                document.getElementById("modal_worldwide_gross_income").style.display = "none";
              } if (description.textContent == "undefined" || description.textContent == "" || description.textContent == "null" || description.textContent == "Add a Plot »") {
                document.getElementById("th_description").style.display = "none";
                document.getElementById("modal_description").style.display = "none";
              }
            });
          });
        }
      });
    }

getBestMovies();

function GetBestMoviesForNextSliders() {}
  listOfCategories.forEach((category, index) => {
    const sliderNumber = listOfSliders[index];
    fetch("http://localhost:8000/api/v1/titles/?genre=" + category + "&sort_by=-imdb_score&page_size=7")
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
        sliderNumber.firstElementChild.appendChild(li);
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
              director.innerHTML = data.directors;
              var actors = document.getElementById("modal_actors");
              actors.innerHTML = data.actors;
              var duration = document.getElementById("modal_duration");
              duration.innerHTML = data.duration + " min";
              var country = document.getElementById("modal_country");
              country.innerHTML = data.countries;
              var worldwideGrossIncome = document.getElementById("modal_worldwide_gross_income");
              worldwideGrossIncome.innerHTML = data.worldwide_gross_income + " $";
              var description = document.getElementById("modal_description");
              description.innerHTML = data.description;
              if (title.textContent == "undefined" || title.textContent == "" || title.textContent == "null") {
                document.getElementById("th_title").style.display = "none";
                document.getElementById("modal_title").style.display = "none";
              } if (genre.textContent == "undefined" || genre.textContent == "" || genre.textContent == "null") {
                document.getElementById("th_genre").style.display = "none";
                document.getElementById("modal_genre").style.display = "none";
              } if (year.textContent == "undefined" || year.textContent == "" || year.textContent == "null") {
                document.getElementById("th_year").style.display = "none";
                document.getElementById("modal_year").style.display = "none";
              } if (rate.textContent == "Not rated or unkown rating" || rate.textContent == "" || rate.textContent == "null") {
                document.getElementById("th_rate").style.display = "none";
                document.getElementById("modal_rate").style.display = "none";
              } if (imdbScore.textContent == "undefined" || imdbScore.textContent == "" || imdbScore.textContent == "null") {
                document.getElementById("th_imdb_score").style.display = "none";
                document.getElementById("modal_imdb_score").style.display = "none";
              } if (director.textContent == "undefined" || director.textContent == "" || director.textContent == "null") {
                document.getElementById("th_director").style.display = "none";
                document.getElementById("modal_director").style.display = "none";
              } if (actors.textContent == "undefined" || actors.textContent == "" || actors.textContent == "null") {
                document.getElementById("th_actors").style.display = "none";
                document.getElementById("modal_actors").style.display = "none";
              } if (duration.textContent == "undefined" || duration.textContent == "" || duration.textContent == "null") {
                document.getElementById("th_duration").style.display = "none";
                document.getElementById("modal_duration").style.display = "none";
              } if (country.textContent == "undefined" || country.textContent == "" || country.textContent == "null") {
                document.getElementById("th_country").style.display = "none";
                document.getElementById("modal_country").style.display = "none";
              } if (worldwideGrossIncome.textContent == "undefined " || worldwideGrossIncome.textContent == "" || worldwideGrossIncome.textContent == "null $") {
                document.getElementById("th_worldwide_gross_income").style.display = "none";
                document.getElementById("modal_worldwide_gross_income").style.display = "none";
              } if (description.textContent == "undefined" || description.textContent == "" || description.textContent == "null" || description.textContent == "Add a Plot »") {
                document.getElementById("th_description").style.display = "none";
                document.getElementById("modal_description").style.display = "none";
              }
            })
        })
      }
    })
  })

GetBestMoviesForNextSliders();

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