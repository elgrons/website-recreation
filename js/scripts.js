window.onload = function() {
  //event.preventDefault()
  
  const favoriteThings = document.querySelector("h1");
  favoriteThings.remove();

  const hElement = document.createElement("h1"); 
  hElement.append("Webpage Recreation Practice")
  console.log("h1",hElement);
  document.querySelector("body").append(hElement);
};
