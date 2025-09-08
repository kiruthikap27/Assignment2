/**
 * print the numbers from 1 to 100 with the interval of 10
 */

const interval = 10;

function getInterval() {
   let num=[];
    for (let i=1;i<=100;i+=interval) {
        num.push(i)
    }
    return num
}

const printNumber = getInterval()
console.log('print the numbers from 1 to 100 with the interval of 10',printNumber)

/**
 * print the number from 10 to 1
 */

function getNumber(){
    let num=[];
    for (let i=10;i>=1;i--){
        num.push(i)
    }
    return num
}
console.log("print the number from 10 to 1",getNumber())

/**
 * print the multiple of 2 until 10
 */
function multipleOfValue(multiplyNum){
    let num=[];
   for (i=1;i<=5;i++){
    num.push(i*multiplyNum)
 }
 return num

}
console.log("print the multiple of 2 until 10",multipleOfValue(2))


/**
 * print the number from 100 to 1 with the difference of 10.
 */
function getSubInterval() {
   let num=[];
    for (let i=100;i>=1;i=i-10) {
        num.push(i)
    }
    return num
}
console.log('print the number from 100 to 1 with the difference of 10',getSubInterval())



/**
 * write a function to print the eligble, 
 * Not eligble voters separately from the list of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. 
 * Note: print invalid if the voter age is 0.
 */

function getVoters(){
    const age =  [18,17,16,15,10,8,7,9,35,40,86,75,0]
    let eligibleVoters=[]
    let nonEligibleVoters=[]

    for(i=0;i<age?.length;i++){
        let currentAge = age[i]
        if(currentAge===0){
            console.log(`Invalid age is ${currentAge}`)
        }else if(currentAge>=18){
            eligibleVoters.push(currentAge)
        } else {
            nonEligibleVoters.push(currentAge)
        }
    }
    return {
        eligibleVoters,nonEligibleVoters
    }
}
const voters = getVoters()
console.log('test',{eligibleVoters:voters?.eligibleVoters,nonEligibleVoters:voters?.nonEligibleVoters})

