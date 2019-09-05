<template>
  <div class="generate">
    
    <div v-for="genForm in genForms">
      <div class="genForm">
        <div class="genForm-item">
          エリアタイプ
          <input type="radio" name="areaType" value="normal" v-model=genForm.areaType>普通エリア
          <input type="radio" name="areaType" value="flex1" v-model=genForm.areaType>Flexエリア1
          <input type="radio" name="areaType" value="flex2" v-model=genForm.areaType>Flexエリア2
        </div>
        
        <div class="genForm-item">
          width
          <input type="number" name="width" value="200" v-model=genForm.width>
        </div>

        <div class="genForm-item">
          height
          <input type="number" name="height" value="100" v-model=genForm.height>
        </div>

        <div class="genForm-item">
          margin-top
          <input type="number" name="marginTop" value="10" v-model=genForm.marginTop>
        </div>

        <div class="genForm-item">
          margin-right
          <input type="number" name="marginRight" value="10" v-model=genForm.marginRight>
        </div>

        <div class="genForm-item">
          margin-bottom
          <input type="number" name="marginBottom" value="10" v-model=genForm.marginBottom>
        </div>

        <div class="genForm-item">
          margin-left
          <input type="number" name="marginLeft" value="10" v-model=genForm.marginLeft>
        </div>

        <div class="genForm-item">
          text-align
          <input type="radio" name="textAlign" value="center" v-model=genForm.textAlign>center
          <input type="radio" name="textAlign" value="left" v-model=genForm.textAlign>left
          <input type="radio" name="textAlign" value="right" v-model=genForm.textAlign>right
        </div>

        <div class="genForm-item">
          background
          <input type="radio" name="background" value="yellow" v-model=genForm.background>yellow
          <input type="radio" name="background" value="red" v-model=genForm.background>red
          <input type="radio" name="background" value="blue" v-model=genForm.background>blue
          <input type="radio" name="background" value="green" v-model=genForm.background>green
        </div>


      </div>
    </div>

    <div class="genForm-item">
      <button @click="add()">Add Another</button>
    </div>

    <!-- {{ genForm }} -->
    <template v-for="(child, index) in children">
        <!-- <component-status :status-list="[{...},{...}]"></component-status> -->
        <component :is="child" :key="child.name" :genForm=genForms[index]></component>
    </template>
  </div>
</template>

<script>
import Div from './div.vue'

 export default {
  data: function () {
    return  {
      // genForm: {
      //   areaType: '',
      //   width: 0,
      //   height: 0,
      //   marginTop: 0,
      //   marginRight: 0,
      //   marginBottom: 0,
      //   marginLeft: 0,
      //   textAlign: '',
      //   background: '',
      // },
      // genForms: [],
      children: []
    }
  },
  methods: {
    hoge2: function(){
    },
    add () {

      var genForm = Object.assign({}, this.genForm);
      this.$store.dispatch('setGenById', genForm)
      // this.genForms.push(this.genForm)
      this.children.push(Div);
    },
  },
  watch: {
    // この関数は hoge が変わるごとに実行されます。
    hoge3: function () {
      
    }
  },
  mounted() {
    // this.add();
  },
  created: function () {
  },
  computed: {
      genForms() {
          return this.$store.getters.genForms
      },
  },
}
</script>

<style scoped>

  .genForm {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .genForm-item {
    width: 300px;
    margin-left: 0;
    text-align: left;
  }


</style>
