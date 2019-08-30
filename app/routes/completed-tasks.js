import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        this.getTask()
    },

    getTask: function(){
        var database = firebase.database();
        var controller = this.controllerFor("incompleted-tasks");
        var tasks = [];

        database.ref('/todo-list-cuc/tasks').once('value').then(function(snapshot){
            snapshot.forEach(children => {
                tasks.push(children.val());
            });
            controller.set('tasks',tasks);
        })
    }
});
