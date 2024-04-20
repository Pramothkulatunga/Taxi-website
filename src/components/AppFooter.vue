<template>
  <div class="bg-yellow-400 text-white font-bold py-4">
    <div class="container mx-auto flex justify-between items-center">
      <p>&copy; 2024 Auto Cars. All rights reserved.</p>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/privacy-policy" class="hover:text-gray-400">Privacy Policy</router-link></li>
          <li><router-link to="/terms-of-service" class="hover:text-gray-400">Terms of Service</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
