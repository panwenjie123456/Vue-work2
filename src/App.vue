<template>
  <div class="hero">
  <div id="app">
    <img src="./assets/open.jpg">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/looo.jpg" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Book Management App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/books"><i class="fa fa-list" style="padding: 5px"> Manage Books</i></b-nav-item>
          <b-nav-item data-test="Newbookbtn" to="/Newbook"><i class="fa fa-money" style="padding: 5px"> New Book</i></b-nav-item>
          <b-nav-item to="/booktype"><i class="fa fa-list" style="padding: 5px"> Manage Booktype</i></b-nav-item>
          <b-nav-item data-test="Newbooktypebtn" to="/Newbooktype"><i class="fa fa-money" style="padding: 5px"> New Booktype</i></b-nav-item>
          <b-nav-item to="/publisher"><i class="fa fa-list" style="padding: 5px"> Manage publishers</i></b-nav-item>
          <b-nav-item data-test="Newpublisherbtn" to="/Newpublisher"><i class="fa fa-money" style="padding: 5px"> New publisher</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/auth"><i class="fa fa-comment" style="padding: 5px"> login</i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background: url("./assets/back.jpg") repeat center top;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
