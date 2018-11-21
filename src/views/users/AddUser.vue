<template>
    <div class="row">
        <div class="col-md-4 offset-col-md-4">
            <div class="form-group">
                <label for="newUserName">Username</label>
                <input type="text" class="form -control" id="newUserName" v-model="newUser.name">
            </div>
            <div class="form-group">
                <label for="newUserPassword">Password</label>
                <input type="text" class="form -control" id="newUserPassword" v-model="newUser.password">
            </div>
        </div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            newUser: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        
    }
}
</script>
