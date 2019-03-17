var express = require('express');
var  app = express();

app.use(express.static('static'));


require('./routes/admin')(app);
require('./routes/guest')(app);
require('./routes/movies')(app);
require('./routes/users')(app);
require('./routes/ratings')(app);
require('./routes/main')(app);


var server = app.listen(3000, function() {
    console.log('runnin');
})