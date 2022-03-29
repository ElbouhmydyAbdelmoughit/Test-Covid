let qst = [
    {
        title: { //0
            fr: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?", //fr
            ar: "" //ar
        },
        type: 0, //question type
        data: { //answer config
            1: { //value : text
                fr: "OUI",
                ar: "",
                _next : 1, //next question for this answer
                icon:'fa-solid fa-check'
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 2,
                icon:'fa-solid fa-xmark'
            },
            2: {
                fr: "NE SAIT PAS",
                ar: "",
                _next : 1,
                // icon:''msqmslqs
            }
        },
        answer : null // null. is set at runtime
    },
    {
        title: { //1
            fr: "Quelle est votre température ?",
            ar: ""
        },
        type: 1,
        data: {
            text: {
                fr: "°C",
                ar: "°C",
                _next : 2
            },
            min: 35,
            max: 40
        },
        answer : null
    },
    {
        title: { //2
            fr: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 3
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 3
            }
        },
        answer : null
    },
    {
        title: { //3
            fr: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 4
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 4
            }
        },
        answer : null
    },
    {
        title: { //4
            fr: "Avez-vous un mal de gorge apparu ces derniers jours ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 5
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 5
            }
        },
        answer : null
    },
    {
        title: { //5
            fr: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 6
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 6
            }
        },
        answer : null
    },
    {
        title: { //6
            fr: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 7
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 8
            }
        },
        answer : null
    },
    {
        title: { //7
            fr: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 8
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 8
            }
        },
        answer : null
    },
    {
        title: { //8
            fr: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24hr?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 9
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 9
            }
        },
        answer : null
    },
    {
        title: { //9
            fr: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 10
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 10
            }
        },
        answer : null
    },
    {
        title: { //10
            fr: "Comment vous sentez-vous ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "Bien",
                ar: "",
                _next : 11
            },
            2: {
                fr: "Assez bien",
                ar: "",
                _next : 11
            },
            3: {
                fr: "Mal",
                ar: "",
                _next : 11
            },
            4: {
                fr: "Très mal",
                ar: "",
                _next : 11
            }
        },
        answer : null
    },
    {
        title: { //11
            fr: "Avez-vous d’autre symptôme ?",
            ar: ""
        },
        type: 2,
        data: {
            text: {
                fr: "symptôme",
                ar: "",
                _next : 12
            }
        },
        answer : null
    },
    {
        title: { //12
            fr: "Quel est votre âge ?",
            ar: ""
        },
        type: 1,
        data: {
            text: {
                fr: "âge",
                ar: "",
                _next : 13
            },
            min: 0,
            max: 120
        },
        answer : null
    },
    {
        title: { //13
            fr: "Quel est votre poids ? ",
            ar: ""
        },
        type: 1,
        data: {
            text: {
                fr: "kg",
                ar: "",
                _next : 14
            },
            min: 20,
            max: 200
        },
        answer : null
    },
    {
        title: { //14
            fr: "Quel est votre taille ? ",
            ar: ""
        },
        type: 1,
        data: {
            text: {
                fr: "cm",
                ar: "",
                _next : 15
            },
            min: 50,
            max: 200
        },
        answer : null
    },
    {
        title: { //15
            fr: " Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 16
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 16
            },
            2: {
                fr: "Ne sait pas",
                ar: "",
                _next : 16
            }
        },
        answer : null
    },
    {
        title: { //16
            fr: "Êtes-vous diabétique ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 17
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 17
            }
        },
        answer : null
    },
    {
        title: { //17
            fr: "Avez-vous ou avez-vous eu un cancer ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 18
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 18
            }
        },
        answer : null
    },
    {
        title: { //18
            fr: " Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 19
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 19
            }
        },
        answer : null
    },
    {
        title: { //19
            fr: " Avez-vous une insuffisance rénale chronique dialysée ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 20
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 20
            }
        },
        answer : null
    },
    {
        title: { //20
            fr: " Avez-vous une maladie chronique du foie ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 21
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 21
            }
        },
        answer : null
    },
    {
        title: { //21
            fr: " Êtes-vous enceinte ?",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 22
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 22
            },
            2: {
                fr: "MALE",
                ar: "",
                _next : 22
            }
        },
        answer : null
    },
    {
        title: { //22
            fr: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : 23
            },
            0: {
                fr: "NON",
                ar: "",
                _next : 23
            },
            2: {
                fr: "NE SAIT PAS",
                ar: "",
                _next : 23
            }
        },
        answer : null
    },
    {
        title: { //23
            fr: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
            ar: ""
        },
        type: 0,
        data: {
            1: {
                fr: "OUI",
                ar: "",
                _next : null
            },
            0: {
                fr: "NON",
                ar: "",
                _next : null
            },
            2: {
                fr: "NE SAIT PAS",
                ar: "",
                _next : null
            }
        },
        answer : null
    }];

let remaining=0;
let newdata=qst.map((q)=>{
    if(q.type===0){
        const keys =Object.keys(q.data);
        keys.forEach((k)=>{
            if(q.data[k].fr==="OUI"){
                q.data[k].icon="fa-solid fa-check";
            }else if(q.data[k].fr==="NON"){
                q.data[k].icon="fa-solid fa-xmark";
            }else if(q.data[k].fr==="MALE"){
                q.data[k].icon="fa-solid fa-person";
            }else if(q.data[k].fr.toLowerCase()==="NE SAIT PAS".toLowerCase()){
                q.data[k].icon="fa-solid fa-face-meh-blank";
            }else if(q.data[k].fr.toLowerCase()==="Bien".toLowerCase()){
                q.data[k].icon="fa-solid fa-face-laugh";
            }else
            if(q.data[k].fr.toLowerCase()==="Assez bien".toLowerCase()){
                q.data[k].icon="fa-solid fa-face-smile-beam";
            }else
            if(q.data[k].fr.toLowerCase()==="Mal".toLowerCase()){
                q.data[k].icon="fa-solid fa-face-frown";
            }else
            if(q.data[k].fr.toLowerCase()==="Très mal".toLowerCase()){
                q.data[k].icon="fa-solid fa-face-dizzy";
            }else
            {
                remaining++;
                q.data[k].icon="not set";
                console.log(q.data[k].fr);
            }
        });
    }
    return q;
})
//console.log("remaining : "+remaining);
let json=JSON.stringify(newdata,null,"\t");
//let newJson=json.replaceAll(/"(\w+)"\:/g,"$2\:");
//console.log(newJson);
console.log(json.replace(/"(\w+)"\:/g,"$1:"));