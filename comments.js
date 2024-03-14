// Create web server with Node.js and Express.js

var express = require('express');
var app = express();

app.get('/comments', function(req, res){
  res.send('This is the comments page');
});

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
```

Now, if you open your browser and go to `http://localhost:3000/comments`, you should see the message `This is the comments page`.

### Route Parameters

You can also specify route parameters in your routes. For example:

```javascript
// Path: comments.js
// Create web server with Node.js and Express.js

var express = require('express');
var app = express();

app.get('/comments/:id', function(req, res){
  res.send('This is the comments page with id: ' + req.params.id);
});

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
```

In this case, if you open your browser and go to `http://localhost:3000/comments/123`, you should see the message `This is the comments page with id: 123`.

### Query String Parameters

You can also use query string parameters in your routes. For example:

```javascript
// Path: comments.js
// Create web server with Node.js and Express.js

var express = require('express');
var app = express();

app.get('/comments', function(req, res){
  res.send('This is the comments page with id: ' + req.query.id);
});

app