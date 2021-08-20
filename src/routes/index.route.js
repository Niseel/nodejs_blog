const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');
const meRouter = require('./me.route');

// app is express instance
function route(app) {

    // Các path /news sẽ đi vô đây
    app.use('/news', newsRouter);
    // Các path /me sẽ đi vô đây
    app.use('/me', meRouter);

    // Các route nếu k khớp sẽ vào /
    app.use('/', sitesRouter);
    
}

module.exports = route;
