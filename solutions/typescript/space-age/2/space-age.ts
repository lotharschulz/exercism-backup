enum PlanetRotations {
  earthYearInSeconds = 31557600,
  mercuryYearOnEarth = 0.2408467,
  venusYearOnEarth = 0.61519726,
  marsYearOnEarth = 1.8808158,
  jupiterYearOnEarth = 11.862615,
  saturnYearOnEarth = 29.447498,
  uranusYearOnEarth = 84.016846,
  neptuneYearOnEarth = 164.79132
}

const decimalPlaces = 2;
const factorBase = 10;

const roundTo = function(num: number, places: number) {
  if (places < 0) {
    throw new Error("negative precision not supported");
  }
  const factor = factorBase ** places;
  return Math.round(num * factor) / factor;
};

class SpaceAge {
    constructor(readonly seconds: number) {}

    onEarth = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds, decimalPlaces);
    onMercury = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.mercuryYearOnEarth, decimalPlaces);
    onVenus = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.venusYearOnEarth, decimalPlaces);
    onMars = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.marsYearOnEarth, decimalPlaces);
    onJupiter = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.jupiterYearOnEarth, decimalPlaces);
    onSaturn = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.saturnYearOnEarth, decimalPlaces);
    onUranus = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.uranusYearOnEarth, decimalPlaces);
    onNeptune = () => roundTo(this.seconds / PlanetRotations.earthYearInSeconds / PlanetRotations.neptuneYearOnEarth, decimalPlaces);
  }
  
  export default SpaceAge
  