<template>
            <SettingNav>

                <InviteFriends class="invite"/>
            </SettingNav>
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

}
</style>