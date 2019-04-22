const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username, password, done) {
        console.log(`LocalStrategy ${username} : ${password}`);

        User.findOne({
            username
        }, function (err, user) {
            console.log("err local: " + err);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }
            return done(null, {name : user.name});
        });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    function (jwtPayload, done) {
        console.log("JWTStrategy %j ", jwtPayload )
        User.findOne({
            username: jwtPayload.name
        }, function (err, user) {
            if (err) {
                console.log("err jwt %j ",err);
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, {name : user.name});
        });
        // //find the user in db if needed
        // return UserModel.findOneById(jwtPayload.id)
        //     .then(user => {
        //         return done(null, user);
        //     })
        //     .catch(err => {
        //         return done(err);
        //     });
    }
));