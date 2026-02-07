
# JavaScript Logic Challenges 

A collection of 5 JavaScript problems focusing on data validation, mathematical calculations, and string manipulation.

## 📋 Problems Overview

### Problem-01: New Price for Eid Sale

**Function Name:** `newPrice()`

Calculate the discounted price of a product for an upcoming Eid sale.

* **Input:** * `currentPrice` (Number): Original price.
* `discount` (Number): Discount percentage (%).


* **Output:** The discounted price formatted to **3 decimal places**.
* **Validation Rules:**
* Return `"Invalid"` if inputs are not numbers.
* Return `"Invalid"` if the discount is less than 0 or greater than 100.


* **Example:** `newPrice(1500, 20)` returns `1200.000`.

---

### Problem-02: OTP Validation for Zapshift

**Function Name:** `validOtp()`

Verify if a delivery OTP (One-Time Password) is valid and follows the security protocol.

* **Input:** `otp` (String).
* **Output:** Boolean (`true`/`false`).
* **Validation Rules:**
* Must be a **String**. If not, return `"Invalid"`.
* Length must be exactly **8 characters**.
* Must start with the prefix **"ph-"**.


* **Example:** `validOtp("ph-10985")` returns `true`.

---

### Problem-03: BCS Final Score Calculator

**Function Name:** `finalScore()`

Calculate the final score of a BCS candidate based on their OMR sheet data.

* **Input:** An Object `{ right: Number, wrong: Number, skip: Number }`.
* **Scoring Rules:**
* Each correct answer: `+1`.
* Each wrong answer: `-0.5`.
* Skipped answer: `0`.


* **Validation Rules:**
* Total questions (`right + wrong + skip`) must equal exactly **100**.
* Return `"Invalid"` if the total is not 100 or if the input is not a valid object.


* **Output:** Final score rounded to the nearest integer.
* **Example:** `finalScore({ right: 67, wrong: 23, skip: 10 })` returns `56`.

---

### Problem-04: Upcoming Gono Vote

**Function Name:** `gonoVote()`

Analyze a public referendum (Gono Vote) where opinions are recorded as "ha" (Yes) or "na" (No).

* **Input:** An Array of strings.
* **Output:**
* `true` if "ha" votes > "na" votes.
* `false` if "na" votes > "ha" votes.
* `"equal"` if both are equal.


* **Validation Rules:**
* Input must be an **Array**. Otherwise, return `"Invalid"`.


* **Example:** `gonoVote(["ha", "na", "ha", "na"])` returns `"equal"`.

---

### Problem-05: Text Analyzer for AI

**Function Name:** `analyzeText()`

Extract a summary from long text strings to help an AI process data efficiently.

* **Input:** `str` (String).
* **Output:** An Object `{ longwords: String, token: Number }`.
* `longwords`: The longest word in the text (if multiple, pick the first one).
* `token`: Total number of characters in the sentence **excluding spaces**.


* **Validation Rules:**
* Input must be a **String**.
* Return `"Invalid"` for non-string inputs or empty/space-only strings.


* **Example:** `analyzeText("Hello world")` returns `{ longwords: "Hello", token: 10 }`.

---

## 🚀 How to Use

1. Clone this repository.
2. Implement the functions in a `.js` file.
3. Use the sample inputs provided in the problem descriptions to test your logic.

```javascript
// Example Test
console.log(newPrice(1500, 20)); // Output: 1200.000

```

---


