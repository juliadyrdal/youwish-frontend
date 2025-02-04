<script setup>
// Import Heroicons
import { TrashIcon } from '@heroicons/vue/24/outline'

// Import stores
import { useWishlistStore } from '@/stores/wishlistStore.js'
import { useUiStore } from '@/stores/uiStore.js'

// Access store
const wishlistStore = useWishlistStore();
const uiStore = useUiStore()

// Destructure actions
const { removeItem } = wishlistStore
const { closeModal, clearItemForRemoval } = uiStore 

// Declare props
const props = defineProps(['item'])

// Remove item from wishlist
const handleRemoveItem = () => {
    removeItem(props.item._id);
    closeModal('removeItemModal');
    clearItemForRemoval();
}
</script>

<template>
    <!-- Overlay -->
    <div class="bg-black/75 fixed top-0 right-0 left-0 z-20 h-screen">

        <!-- Modal -->
        <div class="mt-20 bg-white opacity-100 z-30 h-1/3 w-3/5 lg:w-2/5 mr-auto ml-auto px-10 text-[#333]">

            <!--Close button-->
            <div class="flex justify-end pt-2">
                <UiButtonCloseSm @click="closeModal('removeItemModal')" />
            </div>
            <!--End Close button-->

            <!-- Modal content -->
            <div class="p-5">
                <h2 class="m-0 mb-2 text-lg font-semibold">Remove item</h2>
                <div class="flex flex-col gap-6 items-start">
                    <p class="m-0">Are you sure you want to permanently delete this item?</p>
                    <button @click="handleRemoveItem" class="bg-[#f5f5f5] border-2 border-[#791C40] py-[7px] px-5 cursor-pointer text-[0.9rem] font-medium">
                        <span class="p-0 m-0 flex items-center text-[#791C40]">
                            <TrashIcon class="w-[1.2rem] h-[1.2rem] mr-1.5 text-[#791C40]" /> 
                            Remove item
                        </span>
                    </button>
                </div>
            </div>
            <!-- End Modal content -->
             
        </div>
        <!-- End Modal -->

    </div>
    <!-- End Overlay -->
</template>