const startCamElement = document.querySelector(".startCam");
const stopButton = document.getElementById('stopButton');
const videoElement = document.getElementById('videoPreview');
const captureButton = document.getElementById('captureButton');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let videoStream;

function startCam(){
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const videoElement = document.getElementById('videoPreview');
        videoStream = stream;
        videoElement.srcObject = stream;
    })
    .catch(function (error) {
        console.log('Erro ao acessar a câmera: ', error);
    });
}

function stopCamera() {
    if (videoStream) {
        const tracks = videoStream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
        videoStream = null;
        videoElement.srcObject = null;
    }
}

captureButton.addEventListener('click', function () {
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');
    const imageElement = new Image();

    imageElement.src = dataURL;
    document.body.appendChild(imageElement);
});

startCamElement.addEventListener("click", startCam);
stopButton.addEventListener('click', function () {
    stopCamera();
});