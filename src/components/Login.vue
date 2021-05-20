<template>
  <div id="login" class="h-65">
    <div class="border-gray-200">
      <div class="pl-6 pr-6">
      <h1 class="text-xl leading-relaxed mt-12 font-bold uppercase">WILLKOMMEN ZURÜCK</h1>
      <h3 class="text-gray-400 text-xs">Jetzt im Kundenkonto einloggen.</h3>
    </div>
      </div>

     <form v-on:submit.prevent="loginForm" class="mt-7 pl-6 pr-6" :class="formIsValid ? '' : 'invalid'">
      <div class="form-row border border-gray-400 mt-5" :style="invalidEmailStyles" id="emailContainer">
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
            <div class="error text-mini text-danger" id="registerEmail" v-if="!validEmail">
              <p>Invalid email</p>
            </div>
            <span 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-if="validEmail" id="emailCheck" 
              :style="showEmailCheck"
            ><img class="w-5" src="../assets/images/check1.png"/></span>
            <span 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-if="!validEmail || loginStatus === 'ERROR'" id="emailCross"
              :style="showEmailCheck"
            ><img class="w-5" src="../assets/images/cross1.png"/></span>
        </div>
        </div>
      </div>

      <div class="form-row border border-gray-400 mt-5" id="passwordContainer" :style="invalidPasswordStyles">
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
              class="absolute top-0 right-0 h-10 w-20 text-gray-300 hover:text-gray-300 text-side flex justify-center items-center"
              v-on:click="showPassword"
            ><i :class="passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></span>
            <span
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" v-if="validPassword" :style="showPasswordCheck"
            ><img class="w-5" src="../assets/images/check1.png"/></span>
            <span 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 flex items-center justify-center" :style="showPasswordCheck" v-if="!validPassword || loginStatus === 'ERROR'"
            ><img class="w-5" src="../assets/images/cross1.png"/></span>
        </div>
        </div>
      </div>
       <button 
         class="bg-gray-400 h-11 rounded-sm w-full mt-5 uppercase text-white font-extrabold uppercase"
          type="submit" 
          :disabled="!formIsValid"
          @click="onLogin"
          :class="{ active: formIsValid }"
          >anmelden</button>
      <div class="absolute text-danger text-justify text-side mt-2" id="errorMsg" v-if="loginStatus === 'ERROR'">
        <div><i class="fas fa-times mr-1"></i>Ungültiger Benutzername oder Passwort.</div> 
      </div>
      <p class="absolute text-justify text-side mt-2 text-gray-400" v-if="loginStatus === 'OK'">Login Successfully! Go to homepage now...</p>         
      <div class="relative w-full h-full">
      </div>      
      <div class="text-gray-400 w-full mt-10">
      <p class="text-center underline text-side"><a href="https://beatrixyu.github.io/app/" target="_blank">Passwort vergessen?</a> </p>
      </div>

     </form>              

  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

 export default {
    name:'loginForm',
    data() {
      return {
        email: "",
        password:"",
        passwordVisible: false,
        loginStatus: false,
        emailIsValid: false,
        passwordIsValid:false,
      };
    },
    validations:{
      email:{
        required,
        email
      },
    password: {
      required,
      minLength: minLength(3)
    },
    },
    computed: {
      formIsValid(){
        return this.email.includes('@') && this.password.length>2;
      },
       validEmail(){
           if (this.email && !this.email.includes('@')) {
             return this.emailIsValid
        } else return !this.emailIsValid
       },
      invalidEmailStyles(){
           if (this.email && !this.email.includes('@')) {
             return {
               'border-color': '#da5252',
             }
           } else if(this.email && this.email.includes('@')){
             return {
               'border-color': '#AED23B',
             }
           }else {
             return ''
           }
         },
       validPassword(){
           if (this.password && this.password.length<3) {
             return this.passwordIsValid
        } else return !this.passwordIsValid
       },
      invalidPasswordStyles(){
           if (this.password && !this.validPassword) {
             return {
               'border-color': '#da5252',
             }
           } else if(this.password && this.validPassword){
             return {
               'border-color': '#AED23B',
             } 
           } 
           else {
             return ''
           }
         },
      showPasswordCheck(){
          if (this.password.length <1) {
             return{
               'display':'none'
             }
        } else {
             return{
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
},
    methods:{
      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
    },
      setPassword(value) {
        this.password = value
        this.$v.password.$touch()
    },
      showPassword () {
        this.passwordVisible = ! this.passwordVisible;
      },
      onLogin(){
         this.$v.$touch()
         if(this.email == '123@123.com' && this.password == '123'){
           setTimeout(()=>{
              const url ='https://www.justspices.de/'
               window.location = url;
           },1000)
         } else {   
           console.log('error')
          setTimeout(()=>{
               return this.resetFields()
             },800)
         }
    },
    loginForm() {
      console.log('login!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.loginStatus = 'ERROR'
      }else if(this.email !== '123@123.com' || this.password !== '123'){
        this.loginStatus = 'ERROR'
      }else {
        this.loginStatus = 'OK'
      }
    },
      resetFields(){
        this.email = '';
        this.password = '';
        this.passwordIsValid=false
        this.passwordVisible= false
        this.loginStatus= false
        this.emailIsValid= false
    },
  }
}

</script>

<style>
button.active {
  cursor: pointer;
  background-color: #AED23B;
}
</style>



