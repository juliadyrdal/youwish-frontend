<script setup>
const { signIn } = useAuth()
const handleLogIn = () => {
    signIn('auth0')
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