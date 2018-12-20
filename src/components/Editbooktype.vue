<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <booktype-form :booktype="booktype" booktype-btn-title="Update booktype" @booktype-is-created-updated="updateBooktype"></booktype-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Booktypeservice from '@/services/Booktypeservice'
import NewbooktypeForm from '@/components/NewbooktypeForm'

export default {
  data () {
    return {
      booktype: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Booktype '
    }
  },
  components: {
    'booktype-form': NewbooktypeForm
  },
  created () {
    this.getBooktype()
  },
  methods: {
    getBooktype: function () {
      Booktypeservice.fetchBooktype(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.booktype = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting booktype in Edit: ' + JSON.stringify(this.booktype, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateBooktype: function (booktype) {
      console.log('Before PUT ' + JSON.stringify(booktype, null, 5))
      Booktypeservice.update(this.$router.params, booktype)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(booktype, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
