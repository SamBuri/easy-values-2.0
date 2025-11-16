<script setup>
import { computed, onMounted } from 'vue';
import candidateStore from "@/interview/test/testStore";
import { ref } from 'vue';
// const candidates = candidateStore.candidates;
onMounted(()=>{

})
const search = ref('')
const searchTerm = ref('');
const searchResults =candidateStore.searchResults;
const isSearching =candidateStore.isSearching;

const filteredCandidates = computed(()=>{
    if(!search.value) return candidates.value;
    return candidates.value
    .filter(c=>c.skills.toString().toLowerCase()
    .includes(search.value.toLowerCase()))
})

const candidates = candidateStore.candidates;

const searchData = (e)=>{
  e.preventDefault();
  candidateStore.search(searchTerm.value);
}

const clearSearch =(e)=>{
  e.preventDefault();
  candidateStore.clearSearch();
  searchTerm.value='';
}

</script>

<template>
    <div class="outer">

      <button @click="$router.push({name: 'test'})" class="button">Test</button>
        <p><input type="text" placeholder="Search by Skill" class="input" v-model="searchTerm" /> <button @click="searchData" class="button" v-if="searchTerm"> Search</button> <button v-if="isSearching"  @click="clearSearch" class="button">Clear Search</button></p>
      <div v-if="isSearching"><h1> Search Results {{ searchResults.length }}</h1></div>
      <div v-else> <h1> All Candidates {{ candidates.length }}</h1></div>


        <div v-if="isSearching" class="card" v-for="model, i in searchResults" :key="i">

            <p>First Name: {{ model.firstName }}</p>
            <p>Last Name: {{ model.lastName }}</p>
            <p>Email: {{ model.email }}</p>
            <h5>Skills: {{model.skills?.join(", ")}}</h5>
             <p v-for="skill in  model.skills" :key="skill">{{ skill }}</p>

        </div>
      <div v-else class="card" v-for="model, j in candidates" :key="j">

        <p>First Name: {{ model.firstName }}</p>
        <p>Last Name: {{ model.lastName }}</p>
        <p>Email: {{ model.email }}</p>
       Skills: {{model.skills?.join(", ")}}
<!--        <p v-for="skill in  model.skills" :key="skill">{{ skill }}</p>-->

      </div>
    </div>
</template>

<style>
.input {
    border: 1px solid #ccc;
    width: 300px;
}

.card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
}

/* Styling for the card content */
.card p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
}

.button {
  color: #a7ffeb;
  background: #0d47a1;
}

.outer{
  padding: 10px;
}
</style>
