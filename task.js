function ballInitialParameters(e) {
  let circle = document.createElement("div");
  let positionX = e.clientX - circle.offsetWidth / 2 + "px";
  let positionY = e.clientY - circle.offsetHeight / 2;
  let movingSpeed = 0.9;
  const gravity = 0.2;
  circle.classList = "circle";
  document.body.appendChild(circle);
  circle.style.left = positionX;
  circle.style.top = positionY + "px";

  return {
    circle,
    positionY,
    movingSpeed,
    gravity,
  };
}

function main(e) {
  let { circle, positionY, movingSpeed, gravity } = ballInitialParameters(e);
  function drop() {
    movingSpeed += gravity;
    positionY += movingSpeed;
    circle.style.top = positionY + "px";

    if (positionY >= window.innerHeight - 50 - circle.offsetHeight) {
      movingSpeed *= -0.8;
      if (Math.abs(movingSpeed) < 0.1) {
        return;
      }
    }

    requestAnimationFrame(drop);
  }
  drop();
}

window.onclick = (e) => {
  main(e);
};

