//bannerStatus => photo being displayed
let bannerStatus = 1;
//how long each photo will be displayed
let bannerTimer = 4000;

window.onload = () => {
  bannerLoop();
}

setInterval(() => {
  bannerLoop();
}, bannerTimer);


const bannerLoop = () => {
  if(bannerStatus === 1) {
    //fist image on the left side
    document.getElementById("image-banner2").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("image-banner1").style.right = '0px';
      document.getElementById("image-banner1").style.zIndex = '1';

      document.getElementById("image-banner2").style.right = "-100%";
      document.getElementById("image-banner2").style.zIndex = '2';

      document.getElementById("image-banner3").style.right = '100%';
      document.getElementById("image-banner3").style.zIndex = '0';
    }, 500);

    setTimeout( () => {
      document.getElementById("image-banner2").style.opacity = '1';
    }, 1000);

    bannerStatus = 2;
  }
  else if(bannerStatus === 2) {
    //fist image on the left side
    document.getElementById("image-banner3").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("image-banner2").style.right = '0px';
      document.getElementById("image-banner2").style.zIndex = '1';

      document.getElementById("image-banner3").style.right = "-100%";
      document.getElementById("image-banner3").style.zIndex = '2';

      document.getElementById("image-banner1").style.right = '100%';
      document.getElementById("image-banner1").style.zIndex = '0';
    }, 500);

    setTimeout( () => {
      document.getElementById("image-banner3").style.opacity = '1';
    }, 1000);

    bannerStatus = 3;
  }
  else if(bannerStatus === 3) {
    //fist image on the left side
    document.getElementById("image-banner1").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("image-banner3").style.right = '0px';
      document.getElementById("image-banner3").style.zIndex = '1';

      document.getElementById("image-banner1").style.right = "-100%";
      document.getElementById("image-banner1").style.zIndex = '2';

      document.getElementById("image-banner2").style.right = '100%';
      document.getElementById("image-banner2").style.zIndex = '0';
    }, 500);

    setTimeout( () => {
      document.getElementById("image-banner1").style.opacity = '1';
    }, 1000);

    bannerStatus = 1;
  }
}

export {bannerLoop};
