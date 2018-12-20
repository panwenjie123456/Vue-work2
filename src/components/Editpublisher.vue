<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <publisher-form :publisher="publisher" publisher-btn-title="Update publisher" @publisher-is-created-updated="updatePublisher"></publisher-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Publisherservice from '@/services/Publisherservice'
import NewpublisherForm from '@/components/NewpublisherForm'

export default {
  data () {
    return {
      publisher: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update publisher '
    }
  },
  components: {
    'publisher-form': NewpublisherForm
  },
  created () {
    this.getPublisher()
  },
  methods: {
    getPublisher: function () {
      Publisherservice.fetchPublisher(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.publisher = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting publisher in Edit: ' + JSON.stringify(this.publisher, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updatePublisher: function (publisher) {
      console.log('Before PUT ' + JSON.stringify(publisher, null, 5))
      Publisherservice.update(this.$router.params, publisher)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(publisher, null, 5))
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
