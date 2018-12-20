import Api from '@/services/api'

export default {
  fetchPublisher () {
    return Api().get('/publisher')
  },
  postPublisher (publisher) {
    return Api().post('/publisher', publisher,
      { headers: {'Content-type': 'application/json'} })
  },
  deletePublisher (id) {
    return Api().delete(`/publisher/${id}`)
  },
  update (id, publisher) {
    console.log('REQUESTING ' + publisher._id + ' ' +
      JSON.stringify(publisher, null, 5))
    return Api().put(`/publisher/${id}`, publisher,
      { headers: {'Content-type': 'application/json'} })
  }
}
