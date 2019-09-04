<template>
  <div class="div">
    <p @click="toggleMsg()">Welcome {{ msg }}!</p>
  </div>
</template>

<script>

 export default {
  data () {
    return {
      msg: 'div com'
    }
  },
  methods: {
    toggleMsg () {
      return this.msg = this.msg === 'home' ? 'back' : 'home'; 
    }
  }
}
</script>

<style scoped>

</style>
