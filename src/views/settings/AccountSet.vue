<template>
    <div>
        <div class="head">
            <h2>Account</h2>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <h3>Username</h3>
                <p>user Name</p>
                <div> CHANGE</div>
            </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <h3>Email</h3>
                <p>users Email</p>
                <div> CHANGE</div>
            </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <p>Advanced</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'AccountSet',
}
</script>

<style scoped>
.head {
    background-color: #fff;
  text-align: center;
  padding: 20px 150px 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  margin-left: 21%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>