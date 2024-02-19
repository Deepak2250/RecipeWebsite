document.addEventListener("DOMContentLoaded", function () {
    const blackScreen = document.getElementById("blackscreen");

    blackScreen.addEventListener("animationend", function () {
        const backgroundColor = window.getComputedStyle(blackScreen).getPropertyValue('background-color');

        if (backgroundColor.toLowerCase() === 'rgba(0, 0, 0, 0)') {
            document.body.style.overflowY = 'scroll';
        } else {
            document.body.style.overflowX = 'hidden';
        }
    });
});
