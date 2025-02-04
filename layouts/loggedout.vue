<script setup>
// Import stores
import { useUiStore } from '@/stores/uiStore.js'



// Access store
const uiStore = useUiStore()

// Make reactive
const { signupState } = storeToRefs(uiStore)

const router = useRouter()

const handleLogIn = () => {
    // Change signupState so LogIn component is shown
    signupState.value = false
    // Redirect to /
    router.push('/')
}
</script>

<template>
    <div>
        <nav class="flex justify-between mx-[120px] py-4 text-[#333]">
            <h1 class="text-2xl font-bold">you wish.</h1>
            <UiButtonSecondary :onClick="handleLogIn" text="Log in" />
        </nav>
        <slot />
    </div>
</template>