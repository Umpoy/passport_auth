module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('welcome');
    });

    app.get('/dashboard', (req, res) => {
        res.render('dashboard');
    })
}