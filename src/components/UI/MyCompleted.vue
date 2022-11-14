<template>
  <div class="head">
    <MyCalendar/>
    <h2 class="today">Today</h2>
    <button
      class="btn btn-none"
      :class="{'button-active': buttonIsActive}"
      @click="showMenuAndButton"
    >
      <IconBurger></IconBurger> 
    </button>
  </div>
  <Transition>
    <MyMenuBurger
      v-model:show="menuVisible"
    />
  </Transition>
</template>

<script>
  import MyCalendar from "@/components/UI/MyCalendar.vue";
  import IconBurger from "@/components/icons/IconBurger.vue";
  import MyMenuBurger from "@/components/UI/MyMenuBurger.vue";
  export default {
    components: {IconBurger, MyMenuBurger, MyCalendar},
  data() {
    return {
      menuVisible: false,
      buttonIsActive: false,
      }
    },
    methods: {
      showMenuAndButton() {
        this.menuVisible = true;
        this.buttonIsActive = !this.buttonIsActive;
      },
    } 
  }
</script>

<style scoped>
/* we will explain what these classes do next! */
  .v-enter-active {
    transition: all 0.3s ease 0s;
  }
  .v-leave-active {
    transition: all 0.3s ease 0s;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .head {
    display: flex;
    margin: 22px 22px 22px 29px;
  }
  .today {
    margin-left: 12px;
  }
  .btn-none {
    margin-left: auto;
    background: none;
    border: none;
    position: absolute;
    width: 26px;
    height: 16px;
    left: 389px;
    top: 23px;
    transition: all 0.3s ease 0s;
}
  .button-active{
    position: absolute; 
    border: none;
    width: 26px;
    height: 16px;
    left: 389px;
    top: 23px;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px 5px 0px 0px;
    transition: all 0.3s ease 0s;
}
</style>