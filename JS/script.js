const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTask: '',
            tasks:[
                {
                    text: 'to do 1',
                    done: false,
                },
                {
                    text: 'to do 2',
                    done: true,
                },
                {
                    text: 'to do 3',
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
    },
    computed:{
        incomplete(){
            return this.tasks.filter(this.inProgress).length;
        }
    },
    mounted(){
        console.log('in mounted');
    }
});
app.mount('#app');