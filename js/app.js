// --------------
// Hover animaton
// --------------

const mouthSpeed = 0.3;
const easeType = Power2.easeOut;
const mouthOpen = gsap.timeline({ paused: true });
mouthOpen.to('.mouth-back', {duration: mouthSpeed, ease: easeType, y: -70}, 0);
mouthOpen.to('.tongue', {duration: mouthSpeed * 1.5, ease: easeType, y: -70}, 0);
mouthOpen.to('.teeth', {duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2}, 0);
mouthOpen.to('.body', {duration: mouthSpeed, ease: easeType, scaleY: 1.06, transformOrigin: 'center bottom'}, 0);
mouthOpen.to('.freckles', {duration: mouthSpeed, ease: easeType, y: -10}, 0);
mouthOpen.to('.ears', {duration: mouthSpeed, ease: easeType, y: 6}, 0);
mouthOpen.to('.eye-right', {duration: mouthSpeed, ease: easeType, x: -2}, 0);
mouthOpen.to('.eye-left', {duration: mouthSpeed, ease: easeType, x: 2}, 0);
mouthOpen.to('.eyes', {duration: mouthSpeed, ease: easeType, y: 2}, 0);
mouthOpen.to('.nostrils', {duration: mouthSpeed, ease: easeType, y: -6}, 0);

// ------------
// Mouse events
// ------------

const button = document.querySelector('button');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton() { mouthOpen.play(); }
function leaveButton() { mouthOpen.reverse(); }

// ----------
// Ear wiggle
// ----------

const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
earWiggle.set('.ear-right', { transformOrigin:"center center" });
earWiggle.to('.ear-right', {duration: 0.1, rotation: 45});
earWiggle.to('.ear-right', {duration: 0.1, rotation: 0});

window.setInterval(() => earWiggle.play(0), 2500);