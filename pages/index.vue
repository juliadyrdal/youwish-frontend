<script setup>
definePageMeta({
  layout: 'loggedout',
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/home' }
})

const { signIn } = useAuth()
const handleSignUp = () => {
    signIn('auth0')
}
</script>

<template>
    <div>
        <!--Empty state-->
        <div class="mx-[120px] mt-4 py-12 text-[#333] flex flex-col justify-center items-center">
            <h1 class="mb-8 text-center text-lg">Sign up to you wish to start creating your wishlist</h1>
        </div>
        <!--End Empty state-->

        <div class="flex justify-center">
            <UiButtonPrimary :onClick="handleSignUp" text="Sign up" class="" />
        </div>
    </div>
</template>