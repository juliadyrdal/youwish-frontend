<script setup>
// Declare component props
const props = defineProps({
    text: { type: String, required: true }, 
    // Pass function to run when button is clicked
    onClick: { type: Function, default: null }
});
</script>

<template>
    <div>
        <button @click="onClick" class="rounded text-sm bg-white border border-[#333] py-2 px-4">{{ text }}</button>
    </div>
</template>