var Calculator = (function () {
    return {
        add: function (a, b) {
            return a + b;
        }
    }
})();

var Calculator1 = (function (module) {
    module.sub = function (a, b) {
        return a - b;
    };

    return module;
})(Calculator);


var Calculator2 = (function (module) {
    module.lastAddResult = 0;
    module.lastSubResult = 0;

    var old_add = module.add;
    var old_sub = module.sub;

    module.add = function (a, b) {
        module.lastAddResult = old_add(a, b);
    };

    module.sub = function (a, b) {
        module.lastSubResult = old_sub(a, b);
    };

    module.add(5, 6);
    module.sub(5, 6);

    console.log(module);
})(Calculator1);
