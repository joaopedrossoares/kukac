export let isPalindrome = (value: number) => {
    let str:string = value.toString();
    return str.split('').reverse().join('') === str;
};

export let palindromeBetweenRange = (min: number, max: number) => 
{ 
    let output: number[] = [];

    for (let value:number = min, arrIndex:number = 0; value <= max; value++) {
        if (isPalindrome(value)) {
            output[arrIndex] = value;
            arrIndex++;
        }
    } 
    
    return output;
} 