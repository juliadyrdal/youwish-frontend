<script setup>
// Import stores
import { useWishlistStore } from '@/stores/wishlistStore.js'

// Access store
const wishlistStore = useWishlistStore();

// Make reactive
const { items } = storeToRefs(wishlistStore)
</script>

<template>
    <div>

        <!--List of items-->
        <div v-if="items.length" class="mt-10">
            <ItemArticle v-for="item in items" :item="item" :key="item.title" />
        </div>
        <!--End List of items-->

        <!--Empty state-->
        <div v-else>
            <EmptyState />
        </div>
        <!--End Empty state-->

    </div>
</template>
  


  