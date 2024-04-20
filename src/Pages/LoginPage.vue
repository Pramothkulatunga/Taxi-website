<template>
  <section class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md p-8 md:max-w-md w-full">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome to Auto Cars</h1>
      <div v-if="!showLoginSection">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 text-center">Create an Account</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model.trim="formData.email" id="email" class="border border-gray-300 rounded-lg p-2.5 w-full" placeholder="name@gmail.com" required>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" v-model.trim="formData.password" id="password" class="border border-gray-300 rounded-lg p-2.5 w-full" placeholder="password" required>
          </div>
          <button type="submit" class="bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full hover:bg-gray-700 focus:ring-4 focus:outline-none">Create Account</button>
        </form>
        <p class="text-sm text-gray-700 mt-4">Already have an account? <button class="text-blue-600 font-medium" @click="showLogin()">Login here</button></p>
      </div>
      <div v-else>
        <h2 class="text-xl font-semibold mb-4 text-gray-800 text-center">Login</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="login-email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" v-model.trim="formData.email" id="login-email" class="border border-gray-300 rounded-lg p-2.5 w-full" placeholder="name@email.com" required>
          </div>
          <div>
            <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" v-model.trim="formData.password" id="login-password" class="border border-gray-300 rounded-lg p-2.5 w-full" placeholder="password" required>
          </div>
          <button type="submit" class="bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full hover:bg-gray-700 focus:ring-4 focus:outline-none">Login</button>
        </form>
        <p class="text-sm text-gray-700 mt-4">Don't have an account? <button class="text-blue-600 font-medium" @click="showSignUp()">Register</button></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      showLoginSection: false
    };
  },
  methods: {
    showLogin() {
      this.showLoginSection = true;
    },
    showSignUp() {
      this.showLoginSection = false;
    },
    submitForm() {
      console.log('Form submitted');
      console.log('FormData:', this.formData);
    }
  }
};
</script>