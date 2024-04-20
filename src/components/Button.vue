<template>
  <button :class="buttonClass" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'AButtons',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String,
      default: 'bg-blue-500 text-white font-bold py-2 px-4 rounded'
    },
    handleClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>