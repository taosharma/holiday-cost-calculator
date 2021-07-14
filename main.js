let brokeInput = document.querySelector("#broke-input");
let okInput = document.querySelector("#ok-input");
let flushInput = document.querySelector("#flush-input");
let holidayInput = document.querySelector("#holiday-input");
let brokeDisplay = document.querySelector("#broke-display");
let okDisplay = document.querySelector("#ok-display");
let flushDisplay = document.querySelector("#flush-display");

function getHolidayInfo() {
  let numberOfBrokePeople = Number(brokeInput.value);
  let numberOfOkPeople = Number(okInput.value);
  let numberOfFlushPeople = Number(flushInput.value);
  let totalCost = Number(holidayInput.value);
  let totalNumberOfPeople =
    numberOfBrokePeople + numberOfOkPeople + numberOfFlushPeople;

  return {
    numberOfBrokePeople,
    numberOfOkPeople,
    numberOfFlushPeople,
    totalCost,
    totalNumberOfPeople,
  };
}

function calculatePriceBands(holidayInfo) {
  let effectiveNumberOfPeople =
    holidayInfo.numberOfFlushPeople +
    (holidayInfo.numberOfOkPeople * 2) / 3 +
    (holidayInfo.numberOfBrokePeople * 1) / 3;

  let pricePerPerson = holidayInfo.totalCost / effectiveNumberOfPeople;

  return {
    flushPrice: pricePerPerson,
    okPrice: (pricePerPerson * 2) / 3,
    brokePrice: (pricePerPerson * 1) / 3,
  };
}

function updateResults() {
  let holidayInfo = getHolidayInfo();
  let { flushPrice, okPrice, brokePrice } = calculatePriceBands(holidayInfo);
  brokeDisplay.innerText = `Broke: £${brokePrice ? brokePrice.toFixed(2) : 0}`;
  okDisplay.innerText = `OK: £${okPrice ? okPrice.toFixed(2) : 0}`;
  flushDisplay.innerText = `Flush: £${flushPrice ? flushPrice.toFixed(2) : 0}`;
}

brokeInput.addEventListener("change", updateResults);
okInput.addEventListener("change", updateResults);
flushInput.addEventListener("change", updateResults);
holidayInput.addEventListener("change", updateResults);
