<template>
    <div class="row">
        <div class="row">
        <div class="col-md-4 col-md-offset-4 text-left">
            <ul class="nav nav-pills">
                <router-link tag="li" :to="{name: 'addUser'}"><a>Add user</a></router-link>
            </ul>
            <hr>
        </div>
        </div>
        <div class="col-md-4 col-md-offset-4">
            <table class="table table-striped">
                <thead class="thead-dark"> 
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in $store.state.users">
                        <td class="text-left">{{user.name}}</td>
                        <td class="text-left">{{user.password}}</td>
                        <router-link tag="td" class="text-left" :to="{name: 'editUser', params: {id: index, user: user}}"><a class="btn btn-primary">Edit</a></router-link>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: this.$store.state.users
        }
    }
}
</script>
