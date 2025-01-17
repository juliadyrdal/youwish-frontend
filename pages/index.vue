<template>
    <div>
        <button @click="signIn('auth0')">
            Sign in
        </button>
    </div>
</template>

<script setup>
definePageMeta({
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/home' }
})

const { signIn } = useAuth()
</script>

<style lang="scss" scoped>

</style>