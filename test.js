var Koa = require('Koa');
var passport = require('passport');
var app = Koa();
var BasicStrategy = require('passport-http').BasicStrategy;
passport.use(new BasicStrategy(
   function (username, password, done) {
      //perform auth here for user.
      //use done(null,false) if auth fails
      console.log('BasicStrategy')
      done(null, {
         user: "xyz"
      });


   }
));

app.get('/app', passport.authenticate('basic', {
   session: false
}), (req, res) => {
   console.log("Hello");

   res.send('ok');
});

app.listen(4000, (err, res) => {
   console.log(err, res);
   console.log('server is launched');
})