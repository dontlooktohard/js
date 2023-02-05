let person = {
    name: "franco",
    printName: function() {
        console.log(this.name);
    },
    delayedPrintName: function() {
        let self = this;
        setTimeout(function() {
            console.log(self.name);
        }, 1000);
    }
};console.log(person);