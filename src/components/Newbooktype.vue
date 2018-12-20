<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <booktype-form :booktype="booktype" booktypeBtnTitle="Add booktype"
                     @booktype-is-created-updated="submitBooktype"></booktype-form>
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
      booktype: {
        book_name: 'blockchain3',
        type_no: 50,
        description: 'des'
      },
      messagetitle: ' Add booktype '
    }
  },
  components: {
    'booktype-form': NewbooktypeForm
  },
  methods: {
    submitBooktype: function (booktype) {
      Booktypeservice.postBooktype(booktype)
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
