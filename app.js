/* PageX Website — language switcher, single App Store URL constant, Before/After slider */

(function () {
  "use strict";

  // Вставьте ссылку App Store сюда — все кнопки «Скоро в App Store» на сайте станут активными:
  const APP_STORE_URL = "";

  const SUPPORTED_LANGS = ["kk", "ru", "en"];
  const STORAGE_KEY = "pagex_lang";

  const I18N = {
    ru: {
      page_title_home: "PageX — Сканы книг и документов на iPhone и Mac",
      page_desc_home: "Снимите страницу телефоном — PageX уберёт тени, желтизну и пальцы, выпрямит лист и распознает текст на 100+ языках, включая казахский. На iPhone и Mac.",
      page_title_privacy: "Политика конфиденциальности — PageX",
      page_desc_privacy: "Политика конфиденциальности PageX: без аккаунтов, рекламы и аналитики. Все сканы и распознавание текста — на устройстве.",
      page_title_terms: "Условия использования — PageX",
      page_desc_terms: "Условия использования PageX, пробного периода и PageX Pro.",
      page_title_support: "Поддержка — PageX",
      page_desc_support: "Поддержка PageX и ответы на частые вопросы для iPhone, iPad и Mac.",

      nav_features: "Возможности",
      nav_before_after: "До/после",
      nav_iphone: "iPhone",
      nav_mac: "Mac",
      nav_pro: "Pro",
      nav_privacy: "Приватность",
      cta_soon: "Скоро в App Store",
      cta_download: "Скачать в App Store",
      back_home: "← На главную PageX",

      hero_badge: "iPhone · iPad · Mac",
      hero_title: "Сканы книг как с планшетного сканера",
      hero_subtitle: "Снимите страницу телефоном — PageX уберёт тени, желтизну и пальцы, выпрямит лист и распознает текст. На iPhone и Mac.",
      hero_pills: "Без регистрации · Без рекламы · Всё на устройстве",
      hero_img_alt: "Страница книги после очистки в PageX",

      ba_eyebrow: "Результат за секунду",
      ba_title: "До и после PageX",
      ba_desc: "Снято обычным телефоном при комнатном свете. PageX автоматически убирает жёлтый фон, тени и выравнивает контраст текста.",
      ba_mode_side: "Рядом",
      ba_mode_slider: "Ползунок",
      ba_before: "Снимок телефоном",
      ba_after: "После PageX",
      ba_before_tag: "До",
      ba_after_tag: "После",
      ba_before_alt: "Страница книги, снятая телефоном: жёлтая бумага и тень",
      ba_after_alt: "Та же страница после обработки в PageX: чистый белый лист и чёткий текст",

      feat_eyebrow: "Возможности",
      feat_title: "Всё для книг, документов и текста",
      feat_desc: "Быстрый сканер на iPhone и студия глубокой очистки книг на Mac — без облаков и подписок за каждый шаг.",
      f1_title: "Очистка сканов",
      f1_desc: "Убирает тени, жёлтую бумагу, пальцы в кадре и выпрямляет изгиб строк у корешка книги.",
      f2_title: "Распознавание на 100+ языках",
      f2_desc: "Точный OCR с полноценной поддержкой казахского языка (ә, ғ, қ, ң, ө, ұ, ү, һ, і), русского и английского.",
      f3_title: "«Текст с фото»",
      f3_desc: "Навёл камеру, снял — и сразу готовый редактируемый текст: скопировать, отправить или перевести.",
      f4_title: "Фото на документы",
      f4_desc: "3×4, паспорт, визы, Green Card (DV Lottery) с заменой фона и листом для печати 10×15 или A4.",
      f5_title: "Папки и документы",
      f5_desc: "Страницы 01, 02, 03 по порядку, цветные папки с иконками, теги, поиск по тексту и защита Face ID.",
      f6_title: "Гибкий экспорт",
      f6_desc: "PDF с текстовым слоем, Word (.docx), TXT, JPG и длинное изображение для удобной отправки в мессенджеры.",
      f7_title: "Без интернета",
      f7_desc: "Очистка, распознавание текста и фото на документы работают полностью локально на вашем устройстве.",

      ios_eyebrow: "iPhone и iPad",
      ios_title: "PageX на iPhone",
      ios_desc: "Понятный интерфейс с инструментами на виду, папками и живым просмотром фильтров.",
      shot1_caption: "Главная и папки",
      shot2_caption: "Очистка и фильтры",
      shot3_caption: "Страница документа",
      shot4_caption: "PageX Pro",
      shot1_alt: "Главный экран PageX на iPhone с папками и документами",
      shot2_alt: "Экран результата сканирования с фильтрами в PageX",
      shot3_alt: "Просмотр страницы документа в PageX",
      shot4_alt: "Экран PageX Pro",

      mac_eyebrow: "macOS",
      mac_title: "PageX на Mac",
      mac_desc: "Нативное приложение для оцифровки больших книг, архивов и сложных PDF-документов.",
      macshot1_caption: "Рабочая область: 600 страниц книги, перекос, обрезка, уровни",
      macshot1_alt: "Рабочая область PageX на Mac: страницы книги и инструменты",
      macshot2_caption: "Пакетная обработка книги: PageX сам чистит пятна и тени, а страницы с перекосом, размытием, обрезанным текстом, засветом или пропуском помечает ⚠ — сразу видно, что проверить или переснять",
      macshot2_alt: "Пакетная обработка книги в PageX на Mac",
      macshot3_caption: "22 PDF-инструмента: OCR, Word, Excel, сжатие",
      macshot3_alt: "22 PDF-инструмента в PageX на Mac",
      mac1_title: "Целые книги за один проход",
      mac1_desc: "Пакетная очистка папок со сканами и многостраничных PDF, контроль качества и автовыпрямление строк.",
      mac2_title: "Разделение разворотов",
      mac2_desc: "Автоматический поиск линии корешка, разделение разворотов на отдельные страницы и сохранение иллюстраций.",
      mac3_title: "Распознавание и PDF-инструменты",
      mac3_desc: "Поиск по тексту, объединение и разделение PDF, сжатие до нужного размера, подпись, сравнение и конвертация.",
      mac4_title: "Связка iPhone → Mac",
      mac4_desc: "Отправляйте проект .pagex с исходниками по AirDrop или через iCloud Drive и продолжайте чистку на большом экране.",

      pro_eyebrow: "Прозрачные условия",
      pro_title: "PageX Pro",
      pro_lead: "7 дней или 50 страниц — бесплатно, без ограничений. Потом — годовая подписка или покупка навсегда.",
      pro_note: "Покупка через App Store. Подписку можно отменить в любой момент в настройках Apple ID.",

      priv_eyebrow: "Приватность",
      priv_title: "Ваши документы принадлежат только вам",
      priv_desc: "PageX создан так, чтобы ваши сканы, паспорта и книги никогда не покидали устройство без вашего решения.",
      priv1_title: "Без регистрации",
      priv1_desc: "Никаких аккаунтов, паролей и сбора контактов. Открыли приложение — сразу работаете.",
      priv2_title: "Всё на устройстве",
      priv2_desc: "Очистка изображений, OCR и фото на документы выполняются локально процессором вашего устройства.",
      priv3_title: "Без рекламы и слежки",
      priv3_desc: "Нет рекламных баннеров, сторонних трекеров и скрытой телеметрии.",
      priv_link: "Читать Политику конфиденциальности →",

      final_title: "Оцифруйте свою библиотеку",
      final_desc: "Сканируйте книги, документы и текст на iPhone и Mac — чисто, быстро и приватно.",

      footer_privacy: "Политика конфиденциальности",
      footer_terms: "Условия использования",
      footer_support: "Поддержка",
      mailto_subject: "PageX — поддержка"
    },

    kk: {
      page_title_home: "PageX — iPhone және Mac-та кітаптар мен құжаттарды сканерлеу",
      page_desc_home: "Бетті телефонмен түсіріңіз — PageX көлеңкені, сарғыштықты және саусақтарды алып тастайды, парақты түзетіп, 100+ тілде (қазақ тілін қоса) мәтінді таниды.",
      page_title_privacy: "Құпиялық саясаты — PageX",
      page_desc_privacy: "PageX құпиялық саясаты: аккаунтсыз, жарнамасыз және аналитикасыз. Барлық сканерлеу мен мәтін тану құрылғыда орындалады.",
      page_title_terms: "Пайдалану шарттары — PageX",
      page_desc_terms: "PageX, сынақ кезеңі және PageX Pro пайдалану шарттары.",
      page_title_support: "Қолдау — PageX",
      page_desc_support: "PageX қолдау қызметі және жиі қойылатын сұрақтар.",

      nav_features: "Мүмкіндіктер",
      nav_before_after: "Дейін/кейін",
      nav_iphone: "iPhone",
      nav_mac: "Mac",
      nav_pro: "Pro",
      nav_privacy: "Құпиялық",
      cta_soon: "Жақында App Store-да",
      cta_download: "App Store-дан жүктеу",
      back_home: "← PageX басты бетіне",

      hero_badge: "iPhone · iPad · Mac",
      hero_title: "Планшеттік сканердей таза кітап сканерлері",
      hero_subtitle: "Бетті телефонмен түсіріңіз — PageX көлеңкені, сарғыштықты және саусақтарды алып тастайды, парақты түзетіп, мәтінді таниды. iPhone және Mac-та.",
      hero_pills: "Тіркеусіз · Жарнамасыз · Бәрі құрылғыда",
      hero_img_alt: "PageX арқылы тазартылған кітап беті",

      ba_eyebrow: "Бір секундта нәтиже",
      ba_title: "PageX-ке дейін және кейін",
      ba_desc: "Бөлме жарығында кәдімгі телефонмен түсірілген. PageX сарғыш фонды, көлеңкені кетіріп, мәтіннің айқындығын арттырады.",
      ba_mode_side: "Қатар",
      ba_mode_slider: "Сырғытпа",
      ba_before: "Телефонмен түсірілген",
      ba_after: "PageX-тен кейін",
      ba_before_tag: "Дейін",
      ba_after_tag: "Кейін",
      ba_before_alt: "Телефонмен түсірілген кітап беті: сарғыш қағаз және көлеңке",
      ba_after_alt: "PageX-пен тазартылған сол бет: ақ парақ және анық мәтін",

      feat_eyebrow: "Мүмкіндіктер",
      feat_title: "Кітаптар, құжаттар және мәтін үшін бәрі бар",
      feat_desc: "iPhone-да жылдам сканер және Mac-та кітаптарды терең тазарту — бұлтсыз әрі артық шектеусіз.",
      f1_title: "Скандарды тазарту",
      f1_desc: "Көлеңке, сарғыш қағаз және кадрдағы саусақтарды алып тастап, кітап түбіндегі қисайған жолдарды түзетеді.",
      f2_title: "100+ тілде мәтін тану",
      f2_desc: "Қазақ тілін (ә, ғ, қ, ң, ө, ұ, ү, һ, і), орыс және ағылшын тілдерін толық қолдайтын дәл OCR.",
      f3_title: "«Фотодан мәтін»",
      f3_desc: "Суретке түсірсеңіз — бірден өңдеуге дайын мәтін: көшіру, жіберу немесе аудару.",
      f4_title: "Құжатқа фото",
      f4_desc: "3×4, төлқұжат, виза, Green Card (DV Lottery): фонды ауыстыру және 10×15 не A4 баспа парағы.",
      f5_title: "Қалталар мен құжаттар",
      f5_desc: "01, 02, 03 ретімен беттер, түсті қалталар мен белгішелер, тегтер, мәтін бойынша іздеу және Face ID қорғанысы.",
      f6_title: "Ыңғайлы экспорт",
      f6_desc: "Мәтін қабаты бар PDF, Word (.docx), TXT, JPG және мессенджерлерге ыңғайлы ұзын сурет.",
      f7_title: "Интернетсіз жұмыс",
      f7_desc: "Тазарту, мәтін тану және құжатқа фото толығымен құрылғыңыздың өзінде орындалады.",

      ios_eyebrow: "iPhone және iPad",
      ios_title: "iPhone-дағы PageX",
      ios_desc: "Негізгі құралдар көз алдыңызда, қалталар реттелген және сүзгілер нәтижесі бірден көрінеді.",
      shot1_caption: "Басты бет және қалталар",
      shot2_caption: "Тазарту және сүзгілер",
      shot3_caption: "Құжат беті",
      shot4_caption: "PageX Pro",
      shot1_alt: "Қалталар мен құжаттары бар PageX басты экраны",
      shot2_alt: "PageX-тегі сүзгілері бар нәтиже экраны",
      shot3_alt: "PageX-тегі құжат бетін қарау экраны",
      shot4_alt: "PageX Pro экраны",

      mac_eyebrow: "macOS",
      mac_title: "Mac-тағы PageX",
      mac_desc: "Үлкен кітаптарды, мұрағаттарды және күрделі PDF құжаттарды цифрландыруға арналған нативті қосымша.",
      macshot1_caption: "Жұмыс аймағы: кітаптың 600 беті, қисықтықты түзету, кесу, деңгейлер",
      macshot1_alt: "Mac-тағы PageX жұмыс аймағы: кітап беттері мен құралдар",
      macshot2_caption: "Кітапты топтамалық өңдеу: PageX дақтар мен көлеңкелерді өзі тазалайды, ал қисық, бұлыңғыр, мәтіні кесілген, тым қараңғы не жарық немесе жетіспейтін беттерді ⚠ белгісімен көрсетеді — нені тексеру не қайта түсіру керегі бірден көрінеді",
      macshot2_alt: "Mac-тағы PageX-те кітапты топтамалық өңдеу",
      macshot3_caption: "22 PDF құралы: OCR, Word, Excel, сығу",
      macshot3_alt: "Mac-тағы PageX-тің 22 PDF құралы",
      mac1_title: "Тұтас кітаптарды бірден өңдеу",
      mac1_desc: "Скандар қалтасы мен көпбеттік PDF-ті пакеттік тазарту, сапаны тексеру және жолдарды түзету.",
      mac2_title: "Қос беттерді бөлу",
      mac2_desc: "Кітап түбінің сызығын автоматты тауып, қос бетті жеке парақтарға бөлу және суреттерді сақтау.",
      mac3_title: "Мәтін тану және PDF құралдары",
      mac3_desc: "Мәтін іздеу, PDF біріктіру және бөлу, өлшемін сығу, қол қою, салыстыру және түрлендіру.",
      mac4_title: "iPhone → Mac байланысы",
      mac4_desc: "Түпнұсқа суреттері бар .pagex жобасын AirDrop немесе iCloud Drive арқылы Mac-қа жіберіп жалғастырыңыз.",

      pro_eyebrow: "Ашық шарттар",
      pro_title: "PageX Pro",
      pro_lead: "7 күн немесе 50 бет — тегін, шектеусіз. Одан кейін — жылдық жазылым немесе біржолғы сатып алу.",
      pro_note: "Сатып алу App Store арқылы жүргізіледі. Жазылымды Apple ID баптауларында кез келген уақытта тоқтатуға болады.",

      priv_eyebrow: "Құпиялық",
      priv_title: "Құжаттарыңыз тек өзіңізде қалады",
      priv_desc: "PageX сканерлеріңіз, жеке куәліктеріңіз бен кітаптарыңыз сіздің рұқсатыңызсыз ешқайда жіберілмейтіндей жасалған.",
      priv1_title: "Тіркеусіз",
      priv1_desc: "Аккаунт, құпиясөз немесе байланыс деректерін жинау жоқ. Қосымшаны ашып, бірден жұмыс істейсіз.",
      priv2_title: "Бәрі құрылғыда",
      priv2_desc: "Сурет тазарту, OCR және құжатқа фото тек құрылғыңыздың процессорында жергілікті орындалады.",
      priv3_title: "Жарнама мен бақылау жоқ",
      priv3_desc: "Жарнама баннерлері, бөгде трекерлер және жасырын телеметрия мүлде жоқ.",
      priv_link: "Құпиялық саясатын оқу →",

      final_title: "Кітапханаңызды цифрландырыңыз",
      final_desc: "iPhone және Mac-та кітаптарды, құжаттарды және мәтінді таза, жылдам әрі құпия түрде сканерлеңіз.",

      footer_privacy: "Құпиялық саясаты",
      footer_terms: "Пайдалану шарттары",
      footer_support: "Қолдау",
      mailto_subject: "PageX — қолдау"
    },

    en: {
      page_title_home: "PageX — Book & Document Scanner for iPhone and Mac",
      page_desc_home: "Snap a page with your phone — PageX removes shadows, yellowed paper, and fingers, flattens the sheet, and recognizes text in 100+ languages including Kazakh. On iPhone and Mac.",
      page_title_privacy: "Privacy Policy — PageX",
      page_desc_privacy: "PageX Privacy Policy: no accounts, no ads, no tracking. All scan cleanup and OCR happen on your device.",
      page_title_terms: "Terms of Use — PageX",
      page_desc_terms: "Terms of Use for PageX, free trial, and PageX Pro.",
      page_title_support: "Support — PageX",
      page_desc_support: "PageX support and frequently asked questions for iPhone, iPad, and Mac.",

      nav_features: "Features",
      nav_before_after: "Before/After",
      nav_iphone: "iPhone",
      nav_mac: "Mac",
      nav_pro: "Pro",
      nav_privacy: "Privacy",
      cta_soon: "Coming Soon on App Store",
      cta_download: "Download on the App Store",
      back_home: "← Back to PageX",

      hero_badge: "iPhone · iPad · Mac",
      hero_title: "Book scans that look like a flatbed scanner",
      hero_subtitle: "Snap a page with your phone — PageX removes shadows, yellow paper, and fingers, flattens the sheet, and recognizes text. On iPhone and Mac.",
      hero_pills: "No account · No ads · Everything on device",
      hero_img_alt: "Book page cleaned in PageX",

      ba_eyebrow: "Instant cleanup",
      ba_title: "Before and after PageX",
      ba_desc: "Captured with a phone under indoor lighting. PageX automatically removes yellow paper cast, shadows, and sharpens text contrast.",
      ba_mode_side: "Side by side",
      ba_mode_slider: "Slider",
      ba_before: "Phone photo",
      ba_after: "After PageX",
      ba_before_tag: "Before",
      ba_after_tag: "After",
      ba_before_alt: "Book page photographed on a phone with yellow paper and shadow",
      ba_after_alt: "The same page after PageX: crisp white paper and sharp text",

      feat_eyebrow: "Features",
      feat_title: "Everything for books, documents, and text",
      feat_desc: "A fast scanner on iPhone and a full book-cleanup studio on Mac — completely local and offline.",
      f1_title: "Scan cleanup",
      f1_desc: "Removes shadows, yellowed paper, and fingers, and straightens curved lines near the book spine.",
      f2_title: "OCR in 100+ languages",
      f2_desc: "Accurate text recognition with full Kazakh support (ә, ғ, қ, ң, ө, ұ, ү, һ, і), plus Russian, English, and more.",
      f3_title: "Text from Photo",
      f3_desc: "Point, shoot, and immediately get editable text to copy, share, or translate.",
      f4_title: "ID Photos",
      f4_desc: "3×4, passport, visa, and Green Card (DV Lottery) photos with background replacement and 10×15 or A4 print sheets.",
      f5_title: "Folders & documents",
      f5_desc: "Ordered pages 01, 02, 03, color-coded folders with icons, tags, full-text search, and Face ID lock.",
      f6_title: "Flexible export",
      f6_desc: "Searchable PDF, Word (.docx), TXT, JPG, and stitched long images ready for messengers.",
      f7_title: "Works offline",
      f7_desc: "Cleanup, OCR, and ID photos run completely locally on your device with no internet required.",

      ios_eyebrow: "iPhone & iPad",
      ios_title: "PageX on iPhone",
      ios_desc: "Key tools right at hand, structured folders, and live filter previews.",
      shot1_caption: "Home & Folders",
      shot2_caption: "Cleanup & Filters",
      shot3_caption: "Document Page",
      shot4_caption: "PageX Pro",
      shot1_alt: "PageX iPhone home screen with folders and documents",
      shot2_alt: "PageX scan result screen with cleanup filters",
      shot3_alt: "PageX document page screen",
      shot4_alt: "PageX Pro screen",

      mac_eyebrow: "macOS",
      mac_title: "PageX on Mac",
      mac_desc: "A native desktop studio built for digitizing full books, archives, and multi-page PDFs.",
      macshot1_caption: "Workspace: a 600-page book, deskew, crop, levels",
      macshot1_alt: "PageX workspace on Mac: book pages and tools",
      macshot2_caption: "Batch book processing: PageX removes specks and shadows on its own and flags ⚠ pages that are skewed, blurry, over- or underexposed, have clipped text or are missing — you instantly see what to check or rescan",
      macshot2_alt: "Batch processing a book in PageX on Mac",
      macshot3_caption: "22 PDF tools: OCR, Word, Excel, compression",
      macshot3_alt: "22 PDF tools in PageX on Mac",
      mac1_title: "Whole books in one pass",
      mac1_desc: "Batch-clean folders of scans or large PDFs with quality checks and automatic line straightening.",
      mac2_title: "Automatic spread splitting",
      mac2_desc: "Detects the spine, splits two-page spreads cleanly, and preserves color illustrations.",
      mac3_title: "OCR & PDF tools",
      mac3_desc: "Searchable PDFs, merge and split, target-size compression, signing, comparison, and Word/Excel export.",
      mac4_title: "iPhone → Mac workflow",
      mac4_desc: "Send a .pagex project with originals via AirDrop or iCloud Drive and finish heavy cleanup on Mac.",

      pro_eyebrow: "Simple pricing model",
      pro_title: "PageX Pro",
      pro_lead: "7 days or 50 pages — free, with no limits. After that, choose an annual subscription or a one-time lifetime purchase.",
      pro_note: "Purchased through the App Store. Subscriptions can be cancelled anytime in Apple ID settings.",

      priv_eyebrow: "Privacy",
      priv_title: "Your documents belong only to you",
      priv_desc: "PageX is designed so your scans, IDs, and books never leave your device unless you choose to share them.",
      priv1_title: "No sign-up",
      priv1_desc: "No accounts, passwords, or contact collection. Open the app and start scanning right away.",
      priv2_title: "All on device",
      priv2_desc: "Image cleanup, text recognition, and ID photo processing run locally on your device.",
      priv3_title: "No ads or tracking",
      priv3_desc: "Zero ad banners, zero third-party analytics SDKs, and zero hidden telemetry.",
      priv_link: "Read Privacy Policy →",

      final_title: "Digitize your library",
      final_desc: "Scan books, documents, and text on iPhone and Mac — clean, fast, and private.",

      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Use",
      footer_support: "Support",
      mailto_subject: "PageX — Support"
    }
  };

  function detectDefaultLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) {
        return saved;
      }
    } catch (_) {}

    const nav = (navigator.language || "").toLowerCase();
    if (!nav) return "ru";
    if (nav.startsWith("kk")) return "kk";
    if (nav.startsWith("ru")) return "ru";
    return "en";
  }

  function applyLanguage(lang, persist) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = "ru";
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-active-lang", lang);

    const pageKind = document.body.getAttribute("data-page") || "home";
    const titleKey = "page_title_" + pageKind;
    const descKey = "page_desc_" + pageKind;
    if (dict[titleKey]) document.title = dict[titleKey];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict[descKey]) metaDesc.setAttribute("content", dict[descKey]);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (key && dict[key] !== undefined) {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll(".js-mailto-support").forEach(function (el) {
      const subj = encodeURIComponent(dict.mailto_subject || "PageX — Support");
      el.setAttribute("href", "mailto:pagex.support@icloud.com?subject=" + subj);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    updateAppStoreButtons(dict);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (_) {}
    }
  }

  function updateAppStoreButtons(dict) {
    const hasLink = typeof APP_STORE_URL === "string" && APP_STORE_URL.trim().length > 0;
    document.querySelectorAll(".js-appstore-btn").forEach(function (btn) {
      const label = btn.querySelector(".js-appstore-label");
      if (label) {
        label.textContent = hasLink ? dict.cta_download : dict.cta_soon;
      }
      if (hasLink) {
        btn.setAttribute("href", APP_STORE_URL);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("rel", "noopener");
        btn.removeAttribute("aria-disabled");
        btn.classList.remove("is-disabled");
      } else {
        btn.removeAttribute("href");
        btn.setAttribute("aria-disabled", "true");
        btn.classList.add("is-disabled");
      }
    });
  }

  function initBeforeAfter() {
    const stage = document.getElementById("ba-slider-stage");
    const range = document.getElementById("ba-range");
    const pairView = document.getElementById("ba-pair-view");
    const sliderView = document.getElementById("ba-slider-view");
    const modeButtons = document.querySelectorAll(".ba-mode-btn");

    if (stage && range) {
      const syncPos = function () {
        stage.style.setProperty("--pos", range.value + "%");
      };
      range.addEventListener("input", syncPos);
      syncPos();
    }

    if (pairView && sliderView && modeButtons.length) {
      modeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const mode = btn.getAttribute("data-ba-mode");
          modeButtons.forEach(function (b) {
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
          });
          if (mode === "slider") {
            pairView.classList.add("is-hidden");
            sliderView.classList.remove("is-hidden");
          } else {
            sliderView.classList.add("is-hidden");
            pairView.classList.remove("is-hidden");
          }
        });
      });
    }
  }

  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (!toggle || !drawer) return;

    toggle.addEventListener("click", function () {
      const isOpen = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        drawer.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"), true);
      });
    });

    applyLanguage(detectDefaultLang(), false);
    initBeforeAfter();
    initMobileMenu();
  });
})();
