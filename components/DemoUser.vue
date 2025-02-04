<script setup>
// Import composable for authentication
import { useAuth } from '@/composables/useAuth';

// Access composable
const { handleDemoLogIn, loading, error } = useAuth();

const email = ref('')
const password = ref('')

// Log in demo user
const onDemoLogIn = async () => {
  await handleDemoLogIn(email.value, password.value)
}
</script>

<template>
    <div>
        <UiButtonPrimary @click="onDemoLogIn" text="Demo user" class="" />
    </div>
</template>