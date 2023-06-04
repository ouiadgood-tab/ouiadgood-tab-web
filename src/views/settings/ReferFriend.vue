<template>
    <div>
        <div class="tabInfo2">
            <div class="linkText">
                <p class="share">{{ translatedFriendContainer.title }}</p>
                <input type="url" name="invite-link" class="inviteInput"  :placeholder="translatedFriendContainer.placeholder"/>
                <div class="referBtn">{{ translatedFriendContainer.enter }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'ReferFriend',
    data(){
      return{
        locale: localStorage.getItem("locale") || "en",
      }
    },
    computed:{
      translatedFriendContainer() {
        const referral = "referral";
            let translations;
            if (this.locale === "en") {
                translations = {
                    title: "Who referred you",
                    enter: "Enter",
                    placeholder: localStorage.getItem(referral) || "Enter username",
                };
            }
            else if (this.locale === "fr") {
                translations = {
                  title: "Qui vous a référé",
                    enter: "Entrer",
                    placeholder: localStorage.getItem(referral) || "Saisissez votre nom d'utilisateur",
                };
            }
            else {
                translations = {
                    title: "",
                    placeholder: "",
                };
            }
            return translations;
        },
    }
}
</script>

<style scoped>
.tabInfo2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 20%;
}

.linkText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
}

.share{
    margin-left: -47%;
}

.linkText > p {
  font-size: 16px;
}

.inviteInput {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  width: 70%;
  box-sizing: border-box;
}

.inviteInput:hover {
  border: none;
  border-bottom: 2px solid #b6b6b6;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  width: 70%;
  box-sizing: border-box;
}
.inviteInput:focus {
  outline: none;
  border-bottom-color: #ccc;
  font-size: 19px;
}

.tabInfo2 > div{
    background-color: #fff;
  color: #13b0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding:  40px 20px 5px 20px;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  
}

.linkText{
    color: #020202 !important ;
    width: 500px;
  min-height: 150px;
}

.linkText p{
    color: #707070 !important ;
}
.referBtn{
  background-color: #707070;
  padding: 10px;
  color:#fff;
  border-radius: 5px;
  float: right;
  margin-left: 50%;
  cursor: pointer;
}
.referBtn:hover{
  padding: 11px;

}

</style>