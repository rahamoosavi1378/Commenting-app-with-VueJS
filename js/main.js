new Vue({
    el: "#app",
    data: {
        title: "",
        comment: "",
        like: false,
        view: true,
        archive: false,
    },
    methods: {
        eraserText() {
            this.title = "";
            this.comment = "";
        },
    },
});
