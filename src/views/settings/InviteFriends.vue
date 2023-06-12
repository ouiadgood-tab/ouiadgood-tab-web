<template>
    <div>
        <div class="tabInfo2">
            <div class="linkText">
                <p class="share">{{ translatedInviteContainer.share }}</p>
                <input type="url" name="invite-link" class="inviteInput" :value="inviteLink"/>
                <p class="msg">{{ translatedInviteContainer.shareInfo }}</p>
            </div>
            <div class="fNum">
                <span>{{ inviteNumber }}</span>
                <p>{{ translatedInviteContainer.invite }}</p>
            </div>
            <div class="heart">
                <span>350</span>
                <p>{{ translatedInviteContainer.extra }}</p>
            </div>
            <ReferFriend/>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <i class="fa-regular fa-face-smile"></i>
                {{ translatedInviteContainer.title }}
            </div>
        </div>
    </div>
</template>

<script>
import ReferFriend from './ReferFriend.vue';

export default {
    name: "InviteFriends",
    data() {
        return {
            locale: localStorage.getItem("locale") || "en",
        };
    },
    computed: {
        inviteLink() {
            const baseUrl = "https://ouiadgood.com/";
            const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));
            const username = loginRequest ? loginRequest.username : "";
            return `${baseUrl}?u=${username}`;
        },
        inviteNumber(){
            const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));
            return loginRequest ? loginRequest.numberOfReferred : 0;
        },
        translatedInviteContainer() {
            let translations;
            if (this.locale === "en") {
                translations = {
                    title: "Many thanks! We rely on people like you to spread the news since every new person raises more money for charity.",
                    share: "Share this link",
                    shareInfo: "and you'll get 350 Hearts for every person who joins!",
                    invite: "Friends recruited",
                    extra: "extra Hearts when you recruit a new friend",
                };
            }
            else if (this.locale === "fr") {
                translations = {
                    title: "Merci beaucoup! Nous comptons sur des gens comme vous pour diffuser la nouvelle, car chaque nouvelle personne recueille plus d'argent pour des œuvres caritatives.",
                    share: "Partagez ce lien",
                    shareInfo: "et vous obtiendrez 350 cœurs pour chaque personne qui se joint !",
                    invite: "Amis recrutés",
                    extra: "Cœurs supplémentaires lorsque vous recrutez un nouvel ami",
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
    },
    components: { ReferFriend }
};
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
.msg{
    margin-left: 5%;
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

.fNum{
    width: 250px;
  min-height: 150px;
}
.heart{
    width: 250px;
  min-height: 150px;

}
.heart span{
    margin-top: -3%;
}

span{
    font-size: 4rem;
    font-weight: bold;
}

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