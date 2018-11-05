<template>
    <div class="login container">
        <div class="row">
            <form class="col s12 card-panel">
                <h2 class="center">Login</h2>
                <div class="fluid-form">

                    <div class="field row">
                        <div class="input-field col s12">
                            <input placeholder="Email" id="email" type="email" class="validate">
                            
                        </div>
                    </div>

                    <div class="field row">
                        <div class="input-field col s12">
                            <input placeholder="Senha" id="password" type="password" class="validate">
                            
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
        name: 'Login',
        data() {
            return {

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