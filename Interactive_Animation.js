var lordofchaos = document.getElementById('lordofchaos');
var background = document.getElementById('background');
var src = document.createAttribute('src');
var bclass = document.createAttribute('class');
src.value = "pictures/weird_guy_staring.png";
bclass.value = "normal";
background.setAttributeNode(bclass);
lordofchaos.setAttributeNode(src);
lordofchaos.style.height = "2700px";
lordofchaos.style.width = "2200px";


function grow() {
    for (i = 1; i < 100000000; i++) {
        setInterval(function () {
            lordofchaos.style.height = (3000 + Math.pow(i, 2)) + 'px';
            lordofchaos.style.width = (2000 + Math.pow(i, 2)) + 'px';
        }, 1000 + i);

    }
}



    document.body.onmousedown = function () {
        bclass.value = "evil";
    }
    document.body.onmouseup = function () {
        bclass.value = "normal";
    }
    document.body.onkeyup = function () {
        bclass.value = "normal";
        src.value = "pictures/weird_guy_staring.png";
        lordofchaos.style.height = "2700px";
        lordofchaos.style.width = "2200px";
    }

    document.body.onkeydown = function (e) {
        if (e.keyCode === 27) {
            bclass.value = "youcant";
        }
        if (e.keyCode === 67) {
            bclass.value = "wheezer";
            src.value = "pictures/6322.png";
            grow();

        }
    }
