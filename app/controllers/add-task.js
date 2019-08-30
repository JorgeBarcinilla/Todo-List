import Controller from '@ember/controller';

export default Controller.extend({
    task: {
        
    },

    position: 0,

    actions:{
        save: function(){
            var task = this.task;
            var position = this.position;

            firebase.database().ref('tasks/'+position).set(task);
            this.transitionToRoute('incompleted-task');
        }
    }
});
