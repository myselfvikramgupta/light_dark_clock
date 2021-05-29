var inc=1000;
clock()
function clock(){
    const date=new Date();
  
    const hours = ((date.getHours()+11)%12+1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour=hours*30;
    const minute=minutes*6;
    const second=seconds*6;
    const h=(hours < 10) ? "0"+hours : hours;
    const m=(minutes < 10) ? "0"+minutes : minutes;

    document.querySelector('.hours').innerHTML=h;
    document.querySelector('.mins').innerHTML=m;
    document.querySelector('.hour').style.transform=`rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform=`rotate(${minute}deg)`;
    document.querySelector('.second').style.transform=`rotate(${second}deg)`;
}

document.querySelector('.timing >p').innerHTML= dayjs(new Date()).format("ddd, MMM YYYY")
//document.querySelector('.mobile_header >h4').innerHTML= dayjs(new Date()).format("ddd, MMM YYYY")
setInterval(clock,inc);

function changeTheme(){
    const  checkBox = document.getElementById("checkbox-btn");
    if(checkBox.checked) {
   // document.getElementById('theme_name').textContent="Dark"
    theme.setAttribute("data-theme", "light")
     document.getElementById('theme_image').setAttribute("src","moon.png")
    }
    else{
       // document.getElementById('theme_name').textContent="Light"
        const theme=document.getElementById('theme')
        theme.setAttribute("data-theme", "dark")
        document.getElementById('theme_image').setAttribute("src","sunny.png")
    }
}
navigator.getBattery().then((batteryCallback)=>{
    document.getElementById("battery_lavel").style.width=""+(parseInt(batteryCallback.level*100))+"%";
    document.getElementById("battery_lavel").style.height="100%";
    document.getElementById("battery_lavel").style.background="#000000";
    document.getElementById("battery_text").textContent=parseInt(batteryCallback.level*100)+"%";

})
