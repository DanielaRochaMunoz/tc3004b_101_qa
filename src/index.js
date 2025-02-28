function addition() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  let result;
  result = Number(num1) + Number(num2);

  document.getElementById("result").innerText = "Result: " + result;
  document.getElementById("operator").innerText = "+"; // Cambio de signo
}

function subtraction() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  let result;
  result = Number(num1) - Number(num2);

  document.getElementById("result").innerText = "Result: " + result;
  document.getElementById("operator").innerText = "−"; // Cambio de signo
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").innerText = "+"; // Reinicia el signo
  document.getElementById("result").innerText = "Result: ";
}

