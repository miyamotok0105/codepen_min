<template>
  <div class="main">

    <div class="container">
      <div>
        <h1>HTML CODE</h1>
        <p>Copy it to the text below.</p>
        <pre class="code">
          <code class="prettyprint">
    &lt;h1&gt;
      見出し１
    &lt;/h1&gt;   
    &lt;p&gt;
      サンプル
    &lt;/p&gt;
          </code>
        </pre>
        
        <textarea placeholder="write html." v-model="html" class="input-code">
        </textarea>
      </div>
  
      <div>
        <h1>CSS CODE</h1>
        <p>Copy it to the text below.</p>
          <pre class="code">
            <code class="prettyprint">
      h1 {
        background: red;
      }
            </code>
          </pre>
        <textarea placeholder="write css." v-model="css" class="input-code">
        </textarea>
      </div>
    </div>

    
    <button v-on:click="setFrame()">
     Preview!
    </button>
    
    <div id="inframe"></div>

  </div>
</template>

<script>

 export default {
  data: function () {
    return  {
      html: "",
      css: ""
    }
  },
  methods: {
    setFrame: function(){
      //delete
      const myFrame = document.getElementById("inframe");
      if (myFrame) {
        var child = myFrame.lastElementChild;  
        while (child) { 
          myFrame.removeChild(child); 
          child = myFrame.lastElementChild; 
        }
      }
      //create
      var iframe = document.createElement('iframe');
      //inframeのidの場所に下記内容を貼り付ける
      document.getElementById('inframe').appendChild(iframe);
      var doc = iframe.contentWindow.document;
      doc.open();
      //ここでhtmlのドキュメントを書き込む。
      //この内容をiframeに表示する。
      doc.write(this.html+"<style>"+this.css+"</style>");
      doc.close();
    },
  },
  watch: {
    // この関数は html css が変わるごとに実行されます。
    html: function () {
      this.setFrame();
    },
    css: function () {
      this.setFrame();
    }
  },
  mounted() {
    if (document.readyState == "complete") { 
      this.setFrame();
    }
  },
  created: function () {
  }
}
</script>

<style scoped>
.code {
  width: 400px;
  height: 150px;
  background: red;
  text-align: left;
}

.input-code {
  width: 400px;
  height: 200px;
  opacity: 0.9;
}

.container {
  display:-webkit-box;
  display:-ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
