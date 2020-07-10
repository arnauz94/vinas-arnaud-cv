var cube = document.querySelector('.cube');
var currentClass = '';
var oldElem = null;
const doNotClick = 'do-not-click';
const sourceToAdd = '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x770zyb?autoplay=0" width="100%" height="100%" allowfullscreen> </iframe> </div>'

function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, duration * 1000)
	})
}
function rotate(elem) {
    var classToShow = 'show-' + elem.id;
    if ( oldElem )
    {
        oldElem.classList.remove(doNotClick);
    }
    elem.classList.add(doNotClick);
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( classToShow );

    currentClass = classToShow;
    oldElem = elem;
}

function displayVideo() {
    var toReplace = document.getElementById("rapport-de-stage");
    var videoElement = document.createElement('div');
    videoElement.innerHTML = sourceToAdd.trim();
    toReplace.replaceWith(videoElement);
}

async function init() {
    rotate(document.getElementById("back"));
    await sleep(0.5);     
    rotate(document.getElementById("bottom"));
    await sleep(1);
    rotate(document.getElementById("front"));
    await sleep(1);
    displayVideo();

}
init();