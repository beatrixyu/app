<template>
  <div id="login" class="h-60">
    <div class="border-gray-200">
      <div class="pl-6 pr-6">
      <h1 class="text-xl leading-relaxed mt-12 font-bold uppercase">WILLKOMMEN ZURÜCK</h1>
      <h3 class="text-gray-400 text-xs">Jetzt im Kundenkonto einloggen.</h3>
    </div>
      </div>

     <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" class="mt-7 pl-6 pr-6">
      <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <!-- <label for="email">Email</label> -->
          <input class="placeholder-gray-400 h-full w-full pl-4 text-xs" type="text" id="email" v-model.trim="email" placeholder="E-Mail Adresse*"/>
        </div>
      </div>
       <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <!-- <label for="password">Password</label> -->
          <!-- <input class="placeholder-gray-400 h-full w-full pl-4 text-xs" type="password" id="password" v-model.trim="password" placeholder="Passwort*"/> -->
          <div class="relative w-full h-full">
            <input type="password" class="m-0 p-0 placeholder-gray-400 h-full w-full pl-4 text-xs rounded-lg z-0 outline-none" id="password" v-model.trim="password" placeholder="Passwort*">
            <button class="absolute top-0 right-0 h-10 w-20 text-gray-300 rounded-lg hover:text-gray-800">ZEIGEN</button>
        </div>
        </div>
      </div>
       <button class="bg-primary h-11 bg-green-300 rounded-sm w-full mt-5 uppercase text-white primary font-extrabold uppercase" type="submit" v-bind:disabled="!formIsValid">anmelden</button>
      <div class="text-gray-400 w-full mt-10">
       <p class="text-center underline">Passwort vergessen?</p>
     </div>

     </form>              

  </div>
</template>