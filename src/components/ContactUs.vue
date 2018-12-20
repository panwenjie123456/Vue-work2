<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>contact-no:</i></b>
          <p>xxx-xxxxxxx</p>
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
  name: 'ContactUs',
  data () {
    return {
      messagetitle: ' Contact Us '
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
