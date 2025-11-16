<script setup>

import candidateStore from "@/interview/test/testStore";
import {ref} from 'vue'
const skill = ref('');
const candidate = candidateStore.candidate;

const addSkill = (e) => {
  e.preventDefault()
  const skillValue = skill.value?.trim()
  if(!skillValue) return;
  if (!candidate.skills.some(sk => sk.toLowerCase().includes(skillValue)))
    candidate.skills.push(skillValue)
  skill.value = '';
}


</script>
<template>

  <div>

    <h1>Applicant Data</h1>

    <v-form @submit="(e)=>e.preventDefault" class="form">

      <p><label> First Name </label> <input type="text" name="firstname" placeholder="First Name"
                                            v-model="candidate.firstName"/></p>
      <p><label> Last Name </label> <input type="text" name="lastname" placeholder="Last Name"
                                           v-model="candidate.lastName"/></p>
      <p><label> Email </label> <input type="text" name="email" placeholder="Email" v-model="candidate.email"/></p>
      <p><label> Skills </label></p>
      <input v-model="skill" type="text"/>
      <button @click="addSkill" :disabled="!skill||candidate.skills.length>=5">Add</button>
      <p><label> Skills: {{ candidate.skills.join(",") }} </label></p>

        <button @click="candidateStore.add" :disabled="!candidate.email||!candidate.skills.length||!candidate.firstName||!candidate.lastName"> Submit</button>
        <button @click="candidateStore.clearAll"> Clear</button>
      <p v-if="candidateStore.state.message" :class="candidateStore.state.saved?'successMessage':'errorMessage'"><label></label>{{ candidateStore.state.message }}</p>


    </v-form>
    <button @click="$router.push({name: 'testlist'})" class="form button">List</button>


  </div>

</template>


<style>

form {
  margin: 20px;
}

label, input, select, textarea, button {
  display: block;
  margin-bottom: 10px;
}

.form {
  padding: 20px;
  border: 1px solid #ccc;
  width: 400px;
  margin: 20px;
}

.form input {
  border: 0.5px solid #ccc;
  padding-left: 5px;
}

.form button {
  background-color: blue;
}

.form button :disabled {
  background-color: darkgray
}

.form select {
  border: 0.5px solid #ccc;
  margin-left: 20px;
}

.errorMessage {
  color: red;
}

.successMessage {
  color: blue;
}

</style>
