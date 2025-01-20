import './sliders';
import './platform-check'
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
