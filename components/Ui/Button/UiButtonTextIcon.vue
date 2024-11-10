<script setup>
// Declare component props
const props = defineProps({
    // Icon is interpreted as a function by vue
    icon: { type: [Object, Function], required: true },
    text: { type: String, required: true },
    // Function to run when button is clicked 
    onClick: { type: Function, default: null }
});
</script>

<template>
    <button @click="onClick" class="flex gap-1 items-center">
        <component :is="icon" class="size-5 text-gray-500" />
        <span class="hover:underline underline-offset-4">{{ text }}</span>
    </button>
</template>
