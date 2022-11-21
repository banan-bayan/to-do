<template>
  <div class="head">
    <MyCalendar/>
    <h2 class="today">Today</h2>
    <Transition>
    <button
      class="btn-menu"
      @click="showMenuAndTransformButton"
      :class="{'btn-menu-active': buttonIsActive}"
    >
    <div
      class="menu__icon"
      :class="{'burger-active': burgerIsActive}"  
    >
      <span></span>
    </div>
  </button>
</Transition>
  </div>
  <Transition>
    <MyMenuBurger
      @getSortedTasks="(param) => $emit('getSortedTasks', param)"
      v-model:show="menuVisible"
    />
  </Transition>
</template>

<script>
import MyCalendar from "@/components/UI/MyCalendar.vue";
import MyMenuBurger from "@/components/UI/MyMenuBurger.vue";
export default {
  components: {MyMenuBurger, MyCalendar},
  data() {
    return {
      menuVisible: false,
      buttonIsActive: false,
      burgerIsActive: false,
    }
  },
  methods: {
    showMenuAndTransformButton() {
      this.menuVisible = true;
      this.burgerIsActive = !this.burgerIsActive;
      this.buttonIsActive = !this.buttonIsActive;
    },
  } 
}
</script>

<style scoped>
.btn-menu {
  width: 60px;
  height: 30px;
  background: none;
  position: absolute;
  margin-left: auto;
  border: none;
  z-index: 5;
  top: 0px;
  right: -10px;
  /*
  border: 1px solid purple;
  */
}
.btn-menu-active {
  width: 102%;
  min-height: 900px;
  background: none;
  position: absolute;
  margin-left: auto;
  border: none;
  z-index: 5;
  top: -1px;
  left: -1px;
  /*
  border: 1px solid purple;
  top: -10px;
  left: -10px;
  */
}
.v-enter-active {
  transition: all 0.3s ease 0s;
}
.v-leave-active {
  transition: all 0.3s ease 0s;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.head {
  display: flex;
  padding: 15px 0px 15px 6px;
  position: relative;
 /*
   border: 1px solid yellow;
 */   
}
.today {
  margin-left: 30px;
  margin-right: 5px;
  flex: 0 1 80%;
}
.menu__icon {
  z-index: 5;
  padding: 5px;
  display: block;
  margin-left: 12px;
  right: 10px;
  top: 7px;
  position: absolute;
  width: 50px;
  height: 16px;
/*
  border: 1px solid green;
*/
}
.menu__icon span, .menu__icon:before, .menu__icon:after {
  position: absolute;
  height: 3px;
  width: 40px;
  transition: all 0.3s ease 0s;
  background-color:  #C4C4C4;
  display: block;
}  
.menu__icon span, .menu__icon:before, .menu__icon:after {
 margin-top: 0px;
}
.menu__icon:before, .menu__icon:after {
  content: '';
}
.menu__icon:before {
  top: 0;
}
.menu__icon:after {
  bottom: 0;
 }
.menu__icon span {
  top: 50%;
  transform: scale(1) translate(0px, -50%);
}
.menu__icon.burger-active span {
  transform: scale(0) translate(0, -50%);
}
.menu__icon.burger-active:before {
  top: 50%;
  transform: rotate(-45deg) translate(0px, -50%);
  background-color:  #4E4E4E;
  width: 30px;
  right: -2px;
  top: 9px;
}
.menu__icon.burger-active:after {
  top: 7px;
  right: -2px;
  width: 30px;
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
  background-color: #4E4E4E;
}
</style>