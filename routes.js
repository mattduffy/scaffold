'use strict';

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()) {
		return next();
	}
	res.set('X-Auth-Required', true);
	res.session.returnUrl = req.originalUrl;
	res.redirect('/login');
}

function ensureAdmin(req,res,next){
	// make some kind of admin identity check here
	res.redirect('/');
}

function ensureAccount(req,res,next){
	// fill in some account verification code here
}


exports = module.exports = function(app, passport){

	// main site index routes
	app.get('/', require('./view/index').init);
	app.get('/about', require('./view/index').init);
	app.get('/contact', require('./view/index').init);
	app.post('/contact', require('./view/index').sendMessage);

	// login / logout routes
	app.get('/login', require('./view/login').init);
	app.post('/login', require('./view/login').simpleLogin);
	app.get('/logout', require('./view/login').logout);

	// other routes
	// app.get(''...
	
};
