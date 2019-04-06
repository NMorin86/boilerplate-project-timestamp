let express = require('express');

function sendStamp(req, res, next) {
  let timeIn = req.path.split('/')[3];  
  let time = parseToDate(timeIn);
  let JSONout = parseToJSON(time);
  console.log("In sendstamp: ", timeIn, JSONout);
  res.json(JSONout);
  next();
}

function parseToDate(timeIn) {
  let date;
  
  // Trim leading 0s
  timeIn = timeIn.replace(/^0+/, '')
  
  if(timeIn === '') {
    date = new Date();
  } else if(String(parseInt(timeIn)).length == timeIn.length) {
    // We have a UNIX number
    date = new Date(parseInt(timeIn));
  } else {
    // Try a regular parse
    date = new Date(timeIn)
  }
  
  return date;    
}

function parseToJSON(time) {
  let JSON = {};
  JSON.unix = time.getTime();
  JSON.utc = time.toString();
  return JSON;
}

exports.sendStamp = sendStamp;