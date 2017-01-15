const express = require('express');

const app = express();
const PORT = process.env.port || 3000;

// app.use(function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] === 'http') {
//         next();
//     } else {
//         res.redirect('http://' + req.hostname + req.url);
//     }
// });

app.use(express.static('build'));

app.listen(PORT, function () {
    console.log('Express is running on port ' + PORT);
});