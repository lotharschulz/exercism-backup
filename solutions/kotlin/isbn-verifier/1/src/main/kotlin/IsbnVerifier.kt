class IsbnVerifier {
    private val ISBNLength = 10
    fun isValid(number: String): Boolean {
        val normalizedNumber = number.filter { it.isLetterOrDigit() }
        return when {
            normalizedNumber.length != ISBNLength -> false
            !normalizedNumber.containsValidISBNDigits() -> false
            else -> verifyISBNItems(normalizedNumber)
        }
    }

    private fun verifyISBNItems(normalizedNumber: String): Boolean =
        (0 until 10).fold(0) { acc, digit ->
            when {
                digit == ISBNLength - 1 && normalizedNumber[digit] == 'X' -> acc + 10 * (ISBNLength - digit)
                else -> acc + (normalizedNumber[digit].code - 48) * (ISBNLength - digit)
            }
        }.rem(11) == 0
}

// https://regex101.com/r/yeFrD0/1
private val ISBNDigits = """^\d{9}[\d|X]$""".toRegex();
private fun String.containsValidISBNDigits(): Boolean = ISBNDigits.containsMatchIn( this )
