const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    // GET method: returns operation_code 1
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        // Check if the item is a number
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        // Check if the item is a single character and not a number
        alphabets.push(item);
        if (
          item === item.toLowerCase() &&
          (highest_lowercase_alphabet === "" ||
            item > highest_lowercase_alphabet)
        ) {
          highest_lowercase_alphabet = item;
        }
      }
    }

    // POST method: returns the desired JSON response
    res.json({
      is_success: true,
      user_id: "Vaishnavi_sinha", // Adjust the date as needed
      email: "Vaihnavi.sinah2021@vit.student.ac.in",
      roll_number: "21BEC1760",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(Server running on http://localhost:${port});
});
