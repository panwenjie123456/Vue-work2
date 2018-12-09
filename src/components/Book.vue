<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="book" :options="options">
        <a slot="amountadd" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="amountadd(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editBook(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBook(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Bookservice from '@/services/Bookservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Book',
  data () {
    return {
      messagetitle: ' Book List ',
      book: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'No', 'book_name', 'author', 'publisher_name', 'price', 'amount', 'amountadd', 'edit', 'remove'],
      options: {
        perPage: 10,
        // eslint-disable-next-line
        filterable: ['_id', 'book_name' ],
        sortable: ['amountadd'],
        headings: {
          _id: 'ID',
          No: 'No',
          author: 'author',
          publisher_name: 'publisher_name',
          price: 'price',
          amount: 'amount'
        }
      }
    }
  },
  created () {
    this.loadBooks()
  },
  methods: {
    loadBooks: function () {
      Bookservice.fetchBooks()
        .then(response => {
          // JSON responses are automatically parsed.
          this.book = response.data
          console.log(this.book)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    amountadd: function (id) {
      Bookservice.upvoteBookamount(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadBooks()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editBook: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteBook: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          Bookservice.deleteBook(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadBooks()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully delete this Book ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Book still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .vue-pagination-ad {
    text-align: center;
  }
  .vue-message {
    text-align: left;
    font-size: 17px;
    margin-left: 30px;
  }

</style>
