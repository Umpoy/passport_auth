module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('welcome');
    });

    app.get('/login', (req, res) => {
        res.send('Login');
    });

    app.get('/register', (req, res) => {
        res.send('Register');
    });
}