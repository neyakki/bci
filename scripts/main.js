const buttons = document.querySelectorAll(".btn");
const checkboxes = document.querySelectorAll(".checkbox");
const code = document.querySelector("code");
let current_btn_active = null;

const linux_cmd = {
    Debian: "$ sudo apt update\n$ sudo apt upgrade",
    Ubuntu: "$ sudo apt update\n$ sudo apt upgrade",
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (current_btn_active) {
            current_btn_active.classList.remove("btn_active");
        }

        if (current_btn_active === event.target) {
            current_btn_active = null;
            code.innerHTML = "";
            return;
        }

        code.innerHTML = linux_cmd[event.target.textContent];

        current_btn_active = event.target;
        btn.classList.add("btn_active");
    });
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
        checkbox.classList.add("checkbox_checked");
    });
});
