const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/classify-number", async (req, res) => {
  const { number } = req.query;

  // Input validation
  if (!/^-?\d+$/.test(number)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  const num = parseInt(number, 10);
  const properties = [];

  // Check if Armstrong
  const isArmstrong = (n) => {
    const digits = String(n).split("").map(Number);
    const sum = digits.reduce((acc, d) => acc + d ** digits.length, 0);
    return sum === n;
  };

  if (isArmstrong(num)) properties.push("armstrong");

  // Check if Odd/Even
  properties.push(num % 2 === 0 ? "even" : "odd");

  // Get digit sum
  const digitSum = String(num)
    .split("")
    .reduce((acc, d) => acc + Number(d), 0);

  // Get fun fact
  try {
    const { data: funFact } = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );
    res.json({
      number: num,
      is_prime: false,
      is_perfect: false,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact.text,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact" });
  }
});

module.exports = router;
