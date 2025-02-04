<script setup> 
// Import Heroicons
import { XMarkIcon } from '@heroicons/vue/24/outline'

// Import composable for fetching metadata
import useFetchProduct from '@/composables/fetchProduct';

// Import stores
import { useUiStore } from '@/stores/uiStore.js'
import { useWishlistStore } from '@/stores/wishlistStore.js'

// Access composable
const { metadata, loading, fetchProduct } = useFetchProduct();

// Access store
const uiStore = useUiStore()
const wishlistStore = useWishlistStore();

// Make reactive
const { modals } = storeToRefs(uiStore)

// Destructure actions
const { closeModal } = uiStore
const { addItem } = wishlistStore

// Store the URL entered by user
const productUrl = ref('')

// Find product metadata by calling fetchProduct and passing entered URL
const handleFindProduct = () => {
    fetchProduct(productUrl.value);
}

// Add fetched metadata ("item") to wishlist
const handleAddItem = () => {
    // Create item object
    const itemObj = {
        title: metadata.value.title,
        description: metadata.value.description,
        image: metadata.value.image,
        url: productUrl.value
    }

    // Add item object to the wishlist items/state
    addItem(itemObj);
    // Clear fields
    metadata.value = null;
    productUrl.value = null;
    // Close modal
    closeModal('productModal')
}
</script>

<template>
    <div>
        <!--Teleport modal to body for positioning-->
        <Teleport to="body">

            <!--Displayed when modal is open/true-->
            <div v-if="modals.productModal" class="relative">

                <!--Dark modal background-->
                <div class="bg-black/75 fixed top-0 right-0 left-0 z-20 h-screen"> 
                    <div class="relative top-12">

                        <!--Main modal content-->
                        <div class="bg-white opacity-100 z-30 h-5/6 w-4/5 mr-auto ml-auto pb-10 px-10 text-[#333]">

                            <!--Close button-->
                            <div class="flex justify-end">
                                <button @click="closeModal('productModal')" class="mt-2">
                                    <XMarkIcon class="size-5 text-gray-500" />
                                </button>
                            </div>
                            <!--End Close button-->

                            <h1 class="text-sm font-bold">Add item</h1>

                            <hr class="mt-4" />

                            <!--Find product section-->
                            <div v-if="!loading && !metadata" class="flex flex-col gap-4 mt-4">
                                <label class="text-xs font-bold" for="productUrlInput">Paste product URL below</label>
                                <input v-model="productUrl" class="w-4/6 py-2 px-4 rounded text-xs border border-slate-200" type="text" name="productUrlInput" placeholder="https://www.example.com">
                                <UiButtonPrimary :onClick="handleFindProduct" text="Find product" />
                            </div>
                            <!--End Find product section-->

                            <!--Loading indicator-->
                            <div v-if="loading" class="mt-4">
                                Loading product data...
                            </div>
                            <!--End Loading indicator-->

                            <!--Add item section-->
                            <div v-if="metadata" class="flex flex-col mt-4">
                                <div class="flex gap-6">
                                    <img class="h-72 rounded self-start" :src="metadata.image" alt="">
                                    <div class="mt-8">
                                        <h2 class="mb-2 font-semibold text-xl">{{ metadata.title }}</h2>
                                        <p class="w-5/6">{{ metadata.description }}</p>
                                        <UiButtonPrimary class="mt-8" :onClick="handleAddItem" text="Add item to wishlist" />
                                    </div>
                                
                                </div>
                                
                                
                            </div>
                            <!--End Add item section-->

                        </div>
                        <!--End Main modal content-->

                    </div>
                </div>
                <!--End Dark modal background-->

            </div>
            <!--End Displayed when modal is open/true-->

        </Teleport>
        <!--End Teleport modal-->
    </div>
</template>

