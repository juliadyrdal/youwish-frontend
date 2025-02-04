// stores/wishlistStore.js
import { defineStore } from 'pinia';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWishlist() {
      // Retrieve Supabase client and user session
      const supabase = useSupabaseClient()
      const session = await supabase.auth.getSession()
      const accessToken = session.data?.session?.access_token
      const config = useRuntimeConfig()   

      // Indicate loading and clear previous error
      this.loading = true;
      this.error = null;
      try {
        // GET wishlist items from the backend using a bearer token
        const data = await $fetch(`${config.public.backendApiBaseUrl}/users/wishlist`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
        });
        // Update state with fetched items
        this.items = data;
      } catch (err) {
        // If error occurs, log and set state error
        console.error('Error fetching wishlist:', err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async addItem(item) {
      // Retrieve Supabase client and user session
      const supabase = useSupabaseClient()
      const session = await supabase.auth.getSession()
      const accessToken = session.data?.session?.access_token
      const config = useRuntimeConfig()   

      // Indicate loading and clear previous error
      this.loading = true;
      this.error = null;
      try {
        const newItem = { ...item };
        // POST the new item to the backend
        const savedItem = await $fetch(`${config.public.backendApiBaseUrl}/users/wishlist`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: newItem,
        });
        // Add the new item to the state at the front
        this.items.unshift(savedItem);
      } catch (err) {
        // If error, log and set state error
        console.error('Error adding item:', err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async removeItem(itemId) {
      // Retrieve Supabase client and user session
      const supabase = useSupabaseClient()
      const session = await supabase.auth.getSession()
      const accessToken = session.data?.session?.access_token
      const config = useRuntimeConfig()   

      // Indicate loading and clear previous error
      this.loading = true;
      this.error = null;
      try {
        // DELETE the item from backend using id
        await $fetch(`${config.public.backendApiBaseUrl}/users/wishlist/${itemId}`, {
          method: 'DELETE',
          headers: {
           'Authorization': `Bearer ${accessToken}`
          },
        });
        // Remove the item from state if found
        const index = this.items.findIndex(item => item._id === itemId);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      } catch (err) {
        // If error occurs, log and set state error
        console.error('Error removing item:', err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    }
  },
});
