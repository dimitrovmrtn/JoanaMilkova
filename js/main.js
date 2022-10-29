document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName("sideMenuItem")].forEach((item) =>
    item.addEventListener("click", () =>
      document.querySelector(".toggler").click()
    )
  );
  // document
  //   .querySelector(".toggler")
  //   .addEventListener("click", () =>
  //     document
  //       .querySelector(".dropdown-content")
  //       .classList.remove("mobileDropDown")
  //   );
  // document.querySelector(".dropdown-content").firstChild.remove();
  // document.querySelector("#dropdown").addEventListener("mouseover", () => {
  //   document.querySelector(".dropdown-content").style.display = "block";
  //   document.querySelector(".dropdown-content").style.top = `${
  //     145 + window.pageYOffset
  //   }px`;
  // });
  // document.querySelector(".fa-angle-down").addEventListener("click", () => {
  //   document.querySelector(".collapsed-content").classList.toggle("show");
  // });
  // document.querySelectorAll(".collapsible-question").forEach((el, index) => {
  //   el.addEventListener("click", () => {
  //     document.querySelector(`#answer-${index}`).classList.toggle("show");
  //   });
  // });
  // document
  //   .querySelector(".dropdown-content")
  //   .addEventListener(
  //     "mouseover",
  //     () =>
  //       (document.querySelector(".dropdown-content").style.display = "block")
  //   );
  // document
  //   .querySelector("#dropdown")
  //   .addEventListener(
  //     "mouseout",
  //     () => (document.querySelector(".dropdown-content").style.display = "none")
  //   );
  // document
  //   .querySelector(".dropdown-content")
  //   .addEventListener(
  //     "mouseout",
  //     () => (document.querySelector(".dropdown-content").style.display = "none")
  //   );
  // let links = [...document.getElementsByTagName("a")];
});

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
