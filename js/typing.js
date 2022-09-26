// 자바스크립트
var typeText = document.querySelector(".typeText")
var textToBeTyped = "Welcome To My Portfolio"
var textToBeTypedArr = ["Welcome To My Portfolio :)","Thank you for visiting"]
var index = 0, isAdding = true, textToBeTypedIndex = 0
 
function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim();

// 실시간 시계, 날짜, 요일
const clock = document.querySelector('.clock');
const nowClock = new Date();
const currentD = document.querySelector('.data');

getTime();
function getTime(){ 
  const currentH = nowClock.getHours();
  const currentM = nowClock.getMinutes();
  clock.innerHTML = `${currentH<10 ? `0${currentH}`:currentH} : ${currentM<10 ? `0${currentM}`:currentM}`

  const currentMon = nowClock.getMonth()+1;
  const currentDate = nowClock.getDate();
  const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  let i = nowClock.getDay();

  currentD.innerHTML = `${currentMon}월 ${currentDate}일 ${week[i]}`
}

setInterval(getTime, 10000);

