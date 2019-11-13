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