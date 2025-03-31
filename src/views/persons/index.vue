<script setup>
import { ref, onMounted } from "vue";

import api from '../../api'

const persons = ref([])

const fetchDataPersons = async () => {
    await api.get('/api/person')

    .then(response => {
        persons.value = response.data.data
    })
}

onMounted(() => {
    fetchDataPersons()
})

const deletePerson = async (id) => {
    await api.delete(`/api/person/destroy/${id}`)
    .then(() => {
        fetchDataPersons()
    })
}
</script>

<template>
     <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'persons.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">Add New Person</router-link>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="persons.length == 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            data belum tersedia
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(person, index) in persons" :key="index">
                                    <td>{{ person.name }}</td>
                                    <td>{{ person.gender }}</td>
                                    <td>{{ person.age }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'persons.edit', params: { id: person.id } }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">Edit</router-link>
                                        <router-link :to="{ name: 'persons.show', params: { id: person.id } }" class="btn btn-sm btn-success rounded-sm shadow border-0 me-2">Show</router-link>
                                        <button @click.prevent="deletePerson(person.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>