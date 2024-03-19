console.log('vue-email-list');

const { createApp } = Vue;

createApp({

  data(){

    return {
      title: 'Email list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      addEmail: '',
    }

  },

  methods: {
    getApi(){
      axios.get(this.apiUrl)
      .then ( (risposta) => {
        console.log(this.addEmail = risposta.data.response);
      })

      .catch((error) => {
        console.log();
      })
    }
  },

  mounted(){
    this.getApi()
  },
}).mount('#app')