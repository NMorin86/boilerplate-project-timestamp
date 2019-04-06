let express = require('express');

function sendStamp(req, res, next) {
  let timeIn = req.params.date_string;
  console.log("In sendstamp: ", timeIn);
  res.send("Hello there, " + timeIn);
  next();
  
}

exports.sendStamp = sendStamp;