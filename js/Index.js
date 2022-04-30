(function() {
    document.onmousedown = function() {
        var evt = window.event || arguments[0];
        var downX = (evt.x || evt.clientX);
        var downY = (evt.y || evt.clientY);
        var moveX = null;
        var moveY = null;
        var containerDiv = document.getElementById("containerId");
        var containerDivValue = containerDiv.getBoundingClientRect();
        document.querySelector("#down_x_abs").textContent = downX;
        document.querySelector("#down_y_abs").textContent = downY;
        document.querySelector("#down_x_rel").textContent = downX - containerDivValue.left;
        document.querySelector("#down_y_rel").textContent = downY - containerDivValue.top;


        document.onmousemove = function() {
            evt = window.event || arguments[0];
            moveX = (evt.x || evt.clientX);
            moveY = (evt.y || evt.clientY);
            document.querySelector("#move_x_abs").textContent = moveX;
            document.querySelector("#move_y_abs").textContent = moveY;
            document.querySelector("#move_x_rel").textContent = moveX - containerDivValue.left;
            document.querySelector("#move_y_rel").textContent = moveY - containerDivValue.top;
        }
    }

})();