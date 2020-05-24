class Timer {
    constructor(timerInput, playButton, pauseButton, interval){
        this.timerInput = timerInput;
        this.playButton = playButton;
        this.pauseButton = pauseButton;
        this.interval = interval;

        this.timerInput.value = "30.00";
        this.playButton.addEventListener('click', this.onPlay);
        this.pauseButton.addEventListener('click', this.onPause);
        this.timerInput.addEventListener('input', this.onTimerSet);
    }
    
    onPlay = () => {
        if(parseFloat(this.timerInput.value) === 0){
            if(confirm("Do you want to reset timer?")){
                this.reset();
            }

            return;
        }
        this.timeInterval = setInterval(() => {
            this.timerInput.value = (parseFloat(this.timerInput.value) - this.interval/1000).toFixed(2);
            if(parseFloat(this.timerInput.value) === 0){
                clearInterval(this.timeInterval);
            }
        }, this.interval)
    }

    onPause = () => {
        clearInterval(this.timeInterval);
    }

    reset = () => {
        this.timerInput.value = this.initValue || "30.00";
    }

    onTimerSet = (event) => {
        this.initValue = event.target.value;
    }
}

const input = document.querySelector('#timerInput');
const play = document.querySelector('#playButton');
const pause = document.querySelector('#pauseButton');

const timer = new Timer(input , play, pause, 10);