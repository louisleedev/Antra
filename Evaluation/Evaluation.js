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
        remain: document.querySelector("#remain"),
        score : document.querySelector("#score")
    }
    //create template with array (successful)
    const createTemp = (dataArr) => {
        console.log(dataArr)
        let temp = ""
        for (let index in dataArr) {
            if (index % 4 == 0) {
                temp += `<div class="row">
                <div class="circle" id="${index}">${dataArr[index] && '<img src="./mole.jpeg"/>'}</div>
                `
            } else if (index % 4 == 3) {
                temp += `<div class="circle" id="${index}">${dataArr[index] && '<img src="./mole.jpeg"/>'}</div>
                </div>`
            } else {
                temp += `<div class="circle" id="${index}">${dataArr[index] && '<img src="./mole.jpeg"/>'}</div>`
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
    class scoreState {
        constructor() {
            this._score = 0
        }

        get data() {
            return this._score
        }

        set data(newScore) {
            this._score = newScore
            render(domSelector.score, `Let's GOOOO!!!!, your total score: ${this._score}`)
        }
    }
    return {
        State,
        scoreState,
        createTemp,
        render
    }
})(View)

const Controller = ((view, model) => {
    const { render, domSelector } = view
    const { State, scoreState} = model
    // const { getInitial } = api
    const state = new State()
    const scorestate = new scoreState()
    let time = 0

    //hit the mole
    domSelector.hole_container.addEventListener('click', (event) => {
        let index = event.target.id
        if (state.dataList[index] == 1){
            state.dataList[index] = 0 
            let newList = state.dataList
            state.dataList = newList
            scorestate.data += 1
        }
    })

    //reset 
    domSelector.restart.addEventListener('click', (event) => {
        time = 30
        state.dataList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        scorestate.data = 0
        activate()
    })

    //generate a new mole
    const activate = () => setInterval(()=>{
            let count = 0
            for (let i = 0; i < state.dataList.length; i++) {
                if (state.dataList[i] === 1) {
                    count += 1;
                }
            }
            console.log(count)
            if (count < 3) {
                let index = Math.floor(Math.random() * 12);
                while (state.dataList[index] == 1) {
                    index = Math.floor(Math.random() * 12);
                }
                state.dataList[index] = 1 
                let newList = state.dataList
                state.dataList = newList
            }
            if (time > 0){
                time -= 1
            }else{
                clearInterval(activate)
                render(domSelector.hole_container, `Your Score is ${scorestate.data}, Restart to Play Again`)
            }
            render(domSelector.remain, `Time Left ${time}`)
        }, 1000) 
    //Get the initail array with no mole
    const bootstrap = () => {
        time = 30;
        state.dataList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        render(domSelector.score, `Let's GOOOO!!!!, your total score:0`)
    }
    return { bootstrap }
})(View, Model)

Controller.bootstrap()
//Trigger the function of generate moles in Controller
// const setTime = setInterval(() => {
//     Controller.setTimer()
// }, 1000)




// const tmp = View.createTemp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
// console.log(tmp)
// View.render(View.domSelector.hole_container, tmp)



