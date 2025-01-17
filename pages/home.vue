<script setup>
// Import stores
import { useWishlistStore } from '@/stores/wishlistStore.js'
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const wishlistStore = useWishlistStore();
const uiStore = useUiStore();

// Make reactive
const { items } = storeToRefs(wishlistStore)
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
  


  