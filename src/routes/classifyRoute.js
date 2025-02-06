const express = require("express");
const axios = require("axios");
const router = express.Router();

// Get digit sum (handles negative numbers and checks if it's numeric)
const digitSum = (num) => {
  const absNum = Math.abs(num);
  if (isNaN(absNum)) {
    throw new Error("The number is not numeric");
  }

  const sum = String(absNum)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);

  return sum;
};

router.get("/classify-number", async (req, res) => {
  const { number } = req.query;

  // Input validation
  if (!/^-?\d+$/.test(number)) {
    res.setHeader("Content-Type", "application/json");
    return res.status(400).json({
      number,
      error: "Invalid number format",
    });
  }

  const num = parseInt(number, 10);
  const properties = [];

  // Check if Armstrong
  const isArmstrong = (n) => {
    const digits = String(Math.abs(n)).split("").map(Number);
    const sum = digits.reduce((acc, d) => acc + d ** digits.length, 0);
    return sum === n;
  };

  if (isArmstrong(num)) properties.push("armstrong");

  // Check if Odd/Even
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    // Get digit sum (This will throw an error if it's not a valid number)
    const digitSumResult = digitSum(num);

    // Get fun fact from NumbersAPI
    const { data: funFact } = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );

    res.setHeader("Content-Type", "application/json");
    res.json({
      number: num,
      is_prime: false,
      is_perfect: false,
      properties,
      digit_sum: digitSumResult,
      fun_fact: funFact.text,
    });
  } catch (error) {
    // Handle errors like invalid number or failed API fetch
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({
      error: error.message || "An error occurred",
    });
  }
});

module.exports = router;
