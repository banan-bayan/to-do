<template>
  <input
    class="input" 
    type="text" 
    :value="modelValue" 
    @input="updateInput"
    
  >
</template> 

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value); 
    }
  }
}
</script>

<style scoped>
.input {
  display: flex;
  font-size: 30px;
  color: #3D82EB;
  border: none;
  outline: none;
  /*
  border: 1px solid orange;
  */
  margin: 0px;
  overflow: hidden;
  text-overflow: clip;
  margin-right: 65px;
 
  
  
}
</style>