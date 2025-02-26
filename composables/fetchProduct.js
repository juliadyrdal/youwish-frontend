export default function useFetchProduct() {
    // Ref to store fetched metadata
    const metadata = ref(null);

    // Ref to store potential errors
    const error = ref(null);

    // Ref to store loading status
    const loading = ref(false);


    // Fetch product metadata from URL
    async function fetchProduct(url) {
        loading.value = true; 
        try {
          // Send GET request to the server api endpoint with URL as query parameter
          const res = await $fetch(`${useRuntimeConfig().public.productApiBaseUrl}/meta`, {
            method: 'GET',
            params: { url },
          });

          // Store the fetched metadata
          metadata.value = res;

        } catch (err) {
          // Log error to console
          console.error('Error fetching metadata:', err);
          // User friendly error
          error.value = 'Failed to fetch metadata'
        } finally {
          loading.value = false;
        }

      }
      return { metadata, error, loading, fetchProduct };
}