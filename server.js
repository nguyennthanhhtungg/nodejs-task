const app = require('./app');


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`NodeJs Task API is running at http://localhost:${PORT}`);
})
