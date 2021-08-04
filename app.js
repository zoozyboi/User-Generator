const app = Vue.createApp({
    
    data() {
        return {

            firstName: 'Zeus',
            lastName: 'Bru',
            email: 'zeusbru@gmail.com',
            gender: 'male',
            picture: 'http://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('http://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName =  results[0].name.last
            this.email = results[0].email
            this.gender =  results[0].gender
            this.picture = results[0].picture.large
        },
    },
});

app.mount('#app');