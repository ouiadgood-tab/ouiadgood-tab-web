<template>
    <div class="dropdowns">
      <ul class="dropdown" @click="toggleDropdown('dropdown1')" :class="{ active: activeDropdown === 'dropdown1' }">
        <li><MoneyCount/></li>
        <ul class="dropdown-items" v-if="activeDropdown === 'dropdown1'">
          <li><p class="info">This is how much money our community has raised for charity.
          Recruit your friends to raise more!</p>
          <button>Invite a friend</button>
        </li>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown2')" :class="{ active: activeDropdown === 'dropdown2' }">
        <li><i class="fa-solid fa-tv"></i></li>
        <ul class="dropdown-items" v-if="activeDropdown === 'dropdown2'">
          <li>
            <h3 class="info">Watch a video, earn 100 hearts!</h3>
            <p class="info">No videos available right now, but we’ll let you know when one is.</p>
          </li>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown2+')" :class="{ active: activeDropdown === 'dropdown2+' }">
        <li>2<i class="fa-regular fa-heart"></i></li>
        <ul class="dropdown-items" v-if="activeDropdown === 'dropdown2+'">
          <li><a href="#">Setting</a></li>
          <li><a href="#">Item b</a></li>
          <li><a href="#">Item c</a></li>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown3')" :class="{ active: activeDropdown === 'dropdown3' }">
        <li>...</li>
        <ul class="dropdown-items" v-if="activeDropdown === 'dropdown3'">
          <li><a href="#">Item -</a></li>
          <li><a href="#">Item --</a></li>
          <li><a href="#">Item ---</a></li>
        </ul>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .dropdowns {
    display: flex;
    justify-content:right;
    margin-top: -25px;
    margin-right: 20px;
    color: rgba(255, 255, 255, 0.795);
  }
  
  .dropdown {
    margin-right: -15px;
    list-style: none;
    position: relative;
    font-size: 30px;
  }
  
  .dropdown-items {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 150px;
    padding: 0;
    margin: 0, 10px, 10px, 2px;
    background-color: rgba(255, 255, 255, 0.24);
    border: 1px solid #ccc;
    border-top: none;
    z-index: 1;
  }
  
  .active .dropdown-items {
    display: block;
  }
  
  .dropdown li {
    padding: 5px;
    cursor: pointer;
  }
  
  li:hover {
    color: #fff;
  }
  
  .dropdown-items li {
    padding: 10px;
    border-top: 1px solid #ffffffdc;
  }
  
  .dropdown-items li:first-child {
    border-top: none;
  }
  
  .dropdown-items li a {
    display: block;
    background-color: transparent;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 14px;
  }
  
  .dropdown-items li a:hover {
    background-color: #f2f2f2;
  }
.info{
  font-size: small;
  color: #ffffff;
}
  </style>
  
  <script >
import MoneyCount from './MoneyCount.vue';

  export default {
    name: "DropDown",
    data() {
        return {
            activeDropdown: null,
        };
    },
    methods: {
        toggleDropdown(dropdown) {
            if (this.activeDropdown === dropdown) {
                this.activeDropdown = null;
            }
            else {
                this.activeDropdown = dropdown;
            }
        },
    },
    components: { MoneyCount }
};
  </script>
  