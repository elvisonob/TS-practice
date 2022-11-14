class Vehicles {
  constructor(public color: string) {}
  drive(): void {
    console.log('we made it');
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicles('green');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.honk();

class Car extends Vehicles {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom');
  }

  startDrive(): void {
    this.drive();
  }

  honk(): void {
    console.log('one love');
  }
}

const car = new Car(4, 'red');
car.startDrive();
