<template>
    <div class="cadastro container">
        <div class="row">
            <form class="col s12 card-panel">
                <h2 class="center">Cadastro de Fighters</h2>
                <div class="fluid-form">
                    <div class="field row">
                        <div class="input-field col s6">
                            <input placeholder="Nome" id="first_name" type="text" class="validate">
                            
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="Sobrenome" id="last_name" type="text" class="validate">
                            
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s12">
                            <input placeholder="Email" id="email" type="email" class="validate">
                            
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s6">
                            <input placeholder="Senha" id="password" type="password" class="validate">
                        </div>
                    
                        <div class="input-field col s6">
                            <input placeholder="Confirmar Senha" id="password" type="password" class="validate">
                        </div>
                    </div>
                    
                    <p class="red-text center">{{ feedback }}</p>

                    <div class="row center">
                        <a class="waves-effect waves-light btn-small">Enviar</a>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cadastro',
        data() {
            return {

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