let BotonEnviar= document.querySelector("#enviar");
let general = document.getElementById("general");

const MsgEnviado = JSON.parse(localStorage.getItem("MsgEnviado")) || {
    enviado: false
}

if (MsgEnviado.enviado) {
    general.innerHTML = `
    <h1>𝐄𝐥 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐜𝐨𝐧 é𝐱𝐢𝐭𝐨.</h1>
    <br>
    <br>
    <h1>𝐒𝐞 𝐥𝐞 𝐞𝐬𝐭𝐚𝐫á 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐢𝐞𝐧𝐝𝐨 𝐞𝐧 𝐞𝐥 𝐥𝐚𝐩𝐬𝐨 𝐝𝐞 𝐭𝐢𝐞𝐦𝐩𝐨 𝐦á𝐬 𝐜𝐨𝐫𝐭𝐨 𝐩𝐨𝐬𝐢𝐛𝐥𝐞.</h1>
    <br>
    <h1>𝐄𝐥 𝐭𝐢𝐞𝐦𝐩𝐨 𝐞𝐬𝐭𝐢𝐦𝐚𝐝𝐨 𝐝𝐞 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 𝐞𝐬 𝐝𝐞 𝟐𝟒𝐡𝐬 𝐡á𝐛𝐢𝐥𝐞𝐬.</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>𝐒𝐚𝐥𝐮𝐝𝐨𝐬 𝐜𝐨𝐫𝐝𝐢𝐚𝐥𝐞𝐬. </h1>
    <h1>-𝐁𝐮𝐬𝐭𝐨𝐬</h1>
    <button type="submit" class="login-submit btn btn-primary" id="enviar">𝐄𝐧𝐯𝐢𝐚𝐫:</button>
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