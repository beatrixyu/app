<template>
  <div id="login">
    <h1>Login</h1>
     <form v-on:reset="resetFields" v-on:submit.prevent="submitForm">
       <div class="form-row">
         <div class="form-field">
          <!-- <label for="first-name">First Name</label> -->
          <input type="text" id="first-name" v-model.trim="firstName" placeholder="Vorname*"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-field">
          <!-- <label for="email">Email</label> -->
          <input type="text" id="email" v-model.trim="email" placeholder="E-Mail Adresse*"/>
        </div>
      </div>
       <div class="form-row">
        <div class="form-field">
          <!-- <label for="password">Password</label> -->
          <input type="number" id="email" v-model.trim="email" placeholder="Passwort*"/>
        </div>
      </div>
     </form>     
  </div>
</template>