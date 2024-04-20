<template>
  <div class="container mx-auto py-8">
    <div class="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md">
      <h2 class="text-4xl font-semibold mb-8 text-center">About Us</h2>

      <div class="mb-8">
        <p class="text-lg text-gray-800 leading-relaxed mb-4">Welcome to Auto Cars, where your journey is our priority. We are a leading transportation service dedicated to delivering exceptional taxi experiences for passengers across the globe. With a focus on reliability, safety, and convenience, we're here to make your travels smoother and more enjoyable.</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
        <p class="text-lg text-gray-800 leading-relaxed mb-4">At Auto Cars, our mission is simple: to redefine transportation by providing innovative solutions that prioritize customer satisfaction and safety. We aim to offer a seamless and efficient travel experience, whether you're commuting to work, heading to the airport, or exploring a new city.</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">Our Commitment to Excellence</h3>
        <p class="text-lg text-gray-800 leading-relaxed mb-4">We are committed to excellence in everything we do. From our fleet of modern and well-maintained vehicles to our team of professional drivers, we hold ourselves to the highest standards to ensure that every journey with Auto Cars is comfortable, reliable, and safe.</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">Sustainability and Environmental Responsibility</h3>
        <p class="text-lg text-gray-800 leading-relaxed mb-4">At Auto Cars, we understand the importance of environmental sustainability. That's why we're dedicated to reducing our carbon footprint by promoting the use of fuel-efficient vehicles and implementing eco-friendly practices throughout our operations. By choosing Auto Cars, you're not only choosing convenience—you're also choosing to support a greener future.</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4">Join Us on the Journey</h3>
        <p class="text-lg text-gray-800 leading-relaxed mb-4">Whether you're a frequent traveler, a daily commuter, or just in need of a reliable ride, Auto Cars is here to serve you. Join us on the journey and experience transportation reimagined. Book your next ride with Auto Cars today and discover the difference!</p>
      </div>

      <div class="text-center">
        <router-link to="/booking" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mr-4">Book Now</router-link>
        <router-link to="/contact" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg">Contact Us</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
};
</script>