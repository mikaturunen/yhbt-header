Polymer({
    is: "yhbt-header",
    properties: {
        user: {
            type: Object,
            notify: true,
            observer: "userChanged"
        }
    },
    userChanged: function (a, b, c) {
        console.log("user changed", a, b, c);
    },
    loggedIn: function (element, detail, sender) {
        console.log("test", element, detail, sender);
    }
});
