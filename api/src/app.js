const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
const { userInjector } = require("./routes/middlewares");
//--------- Autenticación
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const { Usuario } = require("./db.js"); //Traer usuario de la base de datos

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(express.static("public"));
server.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
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
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      Usuario.findOne({ where: { email: email } })
        .then((usuario) => {
          if (!usuario || !usuario.correctPassword(password)) {
            return done(null, false, {
              message: "Incorrect email or password.",
            });
          }
          return done(null, usuario);
        })
        .catch((err) => done(err));
    }
  )
);

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(function (id, done) {
  Usuario.findByPk(id)
    .then((usuario) => {
      done(null, usuario);
    })
    .catch((err) => done(err, null));
});

//----------------------------------PASSPORT FACEBOOK-STRATEGY---------------------------------------
passport.use(
  new FacebookStrategy(
    {
      clientID: "1086208491813234",
      clientSecret: "11a1a7d1065e475e4a86d149c78622ec",
      callbackURL: "/auth/facebook/callback",
      rofileFields: ["id", "emails", "displayName"],
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        user = { ...profile };
        return cb(err, user);
      });
    }
  )
);

// async (accessToken, refreshToken, profile, done) => {
//   try {
//     const [user, created] = await User.findOrCreate({
//       where: { facebookId: profile.id },
//       defaults: {
//         name: profile.displayName,
//         email: profile.emails[0].value,
//       },
//     });
//     if (!user)
//       return done(null, false, {
//         message: "No pudimos loguearte con esa cuenta",
//       });
//     return done(null, user);
//   } catch (error) {
//     done(error);
//   }
// try {
//   const [user, created] = await User.findOrCreate({
//     where: { facebookId: profile.id },
//     defaults: {
//       name: profile.displayName,
//       email: profile.emails[0].value,
//     },
//   });

//   // On error
//   if (!user)
//     return done(null, false, {
//       message: "No pudimos loguearte con esa cuenta",
//     });

//   // On success
//   return done(null, user);
// } catch (error) {
//   done(error);
// }

//----------------------------------PASSPORT GOOGLE-STRATEGY---------------------------------------
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "yourclientid",
//       clientSecret: "yourclientsecret",
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       Usuario.findOrCreate({
//         where: { googleId: profile.id },
//         defaults: {
//           nombre: profile.displayName,
//           email: profile.emails[0].value,
//         },
//       });
//       if (!usuario)
//         return done(null, false, {
//           message: "No hemos pudimos loguearte con esa cuenta",
//         });
//       return done(null, usuario);
//     }
//   )
// );

function extractProfile(profile) {
  let imageUrl = "";
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl,
  };
}
passport.use(
  new GoogleStrategy(
    {
      clientID: config.clientId,
      clientSecret: config.secret,
      callbackURL: config.callback,
      accessType: "offline",
      userProfileURL: "https:www.googleapis.com/oauth2/v3/userinfo",
    },
    (accessToken, refreshToken, profile, cb) => {
      cb(null, extractProfile(profile));
    }
  )
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
//------Passport Sesion
server.use(passport.initialize());
server.use(passport.session());

server.use(cors());
server.use("/", routes);
server.use(userInjector);
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
