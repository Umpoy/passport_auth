module.exports = (app) => {

    app.get('/users/login', (req, res) => {
        res.render('login');
    });

    app.get('/users/register', (req, res) => {
        res.render('register');
    });

}