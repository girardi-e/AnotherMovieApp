// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
import 'select2/dist/css/select2.min.css'

import { initSelect2 } from './plugins/init_select2';
import { navSlide } from '../components/navbar';
import { bannerLoop} from '../components/banner';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  navSlide();
  bannerLoop();
  initSelect2();
});
