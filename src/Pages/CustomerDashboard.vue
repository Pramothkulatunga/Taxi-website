<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Welcome to Your Dashboard, James Bond!</h1>
    
    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Your Profile</h2>
      <div class="flex items-center mb-4">
        <img src="../assets/User.png" alt="Profile Image" class="w-12 h-12 rounded-full mr-4">
        <div>
          <p class="text-gray-700 font-semibold">James Bond</p>
          <p class="text-gray-500">Email: JamesB@yahoo.com</p>
        </div>
      </div>
      <div class="mb-2">
        <button class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-4">Edit Profile</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4">Update Password</button>
        <label for="profile-image" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer">Change Profile Image</label>
        <input type="file" id="profile-image" class="hidden">
      </div>
    </div>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Book a Taxi</h2>
      <p class="text-gray-700 mb-2">Quickly and conveniently book a taxi for your upcoming journey.</p>
      <p class="text-gray-700 mb-2">You can specify your pickup location, destination, and preferred vehicle.</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Book Now</button>
    </div>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Your Bookings</h2>
      <p class="text-gray-700 mb-2">View and manage your current and past taxi bookings.</p>
      <p class="text-gray-700 mb-2">You can track the status of your bookings and access trip details.</p>
      <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">View Bookings</button>
    </div>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Rate Your Drivers</h2>
      <p class="text-gray-700 mb-2">Share your feedback by rating the drivers based on your experience.</p>
      <p class="text-gray-700 mb-2">Your ratings help us maintain the quality of service for all customers.</p>
      <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Rate Now</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CustomerDashboard',

};
</script>
