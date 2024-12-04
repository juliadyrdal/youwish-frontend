<script setup>
// Import store
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Destructure actions
const { openModal } = uiStore
</script>

<template>
    <!--Empty state-->
    <div class="mx-[120px] mt-4 py-12 text-[#333] flex flex-col justify-center items-center">
        <h1 class="mb-8 text-center text-lg">Start adding items to see your wishlist here</h1>
        <UiButtonSecondary :onClick="() => openModal('productModal')" text="Add new item" />
    </div>
    <!--End Empty state-->
</template>