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
  name: 'myInput',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)  
    }
  }
}
</script>

<style scoped>
.input {
  /*
  max-width: 374px;
  */
  margin-left: 16px;
  font-size: 10px;
  color: #3D82EB;
  border: none;
  outline: none;
}

</style>