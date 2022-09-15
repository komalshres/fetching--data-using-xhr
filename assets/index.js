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
  console.log(response);
});
sendAJAX("users", (response) => {
  console.log(response);
});

sendAJAX("todos", (response) => {
  console.log(response);
});
