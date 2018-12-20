<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submitPublisher">

            <div class="form-group" :class="{ 'form-group--error': $v.year.$error }">
              <label class="form-control-label" name="year">year (Enter a number between 1 and 3000)</label>
              <input class="form__input" type="number" v-model.trim="year"/>
            </div>
            <div class="error" v-if="!$v.year.between">year must be between 1 and 3000</div>

            <div class="form-group" :class="{ 'form-group--error': $v.publisher_name.$error }">
              <label class="form__label" >publisher_name </label>
              <input class="form__input" v-model.trim="$v.publisher_name.$model"/>
            </div>
            <div class="error" v-if="!$v.publisher_name.required">publisher_name  is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.location.$error  }">
              <label class="form__label">location </label>
              <input class="form__input" v-model.trim="$v.location.$model"/>
            </div>
            <div class="error" v-if="!$v.location.required">location is Required</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ publisherBtnTitle }}</button>
            </p>
            <p>
              <a href="#/publisher" class="btn btn-primary btn1" role="button">Manage publishers</a>
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
  props: ['publisherBtnTitle', 'publisher'],
  data () {
    return {
      messagetitle: 'publisher ',
      publisher_name: this.publisher.publisher_name,
      location: this.publisher.location,
      year: 1997,
      submitStatus: null
    }
  },
  validations: {
    publisher_name: {
      required,
      minLength: minLength(1)
    },
    location: {
      required,
      minLength: minLength(1)
    },
    year: {
      required,
      between: between(1, 3000)
    }
  },
  methods: {
    submitPublisher () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          const publisher = {
            publisher_name: this.publisher_name,
            location: this.location,
            year: this.year
          }
          this.publisher = publisher
          console.log('Submitting in publisherForm : ' + JSON.stringify(this.publisher, null, 5))
          this.$emit('publisher-is-created-updated', this.publisher)
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
