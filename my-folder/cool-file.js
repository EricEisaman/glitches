var sphere = document.querySelector('#text1');
sphere.addEventListener("click", function () {
  sphere.setAttribute("scale", "5 5 5");
  console.log("Sphere clicked");
});
console.log('Script loaded.');