<template>
  <form @submit.prevent class="form">
    <button 
      class="btn-create"
      @click="createTask"
      :disabled="titleInput.length < 9"
    >
      <IconCreate/>
    </button>
    <myInput
      v-model="titleInput"
      type="text" 
      placeholder="Create New Item"
      v-on:keypress.enter="createTask"
    />
  </form> 
</template>

<script>
  import IconCreate from "@/components/icons/IconCreate.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  export default {
    components: {MyInput, IconCreate},
    data() {
      return {
        titleInput: '',
      }
    },
  methods: {
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.titleInput,
        status: 'inProgress',
      }  
      this.$emit('create', newTask);  
      this.titleInput = '';
    }
  }
}
</script>

<style scoped>
.btn-create {
  align-self: center;
  background: none;
  border: none;
}
form {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 23px;
  width: 374px;
  margin: 7px 23px 0px 22px; 
  padding: 8px 0px 8px 10px;
}
</style>