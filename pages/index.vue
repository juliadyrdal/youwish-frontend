<script setup>
// Import store
import { useUiStore } from '@/stores/uiStore.js'

definePageMeta({
  layout: 'loggedout', 
})

// Access store
const uiStore = useUiStore()

// Make reactive
const { signupState } = storeToRefs(uiStore)

</script>

<template>
    <div>
        <!--Sign up component-->
        <SignUp v-if="signupState" />

        <!--Log in component-->
        <LogIn v-if="!signupState" />

        <div class="flex justify-center mt-4">
            <DemoUser />
        </div>
    </div>
</template>