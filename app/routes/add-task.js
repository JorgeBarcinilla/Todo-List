import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        this.getTask()
    },

    getTask: function(){
        var database = firebase.database();
        var controller = this.controllerFor("add-task");
        var tasks = [];

        database.ref('/todo-list-cuc/tasks').once('value').then(function(snapshot){
            snapshot.forEach(children => {
                var task = children.val();
                tasks.push(task);
            });
            controller.set('position',tasks.length);
        })
    }
});
