// const Api = (() => {

//     const getInitial = () => {
//         return fetch("./initial.json").then((res) => res.json())
//     }
//     return { getInitial }
// })()

const View = (() => {

    const domSelector = {
        hole_container: document.querySelector("#hole_container"),
        restart: document.querySelector("#restart"),
        remain: document.querySelector("#remain")
    }
    //create template with array (successful)
    const createTemp = (dataArr) => {
        console.log(dataArr)
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

    const render = (ele, template) => {
        ele.innerHTML = template
        console.log("success")
    }

    return {
        domSelector,
        createTemp,
        render
    }
})()

const Model = ((view) => {
    const { createTemp, render, domSelector } = view

    class State {
        constructor() {
            this._dataList = []
        }

        get dataList() {
            return this._dataList
        }

        set dataList(newList) {
            this._dataList = newList
            const temp = createTemp(this._dataList)
            render(domSelector.hole_container, temp)
        }
    }
    return {
        State,
        createTemp,
        render
    }
})(View)

const Controller = ((view, model) => {
    const { render, domSelector } = view
    const { State } = model
    // const { getInitial } = api
    const state = new State()
    let time = 0

    //hit the mole
    // domSelector.hole_container.addEventListener('click', (event) => {

    // })

    // // //reset 
    domSelector.restart.addEventListener('click', (event) => {
        time = 30
        state.dataList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
    })

    //generate a new mole
    const setTimer = () => {
        let count = 0
        for (let i = 0; i < state.dataList.length; i++) {
            if (state.dataList[i] === 1) {
                count += 1;
            }
        }
        if (count < 3) {
            let index = Math.floor(Math.random() * 12);
            while (state.dataList[index] == 1) {
                index = Math.floor(Math.random() * 12);
            }
            state.dataList[index] = 1
        }
        if (time > 0){
            time -= 1
        }else{
            clearInterval(setTime)
        }
        
        render(domSelector.remain, `Time Left ${time}`)
    }
    //Get the initail array with no mole
    const bootstrap = () => {
        time = 30;
        state.dataList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // getInitial().then(
        //     (res) => {
        //         state.dataList = res.initial_hole
        //         time = 30;
        //     }
        // )
    }
    return { bootstrap, setTimer }
})(View, Model)

Controller.bootstrap()
//Trigger the function of generate moles in Controller
const setTime = setInterval(() => {
    Controller.setTimer()
}, 1000)




// const tmp = View.createTemp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
// console.log(tmp)
// View.render(View.domSelector.hole_container, tmp)



