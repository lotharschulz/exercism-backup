export default class Words {

    count(input: String):Map<string, number> { 
        const words = input.toLowerCase().split(/[\t\n\r \s]+/gm).filter((word) => word.length !== 0)
        const wordMap = words.reduce((map, index) => 
            map.set(index, (map.get(index) || 0) + 1), new Map<string, number>() );
        return wordMap;
    } 

}