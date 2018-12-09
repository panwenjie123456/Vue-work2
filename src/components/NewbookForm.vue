<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submitBook">
            <div class="form-group" :class="{ 'form-group--error': $v.No.$error }">
              <label class="form-control-label" name="No">No (Enter a number between 1 and 1000)</label>
              <input class="form__input" type="number" v-model.trim="No"/>
            </div>
            <div class="error" v-if="!$v.No.between">Amount must be between 1 and 1000</div>
            <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
              <label class="form-control-label" name="price">Price (Enter a number between 1 and 1000)</label>
              <input class="form__input" type="number" v-model.trim="price"/>
            </div>
            <div class="error" v-if="!$v.price.between">Price must be between 1 and 1000</div>

            <div class="form-group" :class="{ 'form-group--error': $v.amount.$error }">
              <label class="form-control-label" name="amount">Amount (Enter a number between 1 and 1000)</label>
              <input class="form__input" type="number" v-model.trim="amount"/>
            </div>
            <div class="error" v-if="!$v.amount.between">Amount must be between 1 and 1000</div>

            <div class="form-group" :class="{ 'form-group--error': $v.book_name.$error }">
              <label class="form__label" >Book Name</label>
              <input class="form__input" v-model.trim="$v.book_name.$model"/>
            </div>
            <div class="error" v-if="!$v.book_name.required">Book Name is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.author.$error  }">
              <label class="form__label">Author Name</label>
              <input class="form__input" v-model.trim="$v.author.$model"/>
            </div>
            <div class="error" v-if="!$v.author.required">Author Name is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.publisher_name.$error }">
              <label class="form__label">Publisher Name</label>
              <input class="form__input" v-model.trim="$v.publisher_name.$model"/>
            </div>
            <div class="error" v-if="!$v.publisher_name.required">Publisher Name is Required</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ bookBtnTitle }}</button>
            </p>
            <p>
              <a href="#/books" class="btn btn-primary btn1" role="button">Manage Books</a>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Congratulation!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">An error happened</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>

</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required, minLength, between } from 'vuelidate/lib/validators'
import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed)

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'FormData',
  props: ['bookBtnTitle', 'book'],
  data () {
    return {
      messagetitle: 'book ',
      book_name: this.book.book_name,
      author: this.book.author,
      publisher_name: this.book.publisher_name,
      No: 33,
      price: 33,
      amount: 33,
      submitStatus: null
    }
  },
  validations: {
    book_name: {
      required,
      minLength: minLength(1)
    },
    author: {
      required,
      minLength: minLength(1)
    },
    publisher_name: {
      required,
      minLength: minLength(1)
    },
    No: {
      required,
      between: between(1, 1000)
    },
    price: {
      required,
      between: between(1, 1000)
    },
    amount: {
      required,
      between: between(1, 1000)
    }
  },
  methods: {
    submitBook () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          const book = {
            No: this.No,
            book_name: this.book_name,
            author: this.author,
            publisher_name: this.publisher_name,
            price: this.price,
            amount: this.amount
          }
          this.book = book
          console.log('Submitting in BookForm : ' + JSON.stringify(this.book, null, 5))
          this.$emit('book-is-created-updated', this.book)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .newbook-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
