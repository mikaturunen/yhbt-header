
Polymer({
    /**
     * What component we are attached to.
     */
    is: "yhbt-header",

    /**
     * Explaining the properties of the component
     */
    properties: {
        user: {
            type: Object,
            notify: true,
            observer: "userChanged"
        }
    },

    userChanged: function(a: any, b: any, c: any) {
        console.log("user changed", a,b,c);
    },

    loggedIn: function(element: any, detail: any, sender: any) {
        console.log("test", element, detail, sender);
    }
});
