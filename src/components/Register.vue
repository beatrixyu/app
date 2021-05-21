<template>
  <div id="register" class="w-screen">
    <div class="h-70 mb-16 w-full flex justify-center">
    <div class="md:w-1/2 lg:w-4/7 ">
    <div class="border-b border-gray-200 ">
      <div class="pl-6 pr-6 justify-center">
      <h1 class="text-xl leading-relaxed mt-12 font-bold">ICH BIN NEU HIER</h1>
      <h3 class="text-gray-400 text-xs">Jetzt Dein Kundenkonto erstellen.</h3>
      <div class="mt-5">
          <div class="flex items-center mb-4">
            <span class="inline-block align-middle h-full">
              <img src="../assets/images/blackStar.png" alt="star" class="w-5 mr-3">
            </span>
            <p class="text-xs text-gray-600 leading-5">Automatisch <strong class="text-black">Punkte</strong> für Deinen Einkauf <strong class="text-black"> Sammeln</strong></p>
          </div>
          <div class="flex items-center mb-4">
            <span><img src="../assets/images/care.png" alt="care service" class="w-5 mr-3"></span>
            <p class="text-xs text-gray-600 leading-5">Rabatte & <strong class="text-black">Gratisprodukte</strong>  erhalten</p>
          </div>
          <div class="flex items-center pb-5 mb-4">
            <span><img src="../assets/images/person.png" alt="customer service" class="w-5 mr-3"></span>
            <p class="text-xs text-gray-600 leading-5"><strong class="text-black">Übersicht Deiner Bestellungen </strong>und Produkte bewerten</p></div>
      </div>
      </div>
    </div>
    <form v-on:submit.prevent="submitForm" class="mt-7 pl-6 pr-6">
      <div class="form-row border border-gray-400 mt-5" :style="invalidNameStyles" >
        <div class="form-field h-10" :class="{ 'error': $v.name.$error }">
        <div class="relative w-full h-full">
          <input 
            class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side z-0 outline-none" 
            v-model.trim="$v.name.$model"
            :class="{'is-invalid':$v.name.$error,'is-valid':!$v.name.$invalid }"
            @input="setName($event.target.value)"
            placeholder="Vorname*"
          />
          <span
            :style="showNameCheck"
            class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-if="validName" 
          ><img class="w-5" src="../assets/images/check1.png"/></span>
          <span 
            :style="showNameCheck"
            class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-else 
          ><img class="w-5" src="../assets/images/cross1.png"/></span>            
          <div class="error text-mini text-danger" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        </div>
        </div>
      </div>
      <div class="form-row border border-gray-400 mt-5" :style="[invalidEmailStyles,emailClasses]">
        <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
              type="email" 
              id="email"
              value=''
              class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side z-0 outline-none" 
              v-model.trim="email" 
              @input="setEmail($event.target.value)"
              placeholder="E-Mail Adresse*"
            >
            <div class="error text-mini text-danger" v-if="!validEmail">
              <p>Invalid email</p>
            </div>
            <span 
              :style="showEmailCheck"
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-if="validEmail" 
            ><img class="w-5" src="../assets/images/check1.png"/></span>
            <span 
              :style="showEmailCheck"
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-else
            ><img class="w-5" src="../assets/images/cross1.png"/></span>
          </div>
        </div>
      </div>
      <div class="form-row border border-gray-400 mt-5" :style="invalidPasswordStyles">
        <div class="form-field h-10">
          <div class="relative w-full h-full" :class="{ 'error': $v.password.$error }">
            <input 
            :type="passwordVisible ? 'text' : 'password'" 
            class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side z-0 outline-none" 
            id="password" 
            v-model.trim="$v.password.$model" 
            placeholder="Passwort*" 
            @input="setPassword($event.target.value)"
            >
            <div class="error text-mini text-danger" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
            <span
              class="absolute top-0 right-0 h-10 w-20 mr-2 text-gray-300 hover:text-gray-600 text-side flex justify-center items-center"
              v-on:click="showPassword"
            ><i :class="passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></span>
            <span
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" id="passwordCheck" v-if="validPassword"
            :style="showPasswordCheck"
            ><img class="w-5" src="../assets/images/check1.png"/></span>
            <span 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" id="passwordCross" v-else 
            :style="showPasswordCheck"
            ><img class="w-5" src="../assets/images/cross1.png"/></span>
          </div>
        </div>
      </div>
      <div class="relative w-full h-full">
      <button class="absolute bg-gray-400 h-11 rounded-sm w-full mt-5 uppercase text-white font-extrabold" type="submit" :disabled="!formIsValid" id="registerBtn" :class="{ active: formIsValid }">
       registrieren
      </button>
      <button 
        class="absolute h-11 bg-secondary rounded-sm w-full mt-5 uppercase text-white font-extrabold" 
        v-if="submitStatus === 'OK'"
        type="submit">
        <i class="fas fa-check"></i> BESTÄTIGUNG PER MAIL VERSENDET
      </button>
      </div>
      <div class="relative w-full h-full">
      <p class="text-justify text-xs text-secondary mt-20" v-if="submitStatus === 'OK'">Wir haben Dir eine E-Mail an <strong>{{email}}</strong> gesendet. Dort findest Du einen Aktivierungslink für Dein Benutzerkonto.</p>
      </div>
    </form>  
    </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name:'registerForm',
    data() {
      return {
        name: "",
        email: "",
        password:"",
        passwordVisible: false,
        submitStatus: null,
        emailIsValid: false,
        nameIsValid:false
      };
    },
    validations:{
      name:{
        required,
        minLength: minLength(4),
        maxLength:maxLength(20)
      },
      email:{
        required,
        email,
      //  isStrickEmail(value){
      //  if(value === ' ') return true
      //  let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //  email_regex.test(value)
      //   }
      },
      password: {
      required,
      minLength: minLength(3)
      },
    },
    computed: {
      formIsValid() {
        return this.name.length > 3 && this.email.includes('@') && this.password.length >2;
      },
      validEmail() {
           if (this.email && !this.email.includes('@')) {
             return this.emailIsValid
        } else return !this.emailIsValid
      },
      invalidEmailStyles() {
           if (this.email && !this.email.includes('@')) {
             return {
               'border-color': '#da5252',
             }
           } else if(this.email && this.email.includes('@')){
             return {
               'border-color': '#AED23B',
             }
           } else return ''
         },
      validPassword() {
           if (this.password && this.password.length<3) {
             return this.passwordIsValid
        } else return !this.passwordIsValid
      },
      invalidPasswordStyles() {
       if (this.password && !this.validPassword) {
         return {
           'border-color': '#da5252',
         }
       } else if(this.password && this.validPassword){
         return {
           'border-color': '#AED23B',
         }
       } else return ''
      },
      validName() {
        if (this.name && this.name.length<4) {
           return this.nameIsValid
        } else return !this.nameIsValid
      },
      invalidNameStyles() {
        if (this.name && !this.validName) {
          return {
            'border-color': '#da5252',
          }
        }else if(this.name && this.validName){
          return {
            'border-color': '#AED23B',
          }
        }else return ''
      },
      showPasswordCheck() {
          if (this.password.length <1) {
             return {
               'display':'none'
             }
        } else {
             return {
               'display':'flex'
             }        
          }    
      },
      showEmailCheck(){
          if (this.email.length <1) {
             return{
               'display':'none'
             }
        } else {
             return{
               'display':'flex'
             }        
          }    
      },
      showNameCheck(){
          if (this.name.length <1) {
             return{
               'display':'none'
             }
        } else {
             return{
               'display':'flex'
             }        
          }    
      },

    },
    methods:{
      setName(value) {
        this.name = value
        this.$v.name.$touch()
    },
      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
    },
      showPassword() {
        this.passwordVisible = ! this.passwordVisible;
    },
      emailClasses() {
       return {
           touched: this.email.length !== 0,
           invalid: this.email && !this.emailIsValid
       };
    },
      submitForm() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          this.submitStatus = 'OK'
          setTimeout(()=>{
             const url ='https://www.justspices.de/'
             window.location = url;
          },2000)
        }
      }
    }
  }
</script>

<style >
#registerBtn.active {
  cursor: pointer;
  background-color: #AED23B;
}
</style>
