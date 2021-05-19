<template>
  <div id="register" class="h-65 mb-16">
    <div class="border-b border-gray-200">
      <div class="pl-6 pr-6">
      <h1 class="text-xl leading-relaxed mt-12 font-bold">ICH BIN NEU HIER</h1>
      <h3 class="text-gray-400 text-xs">Jetzt Dein Kundenkonto erstellen.</h3>
      <div class="mt-5">
          <div class="flex items-center">
            <span class="inline-block align-middle h-full">
              <img src="../assets/images/blackStar.png" alt="star" class="w-5 mr-3">
            </span>
            <p class="text-xs text-gray-600 leading-8">Automatisch <strong class="text-black">Punkte</strong> für Deinen Einkauf <strong class="text-black"> Sammeln</strong></p>
          </div>
          <div class="flex items-center">
            <span><img src="../assets/images/care.png" alt="care service" class="w-5 mr-3"></span>
            <p class="text-xs text-gray-600 leading-8">Rabatte & <strong class="text-black">Gratisprodukte</strong>  erhalten</p>
          </div>
          <div class="flex items-center pb-7">
            <span><img src="../assets/images/person.png" alt="customer service" class="w-5 mr-3"></span>
            <p class="text-xs text-gray-600 leading-8"><strong class="text-black">Übersicht Deiner Bestellungen </strong>und Produkte bewerten</p></div>
      </div>
    </div>
      </div>
     <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" class="mt-7 pl-6 pr-6">
       <div class="form-row border border-gray-400 mt-5">
         <div class="form-field h-10">
          <div class="relative w-full h-full">
            <input 
              type="text" 
              id="fullname"
              value=''
              class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side rounded-lg z-0 outline-none" 
              v-model.trim="email" 
              placeholder="Vorname*"
            >
            <button 
              class="absolute hidden top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/cross.png"/></button>
        </div>
        </div>
      </div>
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
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
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
            <input type="password" class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-side rounded-lg z-0 outline-none" id="password" v-model.trim="password" placeholder="Passwort*">
            <button 
              class="absolute top-0 right-0 h-10 w-20 text-gray-300 rounded-lg hover:text-gray-800 text-side"
              v-on:click="showPassword"
            >ZEIGEN</button>
            <button 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/check1.png"/></button>
            <button 
              class="absolute top-0 right-0 h-10 w-10 text-gray-300 rounded-lg"
            ><img class="w-5" src="../assets/images/cross.png"/></button>

        </div>
        </div>
      </div>
      <div class="relative w-full h-full">
       <button class="absolute bg-primary h-11 bg-primary rounded-sm w-full mt-5 uppercase text-white font-extrabold" type="submit" v-bind:disabled="!formIsValid">
       registrieren
      </button>
      <button class="absolute bg-primary h-11 bg-secondary rounded-sm w-full mt-5 uppercase text-white font-extrabold" type="submit">
      <i class="fas fa-check"></i> BESTÄTIGUNG PER MAIL VERSENDET
      </button>
      </div>
      <div class="text-justify text-mini text-secondary mt-20">Wir haben Dir eine E-Mail an johanna@gmx.de gesendet. Dort findest Du einen Aktivierungslink für Dein Benutzerkonto.</div>
     </form>              
  </div>
</template>

<script>
export default {
    name:'registerForm',
    data() {
      return {
        fullname: "",
        email: "",
        password:""
      };
    },
    computed: {
      formIsValid(){
        return this.fullname && this.email && this.password;
      }
    },
    methods:{
      showPassword: ()=>{
        var password = document.getElementById("password");
          if (password.type === "password") {
            password.type = "text";
          } else {
            password.type = "password";
          }
      }
    }
}

</script>