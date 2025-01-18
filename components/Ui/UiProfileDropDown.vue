<script setup>
// Import from useAuth composable
const { signOut, data } = useAuth()

const router = useRouter()

// Dropdown menu items
const items = [
  [{
    label: 'Profile',
    icon: 'i-heroicons-user-circle',
    //click: () => router.push('/profile')
  }], [{
    label: 'My wishlists',
    icon: 'i-heroicons-shopping-bag'
  }], [{
    label: 'Log out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      signOut({ callbackUrl: '/' })
    }
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">

    <!--Dropdown button-->
    <UAvatar
        :src="data.user.image"
        :alt="data.user.name"
    />
    <!--End Dropdown button-->

  </UDropdown>
</template>

