// Instantiate a new hireling on page load.
var hireling = new Hireling;

// Tie the hireling object to a Vue instance.
var app = new Vue({
    el: '#hireling-generator',
    data: hireling,
    methods: {
        generateHireling: function() {
            hireling.generate();
        }
    }
})