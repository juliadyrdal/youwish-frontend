<script setup>
// Import composable for authentication
import { useAuth } from '@/composables/useAuth';

// Import store
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Destructure actions
const { toggleSignup } = uiStore

// Access composable
const { handleLogIn, loading, error } = useAuth();

const email = ref('')
const password = ref('')

// Log in user
const onLogIn = async () => {
  await handleLogIn(email.value, password.value)
}
</script>

<template>
    <div>
        <!--Log in-->
        <div>
            <div class="flex justify-center mt-8">
                <!-- Loading indicator -->
                <div v-if="loading">Loading...</div>

                <!-- Error message -->
                <div v-if="error">{{ error.message || error }}</div>

                <form @submit.prevent="onLogIn" class="flex flex-col w-full max-w-md space-y-4">
                    <input 
                      v-model="email" 
                      type="email" 
                      placeholder="Email" 
                      required 
                      class="p-2 border border-gray-300 rounded text-[#333] focus:outline-none focus:border-gray-500"
                    />
                    <input 
                      v-model="password" 
                      type="password" 
                      placeholder="Password" 
                      required
                      class="p-2 border border-gray-300 rounded text-[#333] focus:outline-none focus:border-gray-500"
                    />
                    <UiButtonPrimary type="submit" text="Log in" class="" />
                </form>

            </div>
            <!-- Toggle to log in -->
            <p class="text-center mt-4 text-[#333]">
                Don't have an account?
                <span @click="toggleSignup" class="underline cursor-pointer">
                    Sign up
                </span>
            </p>
            <!--End Sign up-->
        </div>
    </div>
</template>