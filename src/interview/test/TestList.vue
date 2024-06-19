<script setup>
import { computed, onMounted } from 'vue';
import testController from './TestController';
import { ref } from 'vue';
const {candidates, mount} = testController();

onMounted(()=>{
  mount();
})
const search = ref('')

const filteredCandidates = computed(()=>{
    if(!search.value) return candidates.value;
    return candidates.value
    .filter(c=>c.skills.toString().toLowerCase()
    .includes(search.value.toLowerCase()))
})
</script>

<template>
    <div>


        <input type="text" placeholder="Search by Skill" class="input" v-model="search" />
        <h1> Registered Data {{ filteredCandidates.length||0 }}</h1> <button @click="$router.push({name: 'test'})">Test</button>

        <div class="card" v-for="model, i in filteredCandidates" :key="i">

            <p>First Name: {{ model.firstName }}</p>
            <p>Last Name: {{ model.lastName }}</p>
            <p>Email: {{ model.email }}</p>
            <p>Skill: {{ model.skills }}</p>

            <p></p>

        </div>
    </div>
</template>
<!--
<script>
export default {
    name: "TestList",
    data: () => ({
        profiles: [],
        search: ''
    }),

    created() {
        let data = localStorage.getItem("profiles");
        this.profiles = data ? JSON.parse(data) : [];
    },

    computed: {
        count() {
            return this.filteredProfiles.length;
        },

        filteredProfiles() {

            if (this.search.length) {
                return this.profiles.filter(p => p.skill.toLowerCase().includes(this.search.toLowerCase()))
            }
            else {
               return this.profiles;
            }
        },

    },

    watch: {

    },

    methods: {
        validateEmail() {
            // Regular expression for a basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Update isEmailValid based on the validation result
            this.isEmailValid = emailRegex.test(this.email);
        },
    }



}

</script> -->
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
</style>
