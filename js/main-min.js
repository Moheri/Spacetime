function zoomIn(e){var a=e.attr("material");console.log(a.src),closeObject=e,pannellum.viewer("panorama",{type:"equirectangular",panorama:a.src,autoLoad:!0,showControls:!1}),e.append('<a-animation attribute="scale" dur="1500" fill="forwards" to="15 15 15" class="zoomAni"></a-animation>'),setTimeout(function(){$("#panorama").fadeIn(300)},1200),setTimeout(function(){$("#close").fadeIn(300),$(".zoomAni").remove()},2e3)}$(document).ready(function(){setTimeout(function(){$("#profile-video")[0].play()},1)});var closeObject;$("#close").click(function(){closeObject.append('<a-animation attribute="scale" dur="1600" fill="forwards" to="1 1 1"></a-animation>'),$("#close").fadeOut(300),$("#panorama").fadeOut(300)});var kugel1=$("#kugel1")[0];kugel1.addEventListener("click",function(e){zoomIn($("#kugel1"))});var kugel2=$("#kugel2")[0];kugel2.addEventListener("click",function(e){zoomIn($("#kugel2"))});var kugel3=$("#kugel3")[0];if(kugel3.addEventListener("click",function(e){zoomIn($("#kugel3"))}),1==document.querySelector("a-marker").object3D.visible){var texture=(new THREE.TextureLoader).load("assets/reply-button.png"),materials=[new THREE.MeshBasicMaterial({color:16776960}),new THREE.MeshBasicMaterial({color:16776960}),new THREE.MeshBasicMaterial({color:16776960}),new THREE.MeshBasicMaterial({color:16776960}),new THREE.MeshBasicMaterial({map:texture}),new THREE.MeshBasicMaterial({map:texture})],replyButton=$("#reply-button")[0];replyButton.getObject3D("mesh").material=new THREE.MultiMaterial(materials)}