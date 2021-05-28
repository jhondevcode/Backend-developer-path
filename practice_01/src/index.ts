import express = require('express');
import morgan = require('morgan');
import path = require('path');

const app = express();

// settings
app.use(morgan('dev'));
app.use(express.json());
app.set('port', process.env.PORT || 3000);      // configuracion del puerto

// routes
app.use(require('./routes/products'));

// static files
app.use(express.static(path.join(__dirname, "public")));        // cargando las archivos estaticos

app.listen(app.get('port'), () => {
    console.log(`App running on port ${app.get('port')}`);
});
