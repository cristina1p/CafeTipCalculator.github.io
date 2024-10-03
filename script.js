// Target the elements

const resultTipValue = document.getElementById("resultValueTip");
const resultTotalValue = document.getElementById("resultValueTotal");
const resetBtn = document.querySelector(".resetBtn");

const tipBtns = document.querySelectorAll(".tipBtn");

tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (event) => {
    // Remove 'selected' class and reset background color from all buttons
    tipBtns.forEach((btn) => {
      btn.classList.remove("selected");
      btn.style.backgroundColor = "#5094d7"; // Reset background color to blue
    });

    // Add 'selected' class to the clicked button
    tipBtn.classList.add("selected");

    // Change the background color of the clicked button to green
    tipBtn.style.backgroundColor = "green";

    const billAmountValue = document.getElementById("billAmount").value;

    if (billAmountValue === "") {
      // early return
      return;
    }

    // Extract the billAmount from the input field
    const billAmount = parseFloat(document.getElementById("billAmount").value);

    // Calculate the tipAmount for all buttons
    const tipPercentage = parseInt(event.target.getAttribute("data-tip-value"));
    const tipAmount = (billAmount * tipPercentage) / 100;

    // Extract number of people from the input field
    const numberOfPeople = parseFloat(
      document.getElementById("numberOfPeople").value
    );

    // Calculate tipAmount per person
    const tipAmountPerPerson = tipAmount / numberOfPeople;

    // Calculate the total bill per person
    const totalBill = billAmount / numberOfPeople + tipAmountPerPerson;

    // Display tipAmount per person
    resultTipValue.textContent = `${tipAmountPerPerson.toFixed(2)}₹`;

    // Display total bill per person
    resultTotalValue.textContent = `${totalBill.toFixed(2)}₹`;
  });
});

// Reset button -------------------------
resetBtn.addEventListener("click", function () {
  billAmount.value = "";
  numberOfPeople.value = "";
  resultTipValue.textContent = `0.00₹`;
  resultTotalValue.textContent = "0.00₹";

  // Remove 'selected' class from all tip buttons and reset their background color
  tipBtns.forEach((btn) => {
    btn.classList.remove("selected");
    btn.style.backgroundColor = "#5094d7"; // Reset the background color to blue
  });
});
