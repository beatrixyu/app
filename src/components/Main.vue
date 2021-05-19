<template>
  <div id="main h-auto">
      <div class="flex h-20">
        <div class="flex-1">
            <router-link to="/register">
             <div id="registerBtn" class="h-full flex justify-center items-center flex-col mt-3 border-b-4 " v-on:click="changeBorderColor">
            <div class="inline-block align-middle font-semibold font-poppins uppercase">registrieren
             </div> 
            <p class="text-side text-gray-400">oder Gastbestellung</p>
          </div>
            </router-link>
        </div>
        <div class="flex-1 text-center">
            <router-link to="/login">
             <div id="loginBtn" class="h-full flex justify-center items-center flex-col border-primary border-b-4 mt-3" v-on:click="reverseBorderColor">
            <span class="uppercase font-semibold">
              Anmelden
            </span>
             <p class="text-side text-gray-400">im Kundenkonto</p>
          </div>
            </router-link>
        </div>
  </div>
      <router-view></router-view>
    <!-- <Register/>
    <Login /> -->
  </div>

</template>

<script>
// import Register from './Register.vue'
// import Login from './Login.vue'


export default {
  name: 'Main',
  components: {
    // Register,
    // Login
  },
  methods: {
    changeBorderColor:()=>{
      document.getElementById("registerBtn").style.borderColor = "#AED23B";
      document.getElementById("loginBtn").style.borderColor = "#e5e7eb";
    },
     reverseBorderColor:()=>{
      document.getElementById("registerBtn").style.borderColor = "#e5e7eb";
      document.getElementById("loginBtn").style.borderColor = "#AED23B";
    }
  }
}

</script>

<style>
   /* #main h1{
       position: absolute;
       width: 153px;
       height: 25px;
       left: 21px;
       top: 189px;
       font-family: Brandon Text;
       font-style: normal;
       font-weight: bold;
       font-size: 18px;
       line-height: 25px;
   } */
</style>
