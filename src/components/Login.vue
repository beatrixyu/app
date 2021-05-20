<template>
  <div id="login" class="h-65">
    <div class="border-gray-200">
      <div class="pl-6 pr-6">
      <h1 class="text-xl leading-relaxed mt-12 font-bold uppercase">WILLKOMMEN ZURÜCK</h1>
      <h3 class="text-gray-400 text-xs">Jetzt im Kundenkonto einloggen.</h3>
    </div>
      </div>

     <form v-on:submit.prevent="loginForm" class="mt-7 pl-6 pr-6" :class="formIsInvalid ? 'invalid' : ''">
      <div class="form-row border border-gray-400 mt-5" id="emailContainer">
        <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
              type="email" 
              id="email"
              value=''
              class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side z-0 outline-none" 
              v-model.trim="email" 
              placeholder="E-Mail Adresse*"
              
            >
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300" id="emailCheck"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300" id="emailCross"
            ><img class="w-5" src="../assets/images/cross1.png"/></button>
        </div>
        </div>
      </div>
       <div class="form-row border border-gray-400 mt-5" id="passwordContainer">
        <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
             type="password"
             value=''
             class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side z-0 outline-none" 
             id="password" 
             v-model.trim="password" 
             placeholder="Passwort*"
             >
            <span 
              class="absolute top-0 right-0 h-10 w-20 text-gray-300 hover:text-gray-800 text-side flex justify-center items-center"
              v-on:click="showPassword"
            ><p id="showpassword">ZEIGEN</p> </span>
            
            <button 
              class="hidden absolute top-0 right-0 h-10 w-10 text-gray-300" id="passwordCheck"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300" id="passwordCross"
            ><img class="w-5" src="../assets/images/cross1.png"/></button>

        </div>
        </div>
      </div>
       <!-- vuelidate -->
      <!-- <div class="relative w-full h-full">
      <button 
        class="absolute bg-primary h-11 bg-primary rounded-sm w-full mt-5 uppercase text-white font-extrabold" 
        type="submit" 
        :disabled="!formIsValid"
        @click="onLogin"
       > anmelden
        </button>
        <div class="" v-if="loginStatus === 'ERROR'">
        <div class="hidden text-danger text-justify text-mini mt-5" >
          <i class="fas fa-times mr-1"></i>Ungültiger Benutzername oder Passwort.
        </div>
        </div>
      </div> -->
      <!-- end -->
       <button 
         class="bg-primary h-11 bg-green-300 rounded-sm w-full mt-5 uppercase text-white primary font-extrabold uppercase"
          type="submit" 
          v-bind:disabled="!formIsValid"
          @click="onLogin"
          >anmelden</button>
      <div class="hidden text-danger text-justify text-mini mt-5" id="errorMsg">
        <i class="fas fa-times mr-1"></i>Ungültiger Benutzername oder Passwort.
      </div>
      <div class="text-gray-400 w-full mt-10">
       <p class="text-center underline text-side"><a href="https://beatrixyu.github.io/app/" target="_blank">Passwort vergessen?</a> </p>
     </div>

     </form>              

  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

 export default {
    name:'loginForm',
    data() {
      return {
        email: "",
        password:"",
        loginStatus: null
      };
    },
    validations:{
      email:{
        required,
        email
      },
      password: {
        required
      }
    },
    computed: {
      formIsValid(){
        return this.email && this.password;
      }
    },
    methods:{
      showPassword() {
        let password = document.getElementById("password");
        if (password.type === "password") {
          password.type = "text";
        } else {
          password.type = "password";
        }
      },
      showError(){
        let password = document.getElementById("password");
        let email = document.getElementById("email");
        password.style.borderColor='#FC5763';
        email.style.borderColor='#FC5763';
      },
      onLogin(){
        this.$v.$touch()
        if(this.email == '123@123.com' && this.password == '123'){
          document.getElementById("passwordContainer").style.borderColor="#AED23B"
          document.getElementById("passwordCheck").style.display="block"
          document.getElementById("showpassword").style.display="none"
          document.getElementById("passwordCross").style.display="none"
          document.getElementById("emailContainer").style.borderColor="#AED23B"
          document.getElementById("emailCheck").style.display="block"
          document.getElementById("emailCross").style.display="none"
          document.getElementById("errorMsg").style.display='none';

           setTimeout(()=>{
             const url ='https://www.justspices.de/'
             window.location = url;
          },2000)
        } else {
          document.getElementById("errorMsg").style.display='block';
          document.getElementById("passwordContainer").style.borderColor="#FC5763"
          document.getElementById("passwordCross").style.display="block"
          document.getElementById("showpassword").style.display="none"
          document.getElementById("emailContainer").style.borderColor="#FC5763"
          document.getElementById("emailCheck").style.display="none"
          document.getElementById("emailCross").style.display="block"


        }
      },
      loginForm() {
      console.log('login!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.loginStatus = 'ERROR'
      }else if(this.email !== '123@123.com' || this.password !== '123'){
        this.loginStatus = 'ERROR'
      }
      else {
          this.loginStatus = 'OK'
      }
    }
    }
}

</script>

