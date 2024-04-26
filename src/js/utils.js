
export function tempsEnMilliseconds(temps) {
    const parties = temps.split(":");
    const minutes = parties[0] == "" ? 0 : parseInt(parties[0], 10);
    const secondes = parties[1] == "" ? 0 : parseInt(parties[1], 10);
    const millisecondes = parties[2] ? parseInt(parties[2], 10) : 0;
    return minutes * 60 * 1000 + secondes * 1000 + millisecondes;
}


export function tempsEnMinutes(temps){
    // Convertir en secondes
    let secondes = Math.floor((temps / 1000) % 60);
    // Convertir en minutes
    let minutes = Math.floor((temps / (1000 * 60)));

    // Ajouter un zéro devant les chiffres < 10 pour formater correctement
    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Retourner le temps formaté
    return minutes + ":" + secondes;
}