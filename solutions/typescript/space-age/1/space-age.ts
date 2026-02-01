const earthYearInSeconds = 31557600;
const mercuryYearOnEarth = 0.2408467;
const venusYearOnEarth = 0.61519726;
const marsYearOnEarth = 1.8808158;
const jupiterYearOnEarth = 11.862615;
const saturnYearOnEarth = 29.447498;
const uranusYearOnEarth = 84.016846;
const neptuneYearOnEarth = 164.79132;

class SpaceAge {
    readonly seconds: number;
    constructor(sec: number) {
      this.seconds = sec;
    }

    onEarth = () => this.seconds / earthYearInSeconds;
    onMercury = () => this.onEarth() / mercuryYearOnEarth;
    onVenus = () => this.onEarth() / venusYearOnEarth;
    onMars = () => this.onEarth() / marsYearOnEarth;
    onJupiter = () => this.onEarth() / jupiterYearOnEarth;
    onSaturn = () => this.onEarth() / saturnYearOnEarth;
    onUranus = () => this.onEarth() / uranusYearOnEarth;
    onNeptune = () => this.onEarth() / neptuneYearOnEarth;
  }
  
  export default SpaceAge
  