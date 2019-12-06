/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/rupadhyayahacks')
.then(response => {
  // console.log(response);
  createCard(response.data);
  axios.get('https://api.github.com/users/rupadhyayahacks/followers')
  .then(response => {
    response.data.forEach(item => {
      axios.get(item.url)
      .then(response => {
        createCard(response.data);
      })
    })
  })
})

.catch(err => {
  console.log(err);
})

// axios.get('https://api.github.com/users/rupadhyayahacks/followers')
// .then(response => {
// response.data.forEach(item => {
//   axios.get(item.url)
//   .then(response => {
//     createCard(response.data)
//   })
// })
// })
  
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function createCard (data) {
  const newCard = document.createElement('div')
  const profImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const newName = document.createElement('h3')
  const newUser = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const linkProfile = document.createElement('a')
  const newFollowers = document.createElement('p')
  const newFollowing = document.createElement('p')
  const newBio = document.createElement('p')

  newCard.classList.add('card')
  profImage.src = data.avatar_url
  cardInfo.classList.add('card-info')
  newName.classList.add('name')
  newUser.classList.add('username')

  newName.textContent = data.name
  newUser.textContent = data.login
  profile.textContent = `Profile: `
  linkProfile.textContent = data.html_url
  linkProfile.href = data.html_url
  location.textContent = data.location
  newFollowers.textContent = `Followers: ${data.followers}`
  newFollowing.textContent = `Following: ${data.following}`
  newBio.textContent = `Bio: ${data.bio}`

newCard.appendChild(profImage)
newCard.appendChild(cardInfo)
cardInfo.appendChild(newName)
cardInfo.appendChild(newUser)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
profile.appendChild(linkProfile)
cardInfo.appendChild(newFollowers)
cardInfo.appendChild(newFollowing)
cardInfo.appendChild(newBio)


const entryPoint = document.querySelector('.cards')
entryPoint.appendChild(newCard)

return newCard

}

// axios.get('https://api.github.com/users/rupadhyayahacks/followers')
// .then(response => {
//   response.data.forEach(item => {
//     createCard(item);

//   })
  // console.log(response);
  
// })
// axios.get('https://api.github.com/users/Ramonta-Lee')
// .then(response => {
//   response.data.forEach(item => {
//     createCard(item);




