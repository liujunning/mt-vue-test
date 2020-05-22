<template>
  <div id="app">
	TEST
	<form-render 
	 :propsSchema="propsSchema"

	 @change="setData"
	 @validate="setValid"
	></form-render>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import FormRender from 'form-render/lib/antd';

export default {
  name: 'app',
  components: {
    HelloWorld,
	FormRender
  },
  data() {
	  return {
		propsSchema: {
		  type: 'object',
		  properties: {
			string: {
			  title: '字符串',
			  type: 'string',
			  'ui:width': '50%', // uiSchema 可以合并到 propsSchema 中（推荐写法，书写便捷）
			},
			select: {
			  title: '单选',
			  type: 'string',
			  enum: ['a', 'b', 'c'],
			},
		  },
		},
		uiSchema: {
		  select: {
		    'disabled': true,
		  },
		}
		
		
		
	  }
  },
  methods: {
	  setData() {
		  
	  },
	  setValid() {
		  
	  }
  }
}  
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
