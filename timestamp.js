let express = require('express');

function sendStamp(res, req, next) {
  express.send("Hello there");
  
}

export sendStamp