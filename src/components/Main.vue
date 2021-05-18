<template>
  <div id="main h-auto">
      <div class="flex h-20">
        <div class="flex-1">
          <div id="registerBtn" class="h-full flex justify-center items-center flex-col mt-3 border-b-4 border-primary" v-on:click="changeBorderColor">
            <router-link exact to="/register" class="uppercase">
            <div class="inline-block align-middle font-semibold font-poppins">registrieren
             </div> 
            </router-link>
            <p class="text-side text-gray-400">oder Gastbestellung</p>
          </div>
            
        </div>
        <div class="flex-1 text-center">
          <div id="loginBtn" class="h-full flex justify-center items-center flex-col  border-b-4 mt-3" v-on:click="reverseBorderColor">
            <router-link to="/login">
            <span class="uppercase font-semibold">
              Anmelden
            </span>
            </router-link>
            <p class="text-side text-gray-400">im Kundenkonto</p>
          </div>
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
