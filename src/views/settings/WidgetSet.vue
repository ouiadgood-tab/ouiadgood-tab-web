<template>
    <div>
        <div class="head">
            <i class="fa-sharp fa-regular fa-bookmark"></i>
            <h2 class="mainText">Bookmark</h2>
        </div>
        <div class="head">
            <i class="fa-sharp fa-regular fa-note-sticky"></i>
            <h3 class="mainText">Notes</h3>
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
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  height: 12vh;
  margin-left: 21%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.mainText{
    display: flex;
    margin-left: -14%;
    margin-top: 5%;

}
</style>