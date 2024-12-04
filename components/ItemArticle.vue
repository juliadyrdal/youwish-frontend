<script setup>
// Import Heroicons
import { TrashIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

// Import stores
import { useUiStore } from '@/stores/uiStore'

// Access store
const uiStore = useUiStore();

// Make reactive
const { modals } = storeToRefs(uiStore)

// Destructure actions
const { openModal } = uiStore

// Declare props
const props = defineProps(['item'])


const handleOpenRemoveModal = () => {
    openModal('removeItemModal');
};
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
                    <UiButtonTextIcon :icon="TrashIcon" text="Remove item" :onClick="handleOpenRemoveModal" />
                </nav>
                <!--End Item utility nav-->

                <!-- Remove item modal -->
                <Teleport to="body">
                    <div v-if="modals.removeItemModal">
                        <UiModalRemoveItem :item="props.item"  />
                    </div>
                </Teleport>
                <!-- End Remove item modal -->

            </div>
            <!--End Text content container-->

        </div>
        <hr class="my-6">
    </div>
    <!--End Item article-->

</template>