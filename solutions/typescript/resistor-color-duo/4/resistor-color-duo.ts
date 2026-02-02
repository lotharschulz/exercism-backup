const ColorArray = ["black","brown","red","orange","yellow","green","blue","violet","grey","white",] as const
export type Color = typeof ColorArray[number]
// https://stackoverflow.com/a/45486495/4828993

export class ResistorColor {
  constructor(private colors: Color[]) {
    if (colors.length < 2) throw "At least two colors need to be present"
  }
  value = (): number => {
    const [firstColor, secondColor] = this.colors
    const firstColorValue = ColorArray.indexOf(firstColor)
    const secondColorValue = ColorArray.indexOf(secondColor)
    return 10 * firstColorValue + secondColorValue
  }
}
