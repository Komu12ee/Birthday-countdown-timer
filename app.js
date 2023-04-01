var endDate = "27November 2025 12:00 AM"
document.getElementById("end-date").innerText=endDate;
const Input=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate);
    const now =new Date()
    // console.log(end);
    // console.log(now);
    const diff=(end-now)/1000;
    //................convert into days
    // console.log(diff)

    if(diff<0)return;
    Input[0].value=Math.floor(diff/3600/24);
    Input[1].value=Math.floor(diff/3600)%24;
    Input[2].value=Math.floor(diff/60)%60;
    Input[3].value=Math.floor(diff)%60;

}
// initial call
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)
