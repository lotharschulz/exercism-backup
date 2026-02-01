fun transcribeToRna(dna: String): String{
    val inputList = dna.toMutableList()
    val iterate = inputList.listIterator()
    while (iterate.hasNext()) {
        val oldValue = iterate.next()
        iterate.set(swapGCAT(oldValue))
        //iterate.set(swapGCAT_alt(oldValue))
    }
    return inputList.joinToString()
}

fun swapGCAT(input: Char): Char{
    when(input){
        'C' -> return 'G'
        'G' -> return 'C'
        'T' -> return 'A'
        'A' -> return 'U'
        else -> return ' '
    }
}

fun swapGCAT_alt(input: Char): Char{
    if (input.compareTo('C') == 0) return 'G'
    if (input.compareTo('G') == 0) return 'C'
    if (input.compareTo('T') == 0) return 'A'
    if (input.compareTo('A') == 0) return 'U'
    return ' '
}