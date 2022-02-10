<template>
    <user-data @add-data="addData"></user-data>
    <active-user 
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :age="user.age"
    ></active-user>
    
</template>

<script>
export default {
    data() {
        return {
            users: [{
                id: "235235",
                name: "Andie",
                age: "20"
            }]
        }
    },
    methods: {
        addData(name,age) {
            const newUserData = {
            id: new Date().toISOString(),
            name: name,
            age: age
            };
            this.users.push(newUserData);
        }
    }
}
</script>