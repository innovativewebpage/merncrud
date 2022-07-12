const mongoose = require('mongoose');





const movieSchema = new mongoose.Schema({
  
		moviename: { type: String },
		rating:{type:Number},
		genre:{type:String},	
		releaseDate: { type: Date,default: Date.now},
		cast:{type:Array}
		
		 
});


const movieModel = mongoose.model('Movie', movieSchema);

module.exports = movieModel;



