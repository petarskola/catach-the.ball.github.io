var tap=0;
var time = new Date();
time.setMilliseconds(200);
var inter;
var audio = new Audio('sound.wav');
var audioOver = new Audio('over.wav');

function startG()
{
    audio.play();
    ballS.style.display="none";
    ball.style.left=((Math.random()*(75-20))+20).toString() + "%";
    ball.style.top=((Math.random()*(80-15))+15).toString() + "%";
    tap++;
    taps.innerHTML="TAPS: "+ tap;
    time.setMilliseconds(200);
    clearInterval(inter);
    inter = setInterval(mili,1);
}
function mili()
{
    time.setMilliseconds(time.getMilliseconds()-1);
    timee.innerHTML="TIME: "+ time.getMilliseconds() + "ms";
    if(time.getMilliseconds()<=0)
        over();
}
function refresh()
{
    audio.play();
    ball.style.left=((Math.random()*(75-20))+20).toString() + "%";
    ball.style.top=((Math.random()*(80-15))+15).toString() + "%";
    tap++;
    taps.innerHTML="TAPS: "+ tap;
    time.setMilliseconds(200);
    clearInterval(inter);
    inter = setInterval(mili,1);
}
function over()
{
    audioOver.play();
    gameover.style.fontSize="7vh";
    ballL.style.left=ball.style.left;
    ballL.style.top=ball.style.top;
    ballL.style.display="block";
    ball.style.display="none";
    clearInterval(inter);
    res.style.width="30%";
    res.style.height="7%";
}
function restart()
{
    location.replace(location.href);
}