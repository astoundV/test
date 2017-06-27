    function GreatObjectCreator() {
        this.readValues = (prop1, prop2) =>{
            this[prop1] = prop1;
            this[prop2] = prop2;
        };

        this.sum = (prop1, prop2) => prop1 + prop2;
        this.mul = (prop1, prop2) => prop1 * prop2;
    }

    const greatObject = new GreatObjectCreator();

    greatObject.readValues(12,22);
    console.log(greatObject);

    console.log(greatObject.sum(1, 2));

    console.log(greatObject.mul(1, 2));