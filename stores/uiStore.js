import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => ({
        // Visibility status of modals. Default set to not visible
        modals: {
            productModal: false,
            removeItemModal: false,
        },
        // Visibility status of drop downs. Default set to not visible
        dropDowns: {
            profileDropDown: false,
        },
        currentItemToRemove: null,
        signupState: true,
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
        // Open a dropDown by setting the value to true
        openDropDown(dropDownName) {
            this.dropDown[dropDownName] = true; // Speficy dropDown, i.e. 'profileDropDown'
        },
        // Close a dropDown by setting the value to false
        closeDropDown(dropDownName) {
            this.dropDown[dropDownName] = false; // Speficy dropDown, i.e. 'profileDropDown'
        },
        // Toggle a dropDown to either open or closed
        toggleDropDown(dropDownName) {
            this.dropDown[dropDownName] = !this.dropDown[dropDownName];
        },
        // Store the item that the user intends to remove
        setItemForRemoval(item) {
            this.currentItemToRemove = item;
        },
        // Clear the stored item for removal
        clearItemForRemoval() {
            this.currentItemToRemove = null;
        },
        toggleSignup() {
            this.signupState = !this.signupState
        }
    },
})