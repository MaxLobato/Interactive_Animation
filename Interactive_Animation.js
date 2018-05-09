var lordofchaos = document.getElementById('lordofchaos');
var background = document.getElementById('background');
var src = document.createAttribute('src');
var bclass = document.createAttribute('class');
src.value = "pictures/weird_guy_staring.png";
bclass.value = "normal";
background.setAttributeNode(bclass);
lordofchaos.setAttributeNode(src);

document.body.onmousedown = function(){
    bclass.value = "evil";
}
document.body.onmouseup = function() {
    bclass.value = "normal";
}
document.body.onkeydown = function() {

}
