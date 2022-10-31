const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const cors = require('cors');
const dotenv = require('dotenv');
const indexRouter = require('./src/routes/index');
const registerRouter = require('./src/routes/register');
const loginRouter = require('./src/routes/login');
const checkRouter = require('./src/routes/check');
const logoutRouter = require('./src/routes/logout');
const {sequelize} = require('./src/models');

const app = express();

dotenv.config();

app.set('port', process.env.PORT || 3306);
app.set('view engine', 'html');
nunjucks.configure('./src/views', {
    express: app,
    watch : true,
});
sequelize.sync({force : false})
    .then(() =>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) =>{
        console.error(err);
    });
    
app.use(morgan('dev'));

app.use(express.static(path.join(`${__dirname}/..`, '/artasy_frontend/build/')));

app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use(cors());
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/check', checkRouter);
app.use('/logout', logoutRouter);

app.use((req, res, next) =>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) =>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});



app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '빈 포트에서 대기중');
});