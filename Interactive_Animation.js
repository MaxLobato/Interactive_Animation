var lordofchaos = document.getElementById('lordofchaos');
var background = document.getElementById('background');

var cursor = document.getElementById('mouse');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var bclass = document.createAttribute('class');
src.value = "pictures/weird_guy_staring.png";
src2.value = "pictures/guy_staring.PNG";

bclass.value = "normal";
background.setAttributeNode(bclass);
lordofchaos.setAttributeNode(src);
cursor.setAttributeNode(src2);

lordofchaos.style.height = "2700px";
lordofchaos.style.width = "2200px";



function update(event){
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

        src.value = "pictures/weird_guy_staring.png";
        lordofchaos.style.height = "2700px";
        lordofchaos.style.width = "2200px";
        src2.value = "pictures/guy_staring.png";
    }

    document.body.onkeydown = function (e) {

        if (e.keyCode === 27) {
            bclass.value = "youcant";
        }
        if (e.keyCode === 67) {
            bclass.value = "wheezer";
            src.value = "pictures/6322.png";
            src2.value = "pictures/images.jpg";

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
    }
