// примечание: в блоке tours tablet тесты проходили с разными значениями на windows и на macOS.
// в этом файле осуществляется проверка системы пользователя, чтобы в зависимости от этого менять значения marginBottom на 1px.

const toursCardTitles = document.querySelectorAll('.tours__card-title');
const TABLET_MIN_WIDTH = 768;
const TABLET_MAX_WIDTH = 1439;

const userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
  {device: 'Symbian', platform: /Symbian/},
  {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Tablet OS', platform: /Tablet OS/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
  {device: 'Macintosh', platform: /Macintosh/}
];

const platform = navigator.userAgent;

function getPlatform() {
  for (const i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return `Неизвестная платформа!${ platform}`;
}

if (getPlatform()=== 'Windows') {
  if (window.innerWidth >= TABLET_MIN_WIDTH && window.innerWidth <= TABLET_MAX_WIDTH) {
    toursCardTitles.forEach((toursCardTitle) => {
      toursCardTitle.style.marginBottom = '10px';
    })
  }
}

if (getPlatform()=== 'Macintosh') {
  if (window.innerWidth >= TABLET_MIN_WIDTH && window.innerWidth <= TABLET_MAX_WIDTH) {
    toursCardTitles.forEach((toursCardTitle) => {
      toursCardTitle.style.marginBottom = '11px';
    })
  }
}
