// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI

  const UIamount = document.getElementById("amount").value;
  const UItithe = document.getElementById("tithe").value;

  // Calculate

  const principal = parseFloat(UIamount);
  const CalculateTithe = parseFloat(UItithe);

  //Compute monthly Payment

  const amountA = (principal * (10 / 9));
  const amountAA = amountA.toFixed(2);

  //Compute Interest

  const titheA = (CalculateTithe / 10);
  const titheAA = titheA.toFixed(2);

  //Show results

  document.getElementById("amountAA").innerHTML = "£" + amountAA;

  document.getElementById("titheAA").innerHTML = "£" + titheAA;

  e.preventDefault();
}