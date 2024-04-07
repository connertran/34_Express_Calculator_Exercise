const express = require("express");
const { mean, median, getNums, findMode } = require("./functions");
const { validateQString } = require("./functions");
const ExpressError = require("./myError");
const app = express();

app.get("/mean", function (req, res, next) {
  try {
    const numList = getNums(req.query);
    validateQString(req.query);
    const average = mean(numList);
    return res.json({ operation: "mean", value: average });
  } catch (err) {
    return next(err);
  }
});

app.get("/median", function (req, res, next) {
  try {
    const numList = getNums(req.query);
    validateQString(req.query);
    const result = median(numList);
    return res.json({ operation: "median", value: result });
  } catch (err) {
    return next(err);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    const numList = getNums(req.query);
    validateQString(req.query);
    const mode = findMode(numList);
    return res.json({ operation: "mode", value: mode });
  } catch (err) {
    return next(err);
  }
});

// if the http url doesn't match any route
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    // error: err,
    message: err.message,
    status: err.status,
  });
});
app.listen(3000, function () {
  console.log("App on port 3000");
});
