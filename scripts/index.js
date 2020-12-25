function copyUPI() {
    let copyText = "justadrop@ybl";
    
    // copyText.select();
    // copyText.setSelectionRange(0, 99999)
    // document.execCommand("copy");

    let dummyComponent = document.createElement("input");
    dummyComponent.style.display = 'none';
    document.body.appendChild(dummyComponent);

    dummyComponent.setAttribute("id", "dummy_id");
    dummyComponent.getElementById("dummy_id").value=copyText;
    dummyComponent.select();
    dummyComponent.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.body.removeChild(dummyComponent);
    
}