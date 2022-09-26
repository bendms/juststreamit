var best_movie = document.querySelector(".best_movie");
var best_movie_text = document.querySelector(".best_movie_text");
var best_movie_button = document.querySelector(".best_movie_button");
var slider = document.querySelector('.slider');
var sliders = document.querySelectorAll('.slider');
var slider1 = document.querySelector('.slider1');
var slider2 = document.querySelector('.slider2');
var slider3 = document.querySelector('.slider3');
var slider4 = document.querySelector('.slider4');
var listOfSliders = [slider2, slider3, slider4];
var listOfCategories = ['Sci-Fi', 'Romance', 'Music'];
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
var leftButtonsSlider = [leftBtn, leftBtn2, leftBtn3, leftBtn4];
var rightButtonsSlider = [rightBtn, rightBtn2, rightBtn3, rightBtn4];

// FUNCTIONS FOR SCROLLING SLIDERS

function sliderScrollLeft(sliderNumber) {
  var lastLi = sliderNumber.firstElementChild.lastElementChild;
  sliderNumber.firstElementChild.insertBefore(lastLi, sliderNumber.firstElementChild.firstElementChild);
}
function sliderScrollRight(sliderNumber) {
  var firstLi = sliderNumber.firstElementChild.firstElementChild;
  sliderNumber.firstElementChild.appendChild(firstLi);
}

// SLIDERS LISTENERS

rightBtn.addEventListener('click', function() {
  sliderScrollRight(slider1);
});
leftBtn.addEventListener('click', function() {
  sliderScrollLeft(slider1);
});
rightBtn2.addEventListener('click', function() {
  sliderScrollRight(slider2);
});
leftBtn2.addEventListener('click', function() {
  sliderScrollLeft(slider2);
});
rightBtn3.addEventListener('click', function() {
  sliderScrollRight(slider3);
});
leftBtn3.addEventListener('click', function() {
  sliderScrollLeft(slider3);
});
rightBtn4.addEventListener('click', function() {
  sliderScrollRight(slider4);
});
leftBtn4.addEventListener('click', function() {
  sliderScrollLeft(slider4);
});

// FUNCTION TO GET ALL IMAGES FROM CUSTOM API

  function getBestMovies() {
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=8")
      .then(response => response.json())
      .then(data => {
        var button = document.createElement("button");
        var id = data.results[0].id;
        var img = document.getElementById("best_movie_picture");
        var best_movie_title = document.getElementById("best_movie_title");
        var best_movie_description = document.getElementById("best_movie_description");
        fetch("http://localhost:8000/api/v1/titles/" + id)  
          .then(response => response.json())
          .then(data => {
            best_movie_title.innerHTML = data.title;
            best_movie_description.innerHTML = data.description;
            best_movie_button = document.createElement("button");
            best_movie_text.appendChild(best_movie_button);
            best_movie_button.innerHTML = "Voir plus";
            best_movie_button.setAttribute("class", "best_movie_button");
            best_movie_button.setAttribute("id", data.id);
            best_movie_button.addEventListener("click", function() {
              modal.style.display = "block";
              createModalWindow(data.id);
            });
          });
        best_movie_description.innerHTML = data.results.description;
        img.setAttribute("id", id);
        img.src = data.results[0].image_url;
        button.appendChild(img);
        best_movie.appendChild(button);
        var btn = document.getElementById(id);
        btn.addEventListener("click", function(id) {
        modal.style.display = "block";
        createModalWindow(id);
        });
        for (var i = 1; i < 8; i++) {
          li = document.createElement("li");
          button = document.createElement("button");
          id = data.results[i].id;
          img = document.createElement("img");
          img.setAttribute("id", id);
          img.src = data.results[i].image_url;
          li.appendChild(button);
          button.appendChild(img);
          slider1.firstElementChild.appendChild(li);
          btn = document.getElementById(id);
          btn.addEventListener("click", function(id) {
          modal.style.display = "block";
          createModalWindow(id);
          });
        }
      });
    }

    
getBestMovies();

// FUNCTION TO GET ALL INFORMATIONS FOR SLIDER 2, 3 AND 4 WITH SPECIFIC CATEGORIES

function GetBestMoviesForNextSliders() {}
  listOfCategories.forEach((category, index) => {
    const sliderNumber = listOfSliders[index];
    fetch("http://localhost:8000/api/v1/titles/?genre=" + category + "&sort_by=-imdb_score&page_size=7")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < 7; i++) {
        li = document.createElement("li");
        var button = document.createElement("button");
        var id = data.results[i].id;
        var img = document.createElement("img");
        img.setAttribute("id", id);
        img.src = data.results[i].image_url;
        li.appendChild(button);
        button.appendChild(img);
        sliderNumber.firstElementChild.appendChild(li);
        var btn = document.getElementById(id);
        btn.addEventListener("click", function(id) {
          modal.style.display = "block";
          createModalWindow(id);
        });
      }
    });
  });


GetBestMoviesForNextSliders();

// FUNCTION FOR MODALS TO OPEN AND CLOSE

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  displayAllDataInModalAndCloseIt();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    displayAllDataInModalAndCloseIt();
  }
};

// FUNCTION TO RESET MODAL WINDOW CONTENT WITH ALL DATA DISPLAYED

function displayAllDataInModalAndCloseIt() {
  modal.style.display = "none";
  document.getElementById("th_title").style.display = "table-cell";
  document.getElementById("modal_title").style.display = "table-cell";
  document.getElementById("th_genre").style.display = "table-cell";
  document.getElementById("modal_genre").style.display = "table-cell";
  document.getElementById("th_year").style.display = "table-cell";
  document.getElementById("modal_year").style.display = "table-cell";
  document.getElementById("th_rate").style.display = "table-cell";
  document.getElementById("modal_rate").style.display = "table-cell";
  document.getElementById("th_imdb_score").style.display = "table-cell";
  document.getElementById("modal_imdb_score").style.display = "table-cell";
  document.getElementById("th_director").style.display = "table-cell";
  document.getElementById("modal_director").style.display = "table-cell";
  document.getElementById("th_actors").style.display = "table-cell";
  document.getElementById("modal_actors").style.display = "table-cell";
  document.getElementById("th_duration").style.display = "table-cell";
  document.getElementById("modal_duration").style.display = "table-cell";
  document.getElementById("th_country").style.display = "table-cell";
  document.getElementById("modal_country").style.display = "table-cell";
  document.getElementById("th_worldwide_gross_income").style.display = "table-cell";
  document.getElementById("modal_worldwide_gross_income").style.display = "table-cell";
  document.getElementById("th_description").style.display = "table-cell";
  document.getElementById("modal_description").style.display = "table-cell";
}

// FUNCTION TO CREATE MODAL WINDOW CONTENT

function createModalWindow(id) {
  if (typeof(id) === "object") {
    id = id.target.id;
  }
  fetch("http://localhost:8000/api/v1/titles/" + id)  
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
      } if (description.textContent == "undefined" || description.textContent == "" || description.textContent == "null" || description.textContent == "Add a Plot »") {
        document.getElementById("th_description").style.display = "none";
        document.getElementById("modal_description").style.display = "none";
      }
    });
}
