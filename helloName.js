const helloNameMk1 = (name) => {
  if (!name) return "Hello, World!";
  const capitalisedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${capitalisedName}!`;
}

const helloName = (name) => {
  return `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : "World"}!`;
}

export default helloName;