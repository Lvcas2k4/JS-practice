const userAdmin = {
    username: 'admin',
    password: '1234'
  }
  
  document.getElementById('button').onclick = function sesion() {
    for (let x = 1; x <= 3; x++) {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      let check = {
        username: username,
        password: password
      }
      if (check.username === userAdmin.username && check.password === userAdmin.password) {
        console.log('logeado');
        console.log(username);
        console.log(password);
        return check;
      } else {
        console.log('no logeado');
        return false;
      }
    }
  }
  
  let check = sesion();