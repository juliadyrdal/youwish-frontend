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
        <NuxtLink to="/home"><span class="text-2xl font-bold">you wish.</span></NuxtLink>

        <div class="flex gap-2">
            <UiButtonPrimary :onClick="() => openModal('productModal')" text="Add new item" />
            <UiProfileDropDown />
        </div>

    </nav>
    <!--End Navbar-->

    <!--Add item modal-->
    <UiModalItem />
    <!--End Add item modal-->

</template>