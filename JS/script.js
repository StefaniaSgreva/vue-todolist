const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            tasks:[
                {
                    text: 'to do 1',
                    done: false
                },
                {
                    text: 'to do 2',
                    done: true
                },
                {
                    text: 'to do 3',
                    done: false
                }
            ]
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        console.log('in mounted');
    }


});
app.mount('#app');