const express = require('express')
const app = express();

const db = require('./db');



app.use(express.json())




const MovieRoute = require('./movieRoutes');

app.use('/app/movie',MovieRoute);

//Start the server
const port = process.env.PORT || 5000;

//var port =5000;



if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {        
res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path  
		});
}


app.listen(port,function(){
	console.log('server start on port' + port);
});

