<template>
    <div class="login container">
        <div class="row">
            <form @submit.prevent="login" class="col s12 card-panel">
                <h2 class="center">Login</h2>
                <div class="fluid-form">

                    <div class="field row">
                        <div class="input-field col s12">
                            <input v-model="email" placeholder="Email" id="email" type="email" class="validate">
                            
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s12">
                            <input v-model="password" placeholder="Senha" id="password" type="password" class="validate">
                            
                        </div>
                    </div>

                    <p class="red-text center">{{ feedback }}</p>

                    <div class="row center">
                        <button class="waves-effect waves-light btn-small">Enviar</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: { 
        login(){
            if(this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    this.$router.push({name: 'dashboard'})
                }).catch(err =>{
                    this.feedback = err.message
                })
            } else {
                this.feedback = 'Preencha todos os campos'
            }
        }
    }
}
</script>

<style scoped>
.login {
    max-width: 400px;
    margin-top: 60px;
}
.login h2 {
    font-size: 2.4em;
}
.login .field {
    margin-top: 10px;
}
.fluid-form {
    padding: 10px;
}
</style>