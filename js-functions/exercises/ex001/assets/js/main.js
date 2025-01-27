function createCalculator() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        init() {
            this.clickBtnHandler();
            this.keyPressHandler(); 
        },

        clickBtnHandler() {
            document.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains("btn-num")) this.btnToDisplay(el.innerText);
                if (el.classList.contains("btn-clear")) this.clearDisplay();
                if (el.classList.contains("btn-del")) this.deletePrevChar();
                if (el.classList.contains("btn-eq")) this.calculateResult(this.display.value);
            });
        },

        keyPressHandler() {
            document.addEventListener("keydown", (e) => {
                const key = e.key;

                // Detecta as teclas numéricas
                if ("0123456789".includes(key)) {
                    this.btnToDisplay(key);
                }

                // Detecta a tecla "Enter" para calcular o resultado
                if (key === "Enter") {
                    e.preventDefault();  // Impede o comportamento padrão (como submeter um formulário)
                    this.calculateResult(this.display.value);
                }

                // Detecta a tecla "Backspace" para apagar o último caractere
                if (key === "Backspace") {
                    this.deletePrevChar();
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = "";
        },

        deletePrevChar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculateResult(expression) {
            try {
                this.display.value = new Function('return ' + expression)();
            } catch (e) {
                this.display.value = "Erro!";
            }
        }
    };
}

const calculator = createCalculator();
calculator.init();
