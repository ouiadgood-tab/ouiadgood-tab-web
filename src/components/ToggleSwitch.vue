<template>
    <div :class="['toggle-switch',{'active': isActive }]" @click="toggleSwitch">
      <div :class="['toggle-handle', { 'active': isActive }]"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    initialState: {
      type: Boolean,
      default: false
    },
    toggleCallback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isActive: this.initialState
    };
  },
    methods: {
      toggleSwitch() {
        this.isActive = !this.isActive;
        this.toggleCallback(this.isActive);
      }
    }
  };
  </script>
  
  <style>
  .toggle-switch {
    width: 60px;
    height: 30px;
    background-color: #ccc;
    border-radius: 15px;
    cursor: pointer;
    
    position: relative;
  }

  .toggle-switch.active{
    background-color: rgb(5, 169, 219);;
  }
  
  .toggle-handle {
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    transition: .5s ease;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.3s;
  }
  
  .toggle-handle.active {
    left: 32px;
  }
  </style>
  