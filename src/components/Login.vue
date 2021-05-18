<template>
  <div id="login">
     <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" class="mt-7 pl-6 pr-6">
       <div class="form-row border border-gray-400 mt-5">
         <div class="form-field h-10">
          <!-- <label for="first-name">First Name</label> -->
          <input class="placeholder-gray-400 h-full w-full focus:ring-1 focus:ring-purple-600 pl-4 text-xs" type="text" id="first-name" v-model.trim="fullname" placeholder="Vorname*"/>
        </div>
      </div>
      <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <!-- <label for="email">Email</label> -->
          <input class="placeholder-gray-400 h-full w-full pl-4 text-xs" type="text" id="email" v-model.trim="email" placeholder="E-Mail Adresse*"/>
        </div>
      </div>
       <div class="form-row border border-gray-400 mt-5">
        <div class="form-field h-10">
          <!-- <label for="password">Password</label> -->
          <input class="placeholder-gray-400 h-full w-full pl-4 text-xs" type="password" id="password" v-model.trim="password" placeholder="Passwort*"/>
        </div>
      </div>
       <button class="h-11 bg-green-300 rounded-sm w-full mt-5 uppercase text-white primary font-extrabold" type="submit" v-bind:disabled="!formIsValid">registrieren</button>
     </form>              

  </div>
</template>