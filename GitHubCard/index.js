/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/myhousegotroaches")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const indexCards = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

console.log(followersArray);

axios
  .get("https://api.github.com/users/carlsachs")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://api.github.com/users/ErikRodriguez-webdev")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://api.github.com/users/ranccm")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://api.github.com/users/seanaleid")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://api.github.com/users/Reikiryo")
  .then((response) => {
    console.log(response);
    const runDataInComponent = splitUsersFunc(response.data);
    indexCards.appendChild(runDataInComponent);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function splitUsersFunc(obj) {
  const divCard = document.createElement("div");
  const imgURL = document.createElement("img");
  const divCardInfo = document.createElement("div");
  const h3Name = document.createElement("h3");
  const pUsername = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");
  const aUserURL = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  divCard.classList.add("card");
  imgURL.src = obj.avatar_url;
  divCardInfo.classList.add("card-info");
  h3Name.classList.add("name");
  h3Name.textContent = obj.name;
  pUsername.classList.add("username");
  pUsername.textContent = obj.login;
  pLocation.textContent = obj.location;
  pProfile.textContent = "Profile: ";
  aUserURL.href = obj.url;
  aUserURL.textContent = obj.url;
  pFollowers.textContent = "Followers: " + obj.followers;
  pFollowing.textContent = "Following: " + obj.following;
  pBio.textContent = "Bio:" + obj.bio;

  divCard.appendChild(imgURL);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(h3Name);
  divCardInfo.appendChild(pUsername);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);
  pProfile.appendChild(aUserURL);

  return divCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
