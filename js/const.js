/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "In which year was the Ethereum blockchain launched?t",
        ["2015"],
        [
            "this.score.taldarim++",
        ]
    ],
    [
        "Who is the founder of Ethereum?",
        ["Vitalik Buterin"],
        [
            "this.score.protoss++; this.score.terran--",
        ]
    ],
    [
        "What programming language is used to write smart contracts in Ethereum?",
        ["Solidity"],
        [
            "this.score.protoss--",
        ]
    ],

    [
        "What is 'gas' in the Ethereum network?",
        ["A unit of measurement for paying for operations in the Ethereum network."],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--",
        ]
    ],
    [
        "What is the name of the consensus protocol used in Ethereum 2.0 to transition to the Proof of Stake mechanism?",
        ["Casper"],
        [
            "this.score.terran++",
        ]
    ],
    [
        "What is the cryptocurrency that serves as 'gas' in the Ethereum network?",
        ["Ether (ETH)"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--", 
        ]
    ],
    [
        "What is ERC-20?",
        ["The Ethereum token standard that defines the interface for issuing tokens on the Ethereum blockchain."],
        [
            "this.score.zerg++; this.score.protoss--", 
        ]
    ],
    [
        "What is the mechanism called that allows changing the Ethereum protocol without a hard fork?   ",
        ["Ethereum Improvement Proposals (EIPs)"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
        ]
    ],
    [
        "What protocol is used for communication between smart contracts in Ethereum?",
        ["InterPlanetary File System (IPFS)."],
        [
            "this.score.terran++", 
        ]
    ],
    [
        "What cryptocurrency was the first one created on the Ethereum blockchain?",
        ["Augur (REP)"],
        [
            "this.score.primal++; this.score.protoss--", 
        ]
    ],
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Зерг",
        description: "Вы истинный зерг, чистота эссенции и служение во славу роя это ваше предназначение. Ваша стая захватила множество миров и теперь рой стал ещё сильней. Королева Клинков довольна вами, продолжайте и дальше служить ей. Вы уважаете протоссов, но не считаете что у них есть шанс сохраниться как вид. Ведь они не могут эволюционировать и в масштабах вселенной их раса обречена на вымирание. Тераны это биомасса, их эссенция может быть ассимилирована и использована во благо роя.",
        quote1: "-Понятие совершенства растяжимо. Можно стремиться, невозможно достичь. Совершенство, как цель, лишено смысла.",
        quote2: "-Смерть не имеет значения, важна только эссенция.",
        author: "(Абатур)",
        points: "100"
    },
    'primal': {
        name: "Изначальный зерг",
        description: "Всё что вас интересует – это Эссенция, чем её больше тем лучше для вас. Вы эволюционируете, адаптируетесь и подстраиваетесь под окружающую среду. Нет таких проблем, которые вы не решите. Благодаря постоянному сбору эссенции вы можете в любой момент измениться. Эссенция это ваш образ жизни. Так много видов эссенции. Сотни видов. И с каждым годом всё больше. Нужно её всю собрать.",
        quote1: "-Мне нужна эссенция. Эссенция это жизнь. Я жить без неё не могу.",
        quote2: "",
        author: "(Дехака)",
        points: "120"
    },
    'terran': {
        name: "Терран",
        description: "Вас не интересуют проблемы протоссов и зергов, вечная вражда и опустошение миров. Кровавый след, который тянется с незапамятных времён за этими враждующими расами затрагивает и терранов, как бы сильно вы не старались не вмешиваться. Избежать контакта с протоссами не получилось, но с ними можно договориться в отличии от зергов. Простые человеческие радости украшают вашу жизнь. Общение с друзьями, поход в бар с хорошей музыкой, отдых на природе. Что еще нужно человеку.",
        quote1: "-Не связывайтесь с ребятами с Мар-Сары.",
        quote2: "",
        author: "(Рейнор)",
        points: "90"
    },
    'infested': {
        name: "Заражённый терран",
        description: "Судя по всему вас заразили зерги, теперь вы служите рою. Но это не мешает вам мечтать о мести зергам.",
        quote1: "-Зараженные всегда поднимаются вновь.",
        quote2: "-Когда ОЗД вернется в сектор, от вас ничего не останется.",
        author: "(Стуков)",
        points: "160"
    },
    'protoss': {
        name: "Протосс",
        description: "Вы горды и безупречны. Честь ведёт вас сквозь пучину неприятностей, которые подстерегают ваш народ со времён войны со Сверхразумом. За Айур вы готовы сражаться до смерти. Все протоссы стремятся быть похожими на вас. У вашего народа вечная вражда с зергами, очищать миры от их скверны и уничтожать улей за ульем вот что является вашей первостепенной целью. Пока зерги не будут уничтожены, протоссы не смогут спать спокойно.",
        quote1: "-Сила в единстве.",
        quote2: "",
        author: "(Артанис)",
        points: "80"
    },
    'taldarim': {
        name: "Талдарим",
        description: "В былые времена вы служили Амуну, падшему Зел-Нага, сейчас же ваш народ обрёл свободу. После того как Аларак стал владыкой талдаримов победив Малаша в поединке Рак-Шир, он не просто изменил свой статус в цепи вознесения, но и привел талдаримов к мирному сосуществованию с другими народами протоссов. Теперь можно восстанавливать свои миры как один единый сильный народ. И ваши навыки будут очень полезны в этой непростой задаче.",
        quote1: "-Ты разговариваешь с владыкой.",
        quote2: "-Как ты можешь мне послужить?",
        author: "(Аларак)",
        points: "140"
    },
    'hybrid': {
        name: "Гибрид",
        description: "Чистота формы и чистота эссенции присутствует в вашем организме. Вы одно из немногих существ, которых стремились создать Зел-Нага. Доктор Наруд сумел воплотить все планы Зел-Нага в жизнь и теперь вы идеальное орудие. Не смотря на то что вы гибрид зерга и протосса вы не чувствуете симпатии к этим расам, а считаете высшей расой Гибридов.",
        quote1: "-Всё только начинается. Амун шептал об этом с далёких звёзд.",
        quote2: "",
        author: "(Наруд)",
        points: "200"
    }
}