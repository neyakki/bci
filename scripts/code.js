export function template_code(cmd) {
    let template = "";

    if (cmd.linux) {
        template += `${linux_cmd[cmd.linux]}`;
    }

    if (cmd.code) {
        if (!cmd.linux || cmd.linux === "Debian" || cmd.linux === "Ubuntu") {
            code = code_cmd[`deb_${cmd.code}`];
        } else if (cmd.linux === "Centos") {
            code = code_cmd[`centos_${cmd.code}`];
        } else if (cmd.linux === "Redhat") {
            code = code_cmd[`redhat_${cmd.code}`];
        }
        template += code;
    }

    return template;
}

const linux_cmd = {
    Debian: "$ sudo apt update\n$ sudo apt upgrade\n",
    Ubuntu: "$ sudo apt update\n$ sudo apt upgrade\n",
};

const code_cmd = {
    deb_code: `$ sudo apt-get install wget gpg
$ wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
$ sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
$ sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
$ rm -f packages.microsoft.gpg
$ sudo apt install apt-transport-https
$ sudo apt update
$ sudo apt install code\n`,
    centos_code: {}
};
