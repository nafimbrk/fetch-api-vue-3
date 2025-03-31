<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "../../api";

const route = useRoute()

const name = ref("")
const gender = ref("")
const age = ref(null)

onMounted(async () => {
    await api.get(`/api/person/show/${route.params.id}`)
    .then(response => {
        name.value = response.data.data.name
        gender.value = response.data.data.gender
        age.value = response.data.data.age
    })   
})
</script>

<template>
    <div class="container mt-5 mb-5">
       <div class="row">
           <div class="col-md-12">
               <div class="card border-0 rounded shadow">
                   <div class="card-body">
                       <table class="table table-bordered">
                           <thead class="bg-dark text-white">
                               <tr>
                                   <th scope="col">Name</th>
                                   <th scope="col">Gender</th>
                                   <th scope="col">Age</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                <td v-text="name"></td>
                                <td v-text="gender"></td>
                                <td v-text="age"></td>
                               </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>
