import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => ({
        // Visibility status of modals. Default set to not visible
        modals: {
            productModal: false,
        },
    }),
    actions: {
        // Open a modal by setting the value to true
        openModal(modalName) {
            this.modals[modalName] = true; // Speficy modal, i.e. 'productModal'
        },
        // Close a modal by setting the value to false
        closeModal(modalName) {
            this.modals[modalName] = false; // Speficy modal, i.e. 'productModal'
        },
    },
})