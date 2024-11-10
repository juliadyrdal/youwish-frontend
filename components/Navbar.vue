<script setup>
// Import store
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Destructure actions
const { openModal } = uiStore
</script>

<template>

    <!--Navbar-->
    <nav class="flex justify-between mx-[120px] py-4 text-[#333]">
        <h1 class="text-2xl font-bold">you wish.</h1>
        <UiButtonPrimary :onClick="() => openModal('productModal')" text="Add new item" />
    </nav>
    <!--End Navbar-->

    <!--Add item modal-->
    <UiModalItem />
    <!--End Add item modal-->

</template>