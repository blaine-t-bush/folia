// Create a new Vue instance.
var app = new Vue({
    el: '#miracle-generator',
    data: {
        miracles: [
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
            generateMiracle(),
        ],
    },
    methods: {
        generateMiracle: function() {
            this.miracles = [
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
                generateMiracle(),
            ];
        }
    }
})