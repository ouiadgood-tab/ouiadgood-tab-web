<template>
    <div>
        <div class="head">
            <h2 class="mainText">Account</h2>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <h3 class="mainText">Username</h3>
                <p class="userE">user Name</p>
                <div class="btnCha"> CHANGE</div>
            </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <h3 class="mainText">Email</h3>
                <p class="userE">users Email</p>
                <div class="btnCha"> CHANGE</div>
            </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <p class="mainText">Advanced</p>
                <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" @click="toggleDeleteAcct"> 
                    <span class="slider"></span>
                    </label>
                </div>
                <div class="deleteAcct" :class="{ 'show': showDeleteAcct }">
                    <h2 class="mainText delete">Delete Account</h2>
                    <button class="btnDel">DELETE ACCOUNT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountSet',
  data() {
    return {
      showDeleteAcct: false,
    };
  },
  methods: {
    toggleDeleteAcct() {
      this.showDeleteAcct = !this.showDeleteAcct;
    },
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
.btnDel{
    margin-left: 15%;
    margin-bottom: -5%;
    font-size: 18px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow,transform;
    background: radial-gradient( 100% 100% at 100% 0%, #e94c4c 0%, #a10903 100% );
    box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
    padding: 0 2em;
    border-radius: 0.3em;
    color: #fff;
    height: 2.6em;
    text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.btnDel:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #e94c4c;
    transform:s translateY(-0.1em);
}

.btnDel:active {
  box-shadow: inset 0px 0.1em 0.6em #a10903;
  transform: translateY(0em);
} 
.delete{
    margin-top: 1%;
}

.btnCha{
    float: right;
    margin-top: -4%;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btnCha:hover{
    background-color: #7070708c;
    color: #fff;
}
.userE{
    margin-top: -4%;
}

.switchFlex{
    float: right;
    margin-top: -4%;
}

/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 0.1em;
  border-radius: 0px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
}

input:checked + .slider:before {
  transform: translateX(2.8em) rotate(360deg);
}
.deleteAcct {
  display: none;
  
 
}

.deleteAcct.show {
  display: flex;
  background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  height: 5vh;
  margin-left: -16.5%;
  margin-top: 6%;
  border: none;

}
</style>