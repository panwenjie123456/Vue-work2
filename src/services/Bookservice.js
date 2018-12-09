import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  },
  postBook (book) {
    return Api().post('/books', book,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteBookamount (id) {
    return Api().put(`/books/${id}/add`)
  },
  deleteBook (id) {
    return Api().delete(`/books/${id}`)
  },
  update (id, book) {
    console.log('REQUESTING ' + book._id + ' ' +
      JSON.stringify(book, null, 5))
    return Api().put(`/books/${id}`, book,
      { headers: {'Content-type': 'application/json'} })
  }
}
