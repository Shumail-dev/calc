var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get('/calc', function(req, res){

  try{
    var op1 = Math.floor(req.query.num1);
    var op2 = Math.floor(req.query.num2);  
    var operand = req.query.operand;
  
    if ( operand == 'add')

      var op3 = op1 + op2;

    else if ( operand == 'sub')

      op3 = op1 - op2;

    else if ( operand == 'mul')

      op3 = op1 * op2;

    else if ( operand == 'div')

      op3 = op1 / op2;  
      
  res.send(op3.toString());

  }
  
  catch (e){
  
    console.log(e);
    res.send("Invalid Parameters");
  
  }
  
});

app.listen(port);
console.log('The server is running on ',port);