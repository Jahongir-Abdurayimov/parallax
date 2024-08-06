 var elHeroTitle = document.querySelector(".js-hero-title");
 var elHeroTopLeaf = document.querySelector(".js-topleft");
 var elHeroMountainImg = document.querySelector(".js-hero-mountains");
 var elHeroLeftIsland = document.querySelector(".js-hero-leftbottom-island");
 var elHeroRightIsland = document.querySelector(".js-hero-rightbottom-island");
 var elJsInfo = document.querySelector(".js-information-section")
 
 
 window.addEventListener("scroll", function() {

  if(window.innerHeight >= 764) {
    elJsInfo.style.top = -110 + "px";
  } else {
    elJsInfo.style.top = 0;
  }


  var scrollValue = this.window.scrollY;
  
  elHeroTitle.style.marginTop = scrollValue * 1.5 + "px";
  
  elHeroTopLeaf.style.top = scrollValue * -1.5 + "px";
  elHeroTopLeaf.style.left = scrollValue * 1.5 + "px";
  
  elHeroMountainImg.style.top = scrollValue * 1 + "px";
  
  elHeroLeftIsland.style.left = scrollValue * -1.5 + "px";
  elHeroLeftIsland.style.top = scrollValue * 0.7 + "px";
  
  elHeroRightIsland.style.left = scrollValue * 1 + "px";
  elHeroRightIsland.style.top = scrollValue * 0.8 + "px";


if (scrollValue > 700) {
  elHeroTitle.style.marginTop = 0;
  
  elHeroTopLeaf.style.top = 0;
  elHeroTopLeaf.style.left = 0;
  
  elHeroMountainImg.style.top = 0;
  
  elHeroLeftIsland.style.left = 0;
  elHeroLeftIsland.style.top = 0;
  
  elHeroRightIsland.style.left = 0;
  elHeroRightIsland.style.top = 0;
}

if(scrollValue > 1500) {
  elJsInfo.style.top= 0;
}
})
