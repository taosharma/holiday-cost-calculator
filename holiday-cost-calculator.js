/* A program to calculate how much each person will pay for the holiday, where there are three possible payment brackets.

- Brackets are 'broke' (33%), 'ok' (66%) and 'flush' (100%) 
- Need to know the number of people attending.
- Need to know the number of people in each bracket (will equal total number of people)
- Need to know the full price of the holiday (amount each person pays will equal total cost)

Example

- 4 people
- 1 broke, 1 ok, 2 flush
- £100 holiday
- full price is 100/4 = 25
- broke person should pay 25/3 = 8, remainder 17 to be added to remaining total cost
- 3 people remaining, new full price is 75+17/3 = 92/3 = 31
- ok person should pay 31/3 * 2 = 21, remainder 10 to be added to remaining total cost
- 2 people remaining, new full price is 50+10/2 = 60/2 = 30
- 2 flush pay 30, 1 ok pays 21, 1 broke pays 8 = £99


Algorithm

- Calculate cost per person if split evenly (full price): total cost/number of people
- Calculate the cost per broke person as 1/3 of full price: full price/3
- Calculate the total paid by broke people: number of broke people * broke person price
- Add shortfall to remaining total cost: number of broke people * old full price = total paid by broke people
- Calculate new cost per person if split evenly (new full price): new total cost/remaining number of people
- Calculate the cost per ok person as 2/3 of new full price: new full price/3 * 2
- Calculate the total paid by ok people: number of ok people * ok person price
- Add shortfall to remaining total cost: number of ok people * old full price - total paid by broke people
- Calculate new cost per person if split evenly (new full price): new total cost/remaining number of people
- New full price to be paid by each flush person */

function calculateFullPrice(totalCost, totalNumberOfPeople) {
  return totalCost / totalNumberOfPeople;
}

function calculateBrokePrice(fullPrice) {
  return fullPrice / 3;
}

function calculateOkPrice(fullPrice) {
  return (fullPrice / 3) * 2;
}

function calculateShortfall(totalCost, price, numberOfPeople) {
  return totalCost - price * numberOfPeople;
}

function getHolidayCost(holidayInfo) {
  let {
    totalNumberOfPeople,
    numberOfBrokePeople,
    numberOfOkPeople,
    numberOfFlushPeople,
    totalCost,
  } = holidayInfo;

  // Calculate full price

  let fullPrice = calculateFullPrice(totalCost, totalNumberOfPeople);

  // Sort broke people and update remainder

  let brokePrice = calculateBrokePrice(fullPrice);
  totalCost = calculateShortfall(totalCost, brokePrice, numberOfBrokePeople);
  totalNumberOfPeople = totalNumberOfPeople - numberOfBrokePeople;

  // Sort ok people and update remainder

  fullPrice = calculateFullPrice(totalCost, totalNumberOfPeople);
  let okPrice = calculateOkPrice(fullPrice);
  totalCost = calculateShortfall(totalCost, okPrice, numberOfOkPeople);
  totalNumberOfPeople = totalNumberOfPeople - numberOfOkPeople;

  // Sort flush people

  let flushPrice = calculateFullPrice(totalCost, totalNumberOfPeople);

  // Return price brackets

  return { brokePrice, okPrice, flushPrice };
}

let holidayInfo = {
  totalNumberOfPeople: 18,
  numberOfBrokePeople: 1,
  numberOfOkPeople: 2,
  numberOfFlushPeople: 15,
  totalCost: 1990,
};

console.log(getHolidayCost(holidayInfo));
