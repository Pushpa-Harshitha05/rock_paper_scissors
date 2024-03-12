let play1 = true,
  play2 = true;

let str1 = "",
  str2 = "";
let red = 0,
  blue = 0,
  press = 0;
redpress = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let sec_rock = document.getElementById("sec_rock");
let sec_paper = document.getElementById("sec_paper");
let sec_scissors = document.getElementById("sec_scissors");
let redscore = document.getElementById("redscore");
let bluescore = document.getElementById("bluescore");

let prom = new Promise((resolve, reject) => {
  let count = document.getElementById("count");
  let c = 2;
  setTimeout(() => {
    count.innerHTML = "3";
  }, 465);

  let id = setInterval(() => {
    count.innerHTML = c;
    c--;
    if (c == -1) {
      clearInterval(id);
      count.style.display = "none";
      resolve();
    }
  }, 1300);
});

document.addEventListener("keydown", (ev) => {
  if (ev.code == "KeyA") {
    rock.style.filter = "invert(1)";
    redpress++;
    play1 = false;
    redcheck(ev.code, redpress);
    prom.then(() => {
      str1 = "rock";
      document.querySelector(".hideplayer1").src = "rock.jpeg";
      document.querySelector(".hideplayer1").style.display = "inline";
      document.querySelector(".hideplayer1").style.height = "100%";
      document.querySelector(".hideplayer1").style.width = "100%";
      rock.style.filter = "invert(1)";
      redchance(ev.code, redpress);
    });
  } else if (ev.code == "KeyS") {
    paper.style.filter = "invert(1)";
    redpress++;
    play1 = false;
    redcheck(ev.code, redpress);
    prom.then(() => {
      str1 = "paper";
      document.querySelector(".hideplayer1").src = "paper.jpeg";
      document.querySelector(".hideplayer1").style.display = "inline";
      document.querySelector(".hideplayer1").style.height = "100%";
      document.querySelector(".hideplayer1").style.width = "100%";
      paper.style.filter = "invert(1)";
      redchance(ev.code, redpress);
    });
  } else if (ev.code == "KeyD") {
    scissors.style.filter = "invert(1)";
    redpress++;
    play1 = false;
    redcheck(ev.code, redpress);
    prom.then(() => {
      str1 = "scissors";
      document.querySelector(".hideplayer1").src = "scissors.jpeg";
      document.querySelector(".hideplayer1").style.display = "inline";
      document.querySelector(".hideplayer1").style.height = "100%";
      document.querySelector(".hideplayer1").style.width = "100%";
      scissors.style.filter = "invert(1)";
      redchance(ev.code, redpress);
    });
  } else {
    prom.then(() => {
      if (
        ev.code != "KeyA" &&
        ev.code != "KeyS" &&
        ev.code != "KeyD" &&
        ev.code != "Digit1" &&
        ev.code != "Numpad1" &&
        ev.code != "Digit2" &&
        ev.code != "Numpad2" &&
        ev.code != "Digit3" &&
        ev.code != "Numpad3" &&
        ev.code != "F5"
      ) {
        alert("choose correct option");
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      }
    });
  }
  console.log(ev.code);
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Digit1" || e.code == "Numpad1") {
    sec_rock.style.filter = "invert(1)";
    press++;
    play2 = false;
    bluecheck(e.code, press);
    prom.then(() => {
      str2 = "rock";
      document.querySelector(".hideplayer2").src = "rock.jpeg";
      document.querySelector(".hideplayer2").style.display = "inline";
      document.querySelector(".hideplayer2").style.height = "100%";
      document.querySelector(".hideplayer2").style.width = "100%";

      sec_rock.style.filter = "invert(1)";
      bluechance(e.code, press);
    });
  } else if (e.code == "Digit2" || e.code == "Numpad2") {
    sec_paper.style.filter = "invert(1)";
    press++;
    play2 = false;
    bluecheck(e.code, press);
    prom.then(() => {
      str2 = "paper";
      document.querySelector(".hideplayer2").src = "paper.jpeg";
      document.querySelector(".hideplayer2").style.display = "inline";
      document.querySelector(".hideplayer2").style.height = "100%";
      document.querySelector(".hideplayer2").style.width = "100%";
      bluechance(e.code, press);
      sec_paper.style.filter = "invert(1)";
    });
  } else if (e.code == "Digit3" || e.code == "Numpad3") {
    sec_scissors.style.filter = "invert(1)";
    press++;
    play2 = false;
    bluecheck(e.code, press);
    prom.then(() => {
      str2 = "scissors";
      document.querySelector(".hideplayer2").src = "scissors.jpeg";
      document.querySelector(".hideplayer2").style.display = "inline";
      document.querySelector(".hideplayer2").style.height = "100%";
      document.querySelector(".hideplayer2").style.width = "100%";
      bluechance(e.code, press);
      sec_scissors.style.filter = "invert(1)";
    });
  }
});

function bluecheck(key, p) {
  if (play2 == false && (key == "Digit1" || key == "Numpad1")) {
    sec_rock.style.filter = "none";
    sec_paper.style.filter = "none";
    sec_scissors.style.filter = "none";
  } else if (play2 == false && (key == "Digit2" || key == "Numpad2")) {
    sec_rock.style.filter = "none";
    sec_paper.style.filter = "none";
    sec_scissors.style.filter = "none";
  } else if (play2 == false && (key == "Digit3" || key == "Numpad3")) {
    sec_paper.style.filter = "none";
    sec_rock.style.filter = "none";
    sec_scissors.style.filter = "none";
  }
}

