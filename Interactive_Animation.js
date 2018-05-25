var lordofchaos = document.getElementById('lordofchaos');
var background = document.getElementById('background');
var cursor = document.getElementById('mouse');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var weirdclass = document.createAttribute('class');
var bclass = document.createAttribute('class');
var imgclass = document.createAttribute('class');
weirdclass.value = "normalweird";
src.value = "pictures/weird_guy_staring.png";
src2.value = "pictures/guy_staring.PNG";
imgclass.value = "normal";

bclass.value = "normal";
background.setAttributeNode(bclass);
lordofchaos.setAttributeNode(src);
lordofchaos.setAttributeNode(weirdclass);
cursor.setAttributeNode(src2);

lordofchaos.style.height = "2700px";
lordofchaos.style.width = "2200px";

var motherland = new Audio('sounds/soviet-anthem-(1).mp3');
var harry = new Audio('sounds/harry_potter_earrape.mp3');
var earrapesoviet = new Audio('sounds/nationalanthemearrape.mp3');

function update(event) {
    var x = event.clientX - 80;
    var y = event.clientY - 50;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}

document.addEventListener("mousemove", update);



document.body.onmousedown = function () {

    bclass.value = "evil";
    src2.value = "pictures/weird_guy_staring_evil.png";
}
document.body.onmouseup = function () {

    bclass.value = "normal";
    src2.value = "pictures/guy_staring.PNG";
}
document.body.onkeyup = function () {
    bclass.value = "normal";
    earrapesoviet.pause();
    harry.pause();
    src.value = "pictures/weird_guy_staring.png";
    lordofchaos.style.height = "2700px";
    lordofchaos.style.width = "2200px";
    src2.value = "pictures/guy_staring.png";
    weirdclass.value = "normalweird";
}

document.body.onkeydown = function (e) {

    if (e.keyCode === 27) {
        bclass.value = "youcant";
    }
    if (e.keyCode === 67) {
        bclass.value = "wheezer";
        src.value = "pictures/6322.png";
        src2.value = "pictures/images.jpg";
        earrapesoviet.play();
    }
    if (e.keyCode === 68) {
        bclass.value = "me";
    }
    if (e.keyCode === 83) {

        src.value = "pictures/sponge.png"
    }
    if (e.keyCode === 88) {

        src.value = "pictures/mr-stark-i-dont-fee-so-good.png";
    }
    if (e.keyCode === 65) {
        bclass.value = "duckman";
    }
    if (e.keyCode === 81) {
        bclass.value = "windows";
        src.value = "pictures/bonzi.png";
    }
    if (e.keyCode === 90) {
        bclass.value = "mario";

    }
    if (e.keyCode === 87) {
        src.value = "pictures/quark.png";
        bclass.value = "quark";
        harry.play();
    }
    if (e.keyCode === 69) {
        src.value = "pictures/skid.png";
        bclass.value = "death";
    }
    if (e.keyCode === 38) {
        weirdclass.value = "weirdup";
    }
    if (e.keyCode === 37) {
        weirdclass.value = "weirdleft";
    }
    if (e.keyCode === 39) {
        weirdclass.value = "weirdright";
    }
    if (e.keyCode === 40) {
        weirdclass.value = "weirddown";
    }
}
