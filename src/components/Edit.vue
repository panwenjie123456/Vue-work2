<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <book-form :book="book" book-btn-title="Update book" @book-is-created-updated="updateBook"></book-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Bookservice from '@/services/Bookservice'
import NewbookForm from '@/components/NewbookForm'

export default {
  data () {
    return {
      book: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Book '
    }
  },
  components: {
    'book-form': NewbookForm
  },
  created () {
    this.getBook()
  },
  methods: {
    getBook: function () {
      Bookservice.fetchBooks(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.book = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting book in Edit: ' + JSON.stringify(this.book, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateBook: function (book) {
      console.log('Before PUT ' + JSON.stringify(book, null, 5))
      Bookservice.update(this.$router.params, book)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(book, null, 5))
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