function redcheck(ekey, pr) {
  if (play1 == false && ekey == "KeyA") {
    rock.style.filter = "none";
    paper.style.filter = "none";
    scissors.style.filter = "none";
  } else if (play1 == false && ekey == "KeyS") {
    rock.style.filter = "none";
    paper.style.filter = "none";
    scissors.style.filter = "none";
  } else if (play1 == false && ekey == "KeyD") {
    paper.style.filter = "none";
    rock.style.filter = "none";
    scissors.style.filter = "none";
  }
}

function redchance(cod, pr) {
  if (play1 == false && cod == "KeyA") {
    paper.style.filter = "none";
    scissors.style.filter = "none";
    if (pr == 1) {
      winner();
    }
  } else if (play1 == false && cod == "KeyS") {
    rock.style.filter = "none";
    scissors.style.filter = "none";
    if (pr == 1) {
      winner();
    }
  } else if (play1 == false && cod == "KeyD") {
    paper.style.filter = "none";
    rock.style.filter = "none";
    if (pr == 1) {
      winner();
    }
  }
}

function bluechance(a, p) {
  if (play2 == false && (a == "Digit1" || a == "Numpad1")) {
    sec_paper.style.filter = "none";
    sec_scissors.style.filter = "none";
    if (p == 1) {
      winner();
    }
  } else if (play2 == false && (a == "Digit2" || a == "Numpad2")) {
    sec_rock.style.filter = "none";
    sec_scissors.style.filter = "none";
    if (p == 1) {
      winner();
    }
  } else if (play2 == false && (a == "Digit3" || a == "Numpad3")) {
    sec_paper.style.filter = "none";
    sec_rock.style.filter = "none";
    if (p == 1) {
      winner();
    }
  }
}

function winner() {
  if (str1 == str2) {
    let result = document.createElement("div");
    result.className = "results";
    let p = document.createElement("p");
    p.id = "para";
    p.textContent = "Draw!";
    result.append(p);
    let draw = setTimeout(() => {
      window.location.reload();
    }, 1150);
    document.getElementsByClassName("res")[0].append(result);
    if (
      parseInt(sessionStorage.getItem("red")) > 4 ||
      parseInt(sessionStorage.getItem("blue")) > 4
    ) {
      if (
        parseInt(sessionStorage.getItem("red")) >
        parseInt(sessionStorage.getItem("blue"))
      ) {
        p.textContent = "Red Won the Game !!";
      } else if (
        parseInt(sessionStorage.getItem("blue")) >
        parseInt(sessionStorage.getItem("red"))
      ) {
        p.textContent = "Blue Won the Game !!";
      }
      clearTimeout(draw);
      let butonn = document.createElement("button");
      butonn.id = "btnRefresh";
      butonn.innerHTML = "Restart game";
      butonn.onclick = function () {
        window.location.reload();
      };
      result.append(butonn);
    }
  } else if (
    (str1 == "rock" && str2 == "scissors") ||
    (str1 == "scissors" && str2 == "paper") ||
    (str1 == "paper" && str2 == "rock")
  ) {
    let result = document.createElement("div");
    result.className = "results";
    let p = document.createElement("p");
    p.id = "para";
    p.textContent = "Red Wins!!";
    let redwin = setTimeout(() => {
      window.location.reload();
    }, 1150);
    document.getElementsByClassName("res")[0].append(result);
    result.append(p);
    let ritem = 0;
    if ("red" in sessionStorage) {
      if (parseInt(sessionStorage.getItem("red")) >= 4) {
        p.textContent = "Red Won the Game !!";
        sessionStorage.setItem("blue", 0);
        sessionStorage.setItem("red", 0);
        clearTimeout(redwin);
        let buton = document.createElement("button");
        buton.id = "btnRefresh";
        buton.innerHTML = "Restart game";
        buton.onclick = function () {
          window.location.reload();
        };
        result.append(buton);
      } else {
        ritem = parseInt(sessionStorage.getItem("red"));
        sessionStorage.setItem("red", ritem + 1);
      }
    } else {
      sessionStorage.setItem("red", 1);
    }
  } else if (
    (str2 == "rock" && str1 == "scissors") ||
    (str2 == "scissors" && str1 == "paper") ||
    (str2 == "paper" && str1 == "rock")
  ) {
    let result = document.createElement("div");
    result.className = "blueres";
    let p = document.createElement("p");
    p.id = "para";
    p.textContent = "Blue Wins!!";
    let bluewin = setTimeout(() => {
      window.location.reload();
    }, 1150);
    document.getElementsByClassName("res")[0].append(result);
    result.append(p);
    let bitem = 0;
    if ("blue" in sessionStorage) {
      if (parseInt(sessionStorage.getItem("blue")) >= 4) {
        p.textContent = "Blue Won the Game !!";
        sessionStorage.setItem("blue", 0);
        sessionStorage.setItem("red", 0);
        clearTimeout(bluewin);
        let btn = document.createElement("button");
        btn.id = "btnRefresh";
        btn.innerHTML = "Restart game";
        btn.onclick = function () {
          window.location.reload();
        };
        result.append(btn);
      } else {
        bitem = parseInt(sessionStorage.getItem("blue"));
        sessionStorage.setItem("blue", bitem + 1);
      }
    } else {
      sessionStorage.setItem("blue", 1);
    }
  }
}

get();

getred();

function get() {
  if ("blue" in sessionStorage) {
    bluescore.innerHTML = sessionStorage.getItem("blue");
  } else {
    bluescore.innerHTML = 0;
  }
}

function getred() {
  if ("red" in sessionStorage) {
    redscore.innerHTML = sessionStorage.getItem("red");
  } else {
    redscore.innerHTML = 0;
  }
}
