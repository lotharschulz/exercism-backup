enum responses {
  silent = "Fine. Be that way!",
  question = "Sure.",
  yelling = "Whoa, chill out!",
  yellingQuestion = "Calm down, I know what I'm doing!",
  default = "Whatever."
};

class Bob {
  hey(input: string): responses {
    const message = input.trim();
    if (Bob.noContent(message)) return responses.silent;
    if (Bob.isYellingQuestion(message)) return responses.yellingQuestion;
    if (Bob.isYelling(message)) return responses.yelling;
    if (Bob.isQuestion(message)) return responses.question;
    return responses.default;
  }

  private static noContent = (input: string): boolean => input === ""
  private static isQuestion = (input: string): boolean => input.endsWith('?')
  private static isYelling = (input: string): boolean => /[A-Z]+/.test(input) && input.toUpperCase() === input
  private static isYellingQuestion = (input: string): boolean => Bob.isYelling(input) && Bob.isQuestion(input)
}

export default Bob
