<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Mission: Eclecticism, inheritance, civilization, innovation, service, harmonious development</i></b>
          <p>Vision: To build a world-class, resource-rich, advanced facilities, high-level, modernized, digitally networked technology based Waterford Institute of Technology</p>
          <p>iterature resources support and service system, </p>
          <p>to provide literature information protection for school teaching and research To serve the world's leading universities.</p>
        </td>
        <td>
          <img src="../assets/book.gif" alt="description here" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us'
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
