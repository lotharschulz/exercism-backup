enum Responses {
  silent = "Fine. Be that way!",
  question = "Sure.",
  yelling = "Whoa, chill out!",
  yellingQuestion = "Calm down, I know what I'm doing!",
  default = "Whatever."
};

class Bob {
  hey(input: string): Responses {
    const message = input.trim();
    if (Bob.noContent(message)) return Responses.silent;
    if (Bob.isYellingQuestion(message)) return Responses.yellingQuestion;
    if (Bob.isYelling(message)) return Responses.yelling;
    if (Bob.isQuestion(message)) return Responses.question;
    return Responses.default;
  }

  private static noContent = (input: string): boolean => input === ""
  private static isQuestion = (input: string): boolean => input.endsWith('?')
  private static isYelling = (input: string): boolean => /[A-Z]+/.test(input) && input.toUpperCase() === input
  private static isYellingQuestion = (input: string): boolean => Bob.isYelling(input) && Bob.isQuestion(input)
}

export default Bob
