class Vehicles {
  drive(): void {
    console.log('we made it');
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicles();

// vehicle.drive();
// vehicle.honk();

class Car extends Vehicles {
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

const car = new Car();
car.startDrive();
