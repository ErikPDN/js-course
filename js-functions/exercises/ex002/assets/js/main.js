function Calculator() {
    this.display = document.querySelector(".display");

    this.init = () => {
        this.clickBtnHandler();
        this.keyPressHandler();
    }

    this.clickBtnHandler = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.toDisplay(el.innerText);
            if (el.classList.contains("btn-clear")) this.clearDisplay();
            if (el.classList.contains("btn-del")) this.deletePrevChar();
            if (el.classList.contains("btn-eq")) this.calculateResult(this.display.value);
        })
    }

    this.keyPressHandler = () => {
        document.addEventListener("keydown", (e) => {
            const el = e.key;

            if ("0123456789".includes(el)) {
                this.toDisplay(el);
            }

            if (el === "Enter") {
                e.preventDefault();
                this.calculateResult(this.display.value);
            }

            if (el === "Backspace") {
                this.deletePrevChar();
            }
        })
    }

   this.toDisplay = (value) => {
        this.display.value += value;
   }

   this.clearDisplay = () => {
        this.display.value = "";
   }

   this.deletePrevChar = () => {
        this.display.value = this.display.value.slice(0, -1);
   }

   this.calculateResult = (exp) => {
        try {
            this.display.value = new Function('return ' + exp)();
        } catch (e) {
            this.display.value = "Erro!";
        }
   }
}

const calculator = new Calculator();
calculator.init();