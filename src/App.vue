<template>
<NavBar />
<router-view />
<AppFooter />
</template>

<script>
import NavBar from '../src/components/Navbar.vue'
import AppFooter from '../src/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  }
}
</script>