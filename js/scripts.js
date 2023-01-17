window.onload = function() {
  
  const favoriteThings = document.querySelector("h1");
  favoriteThings.remove();

  const hElement = document.createElement("h1"); 
  hElement.append("Webpage Recreation Practice");
  document.querySelector("body").append(hElement);

  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpage was created wtih JavaScript.")
  document.querySelector("body").append(pElement);

  // const imgElement = document.createElement("img");
  // imgElement.append("src=https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  // document.querySelector("body").append(imgElement);

const imgElement = document.createElement("img");
imgElement.setAttribute('src', "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
imgElement.setAttribute('alt', "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
imgElement.setAttribute('width', '50%');
document.body.appendChild(imgElement);
};