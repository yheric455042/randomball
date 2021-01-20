function init() {
    if (getStorage('unDraw') == null) {
        let allBall = [...new Array(100).keys()];
        setStorage('unDraw', allBall);

        return allBall;
    }

    return getStorage('unDraw');
}

function addDrawBall() {
    var unDraw = getStorage('unDraw');
    var draw = getStorage('draw') || [];
    var res = parseInt(unDraw.splice(Math.floor(Math.random() * unDraw.length), 1)[0]) + 1;
    draw.push(res);
    setStorage('draw', draw);
    setStorage('unDraw', unDraw);

    return res;
}

function getDrawBalls() {
    return getStorage('draw') === null ? [] : getStorage('draw').map(item => parseInt(item));
}

function getStorage(key) {
    let value = localStorage.getItem(key);

    return value === null ? null : value.split(',');
}

function setStorage(key, value) {
    localStorage.setItem(key, value.join(','));
}