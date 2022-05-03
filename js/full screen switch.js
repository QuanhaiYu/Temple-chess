var fullscreen = false;
let btn = document.getElementById('fullscreenSwitch');
let fullarea = document.documentElement;
btn.addEventListener('click', function() {
    if (fullscreen) { // 退出全屏
        console.log("aaa");
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else { // 进入全屏
        console.log("bbb");
        if (fullarea.requestFullscreen) {
            fullarea.requestFullscreen();
        } else if (fullarea.webkitRequestFullScreen) {
            fullarea.webkitRequestFullScreen();
        } else if (fullarea.mozRequestFullScreen) {
            fullarea.mozRequestFullScreen();
        } else if (fullarea.msRequestFullscreen) {
            // IE11
            fullarea.msRequestFullscreen();
        }
    }
    fullscreen = !fullscreen;
})