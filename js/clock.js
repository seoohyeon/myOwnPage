const clock = document.querySelector("#clock");
const button = document.querySelector("#button button");

function getClock(){
    const today = new Date();
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    const milliseconds = String(today.getMilliseconds()).slice(1);
    const month = today.getMonth() + 1;  // 0부터 시작함 => 1더해줘야 1~12월 됨
    const date = today.getDate();
    let day = today.getDay(); // 0(일요일) ~ 6(토요일)

    switch(day){
        case 0:
            day = "일요일";
            break;
        case 1:
            day = "월요일";
            break;
        case 2:
            day = "화요일";
            break;
        case 3:
            day = "수요일";
            break;
        case 4:
            day = "목요일";
            break;
        case 5:
            day = "금요일";
            break;
        case 6:
            day = "토요일";
            break;
    }
    clock.innerHTML = `${month}월 ${date}일 ${day} / ${hours}:${minutes}:${seconds}:${milliseconds}`
    
}

getClock();
let interval = setInterval(getClock, 1);

// 버튼 누르면 버튼명이 pause으로 바뀌고 타이머가 시작됨
let toggle = false;

function clickPause(event){
    event.preventDefault();
    button.innerHTML = "다시시작";
    clearInterval(interval);
    toggle = true;
    console.log(toggle);
    
}

if(toggle){
    // 시작

}else{
    // 정지
}

button.addEventListener("click", clickPause);


// 버튼 또 누르면 버튼명이 start로 바뀌고 타이머가 정지됨

// note기능 넣기