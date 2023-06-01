<template>
    <div>
        <!--<div class="head">
            <h2 class="mainText">Bookmark</h2>
            <i class="fa-sharp fa-regular fa-bookmark icon-wid"></i>
        </div> -->
        <div class="head">
            <h3 class="mainText">Notes</h3>
            <i class="fa-sharp fa-regular fa-note-sticky icon-wid"></i>
        </div>
        <div class="head">
            <h3 class="mainText">Todo List</h3>
            <i class="fa-solid fa-list icon-wid"></i>
        </div>
    </div>
</template>

<script>

export default {
  name: 'WidgetSet',
  components: {

  },
 
};
</script>

<style scoped>
.head {
    display: flex;
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  height: 12vh;
  margin-left: 21%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.fa-list{
    margin-left: -12%;
    margin-top: 5%;
    z-index: 2;
}

.fa-note-sticky{
    margin-left: -9%;
    margin-top: 5%;
    z-index: 2;
}


.mainText{
    margin-left: -12%;
    margin-top: 4.5%;
    z-index: 2;

}
</style>