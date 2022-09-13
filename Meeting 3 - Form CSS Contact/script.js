// Function for Change the Text in Jumbotron
function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk Melihat";

    document.getElementById("icon-up").style.display = "none";

    document.getElementById("icon-down").style.display = "block";
}

// Function for change color on the thumbs up / down
var btnLike = document.querySelector("#green")
var btnDislike = document.querySelector("#red")

btnLike.onclick = likeColor;
btnDislike.onclick = dislikeColor;

function likeColor() {
    if (btnDislike.classList.contains('red')){
        btnDislike.classList.remove('red');
    }
    this.classList.toggle('green');
}

function dislikeColor() {
    if(btnLike.classList.contains('green')){
        btnLike.classList.remove('green');
    }
    this.classList.toggle('red')
}


// Function to change the Image when Hovered
function changeImage(element) {
    element.setAttribute('src', 'assets/img-header2.png')
}

function changeImageBack(element) {
    element.setAttribute('src', 'assets/img-header.png')
}

// Challenge make a Function for Change the Jumbotron Title
function changeJumbotron(element) {
    element.innerHTML = "Pengembangan Game dan Website"
}

function changeJumbotronBack(element) {
    element.innerHTML = "Dapatkan Tips Menulis Koding Disini"
}

// Make x Close
var myList = document.getElementsByTagName("li");
var i;

for (i = 0; i < myList.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = "x";
    myList[i].appendChild(span).setAttribute('class', 'close')
}

// Make x Dissappear
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

// // Function to make new Element on form Input
function newElement() {
    // create new list with the Inputed Value
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;

    // Check the inputed Value
    if(inputValue === '' || inputValue === ' '){
        alert('Fill the Form!');
    }
    else {
        document.getElementById('myUL').appendChild(li).setAttribute("class", 'search-tags-item');
        li.innerHTML = inputValue;
    }

    // Clear text on the search bar
    document.getElementById('myInput').value = "";

    // Create button Close button
    var span = document.createElement('span');
    span.innerHTML = 'x';
    li.appendChild(span).setAttribute("class", "close");

    // Delete List Close
    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}

