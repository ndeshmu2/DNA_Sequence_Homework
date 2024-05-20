<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Input from './components/Input.vue'
import Button from './components/Button.vue'

const inputValue = ref('')
const responseMessage = ref('')
const responseClass = ref('')
const isLoading = ref(false)
const pastRequests = ref([])

const handleInputChange = (newValue) => {
  inputValue.value = newValue
}

const handleSubmit = async () => {
  isLoading.value = true
  responseMessage.value = ''
  responseClass.value = ''
  try {
    const response = await axios.post('http://localhost:8080/api/sendString',
      new URLSearchParams({
        sequence: inputValue.value
      }), {}
    )

    if (response.data.success) {
      responseMessage.value = response.data.message
      responseClass.value = 'text-green-500'
      pastRequests.value.push({ sequence: inputValue.value, result: responseMessage.value })
      inputValue.value = ''
    } else {
      responseMessage.value = response.data.error
      responseClass.value = 'text-red-500'
    }
  } catch (error) {
    responseMessage.value = 'An error occurred'
    responseClass.value = 'text-red-500'
  }
  isLoading.value = false
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <Input placeholder="Enter DNA sequence..." :onInput="handleInputChange" :value="inputValue" />
    <Button text="Submit" :onClick="handleSubmit"></Button>
    <div v-if="isLoading" class="mt-4 text-lg">
      <span class="loader"></span>
      Processing...
    </div>
    <div v-if="responseMessage" :class="responseClass" class="mt-4 text-lg">
      {{ responseMessage }}
    </div>
    <table v-if="pastRequests.length" class="mt-4 w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="py-3 px-6">Sequence</th>
          <th class="py-3 px-6">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(request, index) in pastRequests" :key="index" class="bg-white border-b">
          <td class="py-4 px-6">{{ request.sequence }}</td>
          <td :class="responseClass">{{ request.result }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
