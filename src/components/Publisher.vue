<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="publisher" :options="options">
        <a slot="editpublisher" slot-scope="props" class="fa fa-edit fa-2x" @click="editPublisher(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deletePublisher(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Publisherservice from '@/services/Publisherservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'publisher',
  data () {
    return {
      messagetitle: ' Publisher List ',
      publisher: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'publisher_name', 'location', 'year', 'editpublisher', 'remove'],
      options: {
        perPage: 10,
        // eslint-disable-next-line
        filterable: ['_id', 'publisher_name', 'location' ],
        sortable: ['_id'],
        headings: {
          _id: 'ID',
          publisher_name: 'publisher_name',
          location: 'location',
          year: 'year'
        }
      }
    }
  },
  created () {
    this.loadPublisher()
  },
  methods: {
    loadPublisher: function () {
      Publisherservice.fetchPublisher()
        .then(response => {
          // JSON responses are automatically parsed.
          this.publisher = response.data
          console.log(this.publisher)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editPublisher: function (id) {
      this.$router.params = id
      this.$router.push('editpublisher')
    },
    deletePublisher: function (id) {
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
          Publisherservice.deletePublisher(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadPublisher()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully delete this publisher ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your publisher still Counts!', 'info')
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
