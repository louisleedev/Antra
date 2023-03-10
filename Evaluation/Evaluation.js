const View = (() => {

    const domSelector = {
        hole_container: document.querySelector("#hole_container"),
        restart: document.querySelector("#restart"),
        remain: document.querySelector("#remain"),
        score: document.querySelector("#score")
    }
    //Create template with array
    const createTemp = (dataArr) => {
        let temp = "";
        const map = new Map();
        //Set a map to different objects
        map.set(0, '');
        map.set(1, '<img src="./mole.jpeg"/>');
        map.set(2, '<img src="./mine.jpeg"/>');
        for (let index in dataArr) {
            if (index % 4 == 0) {
                temp += `<div class="row">
                <div class="circle" id="${index}">${map.get(dataArr[index])}</div>
                `
            } else if (index % 4 == 3) {
                temp += `<div class="circle" id="${index}">${map.get(dataArr[index])}</div>
                </div>`
            } else {
                temp += `<div class="circle" id="${index}">${map.get(dataArr[index])}</div>`
            }
        }
        return temp;
    }

    const render = (ele, template) => {
        ele.innerHTML = template
    };

    return {
        domSelector,
        createTemp,
        render
    }
})()

const Model = ((view) => {
    const { createTemp, render, domSelector } = view;
    //Record the status of hole_container (Array of 12)
    class State {
        constructor() {
            this._dataList = [];
        }

        get dataList() {
            return this._dataList;
        }

        set dataList(newList) {
            this._dataList = newList;
            const temp = createTemp(this._dataList);
            render(domSelector.hole_container, temp);
        }
    }
    //Record the score get
    class scoreState {
        constructor() {
            this._score = 0;
        }
        get data() {
            return this._score;
        }
        set data(newScore) {
            this._score = newScore;
            render(domSelector.score, `Let's GOOOO!!!!, your total score: ${this._score}`);
        }
    }
    return {
        State,
        scoreState
    }
})(View)

const Controller = ((view, model) => {
    const { render, domSelector } = view;
    const { State, scoreState } = model;
    const state = new State();
    const scorestate = new scoreState();
    let time;
    let isRunning = false;//initialize the status of setInterval: not running
    let activate;
    //Start a game 
    const startInterval = () => {
        let disappearID = [];//Record the moles going to disappear
        let lastSnake = [];//Record the snake going to disappear
        //Generate moles and mines
        if (!isRunning) {
            activate = setInterval(() => {
                let count = 0;
                //Change the location of mine every 2 sec
                if (time % 2 == 0) {
                    if (lastSnake.length) {
                        state.dataList[lastSnake.pop()] = 0;
                        state.dataList = state.dataList;
                    };
                    let snake = Math.floor(Math.random() * 12);
                    while (state.dataList[snake] == 1) {
                        index = Math.floor(Math.random() * 12);
                    };
                    lastSnake.push(snake);
                    state.dataList[snake] = 2;
                    state.dataList = state.dataList;

                    if (disappearID.length > 0) {
                        let toDisappear = disappearID.splice(0, 1);
                        state.dataList[toDisappear[0]] = 0;
                        state.dataList = state.dataList;
                    };
                };
                //Count the number of moles
                for (let i = 0; i < state.dataList.length; i++) {
                    if (state.dataList[i] === 1) {
                        count += 1;
                    };
                };
                //Generate a new mole if counts is smaller than 3
                if (count < 3) {
                    let index = Math.floor(Math.random() * 12);
                    while (state.dataList[index] == 1) {
                        index = Math.floor(Math.random() * 12);
                    };
                    state.dataList[index] = 1;
                    disappearID.push(index);
                    state.dataList = state.dataList;
                };
                //Timer 
                if (time > 0) {
                    time -= 1;
                } else {
                    stopInterval();
                    render(domSelector.hole_container, `Your Score is ${scorestate.data}, Restart to Play Again`);
                };
                render(domSelector.remain, `Time Left ${time}`);
            }, 1000);
            //Record the status of setInterval
            isRunning = true;
        };
    };
    //Stop the setInterval and change the status to no running
    const stopInterval = () => {
        clearInterval(activate);
        isRunning = false;
    };

    //Hit the moles and mines
    domSelector.hole_container.addEventListener('click', (event) => {
        let index = event.target.id
        console.log(event)
        console.log(event.target)
        if (state.dataList[index] == 1) {
            state.dataList[index] = 0;
            state.dataList = state.dataList;
            scorestate.data += 1;
        } else if (state.dataList[index] == 2) {
            const failSnake = new Array(12).fill(2);
            state.dataList = failSnake;
            stopInterval();
        }
    })

    //Reset and Restart
    domSelector.restart.addEventListener('click', (event) => {
        time = 30;
        state.dataList = new Array(12).fill(0);
        scorestate.data = 0;
        //Decide the function according to the status of setInterval    
        if (!isRunning) {
            startInterval();
        } else {
            stopInterval();
            setTimeout(startInterval, 1000);
        };
    });

    //Get the initail array with no mole
    const bootstrap = () => {
        time = 30;
        state.dataList = new Array(12).fill(0);
        render(domSelector.score, `Let's GOOOO!!!!, your total score: 0`);
    };
    return { bootstrap }
})(View, Model)

Controller.bootstrap();



