function calculatePriceBands(holidayInfo) {
  let effectiveNumberOfPeople =
    holidayInfo.numberOfFlushPeople +
    (holidayInfo.numberOfOkPeople * 2) / 3 +
    (holidayInfo.numberOfBrokePeople * 1) / 3;

  let pricePerPerson = holidayInfo.totalCost / effectiveNumberOfPeople;

  return {
    fullPrice: pricePerPerson,
    okPrice: (pricePerPerson * 2) / 3,
    brokePrice: (pricePerPerson * 1) / 3,
  };
}

let holidayInfo = {
  totalNumberOfPeople: 18,
  numberOfBrokePeople: 1,
  numberOfOkPeople: 2,
  numberOfFlushPeople: 15,
  totalCost: 1990,
};
