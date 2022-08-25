const saat = document.getElementById(`saat`)
const deqiqe = document.getElementById(`deqiqe`)
const saniye = document.getElementById(`saniye`)

setInterval(() =>{
    const newData=new Date()
    saat.textContent=newData.getHours() < 10 ? `0${newData.getHours()}` : newData.getHours()
    deqiqe.textContent=newData.getMinutes() < 10 ? `0${newData.getMinutes()}` : newData.getMinutes()
    saniye.textContent=newData.getSeconds() < 10 ? `0${newData.getSeconds()}` : newData.getSeconds()
}, 1000);