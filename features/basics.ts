type User = {
  name: string;
  age: number;
  job: string;
  fiber: () => string;
};

const users: User = {
  name: 'elvis',
  age: 34,
  job: 'Software developer',
  fiber() {
    console.log('one love');
    return 'one love';
  },
};
