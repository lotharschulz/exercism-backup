const ResistorColors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

export class ResistorColor {
  constructor(
    private colors: string[]
  ) {
    if (colors.length < 2) throw "At least two colors need to be present"
  }
  value = (): number => {
    const [firstColor, secondColor] = this.colors
    const firstColorValue = ResistorColors.indexOf(firstColor)
    const secondColorValue = ResistorColors.indexOf(secondColor)
    return 10 * firstColorValue + secondColorValue
  }
}
