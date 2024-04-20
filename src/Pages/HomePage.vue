<template>
  <div class="bg-gray-900 py-5">
        <div class="relative">
          <div class="bg-yellow-500 w-full h-[500px]">
            <img src="../../src/assets/s1.jpg" class="w-full h-full object-cover">
          <div class="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 class="text-3xl font-bold text-yellow-500">Welcome to Auto Cars</h1>
            <p class="text-6xl text-white font-bold mt-4">Order Taxi Via Us</p>
            </div>
          </div>
          <SearchBars />
          <div class="flex justify-center items-center mt-5">
            <input type="checkbox" class="form-checkbox h-5 w-5 rounded mr-2 mt-4">
            <p class="text-sm text-white font-bold mt-4">i agree that my submitted data is being collected and stored</p>
          </div>
          <div class="flex items-center justify-center mt-8">
            <AButton buttonText="Book Now !" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="handleButtonClick" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center mt-8">
        <h1 class="text-2xl font-bold text-yellow-500">WHAT WE OFFER</h1>
        <p class="text-4xl text-black font-bold mt-4">Welcome To AUTO CARS</p>
        <p class="text-sm text-black font-bold mt-4">We created our taxi to help you to find the most dependable and highest quality taxi services, anytime and anywhere. All our drivers are uniformed and fully licensed.</p>
    </div>
    <div class="flex justify-center items-center">
      <div class="container mx-auto">
        <div class="text-center mt-12">
          <img src="../assets/lp.png" class="mx-auto w-20 h-20">
        </div>

        <div class="text-center mt-8">
          <h2 class="text-xl font-bold text-yellow-500">Address Pickup</h2>
          <p class="text-sm text-black mt-2">We always pick up our clients on time,<br> 24/7 availability.</p>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="text-center mt-12">
          <img src="../assets/p.png" class="mx-auto w-20 h-20">
        </div>

        <div class="text-center mt-8">
          <h2 class="text-xl font-bold text-yellow-500">Airport Transfer</h2>
          <p class="text-sm text-black mt-2">GetCab specialized in 24 hours <br>airport transfer service.</p>
        </div>
      </div>

    <div class="container mx-auto">
      <div class="text-center mt-12">
        <img src="../assets/ml.png" class="mx-auto w-20 h-20">
      </div>

      <div class="text-center mt-8">
        <h2 class="text-xl font-bold text-yellow-500">Long Distance</h2>
        <p class="text-sm text-black mt-2">We offer you a long distance <br>taxi service to anywhere.</p>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="text-center mt-12">
        <img src="../assets/t.png" class="mx-auto w-20 h-20">
      </div>

      <div class="text-center mt-8">
        <h2 class="text-xl font-bold text-yellow-500">Taxi Tours</h2>
        <p class="text-sm text-black mt-2">We offer taxi tours of various <br>durations and complexity.</p>
      </div>
    </div>
   </div>

    <div class="container mx-auto mt-32">
          <div class="text-center mt-8">
            <h2 class="text-sm font-bold text-yellow-500">MAIN FEATURES</h2>
            <p class="text-4xl text-black font-bold mt-2">Our Benefits</p>
          </div>
      <div class="container mx-auto grid grid-cols-3 gap-8">
      <div class="text-center">
        <div>
          <h2 class="text-xl font-bold text-yellow-500">Fixed Price</h2>
          <p class="text-sm text-black mt-2">The fixed fare is set in every taximeter as the main tariff.</p>
        </div>
        <div class="text-center">
        <div>
          <h2 class="text-xl font-bold text-yellow-500 mt-20">No Fee</h2>
          <p class="text-sm text-black mt-2">We guarantee fixed price and you should not pay tips.</p>
        </div>
      </div>
      </div>
      <div class="text-center">
        <img src="../assets/car.jpg" class="mx-auto w-50 h-50">
      </div>

      <div class="text-center">
        <div>
          <h2 class="text-xl font-bold text-yellow-500">100% Pleasure</h2>
          <p class="text-sm text-black mt-2">We have a lot of standing customers and high ratings.</p>
        </div>
        <div class="text-center">
        <div>
          <h2 class="text-xl font-bold text-yellow-500 mt-20">Nationwide</h2>
          <p class="text-sm text-black mt-2">Our application is the easiest way to book a taxi.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-32 grid grid-cols-2">
  <div class="text-center">
    <img src="../assets/woman.jpg" class="ml-40 w-3/4 h-30" alt="image">
  </div>
  <div class="text-center pt-20 bg-gray-100 mr-28 px-10">
      <h2 class="text-xl font-bold text-yellow-500">REWARDS AS YOU TRAVEL</h2>
      <p class="text-5xl font-bold text-black mt-6">Get Your Rewards</p>
      <p class="text-sm text-black mt-6">GetCab service helps you to find the highest quality taxi services anytime. Our drivers are uniformed, fully licensed and the office staff is trained to the highest standards.We can help you to save time and money. Our main idea is based on establishing a direct connection between drivers and passengers.</p>
      <div class="flex items-center justify-center mt-8">
      <AButton buttonText="Book Now !" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="handleButtonClick" />
      </div>
    </div>
  </div>
