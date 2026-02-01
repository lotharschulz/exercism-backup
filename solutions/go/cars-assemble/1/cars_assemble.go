package cars

const Ten = 10
const Hundred = 100
const Tenthousand = Ten * Ten * Hundred
const NinetyFiveK = 95000

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * successRate / Hundred
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int( CalculateWorkingCarsPerHour(productionRate, successRate) / 60 )
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	return uint( carsCount/Ten*NinetyFiveK + carsCount%Ten*Tenthousand )
}
