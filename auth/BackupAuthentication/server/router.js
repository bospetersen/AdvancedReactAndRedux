const Authentication = require('./controllers/authentication.ctrl')
const passportService = require('./services/passport.services');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'You are authorized!' })
  })

  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)

}
// app.get('/', () => {})