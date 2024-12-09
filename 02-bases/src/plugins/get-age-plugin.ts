const getAge = (birthdate: string): number => {
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};

export { getAge };
