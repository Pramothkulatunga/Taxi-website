<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="popup bg-white p-8 rounded-md flex flex-col lg:flex-row gap-8 max-w-3xl mx-auto">
      <div class="confirmation-details flex-1">
        <h2 class="text-xl font-bold mb-2">Booking Confirmation</h2>
        <p>Thank you for booking with us!</p>
        <p>Pickup Location: {{ pickupLocation }}</p>
        <p>Destination: {{ destination }}</p>
        <p>Date and Time: {{ dateTime }}</p>
        <p>Vehicle Preference: {{ vehiclePreference }}</p>
      </div>
      <div class="driver-details flex-1">
        <h2 class="text-xl font-bold mb-2">Driver Details</h2>
        <p>Driver: {{ bookedDriver.name }}</p>
        <p>Vehicle: {{ bookedDriver.vehicle }}</p>
        <p>Estimated Arrival Time: {{ bookedDriver.estimatedArrival }}</p>
        <p>Driver's Location: {{ driverLocation }}</p>
        <p>Contact Number: {{ bookedDriver.contactNumber }}</p>
        <GMapMap :center="center" :zoom="40" map-type-id="terrain" class="w-64 h-64"></GMapMap>
      </div>
      <div class="flex justify-center lg:justify-end lg:items-end lg:flex-col">
        <button @click="closeModal" class="bg-yellow-400 text-white font-bold py-2 px-4 rounded-md mt-4">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingConfirmation',
  props: {
    visible: Boolean,
    pickupLocation: String,
    destination: String,
    dateTime: String,
    vehiclePreference: String,
    bookedDriver: Object,
    driverLocation: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  data() {
    return {
      center: {lat: 6.888792572206479, lng: 79.8580521502837},
    }
  },
};
</script>