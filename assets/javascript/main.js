//The code below creates the dropdown type selector, fetches the data from the api and returns a random joke from the relevant category which displays in the browser.

let typeSelector = ["programming", "general", "knock-knock"];
let joke_result = document.getElementById("joke_result");
let joke_btn = document.getElementById("joke_btn");

joke_btn.addEventListener('click', selectJoke);
function selectJoke() {
    const userChoice = document.getElementById("joke-choice").value;
    getRandomJoke(userChoice);
}
function renderJokeToUser(joke) {
    document.getElementById("joke_result").innerHTML = `<p>${joke.setup}</p>
    <p>${joke.punchline}</p>`
}
async function getRandomJoke(category) {
    fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
        .then(res => res.json())
        .then(data => {
            renderJokeToUser(data[0])
        }).catch(err => {
            
        })
}
function selectedData(element) {
    const userChoice = element.value;
    getRandomJoke(userChoice);
}
function createTypeList(data) {
    document.getElementById("type").innerHTML = `
        <select id="joke-choice" class="custom-select custom-select-sm">
                <option>Select a joke type</option>
                ${typeSelector.map(function (type) {
                    return `<option>${type}</option>`
                })}
            </select>
    `
}
createTypeList();


// Lightbox code below 

let slideIndex = 1;
showSlide(slideIndex);


function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1; 
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};
