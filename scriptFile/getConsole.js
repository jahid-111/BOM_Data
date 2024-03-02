// console.log("number One")
// const two = "number Two";


    setTimeout ( function() {
        // console.log("im late 3.5 Sec ::", two)

    },3500 )

// console.log("number three")



// ========================================================== UI GEt Data ...

    const getDataByPromt = () => {

       const userInputed = prompt("Input Any Value of Number")
        const inputedToStringToNumber = parseFloat(userInputed)

        return inputedToStringToNumber;
        // console.log(typeof inputedToStringToNumber)
    }
    
    // getDataByPromt()


    const returnUserToSum = () => {
        const userInputedNumber = getDataByPromt()
        const sum =  userInputedNumber + 250;
        console.log(sum)
    }
    // returnUserToSum()