document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 1200, npcCollisionRadius: 100,  jumpHeight: 300, actionDuration:700, heroSpeed: 200});
});