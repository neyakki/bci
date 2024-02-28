import { template_code } from "./code.js";

const buttons = document.querySelectorAll(".btn");
const checkboxes = document.querySelectorAll(".checkbox");
const code = document.querySelector("code");
let current_btn_active = null;

let cmd = {
    linux: null,
    code: null,
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (current_btn_active) {
            current_btn_active.classList.remove("btn_active");
        }

        if (current_btn_active === event.target) {
            current_btn_active = null;
            cmd.linux = null;
            code.innerHTML = template_code(cmd);
            return;
        }

        cmd.linux = event.target.textContent;

        code.innerHTML = template_code(cmd);

        current_btn_active = event.target;
        btn.classList.add("btn_active");
    });
});

checkboxes.forEach((checkbox) => {
    // В данном случае надо использовать change, т.к. click по label вызывает клик по чекбоксу
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked === false) {
            cmd.code = null;

            code.innerHTML = template_code(cmd);
            return;
        }

        cmd.code = event.target.name;

        code.innerHTML = template_code(cmd);
    });
});
