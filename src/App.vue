<template>

<login-view v-if="!showChatView" @login="getUsername"/>

<chat-view v-if="showChatView" :username="username"/>

</template>


<script>
import ChatView from './components/ChatView.vue'

import LoginView from './components/LoginView.vue'



export default{
  components: { ChatView, LoginView },
//  setup() {
//     async function getTransactions() {
//       const response=await fireStoreCore.collection("transactions").get();
//       const data=response.docs.map((doc)=>{
//         return {...doc.data(), id: doc.id};
//       });
//       console.log(data)
//   }
//   getTransactions();
// }
data() {
  return {
    showChatView: false,
    username: '',
  }
},
methods: {
  getUsername(username) {
    this.username = username;
    this.showChatView = true;
  },
},
components:{
      ChatView,
      LoginView
    }
}

</script>


