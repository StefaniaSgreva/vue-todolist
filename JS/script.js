const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTask: '',
            tasks:[
                {
                    text: 'Breakfast on Pluto',
                    done: true,
                },
                {
                    text: 'Catching some stars (Galaxy b-34)',
                    done: false,
                },
                {
                    text: 'Unicorn race on Saturn',
                    done: true,
                },
                {
                    text: 'Relaxing time on asteroid B-612',
                    done: false,
                },
                {
                    text: 'Dancing night on Uranus',
                    done: false,
                }
            ]
        }
    },
    methods:{
        addTask(){
            if(this.newTask){

                this.tasks.push({
                    text: this.newTask,
                    done: false
                } );
            }
            this.newTask = '';
        },
        removeTask(i){
            this.tasks.splice(i,1);
        },
        inProgress(task){
            return !this.isCompleted(task);
        },
        isCompleted(task){
            return task.done;
        },
        clearCompleted(){
            this.tasks = this.tasks.filter(this.inProgress);
        },
        clearAll(){
            this.tasks = [];
        },
        tooglePurchased(task){
            task.done = !task.done;
        }
    },
    computed:{
        incomplete(){
            return this.tasks.filter(this.inProgress).length;
        }
    },
    mounted(){
        console.log('in mounted');
    },
});
app.mount('#app');