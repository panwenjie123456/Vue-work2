<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submitBooktype">

            <div class="form-group" :class="{ 'form-group--error': $v.type_no.$error }">
              <label class="form-control-label" name="type_no">Type_no (Enter a number between 1 and 1000)</label>
              <input class="form__input" type="number" v-model.trim="type_no"/>
            </div>
            <div class="error" v-if="!$v.type_no.between">Type_no must be between 1 and 1000</div>

            <div class="form-group" :class="{ 'form-group--error': $v.book_name.$error }">
              <label class="form__label" >Book Name</label>
              <input class="form__input" v-model.trim="$v.book_name.$model"/>
            </div>
            <div class="error" v-if="!$v.book_name.required">Book Name is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.description.$error  }">
              <label class="form__label">description </label>
              <input class="form__input" v-model.trim="$v.description.$model"/>
            </div>
            <div class="error" v-if="!$v.description.required">Author Name is Required</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ booktypeBtnTitle }}</button>
            </p>
            <p>
              <a href="#/booktype" class="btn btn-primary btn1" role="button">Manage Booktype</a>
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
  props: ['booktypeBtnTitle', 'booktype'],
  data () {
    return {
      messagetitle: 'booktype ',
      book_name: this.booktype.book_name,
      description: this.booktype.description,
      type_no: 2,
      submitStatus: null
    }
  },
  validations: {
    book_name: {
      required,
      minLength: minLength(1)
    },
    description: {
      required,
      minLength: minLength(1)
    },
    type_no: {
      required,
      between: between(1, 1000)
    }
  },
  methods: {
    submitBooktype () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          const booktype = {
            book_name: this.book_name,
            type_no: this.type_no,
            description: this.description
          }
          this.booktype = booktype
          console.log('Submitting in BooktypeForm : ' + JSON.stringify(this.booktype, null, 5))
          this.$emit('booktype-is-created-updated', this.booktype)
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
