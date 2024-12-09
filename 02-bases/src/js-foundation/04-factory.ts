type TbuildMakePerson = {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
};

const buildMakePerson = ({ getUUID, getAge }: TbuildMakePerson) => {
  return ({ name, birthdate }: { name: string; birthdate: string }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

/* const obj = { name: "John", birthdate: "1985-10-21" };

const john = buildPerson(obj);

console.log(john); */

export { buildMakePerson };
