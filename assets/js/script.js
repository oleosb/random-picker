let textarea = document.querySelector('textarea')
let optionsContainer = document.querySelector('.options-container')

textarea.addEventListener('keyup', (e) => {
        createOption(e.target.value)

        if (e.key == "Enter") {
                e.target.value = ''

                randomPick()
        }
})

function randomPick() {
        let interval = setInterval(() => {
                let option = pickOption()

                highLight(option)

                setTimeout(() => unHighLight(option), 100)
        }, 200)

        setTimeout(() => {
                clearInterval(interval)

                let picked = pickOption()

                highLight(picked)
        }, 2500)
}

function pickOption() {
        let options = document.querySelectorAll('.option')

        return options[Math.floor(Math.random() * options.length)]
}

function highLight(option) {
        option.classList.add('highlight')
}

function unHighLight(option) {
        option.classList.remove('highlight')
}

function createOption(value) {
        let options = value.split(',').filter(option => option.trim() !== '').map(option => option.trim())
        console.log(options)

        optionsContainer.innerHTML = ''

        options.forEach(option => {
                let optionEl = document.createElement('span')
                optionEl.classList.add('option')
                optionEl.innerText = option
                optionsContainer.appendChild(optionEl)
        });
}