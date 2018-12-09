<template>
  <div class ="login">
    <h3>Sign In</h3>
    <input type = "text" v-model="email" placeholder="Email"><br>
    <input type = "password" v-model="password" placeholder="Password"><br>
    <button @click="login">Connection</button>
    <p>Don not have an account ? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "Login",
    data(){
      return{};
    },
    methods:{
      login:function(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
          function(user){
            alter('You are now connected')
          },
          function(err){
            alter('Oops.'+err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .login{
    margin-top:40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10px;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration:underline;
    cursor: pointer;
  }

</style>
