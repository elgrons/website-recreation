window.onload = function() {
  
  const favoriteThings = document.querySelector("h1");
  favoriteThings.remove();

  const hElement = document.createElement("h1"); 
  hElement.append("Webpage Recreation Practice");
  document.querySelector("body").append(hElement);

  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpage was created wtih JavaScript.")
  document.querySelector("body").append(pElement);

  const imgElement = document.createElement("img");
  imgElement.setAttribute('src', "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute('alt', "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute('width', '50%');
  document.body.appendChild(imgElement);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "tanagerFacts");
  document.querySelector("body").append(ul);
  const liOne = document.createElement ("li");
  const liTwo = document.createElement ("li");
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  document.getElementById("tanagerFacts").append(liOne, liTwo);

  const h2Element = document.createElement("h2"); 
  h2Element.append("Source");
  document.querySelector("body").append(h2Element);

  const sourceLink = document.createElement("a");
  sourceLink.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager")
  // THIS IS WHAT WE DID WRONG: sourceLink.append("href=");
  // sourceLink.append("https://en.wikipedia.org/wiki/Multicoloured_tanager"); --This was WRONG
  sourceLink.append("Wikipedia");
  document.querySelector("body").append(sourceLink);

};

