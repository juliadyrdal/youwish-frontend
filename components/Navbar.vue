<script setup>
// Import store
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Destructure actions
const { openModal } = uiStore

// Import from useAuth composable
const { status } = useAuth()

// Computed 'logged in' status
const loggedIn = computed(() => status.value === 'authenticated')
</script>

<template>

    <!--Navbar-->
    <nav class="flex justify-between mx-[120px] py-4 text-[#333]">
        <h1 class="text-2xl font-bold">you wish.</h1>

        <div class="flex gap-2">
            <UiButtonPrimary :onClick="() => openModal('productModal')" text="Add new item" />
            <UiProfileDropDown v-if="loggedIn" />
        </div>

    </nav>
    <!--End Navbar-->

    <!--Add item modal-->
    <UiModalItem />
    <!--End Add item modal-->

</template>