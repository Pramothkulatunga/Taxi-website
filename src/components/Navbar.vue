<template>
  <div class="sticky top-0 bg-yellow-400 p-4 shadow-xl z-10 px-60">
    <div class="container flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="text-white text-xl font-bold mr-20">Auto Cars</router-link>
      </div>
      <div class="flex items-center">
        <router-link to="/BookingPage" class="text-white font-bold hover:text-gray-300 mx-4">Booking</router-link>
        <router-link to="/RatingPage" class="text-white font-bold hover:text-gray-300 mx-4">Rating</router-link>
        <router-link to="/ContactPage" class="text-white font-bold hover:text-gray-300 mx-4">Contact Us</router-link>
        <router-link to="/AboutUsPage" class="text-white font-bold hover:text-gray-300 mx-4">About Us</router-link>
        <router-link to="/LoginPage" class="text-white font-bold hover:text-gray-300 mx-4">Login</router-link>
        <router-link to="/CustomerDashboard" class="text-white font-bold hover:text-gray-300 mx-4">CustomerDashboard</router-link>
        <router-link to="/DriverDashboard" class="text-white font-bold hover:text-gray-300 mx-4">DriverDashboard</router-link>
        <router-link to="/OperatorDashboard" class="text-white font-bold hover:text-gray-300 mx-4">OperatorDashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>