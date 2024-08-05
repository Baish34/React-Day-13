import "./App.css";

const RandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
};

const AbsoluteValue = () => {
  const number = -10;
  const absoluteValue = Math.abs(number);
  return (
    <div>
      <p>Absolute Value: {absoluteValue}</p>
    </div>
  );
};

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const sumOfEven = numbers
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <div>
      <p>Sum of Even Numbers: {sumOfEven}</p>
    </div>
  );
};

const SquarePerimeter = () => {
  const sideLength = 5;
  const perimeter = 4 * sideLength;
  return (
    <div>
      <h1>Square Perimeter Calculator</h1>
      <p>Side Length: {sideLength} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </div>
  );
};

const CurrencyConverter = () => {
  const amountUSD = 50;
  const exchangeRate = 74.5;
  const amountINR = amountUSD * exchangeRate;
  return (
    <div>
      <h1>Currency Converter</h1>
      <p>Amount in USD: ${amountUSD}</p>
      <p>Exchange Rate: 1 USD = {exchangeRate} INR</p>
      <p>Amount in INR: INR {amountINR}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />
      <SquarePerimeter />
      <CurrencyConverter />
    </main>
  );
}
