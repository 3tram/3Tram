const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

document.addEventListener("DOMContentLoaded", () =>{
    const loaded = new Date();
    const purchased = new Date(loaded.getTime()-(13*60*1000));
    var tomorrow = new Date(purchased.getTime());
    if (purchased.getHours() > 2) {
        tomorrow.setDate(tomorrow.getDate()+1);
    }

    tomorrow.setHours(2);
    tomorrow.setMinutes(0);

    const day = days[purchased.getDay()].toString();
    const date = purchased.getDate().toString();
    const month = months[purchased.getMonth()];
    const year = purchased.getFullYear().toString();
    const hour = purchased.getHours().toString();

    var min = purchased.getMinutes().toString();
    if (min.length === 1) min = '0' + min;

    document.getElementById('createdDate').textContent = `
    ${day} 
    ${date} 
    ${month} 
    ${year} 
    ${hour}:${min}
    `;

    var dayIndex = tomorrow.getDay();
    var dateExp = tomorrow.getDate();
    var monthIndex = tomorrow.getMonth();
    var yearExp = tomorrow.getFullYear();

    document.getElementById('expiryDate').textContent = `
    ${days[dayIndex]}
    ${dateExp}
    ${months[monthIndex]} 
    ${yearExp} 
    2:00
    `;
    start(tomorrow);
});

const start = (expiry) => {
    setInterval(() => {
        const now = new Date();

        const day = days[now.getDay()].toString();
        const date = now.getDate().toString();
        const month = months[now.getMonth()];
        const year = now.getFullYear().toString();

        var hour = now.getHours().toString();
        if (hour.length === 1) hour = '0' + hour;

        var min = now.getMinutes().toString();
        if (min.length === 1) min = '0' + min;

        var sec = now.getSeconds().toString();
        if (sec.length === 1) sec = '0' + sec;

        document.getElementById('currentDate').textContent = `
        ${day} 
        ${date} 
        ${month} 
        ${year}`;

        document.getElementById('currentTime').textContent = `
        ${hour} : 
        ${min} : 
        ${sec}`;
        
        const diff = new Date(Math.abs(expiry-now))

        document.getElementById('expiryCountdown').textContent = `
        ${diff.getDate()-1}days 
        ${diff.getHours()-1}hrs 
        ${diff.getMinutes()}mins 
        ${diff.getSeconds()}secs 
        `
    }, 1000)
}