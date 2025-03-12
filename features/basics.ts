type User = {
  name: string;
  age: number;
  job?: string;
  fiber: () => string;
};

const users: User = {
  name: 'elvis',
  age: 35,
  fiber() {
    console.log('one love');
    return 'one love';
  },
};
