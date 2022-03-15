const url = `http://localhost:3000/users`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function getAllUsers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getAllUsers();

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}
getUser(2);

const user = {
  firstName: "Seyram",
  lastName: "Wood Prikah",
  email: "wood20@mail.com",
  gender: "Male",
  username: "wood1920",
};
async function createUser(userInfo) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  console.log(data);
}
createUser(user);

const userData = {
  username: "prikahaeyram@yahoo.com",
};
async function updateUser(userInfo, id) {
  const response = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  console.log(data);
}
updateUser(userData, 51);

async function deleteUser(id) {
  const response = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
deleteUser(51);
