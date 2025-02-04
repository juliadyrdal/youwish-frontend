<script setup>
// Import composable for authentication
import { useAuth } from '@/composables/useAuth'

// Import store
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Destructure actions
const { toggleSignup } = uiStore

// Access composable
const { handleSignUp, loading, error } = useAuth()

const email = ref('')
const password = ref('')
const name = ref('')

// Sign up user
const onSignUp = async () => {
  await handleSignUp(email.value, password.value, name.value)
}
</script>

<template>
  <div class="mx-auto max-w-3xl p-4">
    <!--Sign up heading and description-->
    <div class="mt-4 py-8 text-[#333] flex flex-col justify-center items-center">
      <h1 class="mb-4 text-center text-lg">Sign up to you wish to start creating your wishlist</h1>
    </div>
    <!--End heading-->

    <div class="flex justify-center px-4">
      <!-- Loading indicator -->
      <div v-if="loading" class="text-gray-500 mr-4">Loading...</div>

      <!-- Error message -->
      <div v-if="error" class="text-red-500 mr-4">{{ error.message || error }}</div>

      <form @submit.prevent="onSignUp" class="flex flex-col w-full max-w-md space-y-4">
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
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          required
          class="p-2 border border-gray-300 rounded text-[#333] focus:outline-none focus:border-gray-500"
        />

        <!-- Button component -->
        <UiButtonPrimary
          type="submit"
          text="Sign up"
        />
      </form>
    </div>

    <!-- Toggle to log in -->
    <p class="text-center mt-4 text-[#333]">
      Already have an account?
      <span @click="toggleSignup" class="underline cursor-pointer">
        Log in
      </span>
    </p>
    <!--End Sign up-->
  </div>
</template>
