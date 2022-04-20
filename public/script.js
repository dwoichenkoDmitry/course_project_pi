const dictOfCity = {
    "Абакан": "ABA",
    "Анадырь": "DYR",
    "Анапа": "AAQ",
    "Апатиты": "WZA",
    "Архангельск": "ARH",
    "Астрахань": "ASF",
    "Балаково": "BWO",
    "Барнаул": "BAX",
    "Белгород": "EGO",
    "Белоярский": "BCX",
    "БЕРЕЗНИКИ": "WZC",
    "Благовещенск": "BQS",
    "Братск": "BTK",
    "Бугульма": "UUA",
    "Быково": "BKA",
    "Чебоксары": "CSY",
    "Челябинск": "CEK",
    "Череповец": "CEE",
    "Чита": "HTA",
    "ЕЙСК": "WZD",
    "Екатеринбург": "SVX",
    "Элиста": "ESL",
    "Евпатория": "EV",
    "Геленджик": "GDZ",
    "Грозный": "GRV",
    "ХАНТЫ-МАНСИЙСК": "WZE",
    "Инта": "INA",
    "Иркутск": "IKT",
    "Иваново": "IWA",
    "Ижевск": "IJK",
    "Калининград": "KGD",
    "Казань": "KZN",
    "Кемерово": "KEJ",
    "Керчь": "KE",
    "Хабаровск": "KHV",
    "ХИБИНЫ": "WZT",
    "Киров": "KVX",
    "Кировск": "KVK",
    "Когалым": "KGP",
    "КОЛХИ": "WZH",
    "Комсомольск-на-Амуре": "KXK",
    "КРАЙНИЙ": "WZI",
    "Краснодар": "KRR",
    "Красноярск": "KJA",
    "Курган": "KRO",
    "Курск": "KUR",
    "Липецк": "LPK",
    "Магадан": "GDX",
    "Магнитогорск": "MQF",
    "МАЙКОП": "WZJ",
    "Махачкала": "MCX",
    "Минеральные Воды": "MRV",
    "Мирный": "MJZ",
    "Москва": "MOW",
    "Мурманск": "MMK",
    "Набережные Челны": "NBC",
    "Надым": "NYM",
    "НАХИЧЕВАНЬ": "WZL",
    "Нальчик": "NAL",
    "Нарьян-Мар": "NNM",
    "НАЗРАНЬ": "IGT",
    "Нефтeюганск": "NFG",
    "Нерюнгри": "NER",
    "Нижневартовск": "NJC",
    "Нижний Новгород": "GOJ",
    "Ноябрьск": "NOJ",
    "Норильск": "NSK",
    "Великий Новгород": "GNO",
    "Новокузнецк": "NOZ",
    "Новосибирск": "OVB",
    "Новый Уренгой": "NUX",
    "НЯГАНЬ": "WZM",
    "Омск": "OMS",
    "Оренбург": "REN",
    "Орск": "OSW",
    "Пенза": "PEZ",
    "Пермь": "PEE",
    "Петропавловск-Камчатский": "PKC",
    "Петрозаводск ": "PES",
    "Певек ": "PWE",
    "Полярный ": "PYJ",
    "Пятигорск ": "PTG",
    "Радужный ": "RAT",
    "Ростов-на-Дону ": "ROV",
    "Салехард ": "SLY",
    "Самара ": "KUF",
    "Саранск ": "SKX",
    "Саратов ": "RTW",
    "Симферополь ": "SIP",
    "СЛЕПЦОВСКАЯ (ИНГУШЕТИЯ) ": "WZN",
    "Сочи / Адлер ": "AER",
    "СОКОЛ ": "WZO",
    "Санкт-Петербург ": "LED",
    "СТАРЫЙ ОСКОЛ ": "WZP",
    "Ставрополь ": "STW",
    "Стрежевой ": "SWT",
    "Сургут ": "SGC",
    "Суздаль ": "SUZ",
    "Сыктывкар ": "SCW",
    "Тикси ": "IKS",
    "Томск ": "TOF",
    "Тверь ": "TVE",
    "Тюмень ": "TJM",
    "Уфа ": "UFA",
    "Ухта ": "UCT",
    "Улан-Удэ ": "UUD",
    "Ульяновск ": "ULY",
    "Усинск ": "USK",
    "Усть-Ильимск ": "UIK",
    "Владикавказ ": "OGZ",
    "Владивосток ": "VVO",
    "Волгодонск ": "VLK",
    "Волгоград ": "VOG",
    "Вологда ": "VGD",
    "Воркута ": "VKT",
    "Воронеж ": "VOZ",
    "Якутск ": "YKS",
    "Южно-Сахалинск ": "UUS"
}



function StartDrop(){
    let startVal = document.getElementsByName("start")[0].value
    let count = 0

    if (startVal!==''){
        const splitted = startVal.split("")


        const first = splitted[0].toUpperCase()


        const rest = [...splitted]


        rest.splice(0, 1)


        startVal = [first, ...rest].join("")
    }


// John

    document.querySelector('.dropStart').innerHTML = '';
    Object.keys(dictOfCity).forEach((value, index, array)=>{
        if (value.startsWith(startVal) && count<5) {
            document.querySelector('.dropStart').innerHTML+='<div onclick="clickStart(this)" class="startElem inpElem"><p>' + value+ '</p></div>'
            count += 1;
        }
    })

    if(startVal===''){
        document.getElementsByName("start")[0].value = document.querySelector('.dropStart').innerHTML = '';

    }

}

function clickStart(e){
    document.getElementsByName("start")[0].value = e.querySelector('p').innerHTML;
    StartDrop();
}