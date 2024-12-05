<template>
    <div ref="myElement" class="box">Hello, GSAP!</div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: 'MyComponent',
    mounted() {
      // Анимация при монтировании компонента
      gsap.to(this.$refs.myElement, {
        duration: 3,
        x: 0, 
        opacity: 0
    });
    }
  }
  </script>
  
  <style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  </style>
  