import './sliders';
import { validateForm, changeLabel, resetForm } from './form';
import { closeMenuOnItemClick, switchMenu } from './menu';
import { initAdvSlider } from './adv-slider';
import { initGallerySlider } from './gallery-slider';

// form
validateForm();
changeLabel();
resetForm();

// menu
switchMenu();
closeMenuOnItemClick();

// adv slider
initAdvSlider();

// gallery slider
initGallerySlider();

var userDeviceArray = [
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

var platform = navigator.userAgent;

function getPlatform() {
  for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
          return userDeviceArray[i].device;
      }
  }
  return 'Неизвестная платформа!' + platform;
}

console.log('Ваша платформа: ' + getPlatform());
