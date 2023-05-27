<template>
    <div>
        <div class="setPos"> 
            <SettingNav/>
        </div >
        <InviteFriends class="invite"/>
    </div>
</template>

<script>
import SettingNav from './SettingNav.vue';
import InviteFriends from './InviteFriends.vue';


export default{
    components: { SettingNav, InviteFriends }
}
</script>

<style scoped>
.setPos{
    position: static;
}
.invite{
    margin-top: -45%;
}
</style>