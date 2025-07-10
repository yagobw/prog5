function searchUser(id, callback) {
  setTimeout(() => {
    const user = { id: id, name: "Carlos" };
    callback(user);
  }, 1000);
}

function showUser(user) {
  console.log(`Usuário: ${user.name}`);
}

searchUser(3, showUser);
