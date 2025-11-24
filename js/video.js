var video;

window.addEventListener("load", function() {
	console.log("Window is opened!");
	
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	
	updateVolumeDisplay();
	
	document.querySelector("#play").addEventListener("click", playVideo);
	document.querySelector("#pause").addEventListener("click", pauseVideo);
	document.querySelector("#slower").addEventListener("click", slowDown);
	document.querySelector("#faster").addEventListener("click", speedUp);
	document.querySelector("#skip").addEventListener("click", skipAhead);
	document.querySelector("#mute").addEventListener("click", toggleMute);
	document.querySelector("#slider").addEventListener("input", changeVolume);
	document.querySelector("#vintage").addEventListener("click", addOldSchool);
	document.querySelector("#orig").addEventListener("click", removeOldSchool);
});

function playVideo() {
	console.log("Play Video");
	video.play();
	updateVolumeDisplay();
}

function pauseVideo() {
	console.log("Pause Video");
	video.pause();
}

function slowDown() {
	video.playbackRate *= 0.9;
	video.playbackRate = Math.round(video.playbackRate * 100000) / 100000;
	console.log("New speed: " + video.playbackRate);
}

function speedUp() {
	video.playbackRate /= 0.9;
	video.playbackRate = Math.round(video.playbackRate * 100000) / 100000;
	console.log("New speed: " + video.playbackRate);
}

function skipAhead() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location: " + video.currentTime);
}

function toggleMute() {
	video.muted = !video.muted;
	document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
}

function changeVolume() {
	video.volume = this.value / 100;
	updateVolumeDisplay();
}

function updateVolumeDisplay() {
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
}

function addOldSchool() {
	video.classList.add("oldSchool");
}

function removeOldSchool() {
	video.classList.remove("oldSchool");
}