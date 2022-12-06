elfCountingCalorieFunction = (elfSnacks) => elfSnacks.reduce((total, snack) => total + snack, 0)

describe("Calorie Couting", () => {
  it("should return the max quantity of snack's calories for an elf", () => {
    // arrange
    const elfSnacks = [1000, 2000, 3000];

    // act
    const returnValue = elfCountingCalorieFunction(elfSnacks)

    // assert
    expect(returnValue).toEqual(6000)
  })

  it("should return the max quantity of snack's calories for an elf", () => {
    // arrange
    const elfSnacks = [1000, 2000, 3000];

    // act
    const returnValue = max(elfSnacks)

    // assert
    expect(returnValue).toEqual(6000)
  })
})