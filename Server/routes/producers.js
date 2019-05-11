const express = require('express');
const app = express();

const Producer = require('../models/producer');
const passport = require('passport');

app.get('/producer/get/:rut',  passport.authenticate('jwt', {
    session: false
}), (req, res) => {
	let rut = req.params.rut;

    Producer.getProducer(rut, (err, producer) => {
    	if(err){
    		return res.status(400).json(err);
    	}
    	return res.json(producer);
    })
});

app.get('/producer/getall', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
	Producer.getAllProducers((err, producers) => {
		if(err){
			return res.status(400).json(err);
		}

		return res.json(producers);
	});
    
});

app.put('/producer/add',  passport.authenticate('jwt', {
    session: false
}), (req, res) => {
	let body = req.body;
	let newProducer = new Producer(body.name, body.rut, body.manager, body.telephone);
	
	Producer.addProducer(newProducer, (err, result) => {
		if(err){
			return res.status(400).json(err);
		}

		return res.json({
			message: "The producer has been added correctly"
		});
	});
});

app.put('/producer/update',  passport.authenticate('jwt', {
    session: false
}), (req, res) => {
	let body = req.body;
	let newProducer = new Producer(body.name, body.rut, body.manager, body.telephone);

	Producer.updateProducer(newProducer, (err, result) => {
		if(err){
			return res.status(400).json(err);
		}

		return res.json({
			message: "The producer has been modified"
		});
	});
});

app.post('/producer/delete',  passport.authenticate('jwt', {
    session: false
}), (req, res) => {
	console.log('/delete-producer');
},)

module.exports = app;