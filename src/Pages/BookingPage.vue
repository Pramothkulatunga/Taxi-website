<template>
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-center mt-8 mb-12">
        <h1 class="text-sm font-bold text-yellow-500">ENJOY COMFORTABLE TRIP</h1>
        <p class="text-4xl text-black font-bold mt-4">Book Taxi Online</p>
      </div>
      
      <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="submitBooking" class="w-full max-w-md">
          <div class="mb-4">
            <label for="pickupLocation" class="block text-sm font-bold mb-2">Pickup Location</label>
            <input type="text" id="pickupLocation" v-model="pickupLocation" placeholder="Enter pickup location" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400">
          </div>
          
          <div class="mb-4">
            <label for="destination" class="block text-sm font-bold mb-2">Destination</label>
            <input type="text" id="destination" v-model="destination" placeholder="Enter destination" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400">
          </div>
          
          <div class="mb-4">
            <label for="dateTime" class="block text-sm font-bold mb-2">Date and Time</label>
            <input type="datetime-local" id="dateTime" v-model="dateTime" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Vehicle Preferences</label>
            <select v-model="vehiclePreference" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400">
              <option value="sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="van">Van</option>
            </select>
          </div>       
          <AButton buttonText="Book Now !" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="submitBooking" />
        </form>
      </div>
      <BookingConfirmation v-if="bookingConfirmation" :visible="bookingConfirmation" :pickupLocation="pickupLocation" :destination="destination" :dateTime="dateTime" :vehiclePreference="vehiclePreference" :bookedDriver="bookedDriver" @close="closePopups" />
    </div>
  </template>
  
  <script>
  import AButton from "../components/Button.vue"
  import BookingConfirmation from "../components/BookingConfirmation.vue"
  
  export default {
    name: 'BookingPage',
    components: {
      AButton,
      BookingConfirmation
    },
    data() {
      return {
        pickupLocation: '',
        destination: '',
        dateTime: '',
        vehiclePreference: '',
        bookingConfirmation: false,
        bookedDriver: {
          name: 'James Bond',
          vehicle: 'Aston Martin',
          estimatedArrival: '5 minutes',
          contactNumber: '123-456-7890'
        }
      };
    },
    methods: {
      submitBooking() {
        this.bookingConfirmation = true;
      },
      closePopups() {
        this.bookingConfirmation = false;
      }
    }
  };
  </script>  