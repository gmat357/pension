const express = require('express');
const app = express();
const path = require('path');
const port = 8006;
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

const indexRouter = require('./routers/index');


app.use('/public',express.static(path.join(__dirname,"public")));
app.use('/public/iksan',express.static(path.join(__dirname,"public")));
app.use('/public/buan',express.static(path.join(__dirname,"public")));
app.use('/public/gunsan',express.static(path.join(__dirname,"public")));
app.use('/public/kimje',express.static(path.join(__dirname,"public")));
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
// app.get('/kimje/about',kimjeRouter);
// app.get('/kimje/room',kimjeRouter);
// app.get('/kimje/service',kimjeRouter);
// app.get('/kimje/infomation',kimjeRouter);
// app.get('/kimje/travel',kimjeRouter);


app.listen(port,()=>{console.log(port+"server")});

