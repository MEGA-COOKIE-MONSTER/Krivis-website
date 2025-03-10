fadeIn();

function fadeIn() {
    var lowTaperFade = document.getElementsByClassName('lowTaperFade');
    console.log(lowTaperFade);

    for (var i = 0; i < lowTaperFade.length; i++) {
        (function(i) {
            setTimeout(function() {
                console.log('fading in');
                lowTaperFade[i].style.transition = 'opacity 0.5s';
                lowTaperFade[i].style.opacity = 1;
            }, (i+1) * 250);
        })(i);
    }
}

