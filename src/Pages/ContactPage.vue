<template>
    <div class="container mx-auto py-8">
      <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-600 mb-2">Name:</label>
            <input type="text" id="name" v-model="name" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Enter your name">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-600 mb-2">Email:</label>
            <input type="email" id="email" v-model="email" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Enter your email">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-600 mb-2">Message:</label>
            <textarea id="message" v-model="message" rows="4" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500" placeholder="Enter your message"></textarea>
          </div>
          <AButton buttonText="Submit Now" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="submitBooking" />
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import AButton from "../components/Button.vue"

  export default {
    name: 'ContactPage',
    components: {
      AButton,
    },
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.name, this.email, this.message);
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  