const sendAJAX = (endpoint, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${endpoint}`);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };
  xhr.send(null);
};

sendAJAX("posts", (response) => {
  //   console.log(response);
});
sendAJAX("users", (response) => {
  const users = JSON.parse(response);
  console.log(users);
  const usersElement = document.getElementById("user-cards");
  let userContent = "";
  users.forEach((user) => {
    if (user.id % 2) {
      userContent += `<div class="card" style="width: 18rem">
  <img
    class="card-img-top"
    src="https://robohash.org/${user.name}.png"
    style="background-color:black;"
    alt="Card image cap"
  />
  <div class="card-body">
    <p class="card-text">
      <p>Name : ${user.name}</p>
      <p>Email : ${user.email.toLowerCase()}</p>
      <p>Phone no: ${user.phone}</p>
      <address>${user.address.street} - ${user.address.suite} - ${
        user.address.city
      }</address>
    </p>
  </div>
</div>`;
    } else {
      userContent += `<div class="card" style="width: 18rem">
  <img
    class="card-img-top"
    src="https://robohash.org/${user.name}.png"
    style="background-color:pink;"
    alt="Card image cap"
  />
  <div class="card-body">
    <p class="card-text">
      <p>Name : ${user.name}</p>
      <p>Email : ${user.email.toLowerCase()}</p>
      <p>Phone no: ${user.phone}</p>
      <address>${user.address.street} - ${user.address.suite} - ${
        user.address.city
      }</address>
    </p>
  </div>
</div>`;
    }
  });
  usersElement.innerHTML = userContent;
});

sendAJAX("todos", (response) => {
  //   console.log(response);
});

const getElement = (tab) => {
  document
    .querySelectorAll(".active")
    .forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-id="${tab}"]`).classList.add("active");
  document.querySelectorAll(".show").forEach((item) => {
    item.classList.add("hide");
    // item.classList.remove("show");
  });
  document.getElementById(tab).classList.remove("hide");
  document.getElementById(tab).classList.add("show");
};

document
  .querySelector(`[data-id="post"]`)
  .addEventListener("click", () => getElement("post"));

document
  .querySelector(`[data-id="todo"]`)
  .addEventListener("click", () => getElement("todo"));

document
  .querySelector(`[data-id="users"]`)
  .addEventListener("click", () => getElement("users"));
