<script setup>
const props = defineProps({
    image: {
      type: Object,
      default: null,
    },
});
</script>

<template>
    <div class="w-32">
        <img
            :src="image ? `${image}` : 'https://placehold.co/400'"
            alt="User"
            class="object-cover w-full h-full rounded-full"
        />
    </div>
</template>