<template>
    <div class="container mx-auto py-8">
      <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Rate Your Trip</h2>

        <div class="mb-4">
          <p class="text-gray-600 mb-2">Trip Date: January 25, 2024</p>
          <p class="text-gray-600 mb-2">Driver: James Bond</p>
          <p class="text-gray-600 mb-2">From: Your Location</p>
          <p class="text-gray-600 mb-2">To: Destination</p>
        </div>

        <div class="flex items-center mb-4">
          <p class="mr-4 text-gray-600">Rate Your Driver:</p>
          <div class="flex">
            <input type="radio" name="rating" id="star5" value="5" class="hidden" />
            <label for="star5" class="text-yellow-400 cursor-pointer">&#9733;</label>
            <input type="radio" name="rating" id="star4" value="4" class="hidden" />
            <label for="star4" class="text-yellow-400 cursor-pointer">&#9733;</label>
            <input type="radio" name="rating" id="star3" value="3" class="hidden" />
            <label for="star3" class="text-yellow-400 cursor-pointer">&#9733;</label>
            <input type="radio" name="rating" id="star2" value="2" class="hidden" />
            <label for="star2" class="text-yellow-400 cursor-pointer">&#9733;</label>
            <input type="radio" name="rating" id="star1" value="1" class="hidden" />
            <label for="star1" class="text-yellow-400 cursor-pointer">&#9733;</label>
          </div>
        </div>

        <div class="mb-4">
          <label for="review" class="block text-gray-600 mb-2">Leave a Review:</label>
          <textarea v-model="review" id="review" rows="4" class="w-full rounded border border-gray-300 focus:outline-none focus:border-indigo-500"></textarea>
        </div>
        <AButton buttonText="Submit Rating" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="handleButtonClick" />
      </div>
    </div>
  </template>
  
  <script>
  import AButton from "../components/Button.vue"

  export default {
    name: 'RatingPage',
    components: {
      AButton,
    },
    data() {
      return {
        review: '',
      };
    },
    methods: {
      submitRating() {
        console.log('Rating submitted:', this.review);
      },
    },
  };
  </script>