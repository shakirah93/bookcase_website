console.log("I am here");
console.log("Good morning");
console.log("Goodnight");

// async and await
// API - Aplication Programming Interface
// API Endpoint - link or url

async function fetchUserData() {
  try {
    const response = await fetch("https://api.github.com/users/oyinkan");
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error("Error fetching user data: ", error);
  }
}

fetchUserData();
