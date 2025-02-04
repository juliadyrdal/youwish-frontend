<script setup>
// Import composable for authentication
import { useAuth } from '@/composables/useAuth';

// Import stores
import { useWishlistStore } from '@/stores/wishlistStore.js'
import { useUiStore } from '@/stores/uiStore.js'

// Access composable
const { user } = useAuth();

// Access store
const wishlistStore = useWishlistStore();
const uiStore = useUiStore();

// Make reactive
const { items } = storeToRefs(wishlistStore)

// Fetch wishlist items
onMounted(() => {
    wishlistStore.fetchWishlist()
})

</script>

<template>
    <div>
        <!--List of items-->
        <div v-if="items.length" class="mt-10">
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
</template>
  


  