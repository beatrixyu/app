<template>
  <div id="login" class="h-70">
    <div class="border-gray-200">
      <div class="pl-6 pr-6">
      <h1 class="text-xl leading-relaxed mt-12 font-bold uppercase">WILLKOMMEN ZURÜCK</h1>
      <h3 class="text-gray-400 text-xs">Jetzt im Kundenkonto einloggen.</h3>
    </div>
      </div>

     <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" class="mt-7 pl-6 pr-6">
      <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
              type="email" 
              id="email"
              value=''
              class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side rounded-lg z-0 outline-none" 
              v-model.trim="email" 
              placeholder="E-Mail Adresse*"
            >
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/cross.png"/></button>
        </div>
        </div>
      </div>
       <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
             type="password"
             value=''
             class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side rounded-lg z-0 outline-none" 
             id="password" 
             v-model.trim="password" 
             placeholder="Passwort*"
             >
            <button 
              class="absolute top-0 right-0 h-10 w-20 text-gray-300 rounded-lg hover:text-gray-800 text-side"
              v-on:click="showPassword"
            >ZEIGEN</button>
            <button 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute  top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/cross.png"/></button>

        </div>
        </div>
      </div>
       <button class="bg-primary h-11 bg-green-300 rounded-sm w-full mt-5 uppercase text-white primary font-extrabold uppercase" type="submit" v-bind:disabled="!formIsValid">anmelden</button>
      <div >
        <p><img src="../assets/images/cross.png" alt="invalid"> Ungültiger Benutzername oder Passwort.</p>
      </div>
      <div class="text-gray-400 w-full mt-10">
       <p class="text-center underline">Passwort vergessen?</p>
     </div>

     </form>              

  </div>
</template>

<script>
export default {
    name:'loginForm',
    data() {
      return {
        email: "123@123.com",
        password:"123456"
      };
    },
    computed: {
      formIsValid(){
        return this.email && this.password;
      }
    },
    methods:{
      showPassword: ()=>{
        let password = document.getElementById("password");
          if (password.type === "password") {
            password.type = "text";
          } else {
            password.type = "password";
          }
      }
    }
}

</script>