export const buildTower = (num) => {
  const floors = [];
  for (let i = 0; i < num; i++) {
    const floor = `${' '.repeat(num - i - 1)}${'*'.repeat(i * 2 + 1)}${' '.repeat(num - i - 1)}`
    floors.push(floor)
  }
  console.log(floors)
  return floors;
}