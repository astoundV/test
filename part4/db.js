var db = (function () {
    var data = [
        {
            name: 'Petro',
            tel: '1 301 222 222'
        },
        {
            name: 'Petro',
            tel: '1 301 222 222'
        },
        {
            name: 'Petro',
            tel: '1 301 222 222'
        },
        {
            name: 'Petro',
            tel: '1 301 222 222'
        }, {
            name: 'Petro',
            tel: '1 301 222 222'
        }, {
            name: 'Petro',
            tel: '1 301 222 222'
        }, {
            name: 'Petro',
            tel: '1 301 222 222'
        }, {
            name: 'Petro',
            tel: '1 301 222 222'
        }, {
            name: 'Petro',
            tel: '1 301 222 222'
        }
    ];

    return {
        resave: function (newData) {
            this.data = newData;
        },
        getData: function () {
            return data;
        }
    }
})();

var model = (function (DB) {
    return {
        insert: function (object) {
            DB.resave(DB.getData().push(object));
        },
        select: function () {
            console.log(DB.getData());
        },
        remove: function (index) {
            DB.resave(DB.getData().splice(index, 1));
        }
    }
})(db);

(function (MODEL) {
    MODEL.select();
    MODEL.insert({name: 'stepan', tel: '8 800 55 3535'});
    MODEL.select();
    MODEL.remove(5);
    MODEL.select();
})(model);