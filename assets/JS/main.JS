let BotonEnviar= document.querySelector("#enviar");
let general = document.getElementById("general");

const MsgEnviado = JSON.parse(localStorage.getItem("MsgEnviado")) || {
    enviado: false
}

if (MsgEnviado.enviado) {
    general.innerHTML = `
    <h1>𝐸𝓁 𝓂𝑒𝓃𝓈𝒶𝒿𝑒 𝒽𝒶 𝓈𝒾𝒹𝑜 𝑒𝓃𝓋𝒾𝒶𝒹𝑜 𝒸𝑜𝓃 𝑒́𝓍𝒾𝓉𝑜.</h1>
    <br>
    <br>
    <h1>𝒮𝑒 𝓁𝑒 𝑒𝓈𝓉𝒶𝓇𝒶́ 𝓇𝑒𝓈𝓅𝑜𝓃𝒹𝒾𝑒𝓃𝒹𝑜 𝑒𝓃 𝑒𝓁 𝓁𝒶𝓅𝓈𝑜 𝒹𝑒 𝓉𝒾𝑒𝓂𝓅𝑜 𝓂𝒶𝓈 𝒸𝑜𝓇𝓉𝑜 𝓅𝑜𝓈𝒾𝒷𝓁𝑒.</h1>
    <br>
    <h1>𝐸𝓁 𝓉𝒾𝑒𝓂𝓅𝑜 𝑒𝓈𝓉𝒾𝓂𝒶𝒹𝑜 𝒹𝑒 𝓇𝑒𝓈𝓅𝓊𝑒𝓈𝓉𝒶 𝑒𝓈 𝒹𝑒 𝟩𝟤𝒽𝓈 𝒽𝒶𝒷𝒾𝓁𝑒𝓈.</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>𝒮𝒶𝓁𝓊𝒹𝑜𝓈 𝒸𝑜𝓇𝒹𝒾𝒶𝓁𝑒𝓈. </h1>
    <h1>-𝐵𝓊𝓈𝓉𝑜𝓈</h1>
    <button type="submit" class="login-submit btn btn-primary" id="enviar">𝐸𝓃𝓋𝒾𝒶𝓇:</button>
    `
    general.style.height="700px";
    let btnEnviarNuevoMsg = document.getElementById("enviar");
    btnEnviarNuevoMsg.onclick = (e) => {
        e.preventDefault();
        MsgEnviado.enviado = false;
        localStorage.setItem("MsgEnviado", JSON.stringify(MsgEnviado));
        window.location.reload();
    }
}

BotonEnviar.onclick = (e) => {
    MsgEnviado.enviado = true;
    localStorage.setItem("MsgEnviado", JSON.stringify(MsgEnviado));
}