import { defineStore } from 'pinia'
import { uniqueId } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        items: [],
    }),
    actions: {
        addItem(item) {
            // Add unique id to item (with lodash)
            item.id = uuidv4();
            // Add new item to items array/state
            this.items.unshift(item);
        },
        removeItem(id) {
            // Finding corresponding item in state/items array
            const itemToRemove = this.items.findIndex(item => item.id === id);
            // If item exists in array, remove item
            if (itemToRemove !== -1) {
                this.items.splice(itemToRemove, 1);
            }
        }
    },
    // Persist to local storage
    persist: true,
})