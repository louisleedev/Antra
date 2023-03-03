// fetch("initial.json").then((res) => res.json()).then(console.log(res.initial_hole))
// // console.log(test)

const createTemp = (dataArr) => {
    let temp = ""
    for (let index in dataArr) {
        if (index % 4 == 0) {
            temp += `<div class="row">
            <div class="circle" id="hit_${index}">${index}</div>
            `
        } else if (index % 4 == 3) {
            temp += `<div class="circle" id="hit_${index}">${index}</div>
            </div>`
        } else {
            temp += `<div class="circle" id="hit_${index}">${index}</div>`
        }
    }
    return temp
}

console.log(createTemp([0,0,0,0,0,0,0,0,0,0,0,0,0]))