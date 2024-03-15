document.oncontextmenu = () => {
    return false
}

document.onkeydown = e =>{
    if(e.key == "F12"){
        return false
    }

    if(e.ctrlKey && e.ctrlKey == 'u'){
        return false
    }
}

