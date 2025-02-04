import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userProfile', {
    state: () => ({
        profile: null,
        loading: false,
        error: null,  
    }),
    actions: {
        async fetchUserProfile() {
            // Update loading state
            this.loading = true
            this.error = null
            try {
               // Retrieve runtime config and Supabase session
              const config = useRuntimeConfig()
              const baseApiUrl = config.public.backendApiBaseUrl

              const supabase = useSupabaseClient()
              const session = await supabase.auth.getSession()
              const accessToken = session.data?.session?.access_token

              // Fetch user profile data from backend
              const data = await $fetch(`${baseApiUrl}/users/profile`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              });
              // Store response in profile state
              this.profile = data;
            } catch (err) {
              // Set state error if request fails
              this.error = err;
            } finally {
              // Update loading state
              this.loading = false;
            }
        },
        async updateUserProfile(updatedData) {
          // Indicate loading
          this.loading = true
          this.error = null
          try {
            // Use runtime config to get baseApiUrl
            const config = useRuntimeConfig()
            const baseApiUrl = config.public.backendApiBaseUrl
            
             // Send PUT request to update profile on backend
            const updatedProfile = await $fetch(`${baseApiUrl}/users/profile`, {
              method: 'PUT',
              body: updatedData
            })
    
            // Store updated profile in state
            this.profile = updatedProfile
          } catch (err) {
            // Set state error if request fails
            this.error = err
          } finally {
            this.loading = false
          }
        }
    },
})