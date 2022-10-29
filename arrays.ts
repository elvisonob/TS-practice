const carMakers: string[] = ['ford', 'toyota', 'honda'];

const cars = carMakers.map((car) => {
  return car[0];
});

// Flexible types
const importantDates = [new Date(), '2030-10-22'];
