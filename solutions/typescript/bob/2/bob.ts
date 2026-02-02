class Bob {
  hey = (input: string): string => {
    const message = input.trim();

    if (Bob.noContent(message)) return "Fine. Be that way!"
    if (Bob.isLoudQuestion(message)) return "Calm down, I know what I'm doing!"
    if (Bob.isLoud(message)) return "Whoa, chill out!"
    if (Bob.isQuestion(message)) return "Sure."
    return "Whatever."
  }

  private static noContent = (input: string): boolean => input === ""
  private static isQuestion = (input: string): boolean => input.endsWith('?')
  private static isLoud = (input: string): boolean => /[A-Z]+/.test(input) && input.toUpperCase() === input
  private static isLoudQuestion = (input: string): boolean => Bob.isLoud(input) && Bob.isQuestion(input)

}

export default Bob
