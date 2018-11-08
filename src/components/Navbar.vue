<template>
    <div class="navbar">
         <nav class="#00acc1 cyan darken-1">
            <div class="nav-wrapper container">
                <a class="brand-logo">Projeto Vue</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li v-if="!user"><router-link :to="{ name:'cadastro' }">Cadastro</router-link></li>
                <li v-if="!user"><router-link :to="{ name: 'login' }">Login</router-link></li>
                <li v-if="user"><router-link to="/">{{ user.email }}</router-link></li>
                <li v-if="user"><a @click="logout">Logout</a></li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from 'vue-router'

    export default {
        name: 'Navbar',
        data() {
            return {
                user: null,
            }
        },
        methods: {
            logout(){
                firebase.auth().signOut().then(() => {
                    this.$router.push({name: 'login'})
                })
            }
        },
        created() {
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    this.user = user
                } else {
                    this.user = null
                }
            })
        }
    }
</script>

<style scoped>

</style>