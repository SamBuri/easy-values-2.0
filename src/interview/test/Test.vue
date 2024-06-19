<script setup>
  import { computed } from 'vue';
import testController from './TestController';
  import {ref} from 'vue'
import { onMounted } from 'vue';
  const {candidate, candidates, add, clear, formValid, mount} = testController();
 const skill= ref('');
 onMounted(()=>{
  mount()
 })
 const emailMessage = ref('')

 const skillBtnEnabled = computed(()=>{
   return skill.value && candidate.skills.length<5;
 })
 const addSkill = (e)=>{
  e.preventDefault()
  candidate.skills.push(skill.value)
  skill.value='';
 }

 const emailValid = computed(()=>{
       let exist= candidates.value
            .filter(p=>p.email)
            .filter(p=>p.email.toLowerCase()===candidate.email.toLowerCase()).length>0;

         if(exist){
          emailMessage.value = 'Email already exists'
         }
         else emailMessage.value ='';

 })

</script>
<template>

    <div>

        <h1>Applicant Data</h1>

        <v-form @submit="(e)=>e.preventDefault" class="form">

      <p><label> First Name  </label> <input type ="text" name="firstname" placeholder ="First Name" v-model="candidate.firstName"/></p>
      <p><label> Last Name   </label> <input type ="text" name="lastname" placeholder ="Last Name" v-model="candidate.lastName"/></p>
      <p v-if="!isLastNameValid" class="errorMessage"><label></label>{{ lastNameMessage }}</p>
      <p><label> Email   </label> <input type ="text" name="email" placeholder ="Email" v-model="candidate.email"/></p>
      <p v-if="!emailValid" class="errorMessage"><label></label>{{ emailMessage }}</p>

      <p><label> Skills   </label>

      <input v-model="skill" type="text"/>

       <button @click="addSkill" :disabled="!skillBtnEnabled">Add</button>

        </p>
        <!-- :disabled="!formValid" -->
   <center><button @click="add" > Submit</button> <button @click="clear" > Clear</button></center>

</v-form>
<button @click="$router.push('/testlist')" >List</button>
<a href="testlist">List</a>

{{ candidates }}

candidate

{{ candidate }}
    </div>

  </template>
<!--
  <script>


  export default {
      name: "Test",
      data: ()=>({
        skills: ['Java', 'JavaScript', 'PHP'],
        model: {
            firstName: '',
            lastName: "",
            email: "",
            skill: '',
            clear(){
                this.firstName = '';
                this.lastName= '';
                this.email='',
                this.skill = ''

            }
        },
        profiles: [],

      }),

      mounted() {
       let data = localStorage.getItem("profiles");
       this.profiles = data?JSON.parse(data): [];
      },

      computed: {

        firstNameValid(){
            return this.model.firstName.length;
        },

        isLastNameValid(){
            return this.model.lastName.length>0;
        },

        lastNameMessage(){
           return this.isLastNameValid?"":"Last Name is required"
        },

        emailExists(){
            let exist= this.profiles
            .filter(p=>p.email)
            .filter(p=>p.email.toLowerCase()===this.model.email.toLowerCase()).length>0;

            return exist;
        },

        emailEntered(){
            return this.model.email.length>0;
        },

        isEmailValid (){
            return this.emailEntered && this.isLastNameValid && !this.emailExists;
        },

        emailMessage(){
            return this.emailExists?"Email already exists":!this.emailEntered ?"Email not entered": "";
        },

        isFormValid(){
            return this.isEmailValid;
        }




      },

      methods:  {


        // emailValid(){
        //     if(!this.model.email.length){
        //         this.emailMessage = "Email is required"
        //         return false;
        //     }
        //     else {
        //         if(this.profiles.filter(p=>p.email.toLowerCase===this.model.email).length>0){
        //            this.emailMessage = "Email already exists";
        //            return false;
        //         }
        //         return true;
        //     }


        // },


       submit(e){
         e.preventDefault();
        let finishedData =  Object.assign({}, this.model)
        this.profiles.push(finishedData);
        localStorage.setItem('profiles', JSON.stringify(this.profiles));
        alert("Successful");
        this.model.clear();
       }
      }

  }

  </script> -->

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
  .form input{
    border: 0.5px solid #ccc;
    padding-left: 20px;
  }

  .form button{
     background-color: blue;
  }

  .form button :disabled{
     background-color:darkgray
  }

  .form select{
    border: 0.5px solid #ccc;
    margin-left: 20px;
  }

  .errorMessage{
     color: red;
  }

</style>
