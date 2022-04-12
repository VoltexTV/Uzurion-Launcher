const { config } = require('./assets/js/utils.js');
const { status } = require('minecraft-java-core');

config.info().then(async (config)  => {
    let StatusServer = (await status.StatusServer(config.ip_server, parseInt(config.port)));
    
    if(!StatusServer){
        document.querySelector(".player-connect-number").innerHTML = "Le serveur est actuellement ferme.";
        document.querySelector(".player-connect").innerHTML = "Le serveur est actuellement ferme.";
    } else {
        document.querySelector(".player-connect").innerHTML = ""
        if(StatusServer.players.online === 0){
            document.querySelector(".player-connect-number").innerHTML = `IP serveur : play.rizvolution.be`;
            document.querySelector(".player-connect").innerHTML = `IP serveur : play.rizvolution.be`;
        } else if (StatusServer.players.online === 1){
            document.querySelector(".player-connect-number").innerHTML = `IP serveur : play.rizvolution.be`;
            head(StatusServer.players)      
        } else {
            document.querySelector(".player-connect-number").innerHTML = `IP serveur : play.rizvolution.be`;
            head(StatusServer.players)
        }
    }
})


function head(StatusServer) {
    if (!!StatusServer.sample) {
        StatusServer.sample.forEach(element => {
            document.querySelector(".player-connect").innerHTML += `<div><img class="users" src="https://mc-heads.net/head/${element.name}"><b class="users"> ${element.name}</b></div>`      
        });
    } else {
        document.querySelector(".player-connect").innerHTML += `<div><b class="users">Indisponible...</b></div>`
    }
}
