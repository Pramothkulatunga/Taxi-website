<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Operator Dashboard</h1>
    
    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Manual Taxi Reservations</h2>
      <p class="text-gray-700 mb-2">Enter the customer's phone number and select a driver to make a reservation.</p>
      <div class="flex items-center mb-2">
        <input type="text" placeholder="Customer's Phone Number" class="bg-gray-100 px-4 py-2 rounded-md mr-2">
        <select class="bg-gray-100 px-4 py-2 rounded-md mr-2">
          <option>Select Driver</option>
          <option>James Bond</option>
          <option>Quarrel</option>
          <option>Richard Vernon</option>
        </select>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Reserve Taxi</button>
      </div>
    </div>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Customer Support</h2>
      <p class="text-gray-700 mb-2">Assist customers with their inquiries and issues.</p>
      <p class="text-gray-700 mb-3">Provide support via phone, email, or chat.</p>
      <div class="flex items-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-4">Phone Support</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-4">Email Support</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Chat Support</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperatorDashboard',
};
</script>