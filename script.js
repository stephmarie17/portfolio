function animateImgOne() {
    var el = document.getElementById('portfolio-weather');
    el.setAttribute('src', 'assets/images/portfolio-icon-1b.png');
}

function animateImgTwo() {
    var el2 = document.getElementById('portfolio-planner');
    el2.setAttribute('src', 'assets/images/portfolio-icon-2b.png');
}

function animateImgThree() {
    var el3 = document.getElementById('portfolio-project');
    el3.setAttribute('src', 'assets/images/portfolio-icon-3b.png');
}
function animateImgFour() {
    var el3 = document.getElementById('template-engine');
    el3.setAttribute('src', 'assets/images/portfolio-icon-4b.png');
}
function animateImgFive() {
    var el3 = document.getElementById('developer-profile');
    el3.setAttribute('src', 'assets/images/portfolio-icon-5b.png');
}
function animateImgSix() {
    var el3 = document.getElementById('note-taker');
    el3.setAttribute('src', 'assets/images/portfolio-icon-6b.png');
}

document.querySelector('#portfolio-weather').addEventListener('mouseover', function() {
    animateImgOne();
    setTimeout(function(){
        var el = document.getElementById('portfolio-weather');
        el.setAttribute('src', 'assets/images/portfolio-icon-1.png');
    }, 700);
},false); 

document.querySelector('#portfolio-planner').addEventListener('mouseover', function() {
    animateImgTwo();
    setTimeout(function(){
        var el = document.getElementById('portfolio-planner');
        el.setAttribute('src', 'assets/images/portfolio-icon-2.png');
    }, 700);
},false); 

document.querySelector('#portfolio-project').addEventListener('mouseover', function() {
    animateImgThree();
    setTimeout(function(){
        var el = document.getElementById('portfolio-project');
        el.setAttribute('src', 'assets/images/portfolio-icon-3.png');
    }, 700);
},false); 

document.querySelector('#template-engine').addEventListener('mouseover', function() {
    animateImgFour();
    setTimeout(function(){
        var el = document.getElementById('template-engine');
        el.setAttribute('src', 'assets/images/portfolio-icon-4.png');
    }, 700);
},false); 

document.querySelector('#developer-profile').addEventListener('mouseover', function() {
    animateImgFive();
    setTimeout(function(){
        var el = document.getElementById('developer-profile');
        el.setAttribute('src', 'assets/images/portfolio-icon-5.png');
    }, 700);
},false); 

document.querySelector('#note-taker').addEventListener('mouseover', function() {
    animateImgSix();
    setTimeout(function(){
        var el = document.getElementById('note-taker');
        el.setAttribute('src', 'assets/images/portfolio-icon-6.png');
    }, 700);
},false); 