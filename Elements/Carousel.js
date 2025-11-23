const images = document.querySelectorAll('.carousel-image')
const imageLinks = [`url(images/Homepage.jpg)`,"url(images/20251019_163431.jpg)", 
    "url(images/20251019_155957.jpg)", "url(images/20251019_085415.jpg)", 
    "url(images/20251019_085410.jpg)","url(images/20251019_113216.JPG)", 
    "url(images/20251019_163644.JPG)", "url(images/IMG_9674.JPG)"]
const radius = window.screen.width/4
const progress = {
  value: 0
}
const carousel = document.querySelector('.carousel')

Observer.create({
  target: carousel,
  type: "wheel,pointer",
  onPress: (self) => {
    carousel.style.cursor = 'grabbing'
  },
  onRelease: (self) => {
    carousel.style.cursor = 'grab'
  },
  onChange: (self) => {
    gsap.killTweensOf(progress)
    const p = self.event.type === 'wheel' ? self.deltaY * -.005 : self.deltaX * .5
    gsap.to(progress, {
      duration: 2,
      ease: 'power4.out',
      value: `+=${p}`
    })
  }
})
//=============================Scroll lockdown===============================
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
//execute

const animate = () => {
  images.forEach((image, index) => {
    image.width = radius;
    const theta = index / images.length - progress.value
    const x = -Math.sin(theta * Math.PI * 2) * radius
    const y = Math.cos(theta * Math.PI * 2) * radius
    image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
    //const c = Math.floor(index/images.length * 360)
    //image.style.background = `hsla(${c}, 90%, 50%, .5)`
    image.style.backgroundImage = imageLinks[index];
  })
}
gsap.ticker.add(animate)
carousel.addEventListener("mouseenter", disableScroll);
carousel.addEventListener("mouseleave", enableScroll)