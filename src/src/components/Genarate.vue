<template>
  <div class="generate">
    <template v-for="(child, index) in children">
        <component :is="child" :key="child.name"></component>
    </template>
    
    <button @click="add()">Add Another</button>
  </div>
</template>

<script>
import Div from './div.vue'

 export default {
  data: function () {
    return  {
      hoge: "",
      children: []
    }
  },
  methods: {
    hoge2: function(){
    },
    add () {
      this.children.push(Div);
    },
  },
  watch: {
    // この関数は hoge が変わるごとに実行されます。
    hoge3: function () {
      
    }
  },
  mounted() {

  },
  created: function () {
  }
}
</script>

<style scoped>

</style>
