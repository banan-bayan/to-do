<template>
  <div class="head">
    <MyCalendar/>
    <h2 class="today">Today</h2>
    <button
      class="bat"
      @click="showMenuAndTransformButton"
    >
    <div 
      class="menu__icon"
      :class="{'_active': buttonIsActive}"
      
    >
      <span></span>
    </div>
  </button>
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
    }
  },
  methods: {
    showMenuAndTransformButton() {
      this.menuVisible = true;
      this.buttonIsActive = !this.buttonIsActive;
    },
  } 
}
</script>

<style scoped>
.bat {
  height: 24px;
  width: 80px;
  background: none;
  position: relative;
  margin-left: auto;
  border: none;
}
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
    margin: 22px 0px 20px 0px;
    /*
    border: 1px solid yellow;
    */
    padding: 15px 0px 15px 6px;
    position: relative;
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
  top: 2px;
  right: 2px;
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
.menu__icon._active span {
  transform: scale(0) translate(0, -50%);
}
.menu__icon._active:before {
  top: 50%;
  transform: rotate(-45deg) translate(0px, -50%);
  background-color:  #4E4E4E;
  width: 30px;
  right: -2px;
  top: 7px;
}
.menu__icon._active:after {
  right: -2px;
  width: 30px;
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
  background-color: #4E4E4E;
}

/*
 .btn-none {
    margin-left: auto;
    margin-right: 5px;
    background: grey;
    border: 1px solid green;
    align-self: center;
    min-width: 40px;
    transition: all 0.3s ease 0s;
}
*/
</style>