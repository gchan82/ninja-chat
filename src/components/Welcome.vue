<template>
<div class="welcome container">
  <div class="card">
    <div class="card-content center-align">
      <h2 class="teal-text">Welcome</h2> <!-- teal-text is text color vs line 13-->
      <form @submit.prevent="enterChat">
        <!--prevent default action when use clicks on button to submit form. calls method enterChat-->
        <label for="name">Enter your name:</label>
        <input type="text" name="name" v-model="name">
        <!--v-model refers to data.name-->
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <!--will only output if feedback is true-->
        <button class="btn teal">Enter Chat</button> <!-- teal is bg color-->
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      this.$router.push({name: 'Chat', params: {name: this.name}})
   //   console.log(this.name)
 /*     if (this.name) {
this.$router.push({name: 'Chat'})
      } else {
        this.feedback = 'You must enter a name to join'
      }*/
    }
  }
}
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;

}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin: 30px auto;
}
</style>
