<template>
  <div class="flex justify-between ml-6">
    <div v-for="(placeholder, index) in placeholders" :key="index" class="w-full md:w-1/5 mt-8">
      <input type="text" class="w-15 h-16 rounded px-6 text-lg text-gray-800 placeholder-gray-500 border border-yellow-500 focus:outline-none" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBars',
  props: {
    customPlaceholders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    placeholders() {
      return this.customPlaceholders.length > 0 ? this.customPlaceholders : [
        'Start Destination',
        'End Destination',
        'Time And Date',
        'Car Class',
        'Your Phone Number',
      ];
    },
  },
};
</script>