var express = require('express');
var app = express();

const PORT = 5000;

//setting middleware
app.use(express.static(__dirname + 'public')); //Serves resources from public folder
app.get('/', (req, res) => {
    res.send('Hello world');
})


app.listen(PORT, function(){
    console.log('app running on port: '+ PORT)
});