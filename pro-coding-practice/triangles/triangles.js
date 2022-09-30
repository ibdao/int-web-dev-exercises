/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  let msg;
  let addOn;

  if (aOk && bOk) {
    let area = calcArea(a, b);
    let hypot = calcHypot(a, b);
    msg = `Hypotenuse is ${hypot} and area is ${area}. ${addOn}`;

    if (area > 50) {
      addOn = ` That's a really big triangle!`;
    }
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
}

function calcArea(a, b){
  return (a * b) / 2;
}

function calcHypot(a, b){
  return Math.floor(Math.sqrt(a ** 2 + b ** 2));
}
