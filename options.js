/**
* ---------------------------------------------------------------------------------
* | 팝업 |
* ---------------------------------------------------------------------------------
**/

// changeColor ID element 를 취득
// let changeColor = document.getElementById("changeColor");

// // 스토리지에 저장되어 있는 컬러가 있다면 표시
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // 배경색 버튼을 클릭하였을 경우 이벤트 등록
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// /**
//  * @description 현재 웹 페이지의 Body 요소의 배경색을 변경해주는 함수
//  **/
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }


// 색추가 버튼 누르면, 색생성하기
//이제 여기 option창에서 저장하고 백그라운드에서 가져오면된다.
let appendColor = document.getElementById("appendColor")
let colors = document.querySelector("#colors")

appendColor.addEventListener("click", async () => {
  var tmp = document.createElement("input")

  //여기서 생기는 버튼의 css를 설정해줘야할까?
  tmp.type = "button"
  tmp.style.backgroundColor = "green"

  colors.appendChild(tmp);
});

