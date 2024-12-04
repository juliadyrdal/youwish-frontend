<script setup>
// Import Heroicons
import { TrashIcon } from '@heroicons/vue/24/outline'

// Import stores
import { useWishlistStore } from '@/stores/wishlistStore.js'

// Access store
const wishlistStore = useWishlistStore();

// Destructure actions
const { removeItem } = wishlistStore

// Declare props
const props = defineProps(['item'])

// Remove item from wishlist
const handleRemoveItem = () => {
    removeItem(props.item.id)
}
</script>

<template>
    <!-- Overlay -->
    <div>

        <!-- Modal -->
        <div>

            <!-- Modal content -->
            <div>
                <h2>Remove item</h2>
                <div>
                    <p>Are you sure you want to permanently delete this item?</p>
                    <button @click="handleRemoveItem" class="button">
                        <span><TrashIcon class="icon" /> Remove item</span>
                    </button>
                </div>
            </div>
            <!-- End Modal content -->
             
        </div>
        <!-- End Modal -->

    </div>
    <!-- End Overlay -->
</template>