class Planet {
    constructor(values) {
        if(values.name) {
            this.name = values.name;
        }

        if (values.climate) {
            this.climate = values.climate;
        }

        if(values.terrain) {
            this.terrain= values.terrain;
        }
    }
}

export default Planet;