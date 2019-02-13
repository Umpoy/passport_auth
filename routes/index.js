module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('welcome');
    });

    app.get('/users/login', (req, res) => {
        res.render('login');
    });

    app.get('/users/register', (req, res) => {
        res.render('register');
    });

    app.get('/dashboard', (req, res) => {
        res.render('dashboard');
    })
}