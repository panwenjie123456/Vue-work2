<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="booktype" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editBooktype(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBooktype(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Booktypeservice from '@/services/Booktypeservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Booktype',
  data () {
    return {
      messagetitle: ' Booktype List ',
      books: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'book_name', 'type_no', 'description', 'edit', 'remove'],
      options: {
        perPage: 10,
        // eslint-disable-next-line
        filterable: ['_id', 'book_name', 'type_no', 'description' ],
        sortable: ['_id'],
        headings: {
          _id: 'ID',
          book_name: 'book_name',
          type_no: 'type_no',
          description: 'description'
        }
      }
    }
  },
  created () {
    this.loadBooktype()
  },
  methods: {
    loadBooktype: function () {
      Booktypeservice.fetchBooktypes()
        .then(response => {
          // JSON responses are automatically parsed.
          this.booktype = response.data
          console.log(this.booktype)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    upvote: function (id) {
      Booktypeservice.upvoteBooktype(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadBooktype()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editBooktype: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteBooktype: function (id) {
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
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          Booktypeservice.deleteBooktype(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadBooktype()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Booktype ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Booktype still Counts!', 'info')
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

</style>
