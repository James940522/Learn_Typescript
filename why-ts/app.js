// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function fetchUser() {
  return axios.get(url)
}

/**
 * @typedef {object} Adress
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Adress} address
 */


/**
 *  @returns {Promise<User>}
 */

fetchUser().then((response)=> {
  response.address.city
})



function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      console.log(user)
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
