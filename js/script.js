console.log('vue-email-list');

const { createApp } = Vue;

createApp({

  data(){

    return {
      title: 'Email list generator',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
    }

  },

  methods: {

    getApi(){
      axios.get(this.apiUrl)
      .then ( (risposta) => {
        this.emailList.push(risposta.data.response);
      })

      .catch((error) => {
        console.log(error);
      })
    },

  },

  created(){
      for (let i = 1; i < 10; i++) {
        this.getApi()
      }
  },

  mounted(){
    this.getApi();
  },
}).mount('#app')