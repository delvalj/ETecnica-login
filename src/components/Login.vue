<template>
  <div>
    <h3 class="title"> Login Compo</h3>
    <form action="" @submit="postData">
      <label> User</label>
      <input v-model="user.nombreUsuario" type="text" placeholder="User">


      <br> <br>

      <label> Pass</label>
      <input v-model="user.password" type="text" placeholder="Password">

      <br> <br>

      <button> Login</button>
    </form>

  </div>
</template>

<script>
const sha256 = require('js-sha256');

export default {
  name: "Login",
  data() {
    return {
      user: {
        nombreUsuario: 'test_input',
        password: 'PruebaTesting',

      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault()

      let usr = Object.assign({}, this.user);
      usr.password = this.shaPass(usr.password);

      console.log(usr);

      fetch("http://200.10.96.221:8080/Auth/Login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usr)
      })
          .then(data => data.json())
          .then(users => {
            console.log(users)
          });
    },
    shaPass(password) {
      // funcion con la contraseña encriptada

      var passwordCodificado = sha256(password);
      console.log(passwordCodificado);

      return passwordCodificado;
    },


  }
}

</script>

<style>
html {
  margin: 10px;
  padding: 20px;
  position: absolute;
  border: 2px solid grey;
  border-radius: 50px;
  height: 200px;
  width: 280px;
  font-family: 'Arial', SansSerif,serif;

}

.title{
  text-align: center;
}


input {
  padding: 5px;
  border-radius: 50px;
}

label {
  font-size: 18px;
  margin: 10px;
  border-radius: 50%;

}

button {
  margin-top: 20px;
  margin-left: 100px;
  border-radius: 100%;
}

</style>