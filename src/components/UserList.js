const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: "admin",
  },
  {
    firstName: "monank",
    lastName: "sojitra",
    email: "monaksojitra@gmail.com",
    password: "monank123",
  },
];

let currentUser = {
  name: "guest",
  email: "",
};
function registerUser(user) {
  const isUserExists = users.some((u) => u.email === user.email);
  if (isUserExists) {
    // if user already exists, return an error message
    return "Error: User with this email already exists";
  } else {
    // if user doesn't exist, add the user object to the users array
    users.push(user);
    // return a registration message
    return "User registered successfully";
  }
}
console.log(users);
function checkCredentials(email, password) {
  for (let user of users) {
    if (user.email === email && user.password === password) {
      currentUser.name =  user.firstName;
      currentUser.email = user.email;
      console.log(currentUser)
      return true
    }
  }
  return false;
}

function getCurrentUser() {
  return currentUser;
}
// function logout() {
//   currentUser.name = "guest" ;
//   currentUser.email = "";
// }

export default { registerUser, checkCredentials ,getCurrentUser};
