var videoPlayer = document.getElementById("videoPlayer");
var myvideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
    myvideo.pause();
    myvideo.currentTime = 0;
}
function openVideo(file) {
    myvideo.src = file;
    videoPlayer.style.display ="block";
    

}