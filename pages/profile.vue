<script setup>
// Import composable for authentication
import { useAuth } from '@/composables/useAuth';

// Import stores
import { useUserProfileStore } from '@/stores/userProfileStore';
import { useWishlistStore } from '@/stores/wishlistStore.js'
import { useUiStore } from '@/stores/uiStore.js'

// Access composable
const { user } = useAuth();

// Access store
const userProfileStore = useUserProfileStore();
const wishlistStore = useWishlistStore();
const uiStore = useUiStore();

// Make reactive
const { profile, loading, error } = storeToRefs(userProfileStore)
const { items } = storeToRefs(wishlistStore)

// Destructure actions
const { fetchUserProfile } = userProfileStore


</script>

<template>
  <div>
    <div class="mx-[120px]">

      <!--Page heading and utility-->
      <div class="flex flex-col gap-6 mt-4">
        <h2 class="font-medium text-lg underline underline-offset-8">Profile</h2>
        <UiButtonSecondary text="Edit profile" />
      </div>
      <!--End Page heading and utility-->

      <!--User's name-->
      <div class="flex justify-center mt-10">
        <h1 class="text-6xl font-medium">{{ user.user_metadata.name }}</h1>
      </div>
      <!--End User's name-->

      <!--Tab menu-->
      <nav class="flex justify-center gap-56 mt-16 pb-4">
        <div class="flex gap-20">
          <div class="flex flex-col items-center">
            <div class="text-lg font-semibold">76</div>
            <div class="text-sm font-semibold">Items</div>
          </div>
          <div class="flex flex-col items-center text-gray-400">
            <div class="text-lg font-semibold">12</div>
            <div class="text-sm font-semibold">Wishlists</div>
          </div>
        </div>
        <div class="flex gap-20">
          <div class="flex flex-col items-center text-gray-400">
            <div class="text-lg font-semibold">4</div>
            <div class="text-sm font-semibold">Invites</div>
          </div>
          <div class="flex flex-col items-center text-gray-400">
            <div class="text-lg font-semibold">12</div>
            <div class="text-sm font-semibold">Friends</div>
          </div>
        </div>
      </nav>
      <!--End Tab menu-->

      <!--Profile photo-->
      <div class="flex justify-center -mt-16">
        <UiAvatarLarge />
      </div>
      <!--End Profile photo-->

    </div>
    
    <!--Dynamic content container-->
    <div class="px-[120px] -mt-16 bg-[#F2F2F2] pt-14 min-h-screen">
      <h3 class="text-2xl font-semibold">My Items</h3>
      <div>
          <!--List of items-->
          <div v-if="items.length" class="mt-8 pt-4 bg-white rounded">
              <ItemArticle v-for="item in items" :item="item" :key="item.id" />
          </div>
          <!--End List of items-->

          <!--Empty state-->
          <div v-else>
              <EmptyState />
          </div>
          <!--End Empty state-->

          <!-- Remove item modal -->
          <Teleport to="body">
              <UiModalRemoveItem
                  v-if="uiStore.modals.removeItemModal"
                  :item="uiStore.currentItemToRemove" />
          </Teleport>
          <!-- End Remove item modal -->

      </div>
    </div>
    <!--End Dynamic content container-->

  </div>
</template>
