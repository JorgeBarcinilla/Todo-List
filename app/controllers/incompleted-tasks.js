import Controller from '@ember/controller';

export default Controller.extend({
    tasks: [],
    selectedTasks: null,

    actions:{
        previewTask: function(task){
            this.set('selectedTask', task);
        }
    }
});
