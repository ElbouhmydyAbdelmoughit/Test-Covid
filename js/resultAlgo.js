const getFactGravMin=(symptomps)=>{
    let fact=0;
    if(symptomps.feverDeg>=39) fact++;
    if(symptomps.anorexia) fact++;
    if(symptomps.disconfort) fact ++;
    return fact;
}
const getFactGravMaj=(symptomps)=>{
    let fact=0;
    if(symptomps.dyspanea) fact++;
    if(symptomps.anorexia) fact++;
    if(symptomps.feverDeg<=35.4) fact++;
    return fact;

};
const getPronoFact=(poorPronoFact)=>{
    if (poorPronoFact.age >= 70 || poorPronoFact.imc >= 30 || poorPronoFact.pregnancy || poorPronoFact.breathingIllness || poorPronoFact.cancer || poorPronoFact.chronicLiverDisease
        || poorPronoFact.chronicRenalFailure || poorPronoFact.diabetes || poorPronoFact.heartDisease || poorPronoFact.immuneSystemDisease || poorPronoFact.immunosuppressiveTherapy) {
        return true;
    } else {
        return false;
    }

};

/**
 *
 * @param questions questions and answers object
 * @returns string representing the messag eto show to the user based on the given questions
 */
const getResult=(questions)=>{
    const OUI=1,NON=0,JSP=2;
    const symptoms={
        fever:questions[0].answer==OUI || questions[0].answer==JSP,
        feverDeg:questions[1].answer,
        cough:questions[2].answer==OUI,
        muscularPain:questions[3].answer==OUI,
        soreThroat:questions[4].answer==OUI,
        diarrhea:questions[5].answer==OUI,
        tiredness:questions[6].answer==OUI,
        dyspanea:questions[18].answer==OUI ||questions[9].answer==OUI,
        //
        anorexia:questions[8].answer==OUI,
        disconfort:questions[10].answer==questions[10].data[3] ||questions[10].answer==questions[10].data[4],
    };

    const poorPronoFact={
        imc: questions[13].answer/Math.pow(questions[14].answer,2), // poids(kg)/taille^2
        heartDisease: questions[15].answer==OUI,
        diabetes: questions[16].answer==OUI,
        cancer: questions[17].answer==OUI,
        breathingIllness: questions[18].answer==OUI,
        chronicRenalFailure: questions[19].answer==OUI,
        chronicLiverDisease: questions[20].answer==OUI,
        pregnancy: questions[21].answer==OUI,
        immuneSystemDisease: questions[22].answer==OUI,
        immunosuppressiveTherapy: questions[23].answer==OUI,
    }

    const factGravMin=getFactGravMin(symptoms);
    const factGravMaj=getFactGravMaj(symptoms);
    const hasPronosticFactor=getPronoFact(poorPronoFact);


    let err = {
        sick : {
            text : 'Tu est malade !',
            color : '#B22222'
        },
        not_sick : {
            text : 'Tu n\'est pas malade',
            color : '#026534'
        }
    }

    let msg = {
        title : null,
        message : null
    }

    if (symptoms.fever || (symptoms.cough && symptoms.soreThroat) || (symptoms.cough && symptoms.muscularPain) || (symptoms.fever && symptoms.diarrhea)) {
        if (factGravMaj > 0) {
            msg.title = err.sick;
            msg.message = 'appel 141';
        } else if (!hasPronosticFactor) {
            if (poorPronoFact.age < 50 && factGravMin === 0) {
                msg.title = err.sick;
                msg.message = 'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes';
            }
            if (((poorPronoFact.age > 50 && poorPronoFact.age < 70) && factGravMin === 0) || factGravMin > 0) {
                msg.title = err.sick;
                msg.message = 'téléconsultation ou médecin généraliste ou visite à domicile';
            }
        } else {
            if (factGravMin <= 1) {
                msg.title = err.sick;
                msg.message = 'téléconsultation ou médecin généraliste ou visite à domicile';
            } else {
                msg.title = err.sick;
                msg.message = 'appel 141';
            }
        }
    }
    else if (symptoms.fever && symptoms.cough) {
        if (factGravMaj > 0) {
            msg.title = err.sick;
            msg.message = 'appel 141';
        } else if (!hasPronosticFactor) {
            msg.title = err.sick;
            msg.message = "téléconsultation ou médecin généraliste ou visite à domicile";
        } else {
            if (factGravMin <= 1) {
                msg.title = err.sick;
            msg.message = "téléconsultation ou médecin généraliste ou visite à domicile";
            } else {
                msg.title = err.sick;
            msg.message = 'appel 141';
            }
        }
    }
    else if (symptoms.fever || symptoms.cough || symptoms.soreThroat || symptoms.muscularPain) {
        if (factGravMaj === 0 && factGravMin === 0) {
            start();
            stop();
            msg.title = err.not_sick;
            msg.message = 'Votre situation ne relève probablement pas du Covid-19.';
        } else if (factGravMin > 0 || factGravMaj > 0 || hasPronosticFactor) {
            start();
            stop();
            msg.title = err.not_sick;
            msg.message = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141";
        }
    }
    else {
        start();
        stop();
        msg.title = err.not_sick;
        msg.message = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.';
    }
    return msg;
}