</div>
    <div class="relative mt-20">
        <div class="bg-yellow-500 w-full h-[500px]">
          <img src="../../src/assets/b.jpg" class="w-full h-full object-cover">
        <div class="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 class="text-sm font-bold text-yellow-500">CAR CLASSES AND RATES</h1>
          <p class="text-5xl text-white font-bold mt-4">Choose Your Car</p>
          <div>
            <div class="container mx-auto mt-10 grid grid-cols-3 gap-12">
            <div class="bg-gray-900 rounded-lg p-8">
              <h2 class="text-xl font-bold text-yellow-500">Address Pickup</h2>
              <p class="text-sm text-white mt-2">We always pick up our clients on time, 24/7 availability.</p>
              <p class="text-sm text-white mt-2">LKR 150/KM</p>
            </div>

            <div class="bg-gray-900 rounded-lg p-8">
              <h2 class="text-xl font-bold text-yellow-500">Airport Transfer</h2>
              <p class="text-sm text-white mt-2">GetCab specialized in 24 hours airport transfer service.</p>
              <p class="text-sm text-white mt-2">LKR 350/KM</p>
            </div>

            <div class="bg-gray-900 rounded-lg p-8">
              <h2 class="text-xl font-bold text-yellow-500">Long <br>Distance</h2>
              <p class="text-sm text-white mt-2">We offer you a long distance taxi service to anywhere.</p>
              <p class="text-sm text-white mt-2">LKR 950/KM</p>
            </div>
          </div>
        </div>   
      </div>
     </div>
     <div class="flex flex-col items-center justify-center mt-8">
        <h1 class="text-2xl font-bold text-yellow-500">HOW CAN WE HELP YOU?</h1>
        <p class="text-4xl text-black font-bold mt-4">Have a Questions?</p>
        <p class="text-sm text-black font-bold mt-4">If you have any comments, suggestions or questions, please do not hesitate to contact us. Our high-quality office staff will help you and answer all your questions.</p>
    </div>
    <div class="flex justify-center items-center">
      <div class="container mx-auto">
        <div class="text-center mt-12">
          <img src="../assets/lp.png" class="mx-auto w-20 h-20">
        </div>

        <div class="text-center mt-8">
          <h2 class="text-xl font-bold text-yellow-500">OUR ADDRESS</h2>
          <p class="text-sm text-black mt-2">550 Mill Pond Ave. Arlington,MA 02474</p>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="text-center mt-12">
          <img src="../assets/p.png" class="mx-auto w-20 h-20">
        </div>

        <div class="text-center mt-8">
          <h2 class="text-xl font-bold text-yellow-500">OUR PHONES</h2>
          <p class="text-sm text-black mt-2">0800555321</p>
        </div>
      </div>

    <div class="container mx-auto">
      <div class="text-center mt-12">
        <img src="../assets/ml.png" class="mx-auto w-20 h-20">
      </div>

      <div class="text-center mt-8">
        <h2 class="text-xl font-bold text-yellow-500">OUR MAIL</h2>
        <p class="text-sm text-black mt-2">autocars6@gmail.com</p>
      </div>
    </div>
  </div>
</div>
<div class="mt-10">
  <SearchBars :customPlaceholders="customPlaceholders" />
</div>
    <div class="flex justify-center items-center mt-5">
      <input type="checkbox" class="form-checkbox h-5 w-5 rounded mr-2 mt-4">
      <p class="text-sm text-black font-bold mt-4">i agree that my submitted data is being collected and stored</p>
    </div>
    <div class="flex items-center justify-center mt-8 mb-20">
      <AButton buttonText="Book Now !" buttonClass="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-5 rounded-full" :handleClick="handleButtonClick" />
    </div>
</template>

<script>
import SearchBars from "../components/Placeholder.vue"
import AButton from "../components/Button.vue"

export default {
  name: 'HomePage',
  components: {
      SearchBars,
      AButton,
    },
    data() {
    return {
      customPlaceholders: [
        'Your Name',
        'Your Email Address',
        'Your Question',
        'Your Phone Number',
        'Your City',
      ],
    };
  },
}
</script>