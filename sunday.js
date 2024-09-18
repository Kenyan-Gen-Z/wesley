function uppercase(name);{
    console.log(name.touppercase());
}
uppercase("wesley"); 
const uppercase =(name);{
    console.log(name.touppercase())
}
function search();{
    console.log(BarProp)
}
// Get modal and play button
var modal = document.getElementById("videoModal");
var playButton = document.getElementById("play-button");
var span = document.getElementsByClassName("close")[0];
var video = document.getElementById("modal-video");

// When the user clicks the play button, open the modal and play the video
playButton.onclick = function() {
    modal.style.display = "block";
    video.play();
}

// When the user clicks the close button, stop the video and close the modal
span.onclick = function() {
    modal.style.display = "none";
    video.pause();
}

// If the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
    }
}
