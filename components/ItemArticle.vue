<script setup>
// Import Heroicons
import { TrashIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

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

    <!--Item article-->
    <div class="mx-[120px]">
        <div class="flex gap-6 text-[#333]">

            <!--Item image-->
            <img class="w-[10rem] h-[12rem] rounded-2xl object-cover object-center" :src="item.image" alt="">
            <!--End Item image-->
            
            <!--Text content container-->
            <div>
                <h2 class="mb-2 font-semibold text-lg">{{ item.title }}</h2>
                <p class="text-sm w-5/6">{{ item.description }}</p>

                <!--Item utility nav-->
                <nav class="flex gap-10 mt-16">
                    <NuxtLink :to="item.url" target="_blank">
                        <UiButtonTextIcon :icon="ArrowTopRightOnSquareIcon" text="View item" />
                    </NuxtLink>
                    <UiButtonTextIcon :icon="TrashIcon" text="Remove item" :onClick="handleRemoveItem" />
                </nav>
                <!--End Item utility nav-->

            </div>
            <!--End Text content container-->

        </div>
        <hr class="my-6">
    </div>
    <!--End Item article-->

</template>