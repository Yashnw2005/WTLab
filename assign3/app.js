// Updated API base URL
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swapBtn = document.getElementById("swap");

// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    const opt = document.createElement("option");
    opt.value = currCode;
    opt.textContent = currCode;

    // Defaults
    if (select.name === "from" && currCode === "USD") opt.selected = true;
    if (select.name === "to" && currCode === "INR") opt.selected = true;

    select.append(opt);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

// Update flag next to a select
function updateFlag(selectEl) {
  const curr = selectEl.value;
  const countryCode = countryList[curr];
  const img = selectEl.parentElement.querySelector("img");
  if (img && countryCode) {
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}

// Fetch and display exchange rate
async function updateExchangeRate() {
  const amountInput = document.querySelector(".amount input");
  let amtVal = parseFloat(amountInput.value);

  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  msg.textContent = "Fetching rate…";

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();
  const url = `${BASE_URL}/${from}.json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const rate = data[from][to];
    if (!rate) throw new Error("Rate not found");

    const finalAmount = (amtVal * rate).toFixed(4);
    msg.textContent = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    console.error(err);
    msg.textContent = "Could not fetch rate.";
  }
}

// Swap currencies
swapBtn.addEventListener("click", () => {
  const fromVal = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = fromVal;
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});

// Button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Run once on load
window.addEventListener("DOMContentLoaded", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});
