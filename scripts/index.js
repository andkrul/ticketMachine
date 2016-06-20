exports.calculateMoney = function (student, adult) {
    return (student * 2 + adult * 3.8).toFixed(2);
};

exports.giveMoneyBack = function (all, pay) {
    return all - pay;
}

exports.wydaj = function(change, Nominals) {
    var oldChange = change;
    var i = 0;

    while (i < Nominals.length) {
        if (change >= Nominals[i].nominal) {

            P = Math.floor(change / Nominals[i].nominal);
            if (P <= Nominals[i].count) {
                change = Math.round(100 * (change - (Nominals[i].nominal * P))) / 100;
                $.grep(Change, function (e) { return e.nominal == Nominals[i].nominal; })[0].count = P;
            }
        }
        i++;
    }
    if (change > 0 && Nominals.length >= 2) {
        exports.wydaj(oldChange, Nominals.slice(1, Nominals.length))
    } else if (change == 0) {
        return true;
    } else {
        return false;
    }

};