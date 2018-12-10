<template>
  <div class="hero">
    <h1 class="vue-title">Bookmanage App !!</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>For manager</i></b>
          <p>Manage books here</p>
          <p>Just click <a href ="#/Newbook">here</a> to go to</p>
          <p>the Newbook page and do the update</p>
        </td>
        <td>
          <img src="../assets/homer.gif" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead">This is the homepage of  <b>the</b> Book Manage app</p>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
