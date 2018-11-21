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
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            id: localStorage.getItem('id') ? localStorage.getItem('id') : this.$route.params.id,
            user: localStorage.getItem('id') ? this.$store.state.staff[localStorage.getItem('id')] : this.$route.params.user
        }
    },
    methods: {
        ...mapMutations([
            'changeName',
            'loadUsers'
        ])
    },
    beforeRouteLeave(to, from, next){
        if(JSON.parse(localStorage.getItem('staff'))){
            this.$store.state.staff = JSON.parse(localStorage.getItem('staff'))
        }else {
            this.$store.state.staff = user.staff
        }
        localStorage.removeItem('id')
        next();
    },
    created(){
        localStorage.setItem('id', this.$route.params.id)
    }
}
</script>
