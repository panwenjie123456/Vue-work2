<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <publisher-form :publisher="publisher" publisherBtnTitle="Add Publisher"
                         @publisher-is-created-updated="submitPublisher"></publisher-form>
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
      publisher: {
        publisher_name: 'publishera',
        location: 'st.w',
        year: 1997
      },
      messagetitle: ' Add Publisher '
    }
  },
  components: {
    'publisher-form': NewpublisherForm
  },
  methods: {
    submitPublisher: function (publisher) {
      Publisherservice.postPublisher(publisher)
        .then(response => {
          console.log(response)
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
