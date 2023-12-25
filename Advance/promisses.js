//Do an Async Task
//DB calls, cryptography, network

const promisOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    // console.log('Async Task 1 is Completed');
    resolve();
  }, 1000);
});
promisOne.then(function () {
  //console.log('Promis consumed');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async Task 2 is Completed');
    resolve();
  }, 1000);
}).then(function () {
  //console.log('Async 2 is Resolved');
});

const promisThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Janan", Email: "02.95.janan@gmail.com" });
  }, 1000);
});
promisThree.then(function (user) {
  // console.log(user);
});

const promisForth = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Janan", Password: "1239" });
    } else {
      reject("ERROR:- Something Went Wrong");
    }
  }, 1000);
});
promisForth
  .then(function (user) {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    //  console.log(username);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log('The Promise either resolved OR rejected');
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ Name: "Khan", Password: "1210" });
    } else {
      reject("Error:-- Js went wrong");
    }
  }, 1000);
});

async function consumePromisFive() {
  try {
    const response = await promiseFive;
    //  console.log(response);
  } catch (error) {
    //  console.log(error);
  }
}
consumePromisFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// getAllUsers()

// -------same work with .then-------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
