const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTask: {
                text:'',
                done: false,
            },
            hasError: false,
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
            ],
            computed: {
                incomplete(){
                    return this.tasks.filter(this.inProgress).length;
                }
            }
        }
    },
    methods:{
        addTask(){
            if(this.newTask.text.length >= 3){

                this.tasks.push(this.newTask);
                this.hasError = false;

            }else{

                this.hasError = true; 
            }
            // this.newTask = '';
        },
        removeTask(i){
            this.tasks.splice(i,1);
        },
        inProgress(){
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
        }
    },
    mounted(){
        console.log('in mounted');
    }


});
app.mount('#app');