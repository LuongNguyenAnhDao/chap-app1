<template>

    <h1>Xin chào {{ username }}</h1>
    <ul>
        <li v-for="msg in messages" :key="msg">
            <span>{{ msg.username }}: </span>
            <span>{{ msg.message }}</span>

        </li>
        <input type="text" v-model="message"> 
        <button @click="sendMessage">Gửi</button>
    </ul>
</template>

<script>
import { database, ref, push, onValue } from "../configs/firebase";
export default {

props: ["username"],
data() {
    return {
        message: '',
        messages: [],
    }
},
mounted() {
    this.getMessage();
},
methods: {
    sendMessage(){
        push(ref(database, "message"), {
            username: this.username,
            message: this.message,
        });
    },
    getMessage(){
        onValue(ref(database, "message"),data=>{
            this.messages = [];
            this.message='',
            data.forEach(data=>{
                this.messages.push(data.val());
            });
        })
    }
},
}
</script>

<style>

</style>