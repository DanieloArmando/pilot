<template>
    <div class="row justify-content-center">
        <div class="col-md-4 col-md-offset-4">
            <button class="btn btn-primary" @click="loadUsers"></button>
            <div class="form-group">
                <label for="edit_name">Name</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="edit_name" 
                    v-model="user.name" 
                    @keydown.enter="changeName([id, user.name])">
            </div>
            {{$store.state.users}}
            {{$route.params.user}}
            {{user.name}}
            {{$store.state.count}}
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            id: this.$route.params.id,
            user: this.$route.params.user
        }
    },
    methods: {
        ...mapMutations([
            'changeName',
            'loadUsers'
        ])
    }
}
</script>
