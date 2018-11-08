<template>
    <div class="cadastro container">
        <div class="row">
            <form @submit.prevent="cadastro" class="col s12 card-panel">
                <h2 class="center">Cadastro</h2>
                    <div class="field row">
                        <div class="input-field col s6">
                            <input v-model="nome" placeholder="Nome" type="text"
                             name="nome" class="validate">
                        </div>
                        <div class="input-field col s6">
                            <input v-model="sobrenome" placeholder="Sobrenome" 
                            type="text" name="sobrenome" class="validate">
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s12">
                            <input v-model="email" placeholder="Email" 
                            type="email" name="email" class="validate">
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s6">
                            <input v-model="password" placeholder="Senha"  
                            type="password" name="password" class="validate">
                        </div>
                        <div class="input-field col s6">
                            <input v-model="confirmpassword" 
                            placeholder="Confirmar Senha" type="password" 
                            name="confirm-password" class="validate">
                        </div>
                    </div>
                    
                    <p class="red-text center">{{ feedback }}</p>

                    <div class="field row center">
                        <button @click="validation" class="waves-effect 
                        waves-light btn-small">Enviar</button>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Cadastro',
    data() {
        return {
            feedback: null,
            nome: null,
            sobrenome: null,
            email: null,
            password: null,
            confirmpassword: null
        }
    },
    
    methods: {
        /**
         * 
         * 
         * 
         * 
         * @var String faz algo
         * return ahh
         * 
         */
        cadastro(){
            
            if(this.email && this.password && this.nome && this.sobrenome && 
            this.password) {
                do  {
                    this.feedback = 'Senhas diferentes'
                } while (this.password != this.confirmpassword) {
                let ref = db.collection('users')
                    
                firebase.auth().createUserWithEmailAndPassword(this.email, 
                this.password)
                .then(() => {
                    ref.doc(this.email).set({
                        email: this.email,
                        password: this.password,
                        confirmpassword: this.confirmpassword,
                        nome: this.nome,
                        sobrenome: this.sobrenome
                                }).then(() => {
                                    this.$router.push({name: 'dashboard'})
                                    console.log('cadastrou e jogou o cara na home')
                                }) 
                            }).catch(err =>{
                                this.feedback = err.message
                            }) 
                } 
            } else {
                this.feedback = 'Você precisa preencher todos os campos'
            }
        },
        validation() {
            
        }
    }
}
</script>

<style scoped>
.cadastro {
    max-width: 600px;
    margin-top: 60px;
}
.cadastro h2 {
    font-size: 2.4em;
}
.cadastro .field {
    margin-top: 10px;
}
.fluid-form {
    padding: 10px;
}
</style>