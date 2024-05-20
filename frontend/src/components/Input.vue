<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    onInput: {
        type: Function,
        required: true
    },
    placeholder: {
        type: String,
        default: 'Enter text here'
    }
})

const handleInput = (event) => {
    props.onInput(event.target.value)
}
</script>

<template>

    <input
        class="bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
        type="text" :placeholder="placeholder" @input="handleInput" />

</template>
