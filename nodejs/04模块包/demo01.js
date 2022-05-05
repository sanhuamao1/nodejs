function dataFormat(){
    const date=new Date()
    const y=date.getFullYear()
    const m=padZero(date.getMonth()+1)
    const d=padZero(date.getDate())
    const hh=padZero(date.getHours())
    const mm=padZero(date.getMinutes())
    const ss=padZero(date.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(number){
    return number<9?'0'+number:number
}
module.exports={
    dataFormat
}