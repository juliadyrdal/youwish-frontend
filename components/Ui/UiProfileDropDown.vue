<script setup>
// Import stores
import { useWishlistStore } from '@/stores/wishlistStore'
import { useUserProfileStore } from '@/stores/userProfileStore'

// Access stores
const wishlistStore = useWishlistStore()
const userProfileStore = useUserProfileStore()

const router = useRouter()
const supabase = useSupabaseClient()

// Log out from Supabase, reset stores, and redirect to home
const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  if(!error) {
    // Reset Pinia stores upon successful sign out
    wishlistStore.$reset()
    userProfileStore.$reset()
    // Redirect to landing page
    router.push('/')
  }
}

// Dropdown menu items
const items = [
  [{
    label: 'Profile',
    icon: 'i-heroicons-user-circle',
    click: () => router.push('/profile')
  }], [{
    label: 'My wishlists',
    icon: 'i-heroicons-shopping-bag'
  }], [{
    label: 'Log out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      signOut()
    }
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">

    <!--Dropdown button-->
    <UAvatar
       
    />
    <!--End Dropdown button-->

  </UDropdown>
</template>

