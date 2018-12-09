import Api from '@/services/api'

export default {
  fetchBooktypes () {
    return Api().get('/booktype')
  },
  postBooktype (booktype) {
    return Api().post('/booktype', booktype,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteBooktype (id) {
    return Api().put(`/booktype/${id}/vote`)
  },
  deleteBooktype (id) {
    return Api().delete(`/booktype/${id}`)
  },
  fetchBooktype (id) {
    return Api().get(`/booktype/${id}`)
  },
  putBooktype (id, booktype) {
    console.log('REQUESTING ' + booktype._id + ' ' +
      JSON.stringify(booktype, null, 5))
    return Api().put(`/booktype/${id}`, booktype,
      { headers: {'Content-type': 'application/json'} })
  }
}
