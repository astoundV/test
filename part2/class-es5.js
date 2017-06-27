function extend(Child, Parent) {
    var F = function () {
    }
    F.prototype = Parent.prototype
    var f = new F();
    for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
    Child.prototype = f;
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

function AbstractCar(weight, height) {
    this._weight = weight;
    this._height = height;
}

AbstractCar.prototype = {
    name: 'just simple car',
    info: function () {
        console.log('Name - ' + this.name + ', weight - ' + this._weight + ', height - ' + this._height);
    }
};

function miniCar(weight, height) {
    AbstractCar.call(this, weight, height);
}

extend(miniCar, AbstractCar);

var car = new miniCar(100, 200);
car.info();