<template>
    <div class="navbar">
         <nav class="#00acc1 cyan darken-1">
            <div class="nav-wrapper container">
            <a href="#" class="brand-logo">Projeto Vue</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="cadastro">Cadastro</router-link></li>
                <li><router-link to="login">Login</router-link></li>
                
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>