<template>
  <div class="sign-up">
    <p>Let's create a new account</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signUp">Sign Up</button>
    <span>Return to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "SignUp",
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      signUp:function(){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password).then(
          function(user){
            alter('Your account has been created')
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
  .SignUp{
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
  span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
