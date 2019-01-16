function age(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  // let month = today.getMonth() - birthDate.getMonth();
  return age;
}

export { age };
