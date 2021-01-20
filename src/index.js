window.onload = function () {
  let allBalls = init();

  let initBalls = getDrawBalls();
  initDrawBall(initBalls);

  document.getElementById('add-ball').addEventListener('click', function () {
    let newNumber = addDrawBall();
    let newBall = getBall(newNumber);
    draw(newBall);
  })
}

function initDrawBall(initBalls) {
  initBalls.forEach(function (ball) {
    let newBall = getBall(ball);
    draw(newBall);
  });
}

function draw(openedBall) {
  document.getElementById('draw-container').prepend(openedBall);
}

function getBall(drawNumber) {
  let cloneBall = document.getElementById('template-ball').cloneNode(true);
  cloneBall.removeAttribute('id');
  cloneBall.querySelector('p').innerText = drawNumber;

  return cloneBall;
}
