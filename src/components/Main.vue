<template>
  <div id="main h-auto">
      <div class="flex h-20">
        <div class="flex-1">
          <div class="h-full flex justify-center items-center flex-col border-b-2 mt-3">
            <router-link to="/register" class="uppercase">
            <span class="inline-block align-middle font-semibold font-poppins">registrieren
             </span> 
            </router-link>
            <p class="text-side text-gray-400">oder Gastbestellung</p>
          </div>
            
        </div>
        <div class="flex-1 text-center">
          <div class="h-full flex justify-center items-center flex-col  border-b-2 mt-3">
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
