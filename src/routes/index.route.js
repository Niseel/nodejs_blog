const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');

// app is express instance
function route(app) {
    // Các path /news sẽ đi vô đây
    app.use('/news', newsRouter);

    // Các route nếu k khớp sẽ vào /
    app.use('/', sitesRouter);
}

module.exports = route;
