<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Welcome to Your Dashboard, James Bond!</h1>
    
    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Your Profile</h2>
      <div class="flex items-center mb-4">
        <img src="../assets/driver.png" alt="Profile Image" class="w-12 h-12 rounded-full mr-4">
        <div>
          <p class="text-gray-700 font-semibold">James Bond</p>
          <p class="text-gray-500">License No: BMT 216A</p>
          <p class="text-gray-500">Vehicle No: 007</p>
        </div>
      </div>
      <div class="mb-2">
        <div class="mb-2">
          <p class="text-gray-700">Total Earnings:</p>
          <p class="text-green-500 font-semibold">LKR 4489.54</p>
        </div>
        <button class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-4">Edit Profile</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Location</button>
      </div>
    </div>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Bookings</h2>
      <p class="text-gray-700 mb-2">View and manage your current and upcoming bookings.</p>
      <p class="text-gray-700 mb-2">You can track the details of each booking and view customer information.</p>
      <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">View Bookings</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DriverDashboard',

};
</script>
