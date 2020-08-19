function enable(){
    editor.document.designMode = "On";
}

function exec_command_1(cmd){
    editor.document.execCommand(cmd, false, null);
}

function exec_command_2(cmd, arg){
    editor.document.execCommand(cmd, true, arg);
}