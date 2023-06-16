<template>
  <div>
    <div class="bookmark-container">
      <div class="bookmark-item" >
        <BookMark1/>
        <BookMark2/>
        <BookMark3/>
        <BookMark4/>
        <BookMark5/>
      </div>
    </div>
   
  </div>
</template>

<script>
import BookMark1 from './bookmarkInput/BookMark1.vue';
import BookMark2 from './bookmarkInput/BookMark2.vue';
import BookMark3 from './bookmarkInput/BookMark3.vue';
import BookMark4 from './bookmarkInput/BookMark4.vue';
import BookMark5 from './bookmarkInput/BookMark5.vue';

export default {
  name: "BookMark",
  components: { 
    BookMark1, 
    BookMark2,
    BookMark3,
    BookMark4,
    BookMark5
   },
};
</script>


<style scoped>
.bookmark-container {  
  position: relative;
  display: flex;
  justify-self: center;
  align-items:center;
  height: 12vh;
  width: 80vh;
  padding: 20px;
  border-radius: 5px;
  left: 28%;
  margin-top: -4%;
  margin-bottom: -5%;
  z-index: 2;
}
.bookmark-item{
  display: flex;
}
</style>
