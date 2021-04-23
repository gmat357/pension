const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
// buan
const buanIndexRouter = require('./routers/buan/index');
const buanAboutRouter = require('./routers/buan/about');
const buanRoomRouter = require('./routers/buan/room');
const buanTravelRouter = require('./routers/buan/travel');
const buanReservationRouter = require('./routers/buan/reservation');
const buanInfomationRouter = require('./routers/buan/infomation');

// iksan
const iksanIndexRouter = require('./routers/iksan/index');
const iksanWelcomeRouter = require('./routers/iksan/welcome');
const iksanRoomRouter = require('./routers/iksan/room');
const iksanServiceRouter = require('./routers/iksan/service');
const iksanCommunityRouter = require('./routers/iksan/community');

//  gunsan
const gunsanIndexRouter = require('./routers/gunsan/index');
const gunsanAboutRouter = require('./routers/gunsan/about');
const gunsanRoomRouter = require('./routers/gunsan/room');
const gunsanServiceRouter = require('./routers/gunsan/service');
const gunsanTravelRouter = require('./routers/gunsan/travel');
const gunsanInfomationRouter = require('./routers/gunsan/infomation');

//  kimje
const kimjeRouter = require('./routers/kimje/index');

const jeonjuRouter = require('./routers/jeonju/index');

const jeongeupRouter = require('./routers/jeongeup/index');

const gochangRouter = require('./routers/gochang/index');

const indexRouter = require('./routers/index');

const seocheonRouter = require('./routers/seocheon/index');

const daecheonRouter = require('./routers/daecheon/index');

const taeanRouter = require('./routers/taean/index');

const gongjuRouter = require('./routers/gongju/index');

const daejeonRouter = require('./routers/daejeon/index');


app.use('/public',express.static(path.join(__dirname,"public")));
app.use('/public/iksan',express.static(path.join(__dirname,"public")));
app.use('/public/buan',express.static(path.join(__dirname,"public")));
app.use('/public/gunsan',express.static(path.join(__dirname,"public")));
app.use('/public/kimje',express.static(path.join(__dirname,"public")));
app.use('/html/daecheon',express.static(path.join(__dirname,"html")));
app.use('/taean/about/:page',express.static(path.join(__dirname,"public")));
app.use('/public/daejeon',express.static(path.join(__dirname,"public")));
app.use('/daejeon/about/:page',express.static(path.join(__dirname,"public")));
app.use('/daejeon/room/:page',express.static(path.join(__dirname,"public")));
app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use('/',indexRouter);
//buan
app.get('/buan',buanIndexRouter);
app.get('/buan/about', buanAboutRouter);
app.get('/buan/room', buanRoomRouter);
app.get('/buan/room_sub', buanRoomRouter);
app.get('/buan/travel', buanTravelRouter);
app.get('/buan/reservation', buanReservationRouter);
app.get('/buan/infomation', buanInfomationRouter);

//iksan
app.get('/iksan',iksanIndexRouter);
app.get('/iksan/welcome', iksanWelcomeRouter);
app.get('/iksan/room', iksanRoomRouter);
app.get('/iksan/room_page', iksanRoomRouter);
app.get('/iksan/service', iksanServiceRouter);
app.get('/iksan/community', iksanCommunityRouter);

//gunsan
app.get('/gunsan',gunsanIndexRouter);
app.get('/gunsan/about',gunsanAboutRouter);
app.get('/gunsan/room',gunsanRoomRouter);
app.get('/gunsan/service',gunsanServiceRouter);
app.get('/gunsan/travel',gunsanTravelRouter);
app.get('/gunsan/infomation',gunsanInfomationRouter);

//kimje
app.get('/kimje',kimjeRouter);
app.get('/kimje/:query',kimjeRouter);

app.get('/jeonju',jeonjuRouter);
app.get('/jeonju/:query',jeonjuRouter);

app.get('/jeongeup',jeongeupRouter);
app.get('/jeongeup/:query',jeongeupRouter);

app.get('/gochang',gochangRouter);
app.get('/gochang/:query',gochangRouter);

app.get('/seocheon',seocheonRouter);
app.get('/seocheon/about',seocheonRouter);
app.get('/seocheon/room',seocheonRouter);
app.get('/seocheon/room_sub',seocheonRouter);
app.get('/seocheon/facilities',seocheonRouter);
app.get('/seocheon/service',seocheonRouter);
app.get('/seocheon/reservation',seocheonRouter);

app.get('/daecheon',daecheonRouter);
app.get('/daecheon/about',daecheonRouter);
app.get('/daecheon/room',daecheonRouter);
app.get('/daecheon/room_sub',daecheonRouter);
app.get('/daecheon/facilities',daecheonRouter);
app.get('/daecheon/facilities_sub',daecheonRouter);
app.get('/daecheon/service',daecheonRouter);
app.get('/daecheon/reservation',daecheonRouter);
app.get('/daecheon/community',daecheonRouter);

app.get('/taean',taeanRouter);
app.get('/taean/about/:page',taeanRouter);
app.get('/taean/villa',taeanRouter);
app.get('/taean/villa_sub',taeanRouter);
app.get('/taean/special',taeanRouter);
app.get('/taean/facilities',taeanRouter);
app.get('/taean/community',taeanRouter);
app.get('/taean/around',taeanRouter);
app.get('/taean/qna',taeanRouter);
app.get('/taean/review',taeanRouter);

app.get('/daejeon',daejeonRouter);
app.get('/daejeon/about/:page',daejeonRouter);
app.get('/daejeon/room/:page',daejeonRouter);
app.get('/daejeon/facilities',daejeonRouter);
app.get('/daejeon/community',daejeonRouter);
app.get('/daejeon/around',daejeonRouter);
app.get('/daejeon/location',daejeonRouter);

app.get('/gongju',gongjuRouter);

app.listen(port,()=>{console.log(port+"server")});

