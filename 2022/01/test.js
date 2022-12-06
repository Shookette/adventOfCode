const { readFile } = require('fs/promises');
const { join } = require('path');

elfCountingCalorieFunction = (elfSnacks) => elfSnacks.reduce((total, snack) => total + snack, 0)

async function read(filename) {
  const buffer = await readFile(join(__dirname, filename)); 
  return buffer.toString().trim();
}

describe("Calorie Couting", () => {
  it("should return the max quantity of snack's calories for an elf", () => {
    // arrange
    const elfSnacks = [1000, 2000, 3000];

    // act
    const returnValue = elfCountingCalorieFunction(elfSnacks)

    // assert
    expect(returnValue).toEqual(6000)
  })

  it("should open a test file", async () => {
    // arrange
    const filename = "./toto";

    // act
    const returnValue = await read(filename);

    // assert
    expect(typeof returnValue).toBe('string')
    expect(returnValue).toEqual('toto')
  })


})
