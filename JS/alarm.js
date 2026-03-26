'use strict';

/*============== Item Select ================*/

const popupMainContener = document.querySelector('.popup-main');
const popupAlramBtn = document.querySelector('.alarmbtn');
const cancelAlramBtn = document.querySelector('.cancel-btn');
const setAlramBtn = document.querySelector('.set-btn');
const alramInput = document.querySelector('#set-alarm');
const audio = document.querySelector('audio');
const stopAlarmMain = document.querySelector('.stop-alarm-main');
const stopAlarmBtn = document.querySelector('.stop-alarm-btn');

/*================ WORKING =================*/

/*------popup open--------*/

popupAlramBtn.addEventListener('click', function () {
  popupMainContener.classList.remove('hidden');
});

/*------popup close--------*/

document.addEventListener('click', function (e) {
  if (popupMainContener.classList.contains('hidden')) return;

  if (
    e.target.classList.contains('popup-main') ||
    e.target.classList.contains('cancel-btn')
  ) {
    popupMainContener.classList.add('hidden');
  }
});

/*------Set Alaram--------*/

let alarmValue = null;

const setAlramFunction = () => {
  alarmValue = alramInput.value;

  if (!alarmValue) return;

  popupMainContener.classList.add('hidden');

  setTimeout(() => {
    alert('⏰ Your Alarm is Set');
  }, 100);
};

setAlramBtn.addEventListener('click', setAlramFunction);

const checkAlram = () => {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');

  const currentTime = `${hour}:${minute}`;

  if (alarmValue && alarmValue === currentTime) {
    audio.play();
    alarmValue = null;

    stopAlarmMain.classList.remove('hidden');
  }
};

setInterval(checkAlram, 1000);

stopAlarmBtn.addEventListener('click', function () {
  stopAlarmMain.classList.add('hidden');

  audio.pause();
  audio.currentTime = 0;
  alarmValue = null;
});
