const add = (a: number, b: number): number => {
  return a + b;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): string => {
  return weather;
};

console.log(logWeather(todaysWeather));
