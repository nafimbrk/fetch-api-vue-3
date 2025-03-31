<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

import api from '../../api'

const router = useRouter()

const name = ref("")
const gender = ref("")
const age = ref(null)
const errors = ref([])

const storePerson = async () => {
    let formData = new FormData()

    formData.append('name', name.value)
    formData.append('gender', gender.value)
    formData.append('age', age.value)
    
    await api.post('/api/person/store', formData)
    .then(() => {
        router.push({ path: '/persons' })
    })
    .catch((error) => {
        errors.value = error.response.data
    })
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="storePerson()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name</label>
                                <input type="text" class="form-control" v-model="name">
                                <div v-if="errors.name" class="alert alert-danger mt-2">
                                    <span>{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Gender</label>
                                <select class="form-control" v-model="gender">
                                    <option value="" disabled>Pilih Gender</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <div v-if="errors.gender" class="alert alert-danger mt-2">
                                    <span>{{ errors.gender[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Age</label>
                                <input type="number" class="form-control" v-model="age">
                                <div v-if="errors.age" class="alert alert-danger mt-2">
                                    <span>{{ errors.age[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>