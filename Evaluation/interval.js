let timer = 10

// const interval = setInterval(() => {
//     console.log(timer)

//     if (timer > 0) {
//         timer--
//     } else {
//         clearInterval(interval)
//     }

// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 4000)

const setTimer = () =>{
    return setInterval(() => {
        console.log(timer)
    
        if (timer > 0) {
            timer--
        } else {
            clearInterval(interval)
        }
    
    }, 1000)
}

const interval = setTimer()
clearInterval(interval,3000)