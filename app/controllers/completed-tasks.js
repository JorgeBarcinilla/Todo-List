import Controller from '@ember/controller';

export default Controller.extend({
    tasks: [
        {
            "title":"Clase de ingles",
            "dscp":"La proxima clase es la interaccion oral 1.",
            "date":"2019-08-29T12:00Z"
        },{
            "title":"Taller de automatas",
            "dscp":"Taller de operaciones con lenguajes",
            "date":"2019-08-19T12:00Z"
        }
    ],
    selectedTasks: null,

    actions:{
        previewTask: function(task){
            this.set('selectedTask', task);
        }
    }
});
