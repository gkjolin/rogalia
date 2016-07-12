"use strict";
Talks.npcs = {
    "charles": {
        "default": {
            "male": [
                "Привет, дружище!",
                "Меня зовут Чарльз, я секретарь местной Имперской канцелярии. Еще я являюсь официальным представителем Имперского Синода в этих землях.",
		"В этом городке вы сможете отдохнуть от работы и обменяться товарами с другими людьми.",
		"Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                "Итак, давайте поговорим о:"
            ],
            "female": [
                "Доброго дня, юная леди!",
                "Меня зовут Чарльз, я секретарь местной Имперской канцелярии. Еще я являюсь официальным представителем Имперского Синода в этих землях.",
		"В этом городке вы сможете отдохнуть от работы и обменяться товарами с другими людьми.",
		"Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                "Итак, давайте поговорим о:",
            ]
        },
        "empire": {
            "male": [
                "Рад снова тебя видеть!",
                "Я смотрю, даже в таких условиях ты остался верен Императору. Это похвально! Не потерять веру в правителя, не поддаться на сладкие речи Конфедератов... Так держать, друг! Провалиться мне на этом месте, со всей Имперской канцелярией, если я тебе не помогу. Я Чарльз, и я к твоим услугам.",
            ],
            "female": [
                "Хорошего дня, юная леди!",
                "Я очень рад, что вы не отвернулись от Имперских законов. Я надеялся, что вы останетесь с нами, в этом городе так не хватает честных и открытых барышень, которые не поддались на обещания этих Конфедератов. Я, глава Имперской канцелярии этого города - Чарльз, и я ваш верный рыцарь и покорный слуга. Просите, я непременно помогу вам."
            ]
        },
        "confederation": {
            "male": [
                "Привет, приятель.",
                "Ну и как там? На службе у конфедератов. Надеюсь, хотя бы кормят хорошо? Впрочем, прости за грубость. Здесь мы все равны, я не должен делать предпочтения тем, кто остался верен нашему правителю. Хоть я и глава… имперской канцелярии, но, тем не менее, за этот город отвечаю я, Чарльз, поэтому я с радостью тебе помогу.",
            ],
            "female": [
                "Юная леди!",
                "Что привело вас ко мне на этот раз? Мне очень скорбно, что вы примкнули к этим проходимцам, но не переживайте, моё отношение к вам от этого не изменилось. У вас наверняка были свои мотивы, которые я не вправе осуждать. Все мы здесь в равных условиях, просто... Я надеялся, что вы выберете более утончённый путь. В любом случае, Чарльз к вашим услугам.",
            ]
        },
        "actions": {
            "Set citizenship": "Я хочу сообщить о своей принадлежности к одной из фракций.",
            "Get claim": "Я хочу получить земельный надел.",
            // "Get village claim": "Я бы хотел обосновать здесь деревню (10 платины).",
        },
    },
    "diego": {
        "default": {
            "male": ["Хэй, привет! Меня зовут Диего, я посол Тайтерры в этих землях. Хотя мне больше по душе хорошая битва, чем вся эта политическая возня. Так что если ты захочешь поохотиться на дичь, я могу показать тебе злачные места, ха-ха!"],
        },
        "actions": {
            "Show instances": "Покажи мне места для охоты.",
        }
    },
    "scrooge": {
        "default": {
            "male": [
                "Добро пожаловать!",
                "В нашем банке мы всегда рады клиентам. Проходите, присаживайтесь. Меня зовут Скрудж и я распорядитель крупнейшего банка Рогалии.",
                "Наш банк настолько крупный, что мы можем даже позволить себе открывать отделения в таких удалённых деревушках как эта. Не переживайте, гарантии качества услуг остаются всё те же.",
                "Я могу взять у вас деньги на хранение. Нет, увы проценты вы не получите, но они будут храниться в надежном месте.",
                "Стоит добавить, что ваша банковская ячейка привязывается к вашим владениям, вам больше не придётся думать о том, пора ли платить налоги за землю, все налоги будут автоматически уплачены с вашего счёта.",
                "Так же помещикам мы можем предложить услугу накопительного фонда. Если вы крупный и статный джентельмен или леди и у вас есть какой-то доход, весь ваш доход автоматически будет складываться на ваш счёт. Сплошная выгода и никаких лишних расходов.",
                "Итак, вы определились?"
            ]
        },
        "actions": {
            "Bank": "Денежные операции.",
            "Exchange": "Биржа. Обмен слитков и ассигнаций.",
        },
    },
    "sabrina": {
        "default": {
            "male": [
                "Стой! Не подходи... Та-а-ак... Ага... Ладно, черт с ним. Ой, извини. Меня зовут Сабрина, я местный алхимик. У меня есть все - от листка подорожника до зелья, от которого и камень наполнится жизнью! Хе-хе, шучу. "
            ]
        },
        "actions": {
            "Trade": "Я хочу вглянуть на твои товары.",
        },
    },
    "larisa": {
        "default": {
            "male": [
                "Добро пожаловать в аукционный дом Рогалии! Конечно, мы являемся представителями нашей организации, что находится в столице, но наш аукцион ничуть не хуже! Мое имя Лариса, обращайтесь, если желаете вглянуть на торги."
            ]
        },
        "actions": {
            "Auction": "Я хочу взглянуть на аукцион.",
        },
    },
    "shot": {
        "default": {
            "male": [
                "Привет, красавчик, меня зовут Шот, присаживайся.",
                "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате. Но, я думаю, ты и без меня разберёшься.",
            ],
            "female": [
                "Привет, подруга!",
                "Меня зовут Шот, и я владелец \"Гарцующего Койота\". У нас есть еда и вода, есть конечно ещё кое что, но девушки редко интересуются подобным, поэтому даже рассказывать не буду. Наш городок довольно неплохой, хоть тут и собрались одни мужланы, да отбросы. Но ничего, я думаю, мы с тобой станем хорошими подругами.",
            ]
        },
        "empire": {
            "male": [
                "Чего достопочтимый джентльмен изволит откушать сегодня?",
                "У нас есть семена картошки, которую вы без труда сможете вырастить. Первосортная вода в ассортименте. Есть из речки, есть из озера, есть даже из пруда. Да вы не смотрите так, это просто небольшой трактирчик, а не ресторан в центре Имперской столицы. Или заходя в заведение под названием \"Гарцующий Койот\" вы ожидали увидеть что-то иное? Меня зовут Шот, я готова вас обслужить.",
            ],
            "female": [
                "О! Имперская Леди пришла поужинать?",
                "Ну, я надеюсь, я оправдаю ваши ожидания. У меня есть семена на любой вкус. В смысле? Нормальная еда? А что, думаете из этих семян не выйдет ничего путного? У меня и воду можно купить, чтобы их полить. Шучу конечно. Воду пить можно только тут. Из наших стаканов, да. Да, вот так вот тяжко жить. Можете написать на меня жалобу. Так и напишите: \"Владелица таверны Шот, Конфедератка, дочь Конфедератов, не уважает честных Имперских женщин\"."
            ]
        },
        "confederation": {
            "male": [
                "Привет, красавчик, мое имя Шот, присаживайся.",
                "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате специально для таких как ты. Я слышала вы, парни из конфедерации, очень не против подобного досуга. Но, я думаю, ты и без меня разберёшься.",
            ],
            "female": [
                "Привет-привет! Я рада, что ещё одна дочь Конфедерации посетила наш трактир!",
                "\"Гарцующий Койот\" не такое уж плохое место, можешь заходить чаще, я уверена, мы станем хорошими подругами. Я - Шот, кстати. Я могу тебя накормить, продать семян, ну и, знаешь… Если ты широких взглядов, а я смотрю на тебя, цыпочку, и думаю, что ты именно такая, то для тебя найдётся и кое что интересненькое в соседней комнате...",
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
            "Drink water": "Я хочу промочить горло (5 серебряных)",
        }
    },
    "margo": {
        "default": {
            "male": [
                "Эй, сладкий, не проходи мимо!",
		"Давай повеселимся немного, ты же знаешь кто я, не правда ли? Вы называете нас «mulier stupri», но мне больше нравится «ночная бабочка», я же похожа на бабочку правда? Шелковистые крылышки, лёгкость во всём теле, необычайная красота, а главное… Я тоже дарю людям удовольствие… Особое удовольствие. Так что, ты просто поглазеть пришёл или даже такой крепкий парень как ты нуждается иногда в отдыхе?",
            ],
            "female": [
                "Золотце? Ты не ошиблась дверью?",
		"О, не стесняйся ты так, я всё поняла по твоим глазам, ни слова больше. Меня зовут Марго, и я та, кто тебе нужен. Поверь, я вижу напряжение и скованность, ты пришла точно по адресу, сейчас мы будем с этим бороться. Женщина должна выпустить себя наружу. Показать миру, избавившись от предрассудков. Проходи, золотце, присаживайся на кровать, я не кусаюсь.",
            ]
        },
        "empire": {
            "male": [
                "Сладенький, проходи, не стесняйся.",
		"Если ты пришел сюда, думаю ты знаешь, что я Марго и мои услуги очень необычны... Присядь на кровать, расслабся. Ты ведь хочешь расслабиться? Я знаю, что вы, верные Императору мужчины, недолюбливаете таких, как я, но отбрось свои предрассудки и просто прими наслаждение...",
            ],
            "female": [
                "Да-да? Вам что-то нужно?",
		"Марго, это я. Путана. Девушка лёгкого поведения, скажем так. Вас это смущает? Да, я вижу, что смущает. Любого Имперца это смутит. Но… Что я вижу? Постойте, не отворачивайтесь. Я вижу… Желание? Желание в ваших глазах, ну надо же. Простите меня, за такую поспешность. Это место, знаете ли, немного нестабильно. Что бы ни говорил Чарльз - Империя и Конфедерация останутся врагами, даже если закинуть нас на необитаемый остров. Но вы не переживайте. Я лояльна ко всем своим клиентам. Со мной напряжение сбросить лучше, чем с этими потными мужланами."
            ]
        },
        "confederation": {
            "male": [
                "Милый, не стесняйся, заходи.",
		"Ох, какой напор, от тебя так и веет настоящим мужчиной! Я сразу почувствовала в тебе самца, даже твоя походка заставляет мои ноги дрожать. И мне кажется, ты пришёл не просто так, в конце концов, это вы, красавчики, позволили нам, \"ночным бабочкам\" распространиться по Империи, так что ты просто обязан знать, что именно нужно со мной делать, не так ли? Можешь называть меня Марго, или как тебе будет угодно, главное расслабся и получай удовольствие...",
            ],
            "female": [
                "Заходи, детка, Марго всегда рада таким симпатичным девочкам, как ты.",
		"В этом Имперском царстве потных грязных мужиков иногда хочется просто немного расслабиться, подурачиться и сбросить напряжение, правда? Наша профессия, \"muloer stupri\", как нас называют, она учит этому, учит давать людям то, что они хотят. А сейчас ты хочешь побыть здесь со мной, я угадала? Расслабся, я сама все сделаю...",
            ]
        },
        "actions": {
            "Buy sex": "Воспользоваться услугами путаны (10 золота)",
        }
    },
    "bruno": {
        "default": {
            "male": [
                "Добро пожаловать в мою скромную лавку, парень.",
		"Мое имя Бруно, буду рад помочь тебе выбрать подходящую одежду или ткани. Ты ведь за этим сюда пришел? Я лучший портной во всей Империи, буду рад услужить.",
            ],
            "female": [
                "Дорогуша, не проходи мимо, загляни ко мне!",
		"Меня зовут Бруно, дорогуша, и это моя лавка. Здесь ты можешь купить одежду или ткани - выбирай, найдется на любой вкус.",
            ]
        },
        "empire": {
            "male": [
                "Эй, мужчина!",
		"Мое имя Бруно, я местный портной, если вам потребуется новая одежда или ткани - обратитесь ко мне, всегда рад услужить гражданину Империи.",
            ],
            "female": [
                "Дорогуша, загляни ко мне!",
		"Всегда приятно видеть лицо верного Императору человека. Мое имя Бруно, если тебе нужна лучшая одежда - ты ее получишь, причем по самым скромным ценам."
            ]
        },
        "confederation": {
            "male": [
                "Эй, парень!",
		"Сразу видно, что ты на службе у Конфедератов. Тощий, в каких-то обносках... Мое имя Бруно, проходи, у меня ты найдешь лучшую одежду во всей Рогалии!",
            ],
            "female": [
                "Эй! Попа карамельная!",
		"Хоть ты и на службе у треклятых Конфедератов, это не меняет того, что тебе нужна хорошая одежда. Мое имя Бруно, и я лучший портной из ныне живущих!",
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
        }
    },
    "ahper": {
        "default": {
            "male": [
                "А ведь когда-то я целые валуны в миг сносил... Хе-хе. Ой, прости.",
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
        },
    },
    "cosmas": {
        "default": {
            "male": [
                "Здравствуй. Это моя кузница. Может быть, тебе нужны доспехи или оружие? Эх... Вам ведь только гвозди да обода подавай...",
            ]
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        },
    },
    "boris": {
        "default": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи?",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?",
            ]
        },
        "empire": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи?",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?"
            ]
        },
        "confederation": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи? ",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Мое имя Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?",
            ]
        },
        // "actions": {
        //     "Trade indulgence": "Исповедаться (10 золотых +100 кармы)",
        // }
    },
    "bertran": {
        "default": {
            "male": [
                "Фааарш....",
                "Не проходи мимо, милос-с-стивый гос-с-сподин, загляни к Бертрану. Я местный мяс-с-сник и я хорошо разделываю туш-ш-ш-ши. Могу порез-з-зать твою туш-ш-шу. Я имел ввиду не тебя с-самого, не бойс-ся. Во всяком с-случае пока ты ж-ж-жив. Я не люблю резать кричащ-щ-щую плоть. Больш-ш-ше не люблю. Ты мож-ж-жешь купить у меня мяс-с-с-со, а мож-жешь научитьс-с-ся хорош-ш-шо готовить.",
            ],
            "female": [
                "Какая с-с-сочная...",
                "Какая с-с-сочная, говорю, у меня тут выр-р-резка. Обожаю выр-р-резку. Её очень приятно рез-з-з-зать. Простите, лед-ди, я совс-с-сем забылс-с-ся. Меня зовут Бертр-ран, я мес-с-стный мяс-с-сник. Вы мож-жете купить у меня немного мяс-с-са. Я могу научить вас-с готовить. Либо... Хотя нет, я вас-с ещё слиш-шком плохо знаю.",
            ]
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        }

    },
    "vendor": {
        "default": {
            "male": [
                "Добро пожаловать в мою скромную лавку, сударь.",
            ],
            "female": [
                "Добро пожаловать в мою скромную лавку, сударыня.",
            ],
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "С новым годом!",
                "Поторопись украсить свое жилище!",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "Привет!",
                "Праздник на дворе, давай наряжать елку и дарить друг другу подарки!"
            ],
        },
    },
    "ivan": {
        "default": {
            "male": [
                "Привет! Подходи, не стесняйся!",
                "Меня зовут Иван, я местный лесоруб. Если ты ищешь, где бы купить хороший топор или пилу, а так же прочие предметы для этой нелегкой професси, обращайся, подберу тебе что-нибудь!",
            ],
        },
    },
    "plato": {
        "default": {
            "male": [
                "Добрый день, друг.",
                "Меня зовут Платон, я занимаюсь тем, что обучаю основам выживания в этих землях всех сюда прибывших. Не важно, по своей воле ты здесь, или же тебя сослал Император за провинность перед законом, слушай меня внимательно, и ты не станешь обедом для диких животных, когда выйдешь за пределы города.",
            ],
        },
    },
    "athena": {
        "default": {
            "male": [
                "Ха-ха! Свежее мясо для арены!",
		"Меня зовут Афина, я распорядитель боев на арене. Мне не важно, какого ты пола, возраста, каких вглядов, я лишь хочу видеть жажду честного сражения в твоих глазах! Здесь, на арене, можно помериться силой с другими жителями этих земель."
            ]
        },
    },
    "alfred": {
        "default": {
            "male": [
                "Добро пожаловать в гостинницу, путник.",
                "Мое имя Альфред, я дворецкий. Если вам нужна теплая постель и уют, вы найдете его именно здесь. Конечно, это не королевские покои, но спокойный сон на удобной кровати вам обеспечен.",
            ],
        },
    },
    "angelina": {
        "default": {
            "male": [
                "У-у-у-у!!!",
                "Что, и ты меня совсем не боишься? Эх, почему так... Мое имя Ангела, я призрак. Так повелось, что я рассказываю приезжим местные байки и жуткие истории. Присаживайся, если хочешь послушать, я и тебе какую-нибудь расскажу.",
            ],
        },
    },
};