function getUserData() {
 return new Promise((resolve, reject) => {
   fetch(`https://api.apis.guru/v2/list.json`)
     .then(response => {
       if (!response.ok) {
         reject(new Error(`HTTP error! Status: ${response.status}`));
       }
       return response.json();
     })
     .then(data => resolve(data))
     .catch(error => reject(error));
 });
}
// Using the Promise
getUserData(1)
 .then(user => console.log("User Data:", user))
 .catch(err => console.error("API Error:", err.message));