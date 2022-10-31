interface Vehicle {
  name: String;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name is ${vehicle.name}`),
    console.log(`Year is ${vehicle.year}`),
    console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
