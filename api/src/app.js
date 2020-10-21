const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");

//--------- Autenticación 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const {Usuario}= require("./db.js"); //Traer usuario de la base de datos

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		(email, password, done) => {
			Usuario.findOne({where: {email: email}})
				.then(usuario => {
					if (!usuario || !usuario.correctPassword(password)) {
						return done(null, false, {message: 'Incorrect email or password.'}); 
					}
					return done(null, usuario);
				})
				.catch(err => done(err));
		}
	)
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
//------Passport Sesion
server.use(passport.initialize());
server.use(passport.session());


server.use(cors());
server.use("/", routes);
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
