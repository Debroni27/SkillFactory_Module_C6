const btnSend = document.querySelector(".btn-send");
const btnLocation = document.querySelector(".btn-send-location");
const inputText = document.querySelector(".input-text");
const chatBody = document.querySelector(".chat-body");
const urlSoc = "wss://echo.websocket.org/";

let sendMessage = ``;
let webSocket = new WebSocket(urlSoc);

function success(position) {
  sendMessage += `<p class="send-message">
      <a href="https://www.openstreetmap.org/#map=18/
      ${position.coords.latitude}/${position.coords.longitude}"
      target="_blank">Гео-локация</a></p>`;
  chatBody.innerHTML = sendMessage;
}

function unsuccess() {
  confirm("Эх, точно не хотите поделиться местоположением?:)");
  sendMessage += `<p class="send-message">
      Невозможно получить ваше текущее местоположение</p>`;
  chatBody.innerHTML = sendMessage;
}

btnSend.addEventListener("click", () => {
  let message = inputText.value;
  if (message) {
    sendMessage += `<p class="send-message">
        ${message}</p>`;
    chatBody.innerHTML = sendMessage;
  }
  webSocket.send(message);
  webSocket.onmessage = function (event) {
    sendMessage += `<p class="echo-message">${event.data}</p>`;
    chatBody.innerHTML = sendMessage;
  };
  inputText.value = "";
});

btnLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, unsuccess);
  } else {
    sendMessage += `<p class="send-message">Geolocation не поддерживается</p>`;
    chatBody.innerHTML = sendMessage;
  }
});
