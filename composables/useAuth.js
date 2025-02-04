// Import userProfile store
import { useUserProfileStore } from '@/stores/userProfileStore'

export function useAuth() {
    // Retrieve current user and Supabase client
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
  
    // Local refs for loading and error states
    const loading = ref(false)
    const error = ref(null)

    // Fetch runtime config for backend base URL
    const config = useRuntimeConfig()
    const baseApiUrl = config.public.backendApiBaseUrl
  
    // Sign up a new user with Supabase and create a corresponding Mongo user
    const handleSignUp = async (email, password, name) => {
      error.value = null
      loading.value = true
      try {
        // Call Supabase signUp method with additional user data (name)
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name },
            redirectTo: '/confirm'
          }
        })
        if (signUpError) throw signUpError
        
        // Ensure Supabase returns a valid user
        const supabaseUser = data?.user
        if (!supabaseUser) {
            throw new Error('No Supabase user returned')
        }

        // Create Mongo user using the backend API
        const createdMongoUser = await $fetch(`${baseApiUrl}/users/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                supabaseUserId: supabaseUser.id, 
                email: supabaseUser.email,
                name,
              })
          })

          // Update user profile store with newly created user
          const userProfileStore = useUserProfileStore()
          userProfileStore.profile = createdMongoUser
          
          // Redirect to home after successful sign up
          const router = useRouter()
          router.push('/home')
          
      } catch (err) {
        // Capture potential errors
        error.value = err
      } finally {
        // Stop loading indicator regardless of success or failure
        loading.value = false
      }
    }
  
    // Log in an existing user with Supabase and fetch their profile
    const handleLogIn = async (email, password) => {
      error.value = null
      loading.value = true
      try {
        // Sign in with email/password using Supabase
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (signInError) throw signInError

        // Fetch user profile from backend and update the store
        const userProfileStore = useUserProfileStore()
        await userProfileStore.fetchUserProfile()

        // Redirect to home after successful sign in
        const router = useRouter()
        router.push('/home')

        return data
      } catch (err) {
        // Capture any error that occurs
        error.value = err
      } finally {
        // Stop the loading indicator
        loading.value = false
      }
    }

    const handleDemoLogIn = async () => {
      error.value = null
      loading.value = true
      try {
        // Sign in with demo credentials
        const { data, error: signInDemoError } = await supabase.auth.signInWithPassword({
          email: 'juliadyrdal+0@protonmail.com',
          password: 'n68koAbxioD_xBd-'
        })
        if (signInDemoError) throw signInDemoError

        // Fetch user profile from backend and update the store
        const userProfileStore = useUserProfileStore()
        await userProfileStore.fetchUserProfile()

        // Redirect to home after successful sign in
        const router = useRouter()
        router.push('/home')

        return data
      } catch (err) {
        // Capture any error that occurs
        error.value = err
      } finally {
        // Stop the loading indicator
        loading.value = false
      }
    }
  
    // Expose composable state and functions
    return {
      user,
      loading,
      error,
      handleSignUp,
      handleLogIn,
      handleDemoLogIn
    }
  }