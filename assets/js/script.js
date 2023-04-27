const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "EMAILS",
      emails: [],
      api: 'https://flynn.boolean.careers/exercises/api/random/mail',
    }
  },
  methods: {
    spamEmails() {
      axios.get(this.api)
        .then(res => {
          console.log(res.data.response);
          this.emails.push(res.data.response)
        })
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++)
      this.spamEmails()
  },
}).mount("#app")