export default class Gigasecond {
  currentDate: Date
  constructor(initDate: Date) {
    this.currentDate = initDate;
  }

  date(): Date {
    return new Date(this.currentDate.valueOf() + 1000000000 * 1000)
  }

}

