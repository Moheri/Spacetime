"use strict";function zoomIn(a){var e=a.attr("material");console.log(e.src),closeObject=a,pannellum.viewer("panorama",{type:"equirectangular",panorama:e.src,autoLoad:!0,showControls:!1}),a.append('<a-animation attribute="scale" dur="1500" fill="forwards" to="15 15 15" class="zoomAni"></a-animation>'),setTimeout(function(){$("#panorama").fadeIn(300)},1200),setTimeout(function(){$("#close").fadeIn(300),$(".zoomAni").remove()},2e3)}$(document).ready(function(){setTimeout(function(){$("#profile-video")[0].play()},1)});var closeObject;$("#close").click(function(){closeObject.append('<a-animation attribute="scale" dur="1600" fill="forwards" to="1 1 1"></a-animation>'),$("#close").fadeOut(300),$("#panorama").fadeOut(300)});var kugel1=$("#kugel1")[0];kugel1.addEventListener("click",function(a){alert(),zoomIn($("#kugel1"))});var kugel2=$("#kugel2")[0];kugel2.addEventListener("click",function(a){alert(),zoomIn($("#kugel2"))});var kugel3=$("#kugel3")[0];kugel3.addEventListener("click",function(a){alert(),zoomIn($("#kugel3"))});var materialsLoaded=!1,marker=document.getElementById("amarker");marker.addEventListener("markerFound",function(a){if(0==materialsLoaded){materialsLoaded=!0;var e=(new THREE.TextureLoader).load("assets/reply-button.png"),t=[new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({map:e}),new THREE.MeshBasicMaterial({map:e})];$("#reply-button")[0].getObject3D("mesh").material=new THREE.MultiMaterial(t);var o=(new THREE.TextureLoader).load("assets/pause.png"),i=(new THREE.TextureLoader).load("assets/play.png"),n=[new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({map:i}),new THREE.MeshBasicMaterial({map:o}),new THREE.MeshBasicMaterial({color:1824654}),new THREE.MeshBasicMaterial({color:1824654})];$("#play")[0].getObject3D("mesh").material=new THREE.MultiMaterial(n)}});var audioIsPlaying=!1,audio=new Audio("assets/profile-audio.mp3"),playButton=$("#play")[0];playButton.addEventListener("click",function(a){console.log("play button clicked"),0==audioIsPlaying?($("#play").append('<a-animation attribute="rotation" dur="500" fill="forwards" to="90 180 180" class="rotationAni"></a-animation>'),audio.play(),audioIsPlaying=!0):(audio.pause(),audioIsPlaying=!1,$("#play").append('<a-animation attribute="rotation" dur="500" fill="forwards" to="90 -180 0" class="rotationAni"></a-animation>'))});