'use strict';

/*-------- CLOCK---------*/

const s = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

/*-------- WATCh---------*/

const meridiem = document.querySelector('.meridiem');
const watchTime = document.querySelector('.watch-time');
const watchDate = document.querySelector('.watch-date');

/*--------- Clock & Watch Function --------- */

const displayTime = () => {
  const now = new Date();

  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();

  /*-------- Clock ----------*/

  let secRotate = ss * 6;
  let minRotate = mm * 6;
  let hourRotate = hh * 30 + mm * 0.5;

  sec.style.transform = `rotate(${secRotate}deg)`;
  min.style.transform = `rotate(${minRotate}deg)`;
  hour.style.transform = `rotate(${hourRotate}deg)`;

  /*-------- Watch ----------*/

  let timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  let dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const time = now.toLocaleTimeString('en-US', timeOptions);
  const date = now.toLocaleTimeString('en-US', dateOptions);

  const [hourMinute, ampm] = time.split(' ');
  const [month, day, year] = date.split(' ');

  watchTime.textContent = hourMinute;
  meridiem.textContent = ampm;

  watchDate.textContent = `${day} ${month} ${year}`;
};

setInterval(displayTime, 1000);
