<template>
      <div class="bookmark-item" >
        <BookMark1 :id="1"/>
        <BookMark1 :id="2"/>
        <BookMark1 :id="3"/>
        <BookMark1 :id="4"/>
        <BookMark1 :id="5"/>
      </div>
</template>

<script>
import BookMark1 from './bookmarkInput/BookMark1.vue';

export default {
  name: "BookMark",
  components: { 
    BookMark1,
   },
};
</script>


<style scoped>
.bookmark-container {  
  position: relative;
  display: flex;
  justify-self: center;
  align-items:center;
  padding: 20px;
  border-radius: 5px;
  z-index: 2;
}
.bookmark-item{
  display: flex;
  margin: 30px 0 0 0 ;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
