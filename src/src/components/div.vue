<template>
  <div class="div">
    
    {{ genForm }}
    <div v-bind:style="{ background: genForm.background, 'width': genForm.width + 'px', 'height': genForm.height + 'px', 'margin-top': genForm.marginTop + 'px', 'margin-right': genForm.marginRight + 'px', 'margin-bottom': genForm.marginBottom + 'px', 'margin-left': genForm.marginLeft + 'px', 'text-align': genForm.textAlign }">Gen Div!</div>
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
    hoge () {
      return ""; 
    }
  },
  props: {
    genForm: {
      // type: Array,
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

  .div {
    width: 700px;
    margin-left: 30%;
    text-align: left;
  }



</style>
