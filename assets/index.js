const sendAJAX = (resource, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${resource}`);
  xhr.onreadystatechange = () => {
    const isDone = xhr.readyState === 4;
    if (isDone) {
      callback(xhr.response);
    }
  };
  xhr.send(null);
};

sendAJAX("posts", (response) => {
  //   console.log(response);
});

/**
 * Check even
 *
 * @param {Number} number - Number to be checked if its even or not
 * @returns Boolena
 */
const isEven = (number) => number % 2;

sendAJAX("users", (response) => {
  const users = JSON.parse(response);
  console.log(users);
  const usersElement = document.getElementById("user-cards");
  let userContent = "";
  users.map((user) => {
    userContent += `<div class="card" style="width: 18rem">
  <img
    class="card-img-top ${isEven(user.id) ? "bg-black" : "bg-pink"}"
    src="https://robohash.org/${user.name}.png"
    alt="Card image cap"
  />
  <div class="card-body ">
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
    item.classList.remove("show");
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
