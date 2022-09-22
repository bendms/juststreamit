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

// FUNCTION TO GET ALL IMAGE FROM CUSTOM API

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
            console.log(best_movie_button);
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
        console.log(best_movie_button);
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
          console.log("hello click");
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
  var modalChilds = modal.childNodes;
  modalChilds.forEach(child => {
    child.style.display = "table-cell";
  });
}

// FUNCTION TO CREATE MODAL WINDOW CONTENT

function createModalWindow(id) {
  if (typeof(id) === "object") {
    id = id.target.id;
  }
  console.log(id);
  console.log(typeof(id));
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
      modalElementsList = [title, genre, year, rate, imdbScore, director, actors, duration, country, worldwideGrossIncome, description];
      for (var i = 0; i < modalElementsList.length; i++) {
        if (modalElementsList[i].textContent == "undefined" || modalElementsList[i].textContent == "" || modalElementsList[i].textContent == "null") {
          modalElementsList[i].parentElement.style.display = "none";
          modalElementsList[i].style.display = "none";
        }
      }
    });
}
