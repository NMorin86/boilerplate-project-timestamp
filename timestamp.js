let express = require('express');

function sendStamp(req, res, next) {
  let timeIn = req.path.split('/')[3];
  console.log("In sendstamp: ", timeIn);
  let time = parseToDate(timeIn);
  let JSONout = parseToJSON(time);
  res.json(JSONout);
  next();  
}

function parseToDate(timeIn) {
  let date;
  if(timeIn === '') {
    date = new Date();
  } else {
    try {
      
}

function parseToJSON(time) {
  
}

exports.sendStamp = sendStamp;