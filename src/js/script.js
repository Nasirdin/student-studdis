const getDate = () => {
    let date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        day = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        month=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;
    document.getElementById('calendar').innerHTML = (day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()]+ " " + date.getFullYear());
}
setInterval(getDate, 0);

 