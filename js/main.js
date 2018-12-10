/* eslint-disable */
$(document).ready(function(){
	setTimeout(function(){
		$("#profile-video")[0].play();
	},1)
})





var closeObject;

function zoomIn(object){
	var material = object.attr("material");
	console.log(material.src)

	closeObject = object;

	pannellum.viewer('panorama', {
	    "type": "equirectangular",
	    "panorama": material.src,
	    "autoLoad": true,
	    "showControls": false
	});


	object.append('<a-animation attribute="scale" dur="1500" fill="forwards" to="15 15 15" class="zoomAni"></a-animation>');

	setTimeout(function(){
		$("#panorama").fadeIn(300)
	},1200)
	setTimeout(function(){
		$("#close").fadeIn(300);
		$(".zoomAni").remove();
	},2000)
}



$("#close").click(function(){
	closeObject.append('<a-animation attribute="scale" dur="1600" fill="forwards" to="1 1 1"></a-animation>');
	$("#close").fadeOut(300);
	$("#panorama").fadeOut(300)
})



var kugel1 = $("#kugel1")[0];
kugel1.addEventListener('click', function(evt) {
	 zoomIn($("#kugel1"));
});

var kugel2 = $("#kugel2")[0];
kugel2.addEventListener('click', function(evt) {
	 zoomIn($("#kugel2"));
});

var kugel3 = $("#kugel3")[0];
kugel3.addEventListener('click', function(evt) {
	 zoomIn($("#kugel3"));
});



/* Button */
var mainMarker = document.getElementById("mainMarker");
mainMarker.addEventListener("markerFound", function(){
	console.log("------------------model is da")
}, false);



	// var texture = new THREE.TextureLoader().load( 'assets/reply-button.png' );

	// var materials = [
	//   new THREE.MeshBasicMaterial( { color: 0x1BD78E } ), // right
	//   new THREE.MeshBasicMaterial( { color: 0x1BD78E } ), // left
	//   new THREE.MeshBasicMaterial( { color: 0x1BD78E } ), // top
	//   new THREE.MeshBasicMaterial( { color: 0x1BD78E } ), // bottom
	//   new THREE.MeshBasicMaterial( { map: texture } ), // back
	//   new THREE.MeshBasicMaterial( { map: texture } )  // front
	// ];


	// var replyButton = $("#reply-button")[0];
	// replyButton.getObject3D('mesh').material = new THREE.MultiMaterial(materials);	



var audioIsPlaying = false;
var audio = new Audio('assets/profile-audio.mp3');

var playButton = $("#play")[0];
playButton.addEventListener('click', function(evt) {

	if(audioIsPlaying == false){
		$("#play").append('<a-animation attribute="rotation" dur="500" fill="forwards" to="0 90 -90" class="rotationAni"></a-animation>');
		audio.play();
		audioIsPlaying = true;
	}else{
		audio.pause();
		audioIsPlaying = false;
		$("#play").append('<a-animation attribute="rotation" dur="500" fill="forwards" to="0 -90 -90" class="rotationAni"></a-animation>');
	}

});




