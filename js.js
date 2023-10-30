const plus = document.querySelectorAll(".plus"),
  minus = document.querySelectorAll(".minus"),
  counter = document.querySelectorAll(".counter-number");

let num = 1;

counter.forEach((item) => {
  item.innerHTML = num;
});

// plus.addEventListener("click", (e) => {
//   let target = e.target;
// });
plus.forEach((item) => {
  item.addEventListener("click", (e) => {
    counter.event.target.innerHTML = `5`;
  });
});
