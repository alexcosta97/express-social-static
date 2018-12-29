const app = require('./server').app;
const userRoutes = require('./controllers/user');

app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/users/register', userRoutes.showRegistrationForm);
app.post('/users/register', userRoutes.createUser);
app.get('/users/login', userRoutes.showLoginForm);
app.post('/users/login', userRoutes.createSession);