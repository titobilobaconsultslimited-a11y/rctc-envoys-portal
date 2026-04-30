// ============================================================
// RCTC ENVOYS CAMPUS - EXAM PORTAL DATA FILE
// ============================================================
// HOW TO ADD STUDENTS:
//   Add entries to the STUDENTS object below.
//   Format: "MATRIC_NUMBER": "Full Student Name"
//   Example: "RCTC/ENV/025": "Brother Emmanuel Ade"
//
// HOW TO UPDATE ADMIN PASSWORD:
//   Change the password value in the ADMIN object below.
//
// HOW TO ADD/EDIT EXAM QUESTIONS:
//   Find the exam by title in the EXAMS array below.
//   Each question has: q (question text), options (4 choices), answer (index 0-3)
// ============================================================

// ---- STUDENT MATRIC NUMBERS ----
const STUDENTS = {
  "123456": "Admin Test Student",
  "276379": "Demilade Adelanke",
  "270178": "Ayomide Lasore",
  "270288": "Akanji Azeez Olawale",
  "276380": "Adeyanju Adeniyi Yemi",
  "276382": "Aminu Naomi",
  "276384": "Odeyemi Temitope Abigail",
  "276383": "Odeyemi Akintunde Peter",
  "276595": "Oladejo Opeyemi",
  "270177": "Ibraheem Ayomide",
  "276594": "Tofunmi Oguntibeju",
  "276613": "Adekoya Korede",
  "270297": "Lydia Omooba",
  // ---- ADD MORE STUDENTS BELOW THIS LINE ----

  // ---- END OF STUDENT LIST ----
};

// ---- ADMIN CREDENTIALS ----
const ADMIN = {
  username: "admin",
  password: "Envoys@Admin2024"
};

// ---- EXAM DATA (23 Exams) ----
const EXAMS = [

  // 
  // 1. CHURCH HISTORY 1
  // 
  {
    id: 1,
    code: "CHI 101",
    title: "Church History 1",
    icon: "",
    duration: 60,
    questions: [
      { q: "The earliest organised Roman persecution of Christians is associated with which emperor?", options: ["Julius Caesar","Nero","Constantine","Diocletian"], answer: 1 },
      { q: "The Council of Nicaea (325 AD) was convened primarily to address:", options: ["The canon of Scripture","The Arian controversy about the nature of Christ","The date of Easter celebration","Church moral discipline"], answer: 1 },
      { q: "The Nicene Creed affirms that the Son is:", options: ["A created being — the highest of all creation","Of similar substance (homoiousios) to the Father","Of the same substance (homoousios) as the Father","A divine being adopted by the Father at His baptism"], answer: 2 },
      { q: "Who wrote 'Confessions' and 'The City of God'?", options: ["Tertullian","Origen","Augustine of Hippo","Clement of Alexandria"], answer: 2 },
      { q: "The term 'apostolic fathers' refers to:", options: ["The twelve apostles themselves","Early church writers who had close contact with the apostles","The bishops of Rome during the first century","Writers of the New Testament epistles only"], answer: 1 },
      { q: "The first ecumenical council of the church was held at:", options: ["Jerusalem","Antioch","Constantinople","Nicaea"], answer: 3 },
      { q: "The Edict of Milan (313 AD) granted:", options: ["Christianity as the exclusive state religion of the Roman Empire","Religious toleration throughout the Roman Empire","Full authority to the bishop of Rome over all churches","The adoption of the Nicene Creed as imperial law"], answer: 1 },
      { q: "The Donatist controversy centred on:", options: ["The nature of Christ","The validity of sacraments administered by clergy who had lapsed under persecution","The supremacy of the bishop of Rome","The books of the Old Testament canon"], answer: 1 },
      { q: "The Didache is:", options: ["A letter from the Apostle Paul to a local church","An early Christian manual on practice and church order","A formal defence of Christianity addressed to Roman emperors","A detailed account of a Christian martyrdom"], answer: 1 },
      { q: "Which early church theologian famously said 'I believe because it is absurd'?", options: ["Augustine","Origen","Tertullian","Justin Martyr"], answer: 2 }
    ]
  },

  // 
  // 2. CHURCH HISTORY 2
  // 
  {
    id: 2,
    code: "CHI 102",
    title: "Church History 2",
    icon: "",
    duration: 60,
    questions: [
      { q: "The Protestant Reformation is generally dated to begin in:", options: ["1415","1517","1543","1648"], answer: 1 },
      { q: "Martin Luther's primary grievance that sparked the Reformation was:", options: ["The Crusades against Muslims","The sale of indulgences to fund the building of St Peter's Basilica","The Inquisition against suspected heretics","The enforced celibacy of the priesthood"], answer: 1 },
      { q: "The Reformation principle 'sola scriptura' means:", options: ["Scripture and tradition together are equally authoritative","Scripture alone is the final and supreme authority for faith and practice","Scripture must be interpreted by the pope alone","Scripture is one of several equally valid authorities"], answer: 1 },
      { q: "John Calvin is most closely associated with:", options: ["Arminianism","Dispensationalism","Reformed theology with an emphasis on God's sovereign election","Wesleyan holiness theology"], answer: 2 },
      { q: "The Council of Trent (15451563) was the Catholic Church's response to:", options: ["The Crusades","The Great Schism between East and West","The Protestant Reformation","The Spanish Inquisition"], answer: 2 },
      { q: "The founder of Methodism was:", options: ["John Calvin","Martin Luther","John Wesley","George Whitefield"], answer: 2 },
      { q: "The Great Awakening of the 18th century was characterised by:", options: ["Intellectual rationalism and Enlightenment thinking","Widespread evangelical revival preaching and mass conversions","Social reform movements without spiritual emphasis","Liturgical and sacramental renewal"], answer: 1 },
      { q: "William Tyndale is significant in church history for:", options: ["Founding the Baptist denomination","Translating the Bible into English and dying as a martyr","Leading the Reformation in Switzerland","Organising the first Protestant missionary society"], answer: 1 },
      { q: "The Edinburgh Missionary Conference of 1910 is considered the birth of:", options: ["The Pentecostal movement","The modern ecumenical movement","Liberation theology","Neo-orthodoxy"], answer: 1 },
      { q: "The Azusa Street Revival of 1906 is associated with the birth of:", options: ["The modern Baptist denomination","The modern Pentecostal movement","The holiness movement","Reformed theology in America"], answer: 1 }
    ]
  },

  // 
  // 3. GENERAL BIBLE SURVEY
  // 
  {
    id: 3,
    code: "GBS 101",
    title: "General Bible Survey",
    icon: "",
    duration: 60,
    questions: [
      { q: "The Bible is divided into two major sections called:", options: ["The Law and the Prophets","The Old Testament and the New Testament","The Hebrew Bible and the Greek Bible","The Historical and Prophetic Books"], answer: 1 },
      { q: "The first five books of the Bible are collectively called:", options: ["The Writings","The Prophets","The Pentateuch","The History Books"], answer: 2 },
      { q: "The Septuagint is:", options: ["The original Hebrew Old Testament","An Aramaic paraphrase of the Old Testament","The Greek translation of the Old Testament","The Latin Vulgate translation of Scripture"], answer: 2 },
      { q: "The New Testament was originally written in which language?", options: ["Hebrew","Aramaic","Latin","Greek"], answer: 3 },
      { q: "The canon of Scripture refers to:", options: ["Church laws and regulations","The officially recognised collection of books accepted as authoritative Scripture","Theological commentaries and church creeds","The liturgical practices of the early church"], answer: 1 },
      { q: "Which is the longest book in the Bible?", options: ["Genesis","Isaiah","Jeremiah","Psalms"], answer: 3 },
      { q: "The New Testament contains how many books?", options: ["24","27","30","39"], answer: 1 },
      { q: "The central theme running through the entire Bible is:", options: ["The national history of the Jewish people","God's redemptive plan for humanity fulfilled in Jesus Christ","The moral teachings of the Hebrew prophets","The establishment and preservation of the nation of Israel"], answer: 1 },
      { q: "The four Gospels are accounts of:", options: ["The history of the early church from Pentecost onward","The life, ministry, death, and resurrection of Jesus Christ","Creation and the fall of humanity","Prophecies about Israel's future restoration"], answer: 1 },
      { q: "The book of Revelation belongs to which biblical literary genre?", options: ["Epistle","Historical narrative","Wisdom literature","Apocalyptic literature"], answer: 3 }
    ]
  },

  // 
  // 4. COUNSELLING 1
  // 
  {
    id: 4,
    code: "COU 101",
    title: "Counselling 1",
    icon: "",
    duration: 60,
    questions: [
      { q: "Counseling is described as being as old as:", options: ["Formal education","Man","Universities","The 20th century"], answer: 1 },
      { q: "A 'Client' is a counselee who:", options: ["Goes to church","Pays for services","Is a child","Is forced to attend"], answer: 1 },
      { q: "Sigmund Freud is regarded as the father of:", options: ["Education","Counseling","History","Science"], answer: 1 },
      { q: "The theory that focuses on Reality, Responsibility, and Right/Wrong is:", options: ["Psychoanalysis","Reality Therapy","Behavioral Counseling","Gestalt"], answer: 1 },
      { q: "Which personality aspect is the 'inner voice' or conscience?", options: ["Identity","Ego","Super-Ego","Libido"], answer: 2 },
      { q: "'Guidance' is considered to be:", options: ["Narrower than counseling","The broader area of function","The same as teaching","A type of punishment"], answer: 1 },
      { q: "Adolescence is often declared the:", options: ["Easiest time","Crisis period","Childhood stage","Retirement stage"], answer: 1 },
      { q: "Holland's 'Realistic' occupational environment prefers:", options: ["Teaching","Music","Mechanic/Electrician","Politics"], answer: 2 },
      { q: "'Projection' is a defense mechanism where one:", options: ["Tells the truth","Accuses another of what they are doing","Forgets the past","Cries for help"], answer: 1 },
      { q: "Behavioral Counseling assumes that human behaviors are:", options: ["Inherited only","Learnt","Unchangeable","Random"], answer: 1 },
      { q: "'Aged Counseling' deals with the period of:", options: ["Starting a career","Empty nest","Early childhood","Secondary school"], answer: 1 },
      { q: "The 'Investigative' type in RIASEC prefers:", options: ["Selling","Thinking/Science","Dancing","Helping"], answer: 1 },
      { q: "Counseling is a 'two-way traffic' because:", options: ["It happens on the road","The counselor and client both talk","It requires two counselors","It has two rules"], answer: 1 },
      { q: "'Extinction' in behavioral therapy means:", options: ["Giving a reward","Decreasing undesirable behavior","Increasing a habit","Moving to a new city"], answer: 1 },
      { q: "Who developed Reality Therapy?", options: ["Sigmund Freud","William Glasser","B.F. Skinner","Carl Jung"], answer: 1 },
      { q: "'Compensation' involves:", options: ["Paying money","Making a child achieve what you couldn't","Telling a lie","Fighting"], answer: 1 },
      { q: "The first 5 years of an individual are most important in which theory?", options: ["Behavioral","Psychoanalysis","Reality","Career"], answer: 1 },
      { q: "'Enterprising' individuals are skilled in:", options: ["Plumbing","Dominating and manipulating others","Nursing","Biology"], answer: 1 },
      { q: "Counseling is an 'applied' form of:", options: ["Math","Psychology","Physics","Geography"], answer: 1 },
      { q: "A 'Counselee' is typically found in:", options: ["Business offices","Schools and churches","Factories","Banks"], answer: 1 },
      { q: "Which Bible verse says 'people are saved in the multitude of counseling'?", options: ["John 3:16","Proverbs 11:14","Psalm 23","Genesis 1:1"], answer: 1 },
      { q: "'Rationalization' means giving a:", options: ["Moral/accepted reason for failure","Physical gift","False name","Loud shout"], answer: 0 },
      { q: "The 'Social' type in RIASEC avoids:", options: ["People","Intellectual activities","Teaching","Nursing"], answer: 1 },
      { q: "'Shaping' involves modifying behavior through:", options: ["Threats","Reinforcement","Silence","Reading"], answer: 1 },
      { q: "'Displacement' involves redirecting aggression onto:", options: ["A safer target","The original source","Yourself","No one"], answer: 0 },
      { q: "'Principles' in counseling mean:", options: ["Hobbies","Rules or theories","Decorations","Songs"], answer: 1 },
      { q: "Modern counseling forbids:", options: ["Discussion","Imposition or coercion","Listening","Planning"], answer: 1 },
      { q: "'Artistic' individuals prefer:", options: ["Book-keeping","Authorship and music","Traffic control","Sales"], answer: 1 },
      { q: "'Identity' in Freud's theory contains:", options: ["Logic","Sex and aggressive impulses","Conscience","Math skills"], answer: 1 },
      { q: "'Conventional' people love to:", options: ["Break rules","Obey rules and regulations","Paint","Direct plays"], answer: 1 },
      { q: "Individual counseling is better than group because it is:", options: ["Faster","Private and specific","Louder","More expensive"], answer: 1 },
      { q: "Christ is referred to as our:", options: ["Banker","Chief Counselor","Pilot","Lawyer"], answer: 1 },
      { q: "'Need Potentials' refers to behaviors directed toward:", options: ["Getting attention","Sleeping","Eating","Running"], answer: 0 },
      { q: "'Freedom of Movement' is the belief that patterns lead to:", options: ["Satisfaction or rewards","Failure","Jail","Old age"], answer: 0 },
      { q: "The 'Ego' is the:", options: ["Unconscious","Conscious and logical self","Conscience","Infant self"], answer: 1 },
      { q: "'Reaction Formation' involves:", options: ["Being honest","Expressing the opposite of original interest","Running away","Hiding"], answer: 1 },
      { q: "Career counseling helps people choose:", options: ["A spouse","A vocation they have ability for","A car","A house"], answer: 1 },
      { q: "African counseling sometimes includes a bit of:", options: ["Music","Command or imposition","Science","Technology"], answer: 1 },
      { q: "'RIASEC' stands for:", options: ["Realistic, Investigative, Artistic, Social, Enterprising, Conventional","Red, Indigo, Aqua, Silver, Emerald, Copper","Running, Inching, Acting, Sitting, Eating, Crying","None of the above"], answer: 0 },
      { q: "A 'Burdened mind' being 'off loaded' is:", options: ["Expensive","Therapeutic","Impossible","Scientific"], answer: 1 },
      { q: "Counseling deals with:", options: ["Only machines","People and their situations","Only animals","Weather patterns"], answer: 1 },
      { q: "'Sublimation' involves:", options: ["Redirecting energy to something else","Giving up","Fighting","Sleeping"], answer: 0 },
      { q: "'Aged' people may have maintenance problems with:", options: ["Their toys","Gigantic buildings/estates","Their bicycles","Their homework"], answer: 1 },
      { q: "'Educational Counseling' helps youths choose:", options: ["Lunch","Courses of study","Clothes","Music"], answer: 1 },
      { q: "In Behavioral counseling, nobody is initially:", options: ["Human","Totally good or bad","Alive","Awake"], answer: 1 },
      { q: "'Need Value' requires drawing a:", options: ["Picture","Scale of preference","Map","Circle"], answer: 1 },
      { q: "'Reality therapy' does NOT permit using what as an excuse?", options: ["The Bible","Past events","The future","Money"], answer: 1 },
      { q: "Counseling is bound to meet needs if the counselee is ready to:", options: ["Pay","Open-up","Run","Sing"], answer: 1 },
      { q: "'Identity' is the original system consisting of the:", options: ["Adult","Infant","Elder","Teacher"], answer: 1 },
      { q: "'Guidance and Counseling' go together in:", options: ["Professional settings","The market","The farm","The forest"], answer: 0 }
    ]
  },

  // 
  // 5. COUNSELLING 2
  // 
  {
    id: 5,
    code: "COU 102",
    title: "Counselling 2",
    icon: "",
    duration: 60,
    questions: [
      { q: "The first principal reason for marriage is:", options: ["Children","Mutual fellowship","Money","Sex"], answer: 1 },
      { q: "Loneliness is described in the notes as:", options: ["Good","Not good and dangerous","Essential","A choice"], answer: 1 },
      { q: "The second principal reason for marriage is to check:", options: ["Finances","Sinful life of adultery/fornication","Politics","Neighbors"], answer: 1 },
      { q: "The 'least' of the three principal reasons for marriage is:", options: ["Fellowship","Child bearing","Holiness","Support"], answer: 1 },
      { q: "'Two are better than one' is a quote from:", options: ["Genesis","Ecclesiastes","Revelation","Jude"], answer: 1 },
      { q: "Marriage is NOT a:", options: ["casual relationship","business","sacrament","union"], answer: 0 },
      { q: "A 'Fallacy of Marriage' is thinking that:", options: ["God instituted it","Absence of children invalidates it","It requires prayer","It is for adults"], answer: 1 },
      { q: "According to the notes, 'Incompatibility' is a:", options: ["Reason for divorce","Very good reason for marriage","Sin","Myth"], answer: 1 },
      { q: "Christian marriage is defined as:", options: ["One-man-many-wives","One-man-one-wife","Many-men-one-wife","None of the above"], answer: 1 },
      { q: "The 'Divine Aura' of religion is NOT:", options: ["enhanced by marriage","destroyed by marriage","real","spiritual"], answer: 1 },
      { q: "A sign-post of maturity for marriage is:", options: ["Owning a car","Feelings of loneliness","Having a degree","Traveling"], answer: 1 },
      { q: "'Parental Pressure' should be viewed by young adults as a:", options: ["Curse","Signal/Green light","Reason to run","Sin"], answer: 1 },
      { q: "The number one condition for knowing God's will is:", options: ["Money","New birth","Beauty","Speed"], answer: 1 },
      { q: "'Meekness and obedience' help a person stay in God's:", options: ["Permissive will","Perfect will","Bad books","Way"], answer: 1 },
      { q: "Practical steps to knowing God's will include:", options: ["Guessing","Fervent prayer and fasting","Asking the internet","Sleeping"], answer: 1 },
      { q: "'Word of Wisdom' (1 Cor 12:8) can reveal:", options: ["Past sins only","Something about the future","Math answers","Recipes"], answer: 1 },
      { q: "God can guide through 'favourable circumstances,' but we must look for:", options: ["Money","The peace of God","Loud noises","Easy paths only"], answer: 1 },
      { q: "'Spiritual Consideration' means a Christian should never marry:", options: ["A tall person","An unbeliever","A poor person","A foreigner"], answer: 1 },
      { q: "'Beauty is in the eye of the':", options: ["Beholder","Counselor","Pastor","Parent"], answer: 0 },
      { q: "Economic consideration requires that intending couples be:", options: ["Millionaires","Gainfully employed","Borrowing money","Unemployed"], answer: 1 },
      { q: "'Inferiority complex' might arise if the woman is:", options: ["Taller","More knowledgeable/educated","Younger","Faster"], answer: 1 },
      { q: "In a '35-year-old sister/25-year-old brother' marriage, the man should treat the wife as:", options: ["A servant","A mother","A child","An enemy"], answer: 1 },
      { q: "In Yoruba land, a son-in-law greets by:", options: ["Shaking hands","Prostrating","Waving","Saluting"], answer: 1 },
      { q: "'Christian Courtship' is a period to:", options: ["Have sex","Study each other","Hide secrets","Fight"], answer: 1 },
      { q: "Informing the Pastor about a choice helps to:", options: ["Expose gamblers","Collect taxes","Buy a house","Increase social media followers"], answer: 0 },
      { q: "Marriage relationship is described as:", options: ["Inferior to friendship","Supreme and superior to all other relationships","Just a contract","A burden"], answer: 1 },
      { q: "'Woe to him that is alone' is found in:", options: ["Gen 1","Eccl 4","Rev 20","Matt 5"], answer: 1 },
      { q: "'Knowledge puffeth up' is found in:", options: ["1 Cor 8:1","John 3:16","Ex 20","Ps 23"], answer: 0 },
      { q: "Intending couples should make 'restitution' for:", options: ["Good deeds","Past bad experiences","Future plans","Hobbies"], answer: 1 },
      { q: "The 'Author of Marriage' is:", options: ["The Government","God Almighty","The Pastor","The Parent"], answer: 1 },
      { q: "'Procreation' is another word for:", options: ["Fellowship","Child bearing","Eating","Working"], answer: 1 },
      { q: "Mystics sometimes wrongly teach that sex in marriage is:", options: ["Holy","A defilement of spirituality","Good","Mandatory"], answer: 1 },
      { q: "'Leaving and Cleaving' is found in:", options: ["Gen 2:24","Rev 1:1","Mal 3:10","Est 4:14"], answer: 0 },
      { q: "A person who can manage a home successfully is fit to be a:", options: ["Pastor","Driver","Cook","Singer"], answer: 0 },
      { q: "God gave man a 'bisexual' means of:", options: ["Working","Propagating the human race","Singing","Traveling"], answer: 1 },
      { q: "'Sex drive' remains even after:", options: ["Sleeping","Regeneration","Eating","Walking"], answer: 1 },
      { q: "A 'Threefold cord' is:", options: ["Easily broken","Not quickly broken","Made of gold","Red"], answer: 1 },
      { q: "'Physical consideration' includes:", options: ["Bank balance","Height and complexion","Church attendance","Car model"], answer: 1 },
      { q: "'Economic status' should:", options: ["Not matter","Glorify God","Be kept secret","Be very low"], answer: 1 },
      { q: "'Discerning of Spirits' helps to know a:", options: ["Ghost","Deceiver from the genuine choice","Rich person","Good cook"], answer: 1 },
      { q: "'Courtship' should involve receiving consent from:", options: ["The neighbors","Parents","The news","Strangers"], answer: 1 },
      { q: "A 'Counterfeit' believer is:", options: ["Hard to differentiate","Always green","Very loud","Rich"], answer: 0 },
      { q: "'Moral codes' between partners should:", options: ["Be different","Not differ","Be ignored","Be secret"], answer: 1 },
      { q: "'Social background' identifies differences in:", options: ["Hair color","Social class","Shoe size","Car speed"], answer: 1 },
      { q: "'Meekness' is a condition for:", options: ["Fasting","Knowing God's will","Working","Running"], answer: 1 },
      { q: "God may block a way through:", options: ["Favour","Unfavourable circumstances","Money","Gifts"], answer: 1 },
      { q: "'Restitution' should be done during:", options: ["The honeymoon","Courtship","Old age","Childhood"], answer: 1 },
      { q: "Marriage provides:", options: ["Social security","High taxes","Diseases","Loneliness"], answer: 0 },
      { q: "'Empty Nest' refers to:", options: ["A bird house","Children leaving home","Poverty","A new house"], answer: 1 },
      { q: "'Marriage is a business' that produces:", options: ["Losses","High dividends of social security/warmth","Only children","Dust"], answer: 1 }
    ]
  },

  // 
  // 6. CHURCH ADMIN
  // 
  {
    id: 6,
    code: "CAD 301",
    title: "Church Admin",
    icon: "",
    duration: 60,
    questions: [
      { q: "Church administration is best described as:", options: ["Managing church finances and physical property alone","The stewardship of people, resources, and programs to accomplish the church's God-given mission","The exclusive responsibility of the church secretary and office staff","Planning and coordinating the Sunday worship service"], answer: 1 },
      { q: "The biblical basis for church organisation includes:", options: ["Exodus 18 (Jethro's advice to Moses) and Acts 6 (appointment of deacons)","Genesis 1 and Revelation 22","The Psalms and the book of Proverbs","The Sermon on the Mount and Romans 12"], answer: 0 },
      { q: "The role of deacons in Acts 6:1-7 was:", options: ["To preach the Word of God in synagogues","To guard and oversee sound doctrine","To serve the practical and social needs of the community","To administer water baptism and the Lord's Supper"], answer: 2 },
      { q: "Stewardship in church administration refers to:", options: ["The exclusive responsibilities of the church treasurer","The faithful, accountable management of all resources God has entrusted to the church","Organising fundraising events and building campaigns","Maintaining and managing church buildings and equipment"], answer: 1 },
      { q: "Strategic planning in a church context involves:", options: ["Setting the annual operating budget alone","Defining mission, vision, values, goals, and strategies to fulfil God's purposes","Managing and scheduling the annual church calendar","Implementing numerical church growth techniques"], answer: 1 },
      { q: "The three major forms of church government are:", options: ["Monarchical, Democratic, and Parliamentary","Episcopal, Presbyterian, and Congregational","Hierarchical, Egalitarian, and Complementarian","Apostolic, Elder-led, and Deacon-led"], answer: 1 },
      { q: "Best-practice financial accountability in a church requires:", options: ["One trusted person handling all church funds with complete autonomy","Dual-signature controls, segregation of duties, and transparent financial reporting","Keeping all financial records confidential from the general congregation","Informal cash-only collection and distribution methods for simplicity"], answer: 1 },
      { q: "Effective communication in church administration is vital because:", options: ["It creates a favourable impression of the pastor's leadership ability","It keeps all leaders and members informed, aligned, and able to collaborate effectively","It replaces the necessity of detailed planning and coordination","It demonstrates the senior pastor's broad knowledge and influence"], answer: 1 },
      { q: "Personnel management in a church includes:", options: ["Hiring exclusively from the pastor's personal family or social network","Recruiting, developing, supporting, and evaluating ministry staff and volunteers","Delegating all personnel decisions entirely to department heads","Avoiding any formal performance review of church staff members"], answer: 1 },
      { q: "The concept of 'vision' in church administration refers to:", options: ["A prophetic trance or supernatural visionary experience","A clear, compelling picture of God's preferred future for the church and its ministry","A detailed annual financial forecast and budget projection","A specific building construction or campus expansion plan"], answer: 1 }
    ]
  },

  // 
  // 7. BASIC DOCTRINE
  // 
  {
    id: 7,
    code: "BDC 101",
    title: "Basic Doctrine",
    icon: "",
    duration: 60,
    questions: [
      { q: "What does the word 'Doctrine' basically mean?", options: ["A creed or confession of faith", "Teaching or instruction", "A set of church rules", "The study of God"], answer: 1 },
      { q: "What are the two types of doctrine?", options: ["Old and New Doctrine", "Catholic and Protestant Doctrine", "Sound (True) Doctrine and False Doctrine", "Written and Oral Doctrine"], answer: 2 },
      { q: "What is Bibliology?", options: ["The study of salvation and redemption", "The study of God's attributes and characteristics", "The study of the characters in the Bible", "The study of the history of the church"], answer: 2 },
      { q: "What is Theology Proper?", options: ["The study of the persons, baptism and gifts of the Holy Spirit", "The study of the person of Christ", "The study of God's attributes and characteristics", "The study of the last days' events"], answer: 2 },
      { q: "What is Christology?", options: ["The study of salvation", "The study of the person of Christ", "The study of the history of the church", "The study of Angels"], answer: 1 },
      { q: "What is Pneumatology?", options: ["The study of the origin, nature and fall of man", "The study of the last days' events", "The study of Angels, both godly and satanic", "The study of the persons, baptism and gifts of the Holy Spirit"], answer: 3 },
      { q: "What is Angelology?", options: ["The study of salvation, repentance and regeneration", "The study of Angels, both godly and satanic", "The study of the history and doctrines of the church", "The study of the person of Christ"], answer: 1 },
      { q: "What is Ecclesiology?", options: ["The study of the last days' events", "The study of God's attributes", "The study of the history and doctrines of the church", "The study of Angels"], answer: 2 },
      { q: "What is Anthropology in doctrine?", options: ["The study of salvation and sanctification", "The study of the origin, nature and fall of man and his present responsibilities and destiny", "The study of culture and human civilisation", "The study of the persons of the Holy Trinity"], answer: 1 },
      { q: "What is Soteriology?", options: ["The study of the last days and second coming of Christ", "The study of the history of the church", "The study of Angels", "The study of salvation, repentance, regeneration, adoption, restitution and sanctification"], answer: 3 },
      { q: "What is Eschatology?", options: ["The study of salvation", "The study of the last days' events preceding the second coming of Christ", "The study of the origin of man", "The study of the Holy Spirit"], answer: 1 },
      { q: "Which of the following is NOT listed as a truth that Full Gospel Churches must know?", options: ["The Trinity in Unity", "Water Baptism and Sanctification", "Church Architecture and Worship Styles", "Divine Healing and the Second Coming"], answer: 2 },
      { q: "What does the word 'Trinity' signify?", options: ["The three books of the Bible", "Three separate and independent Gods", "The union of three persons who make the GODHEAD: Father, Son and Holy Spirit", "Three manifestations of the same person"], answer: 2 },
      { q: "Is the phrase 'Trinity in Unity' found directly in Scripture?", options: ["Yes, it is found in Matthew 28:19", "Yes, it appears in John 17", "No, but its roots are deeply embedded in Scripture", "No, it was invented by the Catholic Church"], answer: 2 },
      { q: "What does 'Trinity' mean as an abbreviation?", options: ["Three equal gods united in purpose", "The abbreviation of 'tri-unity,' denoting one simple substance with a threefold modification", "Three different manifestations of one person", "Three divine beings in perfect harmony"], answer: 1 },
      { q: "According to the Bible's teachings on the Trinity, which statement is TRUE?", options: ["The Father, Son and Holy Spirit share the same personality", "Only the Father holds divine titles", "Divine works are ascribed to each Person of the Trinity", "The three Persons are ranked in order of importance"], answer: 2 },
      { q: "What does it mean that the three Persons of the Trinity are Co-existent, Co-eternal and Co-equal?", options: ["They were created at the same time and are equal in age", "They exist together eternally, are equal in Power and Glory, and none is inferior to the other", "They share the same body and consciousness", "They agreed to work together at the beginning of creation"], answer: 1 },
      { q: "Who first used the word 'Trinity' in theological history?", options: ["Augustine of Hippo", "Origen of Alexandria", "Theophilus of Antioch (AD 181 or 188)", "Constantine the Great"], answer: 2 },
      { q: "Which of the following is a heresy about the Trinity?", options: ["The belief that God is one but with three distinct centres of consciousness", "The belief that all three Persons are co-equal and co-eternal", "The teaching that there are three gods", "The belief that the Bible teaches the Trinity"], answer: 2 },
      { q: "What does the Athanasian Creed (Apostolic Creed) state?", options: ["That God exists in three separate bodies", "That we worship one God in Trinity and Trinity in unity", "That the Father is greater than the Son", "That the Holy Spirit is a force, not a person"], answer: 1 },
      { q: "Which Old Testament passage is cited as implying the Doctrine of the Trinity through God speaking in the plural?", options: ["Psalms 23:1", "Genesis 1:26", "Deuteronomy 6:4", "Exodus 20:3"], answer: 1 },
      { q: "Why is it important to study the doctrine of man?", options: ["Because man is the centre of the universe", "Because all the doctrines of grace are definitely related to man", "Because man created himself independently", "Because man has no need for redemption"], answer: 1 },
      { q: "According to the Bible, how did man come into existence?", options: ["Man evolved from lower life forms over millions of years", "Man was created by God in His own image (Genesis 1:27)", "Man was created by angels on God's behalf", "Man has always existed alongside God"], answer: 1 },
      { q: "What is the nature of man according to I Thessalonians 5:23?", options: ["Dual: body and soul only", "Single: man is purely physical", "Tripartite: Spirit, Soul and Body", "Quadripartite: spirit, mind, soul and body"], answer: 2 },
      { q: "In Genesis 2:7, what does 'breathed into his nostrils the breath of life' refer to?", options: ["Man's body being formed from dust", "Man's spirit as it came from God", "Man becoming a living soul", "The Holy Spirit descending on man"], answer: 1 },
      { q: "Who was the chief agent in Adam's fall?", options: ["Eve, who tempted Adam directly", "God, who allowed the temptation", "Satan, the Arch agent and chief tempter", "The serpent acting independently"], answer: 2 },
      { q: "Through which three processes did sin enter the human race?", options: ["Pride, rebellion and murder", "Satan's enticement, Deception and Disobedience", "Adultery, idolatry and murder", "Ignorance, weakness and temptation"], answer: 1 },
      { q: "What was one of the judgments pronounced on the woman after the fall?", options: ["She would be separated from God forever", "She would lose her ability to speak", "She would experience multiplied pain during childbirth", "She would become mortal immediately"], answer: 2 },
      { q: "How was the redemption of man typified after the fall in the Garden of Eden?", options: ["Through the building of an altar by Adam", "Through the provision of 'coats and skins' as clothing by God", "Through the planting of a new garden", "Through the promise of a new law"], answer: 1 },
      { q: "What does Psalm 148:25 tell us about angels?", options: ["That angels are more powerful than men", "That angels were created at God's command", "That angels are equal to God", "That angels chose to serve God voluntarily"], answer: 1 },
      { q: "Which angel announced to the Virgin Mary that she was to be the mother of the Redeemer?", options: ["Michael", "Raphael", "Gabriel", "Uriel"], answer: 2 },
      { q: "Which of the following correctly describes the physical nature of angels?", options: ["They have physical bodies similar to humans", "They are ageless, non-corporeal and possess supernatural strength", "They age slowly over centuries", "They can only exist in heaven"], answer: 1 },
      { q: "What is the primary purpose of God's good angels?", options: ["To rule over nations on God's behalf", "To record the deeds of all humans", "To serve as Ministering Spirits to help believers and protect them from evil angels", "To carry out God's judgments only"], answer: 2 },
      { q: "According to Matthew 15:3, what is sin?", options: ["Failing to attend church regularly", "Transgressing the law of God", "Thinking evil thoughts only", "Associating with wicked people"], answer: 1 },
      { q: "Where did sin originate and what was Satan's original name?", options: ["Sin originated with Adam; Satan had no other name", "Sin originated in the Garden of Eden; Satan's name was Beelzebub", "Sin originated with Satan, whose original name was Lucifer, son of the morning", "Sin originated with Eve; Satan's name was Abaddon"], answer: 2 },
      { q: "What is the 'Second Death' as a penalty of sin?", options: ["Physical death of the body", "Separation from family and friends", "Spiritual separation from the church", "The final separation from God when wicked souls are cast into the lake of fire"], answer: 3 },
      { q: "Which of the following is NOT listed among the seven deadly sins as classified by theologians?", options: ["Pride and Anger", "Gluttony and Murder", "Cowardice and Doubt", "Idolatry and Flattery"], answer: 2 },
      { q: "Who paid for the penalties of our sins?", options: ["The High Priest through animal sacrifice", "The Lord Jesus Christ through His self-sacrificial redemptive death", "Every individual must pay for their own sins", "The church through intercessory prayer"], answer: 1 },
      { q: "What is salvation described as in this course?", options: ["A reward given to those who perform good works", "The main theme of the Gospel and the most important message given to man", "A ritual performed at baptism", "A feeling of peace that comes through meditation"], answer: 1 },
      { q: "What are the four great barriers between God and man?", options: ["Pride, Anger, Adultery and Idolatry", "Ignorance, Poverty, Sickness and Death", "The Character of God, Debt to Sin, Slavery to Satan and Spiritual Death", "The Law, the Prophets, the Temple and the Sacrifice"], answer: 2 },
      { q: "Which attribute of God means He knows what has happened, is happening and will happen?", options: ["Omnipotent", "Omnipresent", "Omniscient", "Immutable"], answer: 2 },
      { q: "Where is man's 'certificate of debt to sin' mentioned in the Bible?", options: ["Romans 3:23", "Colossians 2:14", "Ephesians 2:8", "John 3:16"], answer: 1 },
      { q: "What does the Bible say about man's slavery to Satan?", options: ["Only the wicked are slaves to Satan", "Slavery to Satan begins at the age of accountability", "We are all born into slavery to Satan (I John 5:9; Acts 26:18)", "Satan has no real power over mankind"], answer: 2 },
      { q: "What is spiritual death?", options: ["The physical death of the body", "The state of separation from God that sin causes, cutting off communication with Him", "The death of a church or ministry", "The loss of one's spiritual gifts"], answer: 1 },
      { q: "Which of the following is listed as one of the seven reasons why God became man?", options: ["To destroy the Roman Empire", "To write the New Testament personally", "To be a mediator between God and man (I Timothy 2:5)", "To establish a physical kingdom on earth immediately"], answer: 2 },
      { q: "Which of the following is NOT a condition of salvation according to the course material?", options: ["Godly Sorrow and Repentance", "Confession and Restitution", "Water Baptism as the first step", "Prayer and Faith"], answer: 2 },
      { q: "What is Sanctification defined as?", options: ["A one-time event that occurs only at salvation", "Separation unto God and separation from evil", "The act of being baptised in water", "The process of memorising Scripture"], answer: 1 },
      { q: "Why is Sanctification called the 'Second Work of Grace'?", options: ["Because it happens two years after salvation", "Because it requires two separate baptisms", "Because sin exists in two forms: actual sin committed and the inherited sinful nature", "Because it is mentioned twice in the New Testament"], answer: 2 },
      { q: "Through which of the following does Sanctification come?", options: ["Fasting alone for 40 days", "Church membership and regular attendance", "The Word, the Blood, a new heart (Ezekiel 36:26) and cooperation with God", "Speaking in tongues and prophesying"], answer: 2 },
      { q: "What is the only condition for adoption into God's family?", options: ["Water baptism and church membership", "Faith in Christ Jesus (Galatians 3:26)", "A life of perfect holiness", "Tithing and consistent prayer"], answer: 1 }
    ]
  },

  // 
  // 8. THEOLOGY
  // 
  {
    id: 8,
    code: "THE 301",
    title: "Theology",
    icon: "",
    duration: 60,
    questions: [
      { q: "The word 'Theology' comes from the Greek theos and:", options: ["Bios","Logos","Sophia","Ethos"], answer: 1 },
      { q: "Theology in the 'narrow sense' refers to the:", options: ["Study of everything","Study of the doctrine of God","Study of plants","Study of stars"], answer: 1 },
      { q: "God is described as:", options: ["Material","Spirit and invisible","A force only","A machine"], answer: 1 },
      { q: "'Theology does not create but':", options: ["invents","discovers facts about God","guesses","hides"], answer: 1 },
      { q: "The 'Primary level' of knowledge about God is:", options: ["His nature","His existence","His acts","His age"], answer: 1 },
      { q: "Romans 1:20 says God's eternal nature is:", options: ["Hidden","Clearly perceived in things made","A secret","Only for priests"], answer: 1 },
      { q: "The argument that the universe has a cause is the:", options: ["Teleological","Cosmological","Ontological","Moral"], answer: 1 },
      { q: "The 'Teleological Argument' focuses on:", options: ["Being","Harmony, order, and design","Right vs. Wrong","Logic only"], answer: 1 },
      { q: "The 'Moral Argument' starts from man's:", options: ["Strength","Conscience (ability to differentiate right/wrong)","Money","Speed"], answer: 1 },
      { q: "'Ontological' is derived from a word meaning:", options: ["End","Being","Power","Love"], answer: 1 },
      { q: "General Revelation consists of God's communication through:", options: ["Only the Bible","His works (nature/history)","Dreams only","Loud voices"], answer: 1 },
      { q: "'Special Revelation' includes:", options: ["Nature","Personal manifestations or words","Rain","Sunsets"], answer: 1 },
      { q: "The most unique Special Revelation is:", options: ["An angel","The Lord Jesus Christ","A tree","A king"], answer: 1 },
      { q: "'Deism' believes God:", options: ["Is in everything","Withdrew after creation","Does not exist","Is many"], answer: 1 },
      { q: "'Atheism' believes:", options: ["In one God","God does not exist","In two gods","God is a force"], answer: 1 },
      { q: "'Pantheism' teaches that:", options: ["God is separate","God is in everything","There is no God","God is changing"], answer: 1 },
      { q: "'Polytheism' is the worship of:", options: ["One God","More than one God","No God","Animals"], answer: 1 },
      { q: "'Dualism' believes in:", options: ["One God","Two equal gods (Good and Bad)","Three gods","Ten gods"], answer: 1 },
      { q: "'Monotheism' teaches the existence of:", options: ["Many gods","Only one God","No God","Two gods"], answer: 1 },
      { q: "The generic Hebrew name for God is:", options: ["Yahweh","Elohim","Adonai","Shaddai"], answer: 1 },
      { q: "'Elohim' is in the plural form, signifying:", options: ["Weakness","Greatness, majesty, or the Trinity","Confusion","Many kings"], answer: 1 },
      { q: "The personal name of God is:", options: ["Elohim","Yahweh/Jehovah","Adonai","Baal"], answer: 1 },
      { q: "'I AM THAT I AM' is expressed in:", options: ["Gen 1","Exodus 3:14","Rev 1","John 1"], answer: 1 },
      { q: "'Adonai' connotes:", options: ["Strength","Ownership, rulership, or mastership","Love","Peace"], answer: 1 },
      { q: "'EL-Shaddai' means:", options: ["Most High God","Almighty God","Everlasting God","Jealous God"], answer: 1 },
      { q: "'EL-Olam' means:", options: ["Holy One","Everlasting God","Living God","Gracious God"], answer: 1 },
      { q: "'Jehovah Jireh' means the Lord who:", options: ["Heals","Provides","Sanctifies","Is Peace"], answer: 1 },
      { q: "'Jehovah Rapha' means the Lord who:", options: ["Provides","Heals","Is my Banner","Shepherd"], answer: 1 },
      { q: "'Jehovah Shalom' means the Lord is my:", options: ["Banner","Peace","Righteousness","Shepherd"], answer: 1 },
      { q: "'Jehovah Rohi' means the Lord my:", options: ["Peace","Shepherd","Provider","Sanctifier"], answer: 1 },
      { q: "Communicable attributes are shared with:", options: ["No one","Man","Machines","Angels only"], answer: 1 },
      { q: "An 'Incommunicable' attribute is:", options: ["Love","Self-existence","Faithfulness","Mercy"], answer: 1 },
      { q: "'God is Spirit' was said by Jesus to the:", options: ["Pharisees","Samaritan woman","Apostles","Pilate"], answer: 1 },
      { q: "The three essentials of 'Personality' are Intellect, Emotion, and:", options: ["Money","Will","Body","Speed"], answer: 1 },
      { q: "'Theology' literally means:", options: ["Study of life","Study of God","Study of books","Study of man"], answer: 1 },
      { q: "'Spirituality of God' means He has no:", options: ["Power","Flesh and bone","Name","Will"], answer: 1 },
      { q: "'Omniscience' means God knows:", options: ["Some things","Everything","Nothing","Only the past"], answer: 1 },
      { q: "'Omnipotence' means God is:", options: ["Everywhere","All-powerful","All-knowing","Kind"], answer: 1 },
      { q: "'Agnosticism' denies the possibility of:", options: ["Living","Knowledge about God","Working","Dying"], answer: 1 },
      { q: "'Theism' is the belief in a:", options: ["Personal God","Machine","Force","Idea"], answer: 0 },
      { q: "'Divine Attributes' are characteristics of the:", options: ["Human nature","Divine nature","Angels","Demons"], answer: 1 },
      { q: "'Special Revelation' is necessary because General Revelation does not reveal:", options: ["Trees","Solution for sinners","Rain","History"], answer: 1 },
      { q: "'Theophany' is a:", options: ["Visible manifestation of God","Type of food","Book","Song"], answer: 0 },
      { q: "In the New Testament, 'Theos' occurs more than how many times?", options: ["100","1000","5000","10,000"], answer: 1 },
      { q: "'Moral Attributes' include:", options: ["Eternity","Love and holiness","Immensity","Size"], answer: 1 },
      { q: "'Jehovah Nissi' means the Lord my:", options: ["Peace","Banner","Provider","Shepherd"], answer: 1 },
      { q: "'Jehovah Tsidkenu' means the Lord our:", options: ["Peace","Righteousness","Healer","Sanctifier"], answer: 1 },
      { q: "'Revelation' means:", options: ["Man finding God","God finding man/sharing secrets","Guessing","Thinking hard"], answer: 1 },
      { q: "'Can two walk together except they be agreed?' is from:", options: ["Gen 1","Amos 3:3","John 3","Rev 22"], answer: 1 },
      { q: "'Systematic Theology' is a branch of:", options: ["Math","Christian doctrine","Biology","Law"], answer: 1 }
    ]
  },

  // 
  // 9. PNEUMATOLOGY
  // 
  {
    id: 9,
    code: "PNE 301",
    title: "Pneumatology",
    icon: "",
    duration: 60,
    questions: [
      { q: "Pneumatology is the theological study of:", options: ["Prayer and the spiritual disciplines","The doctrine of the Church","The Person and work of the Holy Spirit","The doctrine of salvation"], answer: 2 },
      { q: "The Holy Spirit in the Old Testament was:", options: ["Absent and not active until the day of Pentecost","Present only within the Holy of Holies of the Tabernacle","Active in creation, empowering individuals, and inspiring Scripture","Equal to God the Father only from the New Testament era onward"], answer: 2 },
      { q: "The baptism of the Holy Spirit at Pentecost is recorded in:", options: ["John 14","Acts 2","Romans 8","1 Corinthians 12"], answer: 1 },
      { q: "The fruit of the Spirit as listed in Galatians 5:22-23 includes:", options: ["Tongues, prophecy, and healing","Faith, hope, love, and justice","Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control","Wisdom, knowledge, understanding, and counsel"], answer: 2 },
      { q: "The gifts of the Holy Spirit (charismata) are given:", options: ["To all believers in exactly equal measure","Exclusively to ordained church leaders","To believers as the Spirit wills, for the common good of the entire body","Only through the formal rite of ordination"], answer: 2 },
      { q: "The unforgivable sin against the Holy Spirit described by Jesus is best understood as:", options: ["Denying Christ under severe persecution","Persistent, final, and wilful rejection of the Spirit's testimony concerning Christ","Speaking against the organised institutional church","Any serious sin left unconfessed at the time of physical death"], answer: 1 },
      { q: "Cessationism holds that:", options: ["All spiritual gifts listed in Scripture continue fully until Christ's return","Certain miraculous gifts ceased with the closing of the apostolic age","The Holy Spirit is no longer active in the world in any way","Only the gift of speaking in tongues has permanently ceased"], answer: 1 },
      { q: "Continuationism holds that:", options: ["Only those spiritual gifts historically practiced are valid today","All spiritual gifts listed in the New Testament continue to operate in the Church today","Spiritual gifts permanently ceased when the last apostle died","Only the fruit of the Spirit matters for contemporary believers"], answer: 1 },
      { q: "Jesus described the Holy Spirit as the 'Paraclete', which means:", options: ["Comforter, Helper, Advocate, and Counsellor","Judge and corrector of wrong doctrine in the church","Creator and sustainer of all physical life","The one who sends and receives the prayers of believers"], answer: 0 },
      { q: "The Holy Spirit's role in the inspiration of Scripture is best described as:", options: ["Mechanical dictation — God dictated exact words, completely bypassing the human writers","Moving human authors to write God's Word while fully preserving their personalities and writing styles","Simply approving writings that the apostles had already composed independently","Providing only general spiritual guidance without controlling the actual content"], answer: 1 }
    ]
  },

  // 
  // 10. CHRISTIAN EDUCATION
  // 
  {
    id: 10,
    code: "REE 121",
    title: "Christian Education",
    icon: "",
    duration: 60,
    questions: [
      { q: "According to the Oxford Advanced Learners' Dictionary, education is best described as which of the following?", options: ["The memorisation of facts and figures for examination purposes","A system of training and instruction designed to give knowledge and skills","A religious exercise that results in spiritual transformation","The process of learning the culture and traditions of one's people alone"], answer: 1 },
      { q: "Which of the following is the most complete definition of education from the course material?", options: ["Education is a means of assisting an individual to acquire knowledge and skills for development and future progress","Education is only the process of attending school and passing examinations","Education is the accumulation of religious texts and doctrines","Education means learning a trade or craft from a master craftsman"], answer: 0 },
      { q: "What is Teaching defined as in the course material?", options: ["The passive transfer of information from books to students","An art of creating conditions in the mind of the learner whereby he is able to learn or acquire skills and specialised knowledge","The act of administering examinations to evaluate student performance","A formal lecture method of disseminating religious doctrines"], answer: 1 },
      { q: "Which of the following correctly describes the 'Lecture Method' of teaching?", options: ["The teacher allows pupils to discover truth by participating in discussions","Students learn by self-effort under a laid-out format from the teacher","The teacher disseminates facts to pupils who listen and take notes, with questions allowed at the end","The teacher uses real-life stories and parables to illustrate themes"], answer: 2 },
      { q: "What are the three distinct stages of the learning process as described in the course?", options: ["Reading, Writing and Arithmetic","Memorisation, Examination and Graduation","Reproduction, Interpretation and Application","Observation, Participation and Evaluation"], answer: 2 },
      { q: "What does the 'Application' stage of learning involve?", options: ["The learner gives their own opinion of what they have been taught","Knowledge, skill or art that has been acquired is now practised in day-to-day living situations","The pupil reproduces the lesson in their own language","The teacher asks life-related questions and gives examples"], answer: 1 },
      { q: "What is LEARNING defined as in this course?", options: ["The process of going to school every day","The process of acquisition of knowledge, skills and experience imparted by the teacher for the profit of the student","The repetition of facts until they are memorised","A formal religious ceremony conducted to initiate new church members"], answer: 1 },
      { q: "Which teaching method uses real-life stories and parables, as Jesus did in His ministry?", options: ["The Lecture Method","The Project Method","The Recitation Method","The Story-telling Method"], answer: 3 },
      { q: "According to the teaching task, in order to bring about desired change, what must the teacher do FIRST?", options: ["Evaluate the progress of the students","Prescribe learning activities for the fulfilment of objectives","Determine what the learners already know","Design experiences that lead to change"], answer: 2 },
      { q: "What does the Discussive Method of teaching allow?", options: ["The teacher to deliver facts while students take notes silently","Students to learn by self-effort under a format produced by the teacher","Pupils to participate with the teacher in discovering truth as they all reason together","The teacher to tell stories that illustrate a theme in a lesson"], answer: 2 },
      { q: "How is Christian Education defined in this course?", options: ["The study of church history and ecclesiastical traditions","The acquisition of the knowledge of GOD or Christ-like culture through the study of the life and teachings of Jesus Christ as illustrated in the Bible","A programme for teaching children how to memorise Bible verses","The administration of sacraments and rituals in the church"], answer: 1 },
      { q: "What is the ultimate goal of Christian Education for the saved person?", options: ["To become a pastor or church leader","To memorise the entire Bible","To lead to a personal saving faith in Christ, Conversion and growth into spiritual maturity (Eph. 4:13)","To pass Bible College examinations with distinction"], answer: 2 },
      { q: "From what period of life is Christian Education needed?", options: ["Only from age 18 upwards when one becomes an adult","Only during childhood and teenage years","From the cradle to the grave — no one is exempted","Only after water baptism"], answer: 2 },
      { q: "What teaching commission did Jesus Christ give the church before ascending to heaven?", options: ["To build cathedrals and sanctuaries around the world","To 'go and teach all nations' — the Great Commission (Matt. 28:19-20)","To only preach the gospel without teaching","To establish religious schools exclusively for children"], answer: 1 },
      { q: "What danger does the course warn the church about regarding Christian Education in the 'Last Days'?", options: ["That church attendance would decline rapidly","That many are being diverted from sound scripture doctrine to be seduced by fables and doctrines of the devil (1Tim. 4:1-3)","That Sunday schools would run out of teaching materials","That Christian educators would become too academic and lose their faith"], answer: 1 },
      { q: "Which of the following is classified as an audio aid for Christian education?", options: ["Maps and charts","Overhead projectors","Cassette tape recorders and radios","Chalkboards and magnetic whiteboards"], answer: 2 },
      { q: "Visual aids are divided into two categories. What are they?", options: ["Electronic and non-electronic aids","Projected and non-projected aids","Biblical and secular aids","Audio and print aids"], answer: 1 },
      { q: "Which of the following is an example of a non-projected visual aid?", options: ["Filmstrips and motion pictures","Overhead projectors and slide projectors","Maps, charts, chalkboards and magnetic whiteboards","Video cassettes and televisions"], answer: 2 },
      { q: "Which of the following is listed as a Bible version (translation) used in Christian Education?", options: ["The Jerusalem Commentary","The Redeemed Bible Study Edition","KJV — King James Version","The Christian Standard Reference"], answer: 2 },
      { q: "Which Bible Commentary is listed as a modern resource for Christian Education in the course material?", options: ["Dake's Annotated Bible","New Lion Handbook to the Bible 3rd Edition by David and Paul Alexander","Strong's Concordance","The Amplified Study Bible"], answer: 1 },
      { q: "With whom did the Old Testament origin of religious education begin?", options: ["King Solomon and his wise men","Abraham the father of faith","Moses, the prophet whom God used to lead the Hebrews from Egypt","The prophet Samuel in Shiloh"], answer: 2 },
      { q: "What is Deuteronomy 6:4-9 referred to as in the context of religious education?", options: ["The Law of the Sabbath","The bedrock of religious education given by God to the people","The first Sunday school curriculum","The priestly code for temple worship"], answer: 1 },
      { q: "What was the role of the Synagogue in Jewish religious education?", options: ["It was exclusively a place for offering animal sacrifices","It served the dual role of being a worshipping place and a house of prayer as well as an agency of religious education","It was only a court for settling legal disputes","It was used only for political meetings of Jewish leaders"], answer: 1 },
      { q: "What title was Jesus Christ called many times in the Bible, reflecting His role as an educator?", options: ["Prophet and High Priest","King of kings and Lord of lords","Rabbi, Rabboni, Teacher","Messiah and Deliverer"], answer: 2 },
      { q: "After the Babylonian exile of the Southern Kingdom of Judah (around 450BC), who organised the teaching of the Law to the people?", options: ["King Jehoshaphat and his appointed teachers","Ezra and Nehemiah (Neh. 8:1-18)","Elijah and Elisha the prophets","Daniel and his three friends"], answer: 1 },
      { q: "How is a Christian Agency defined in this course?", options: ["A profit-making business run by Christians","A place or medium where Christian education and training is given to people so that the body of Christ is profited","A missionary organisation that sends people to foreign nations","A publishing house that produces Christian literature"], answer: 1 },
      { q: "Which of the following is listed as a FORMAL agency of Christian Education?", options: ["House fellowship","Seminars and symposia","Camping and retreats","Theological Seminaries (e.g. RCBC)"], answer: 3 },
      { q: "What is an INFORMAL agency of Christian Education characterised by?", options: ["A systematic, well-organised, curriculum-based and time-tabled programme","Irregular, arbitrary, random on-and-off arrangements for imparting the knowledge of God, usually short in duration","Long-term training lasting several years with formal examinations","A large congregation taught by a senior minister every Sunday"], answer: 1 },
      { q: "Which of the following correctly pairs a Formal agency with an Informal agency of Christian Education?", options: ["Bible College (Formal) — House Fellowship (Informal)","Seminars (Formal) — Sunday School (Informal)","Camping (Formal) — School of Discipleship (Informal)","Symposia (Formal) — Theological Seminary (Informal)"], answer: 0 },
      { q: "How many agencies of Christian Education are listed in the course material?", options: ["7","10","13","15"], answer: 2 },
      { q: "How is the Sunday School described in this course?", options: ["An optional programme held monthly for children only","A weekly formal agency of Christian education organised by the regenerated church for the teaching of the Scriptures and church doctrines","An informal gathering held in homes for Bible study and prayer","A correspondence programme for members who cannot attend church"], answer: 1 },
      { q: "In a standard parish church, at what time does Sunday school usually commence?", options: ["6:00am","7:00am","8:45am","10:30am"], answer: 2 },
      { q: "Sunday School organisation consists of which of the following?", options: ["The Board, the Choir and the Ushers only","Personnel, materials, tools and infrastructure required for the smooth running of the Sunday school","The Pastor, Deacons and Sunday school teachers only","Only the Superintendent and the class teachers"], answer: 1 },
      { q: "What is the House Fellowship described as in terms of Christian Education?", options: ["A formal weekly programme with examinations and certificates","An INFORMAL agency — a very important format in the church/mission to help members grow spiritually, study the word of God, pray and evangelise","A replacement for Sunday school in smaller churches","A programme exclusively for new converts"], answer: 1 },
      { q: "What is the typical duration of a house fellowship meeting?", options: ["30 minutes","One hour 30 minutes, part of which should be devoted to prayers and testimony","3 hours including a full worship service","45 minutes of preaching only"], answer: 1 },
      { q: "What is the general aim of the Sunday School?", options: ["To teach people church history and denominational traditions","To raise funds for the church's building projects","To teach people the word of God, the Bible, which reveals God through Christ so that they may gain eternal life and live meaningful lives","To train people exclusively for full-time ministry and pastoral work"], answer: 2 },
      { q: "The specific aims of the Sunday School are described as three-fold. Which set correctly represents them?", options: ["To raise funds, build churches and pay pastors","To bring souls to Christ for salvation, develop Christian character and train people for the service of God","To teach doctrines, run choirs and organise crusades","To educate children only, support missionaries and publish literature"], answer: 1 },
      { q: "Why does Sunday School help to ensure numerical growth of the church?", options: ["Because the Sunday school collects tithes and offerings to fund evangelism","Because it focuses on large crusades and city-wide evangelism only","Because there is a corresponding increase in church attendance with a flourishing Sunday school","Because the Sunday school runs adverts in newspapers every week"], answer: 2 },
      { q: "How does Sunday School Organisation help individual workers?", options: ["It pays their salaries and allowances","It assigns specific duties to each worker so everyone knows their responsibility and who to hold accountable","It guarantees their promotion to senior ministry positions","It allows workers to choose any role they prefer at any time"], answer: 1 },
      { q: "Which of the following is a reason for the importance of Sunday School Organisation stated in the course?", options: ["It helps to produce a perfect and well-established Christian in the church of GOD (Eph. 4:12-13)","It allows the church to run multiple Sunday services without a pastor","It replaces the role of the pastor in teaching the congregation","It is mainly useful for recording church attendance statistics"], answer: 0 },
      { q: "Who first started the Sunday school movement, and where?", options: ["William Elliot, in the state of Virginia, USA in 1785","John Wesley, in London, England in 1750","Robert Raikes, a printer and publisher in Gloucestershire, England around 1780","Charles Spurgeon, in the Metropolitan Tabernacle, London"], answer: 2 },
      { q: "Where was the venue of the very first Sunday school programme of Robert Raikes?", options: ["In the local parish church building","In the kitchen of a lady named Mrs. Meredith who offered her house","In a school hall hired from the government","In the open air under a large tree"], answer: 1 },
      { q: "What were Robert Raikes' THREE objectives in starting the Sunday school?", options: ["To train teachers, raise money and build schools","To keep children off the streets on Sundays, to teach them to read and write, and to introduce the gospel to them","To preach the gospel, baptise converts and plant churches","To challenge Catholic authority, reform the church and educate the clergy"], answer: 1 },
      { q: "In what year and country did William Elliot start his own Sunday school programme in the USA?", options: ["In 1800, in New York","In 1817, in Philadelphia","In 1785, in the state of Virginia","In 1832, in Boston"], answer: 2 },
      { q: "When was the American Sunday School Union formed and what was its purpose?", options: ["In 1750, to train Sunday school teachers across England","In 1817, to promote Sunday school by providing materials, teaching aids, and sending missionaries to establish Sunday schools across rural and urban America","In 1832, to hold the first National convention for Sunday schools","In 1889, to organise the first world Sunday school convention in London"], answer: 1 },
      { q: "Sunday school Administration consists of two main bodies. What are they?", options: ["The Pastor and the Congregation","The Sunday School Board (Executive Arm) and the Sunday School Staff (Operational Arm)","The Treasurer and the Secretary","The Superintendent and the Teachers"], answer: 1 },
      { q: "Who serves as the Board Chairman of the Sunday School Administration Board?", options: ["The Sunday School Superintendent","The most senior Sunday school teacher","The Head of the church (General Overseer)","The Board Secretary"], answer: 2 },
      { q: "What is the primary role of the Sunday School Board?", options: ["To teach Sunday school classes and prepare lesson notes","To serve as the executive, policy-making arm of Sunday school administration","To conduct house fellowships and prayer meetings","To recruit and train Sunday school teachers only"], answer: 1 },
      { q: "What is the main criterion for selection of Sunday school staff workers?", options: ["Their educational qualifications and secular career achievements","Their financial contribution to the church building fund","Spiritual qualification — it is not based on monetary or class considerations","Their popularity among the church congregation"], answer: 2 },
      { q: "Which of the following is listed as a general qualification of a Sunday school worker?", options: ["Must hold a university degree in Theology or Religious Studies","Must be born again, sanctified and spirit-filled, and must be a Bible-student (1Tim. 4:13)","Must be at least 50 years old with extensive ministry experience","Must be appointed directly by the General Overseer of the denomination"], answer: 1 }
    ]
  },

  // 
  // 11. HOMILETICS
  // 
  {
    id: 11,
    code: "HOM 201",
    title: "Homiletics",
    icon: "",
    duration: 60,
    questions: [
      { q: "Homiletics is defined as:", options: ["The study of hymns and church music","The science and art of sermon preparation and delivery","The study of church history and tradition","The craft of academic theological writing"], answer: 1 },
      { q: "An expository sermon is one that:", options: ["Uses stories and illustrations to teach general moral lessons","Addresses current social and political events through a biblical lens","Draws its content, structure, and purpose from a specific biblical text","Presents philosophical arguments in defence of Christian truth"], answer: 2 },
      { q: "A topical sermon organises itself around:", options: ["A single Scripture passage treated verse by verse","A sequential journey through books of the Bible","A theme or subject supported by multiple Scripture passages","A historical narrative drawn from church history"], answer: 2 },
      { q: "The 'big idea' or 'proposition' of a sermon is:", options: ["The longest and most detailed point in the message","The central controlling truth-statement that unifies the entire sermon","The most emotionally powerful illustration used","The title chosen to promote the sermon"], answer: 1 },
      { q: "Application in preaching is vital because:", options: ["It increases the total length and perceived value of the sermon","It bridges biblical truth to the practical life and response of the listener","It satisfies academic requirements for theological study","It demonstrates the breadth of the preacher's personal knowledge"], answer: 1 },
      { q: "Inductive preaching moves from:", options: ["General principles toward specific practical applications","Specific examples and observations toward a general concluding truth","Christian doctrine directly to Christian living","The Old Testament forward to the New Testament"], answer: 1 },
      { q: "Deductive preaching moves from:", options: ["Specific examples toward a general conclusion","The congregation's felt needs toward scriptural answers","A stated general proposition toward specific supporting development","Cultural context toward biblical application"], answer: 2 },
      { q: "The introduction of a sermon should:", options: ["Present all the main points of the message upfront","Begin with a lengthy doctrinal explanation","Capture attention, establish relevance, and introduce the subject","List all the supporting Scripture references to be used"], answer: 2 },
      { q: "The most important preparation for effective preaching is:", options: ["Superior rhetorical skill and formal public speaking training","The preacher's personal encounter with God in prayer and in the text","A large personal library of commentaries and reference works","Decades of accumulated preaching experience in the pulpit"], answer: 1 },
      { q: "Voice modulation in preaching refers to:", options: ["Using only a high-powered professional sound system","Varying pitch, pace, pause, and volume to communicate meaning and emotion effectively","Speaking at maximum volume consistently throughout the sermon","Learning to preach competently in a second or foreign language"], answer: 1 }
    ]
  },

  // 
  // 12. CHRISTIAN ETHICS
  // 
  {
    id: 12,
    code: "CHE 201",
    title: "Christian Ethics",
    icon: "",
    duration: 60,
    questions: [
      { q: "Christian ethics is grounded primarily in:", options: ["Cultural norms and social consensus","Human reason and philosophical tradition alone","The character and revealed will of God as disclosed in Scripture","Democratic majority decision-making processes"], answer: 2 },
      { q: "Deontological ethics focuses on:", options: ["The consequences and outcomes of an action","Duties, rules, and moral obligations that govern an action","The character and virtues of the person performing the action","The cultural and historical context in which the act is performed"], answer: 1 },
      { q: "Virtue ethics emphasises:", options: ["Strictly following prescribed moral rules and legal duties","Calculating the greatest good for the greatest possible number","Developing excellent moral character (virtues) in the person","Adhering carefully to a mutually agreed social contract"], answer: 2 },
      { q: "The 'sanctity of human life' principle is rooted in the fact that:", options: ["Legal systems grant inherent rights to all recognised persons","The evolutionary process has produced highly complex human organisms","All humans are created in the image of God (Imago Dei)","Human life has measurable social utility and economic value"], answer: 2 },
      { q: "The 'Golden Rule' as stated by Jesus is found in:", options: ["Matthew 5:3","Matthew 7:12","Luke 4:18","John 3:16"], answer: 1 },
      { q: "The concept of 'common grace' refers to:", options: ["A second opportunity for salvation after physical death","The regenerating grace shared among all true believers","God's blessings and restraint of evil extended to all people, regardless of their faith","The grace conferred on all recipients at the moment of water baptism"], answer: 2 },
      { q: "Civil disobedience is ethically justified in Christian ethics when:", options: ["Christians personally disagree with a particular government policy","Human laws directly contradict clear and explicit commands of God","Church leaders formally authorise political resistance and protest","A clear majority of Christians in a nation agree to disobey"], answer: 1 },
      { q: "Liberation theology primarily emphasises:", options: ["Individual personal spiritual growth and private devotion","God's preferential concern for the poor and oppressed, and the pursuit of social justice","Conservative political and economic values as the application of faith","Traditional evangelical missionary evangelism and church planting"], answer: 1 },
      { q: "Situation ethics, associated with Joseph Fletcher, holds that:", options: ["Absolute moral rules and laws always determine what is right","Love (agape) is the only absolute moral norm; all other rules are relative and situational","Scripture alone determines the right course of action in every ethical situation","Only consequences and outcomes determine what is morally right"], answer: 1 },
      { q: "The biblical basis for Christian environmental care (creation care) is:", options: ["Secular political environmentalism","The dominion mandate understood as responsible stewardship of God's creation","Modern eco-theology developed in the 20th century","There is no clear biblical basis for environmental concern"], answer: 1 }
    ]
  },

  // 
  // 13. PASTORAL THEOLOGY
  // 
  {
    id: 13,
    code: "PAS 301",
    title: "Pastoral Theology",
    icon: "",
    duration: 60,
    questions: [
      { q: "According to James Denney, the 'ideal Church' would be nearer if evangelists were what?", options: ["Pastors","Theologians","Deacons","Prophets"], answer: 1 },
      { q: "Which biblical figure is described as a 'former shepherd' who wrote Psalm 23?", options: ["Moses","Solomon","David","Peter"], answer: 2 },
      { q: "The Greek word poimen refers to:", options: ["An elder","An overseer","A shepherd","A teacher"], answer: 2 },
      { q: "According to the text, a 'prayerless pastor' can be described as:", options: ["Successful","Powerless","Intellectual","Modern"], answer: 1 },
      { q: "Which of these is a 'wrong motive' for entering the ministry?", options: ["Love for God","Spread of the Gospel","Financial prosperity","Love for people"], answer: 2 },
      { q: "Pastoral Theology is defined as the art of learning about:", options: ["Church history","The Pastor and his responsibilities","Music ministry","Building maintenance"], answer: 1 },
      { q: "In Ephesians 4:11, the Christian minister is described as:", options: ["Pastor-evangelist","Pastor-teacher","Pastor-deacon","Pastor-elder"], answer: 1 },
      { q: "Jesus referred to Himself as:", options: ["Bishop","Elder","Shepherd","Preacher"], answer: 2 },
      { q: "A spiritual qualification of a pastor is that he must be:", options: ["Rich","Genuinely born again","A politician","Famous"], answer: 1 },
      { q: "The word 'Enthusiasm' comes from the Greek ethos, meaning:", options: ["Hard work","God in you","Loud voice","Many words"], answer: 1 },
      { q: "Which Apostle realistically invited Timothy to 'suffer hardship' in the ministry?", options: ["Peter","John","Paul","James"], answer: 2 },
      { q: "'Tact' is defined in the notes as doing a difficult thing and:", options: ["Getting paid for it","Making people like it","Doing it quickly","Ignoring the consequences"], answer: 1 },
      { q: "In Missions like RCCG, full-time pastoral work is typically for those under what age?", options: ["40","50","60","70"], answer: 1 },
      { q: "Which document summarizes the 'saving truth of God presented in systematic form'?", options: ["Homiletics","Systematic Theology","Hermeneutics","Liturgy"], answer: 1 },
      { q: "A pastor who is late for appointments is described as a:", options: ["Busy man","Thief of time","Popular leader","Gifted speaker"], answer: 1 },
      { q: "The 'inward witness' for a call to ministry comes from:", options: ["Parents","The Holy Spirit","Friends","The Government"], answer: 1 },
      { q: "One of the goals of 'Follow-up' is to:", options: ["Collect money","Make the seed of the Gospel grow","Count the crowd","Build a new hall"], answer: 1 },
      { q: "To 'Preach as to a dying man' means to:", options: ["Speak softly","Pour out the totality of your soul","Read from a script","Talk about death only"], answer: 1 },
      { q: "A natural qualification for a pastor includes being:", options: ["Sanctified","Full of the Holy Spirit","Physically sound","Born again"], answer: 2 },
      { q: "The 'rod and staff' in Psalm 23 represent:", options: ["Wealth and power","Protection","Punishment only","Magic"], answer: 1 },
      { q: "Which Greek word means 'to shepherd'?", options: ["Episkopos","Poimaino","Presbuteros","Logos"], answer: 1 },
      { q: "The notes state that 'Calling is NOT':", options: ["Divine help","Personal prophecy","Grace","Inward witness"], answer: 1 },
      { q: "Every student of RCBC called to RCCG must undergo a compulsory:", options: ["5-year fast","One year internship","Business course","Voting process"], answer: 1 },
      { q: "A pastor should avoid 'undue familiarity' with:", options: ["His Bible","The opposite sex","His children","Prayer"], answer: 1 },
      { q: "'Homiletics' is primarily concerned with:", options: ["Visitation","Preaching","Counseling","Accounting"], answer: 1 },
      { q: "According to Warfield, theology should permeate:", options: ["Only the pulpit","All practical works","Just the library","The choir"], answer: 1 },
      { q: "A pastor must be 'apt to teach,' which also means he must be:", options: ["Loud","Teachable","Aggressive","Old"], answer: 1 },
      { q: "Which of the following is a 'Right Motive'?", options: ["Self-promotion","Fame","Love for God","Material gain"], answer: 2 },
      { q: "To avoid lengthy sermons, a pastor should:", options: ["Not use a Bible","Outline the message","Speak faster","Skip the introduction"], answer: 1 },
      { q: "'Discretion' in a pastor means:", options: ["Having no secrets","Guarding dealings with prudence","Telling everyone everything","Being very loud"], answer: 1 },
      { q: "The 'Lamb' being a 'Shepherd' is a concept found in:", options: ["Genesis","Revelation","Malachi","Esther"], answer: 1 },
      { q: "A pastor should preach with:", options: ["Arrogance","Authority","A frown","Superiority"], answer: 1 },
      { q: "'Pulpit Decorum' includes avoiding:", options: ["The Bible","All traits of mannerisms","Smiling","Standing straight"], answer: 1 },
      { q: "The secret of a successful sermon is often found in:", options: ["High-quality paper","How much the pastor prayed","The size of the pulpit","The font size"], answer: 1 },
      { q: "The 'Chief and Great Shepherd' is:", options: ["The General Overseer","Jesus Christ","The Bishop","The Apostle"], answer: 1 },
      { q: "'Cleanliness' for a pastor includes:", options: ["Only his house","His mode of dressing and his mind","Just his car","Only his shoes"], answer: 1 },
      { q: "A pastor should start his message in a:", options: ["Shouting tone","Conversational tune","Whispering tone","Singing tune"], answer: 1 },
      { q: "Which book says 'Thy words were found and I did eat them'?", options: ["Isaiah","Jeremiah","Ezekiel","Daniel"], answer: 1 },
      { q: "To 'count the cost' of ministry is found in:", options: ["Luke 14","John 3","Acts 1","Romans 12"], answer: 0 },
      { q: "A pastor should not be a 'novice,' meaning he should be:", options: ["Young","Seasoned and matured","A fast learner","Wealthy"], answer: 1 },
      { q: "'Poimen' is the Greek word for:", options: ["Teacher","Shepherd","King","Student"], answer: 1 },
      { q: "'Episkopos' means:", options: ["Servant","Overseer","Singer","Writer"], answer: 1 },
      { q: "The first principal reason for Christian marriage is:", options: ["Money","Mutual fellowship","Tax benefits","Politics"], answer: 1 },
      { q: "A pastor's physical skill helps withstand the:", options: ["Heat of the sun","Rigours of the work","Cold of the night","Weight of books"], answer: 1 },
      { q: "In Acts 6:4, the apostles devoted themselves to the ministry of the Word and:", options: ["Administration","Prayer","Cooking","Building"], answer: 1 },
      { q: "'Charisma' often comes from a:", options: ["Good tailor","Cheerful countenance","Loud voice","Thick book"], answer: 1 },
      { q: "A pastor should preach to the person in the:", options: ["First row","Last row","Choir","Vestry"], answer: 1 },
      { q: "The 'Shepherd of Israel' is identified in:", options: ["Psalm 80","Proverbs 1","Exodus 20","Jude 1"], answer: 0 },
      { q: "A pastor should 'bathe himself in':", options: ["Water","Prayer","Oil","Perfume"], answer: 1 },
      { q: "'Consistency' in ministry produces:", options: ["Boredom","Success","Money","Enemies"], answer: 1 }
    ]
  },

  // 
  // 14. MUSIC
  // 
  {
    id: 14,
    code: "MUS 201",
    title: "Music",
    icon: "",
    duration: 60,
    questions: [
      { q: "The most extensive manual of worship songs in all of Scripture is:", options: ["The book of Proverbs","The Song of Solomon","The book of Psalms","The book of Lamentations"], answer: 2 },
      { q: "Ephesians 5:19 instructs believers to speak to one another with:", options: ["Words of exhortation and spiritual correction","Psalms, hymns, and spiritual songs, singing and making melody in their hearts to the Lord","Apostolic doctrines and formal church teachings","Prophetic words and glossolalic utterances"], answer: 1 },
      { q: "The Hebrew term 'Selah' found throughout the Psalms is:", options: ["A command to shout and praise loudly","An instruction to repeat or sing the verse again","A musical or literary pause intended for reflection","A term of praise synonymous with 'Hallelujah'"], answer: 2 },
      { q: "The primary purpose of music in Christian worship is:", options: ["To create an exciting emotional atmosphere for visitors and seekers","To showcase the musical talent of the choir and band members","To glorify God and build up (edify) the body of Christ","To attract and retain a younger demographic in the congregation"], answer: 2 },
      { q: "Colossians 3:16 connects singing in worship directly to:", options: ["The authority and instruction of the senior pastor","The financial prosperity and growth of the local church","The Word of Christ dwelling richly among the people of God","The manifestation of the gifts of the Holy Spirit"], answer: 2 },
      { q: "The instrument most closely associated with King David in the Old Testament is:", options: ["The trumpet (shofar)","The harp or lyre","The transverse flute","The hand drum or tambourine"], answer: 1 },
      { q: "A worship leader's primary role in a church gathering is:", options: ["To perform and entertain the assembled congregation","To lead the congregation into the presence of God through musical and spiritual leadership","To manage the sound system and all audio-visual equipment","To select songs based exclusively on personal musical preference"], answer: 1 },
      { q: "2 Chronicles 20:21-22 — Jehoshaphat's battle victory through praise — teaches:", options: ["Music has no meaningful role in spiritual warfare","Praise and worship can function as a strategic spiritual weapon in times of conflict","Only trained Levitical musicians are qualified to lead warfare worship","The role of music is entirely restricted to private personal devotion"], answer: 1 },
      { q: "The 'new song' mentioned in the Psalms and in the book of Revelation refers to:", options: ["A contemporary worship style that replaces traditional hymns","A fresh, heartfelt expression of praise for God's new and ongoing acts of salvation","A song literally composed within the past ten years","Songs produced by the modern Christian worship music industry"], answer: 1 },
      { q: "Excellence in church music should be motivated by:", options: ["Competition with other churches and worship ministries","A desire for personal fame, recognition, and a musical career","Offering our best gifts as an act of worship and honour to God Himself","Attracting the largest possible audience to our services"], answer: 2 }
    ]
  },

  // 
  // 15. PHILOSOPHY
  // 
  {
    id: 15,
    code: "PHI 201",
    title: "Philosophy",
    icon: "",
    duration: 60,
    questions: [
      { q: "Christian Apologetics is defined as:", options: ["Formally apologising on behalf of the Church for its historical failures","The rational defence and commendation of the Christian faith","The study of church history and the development of Christian tradition","A sub-discipline of systematic theology addressing God's nature"], answer: 1 },
      { q: "The primary biblical text commanding believers to 'always be prepared to give a defence' for their hope is:", options: ["John 3:16","1 Peter 3:15","Romans 8:28","Matthew 28:19"], answer: 1 },
      { q: "The Cosmological Argument for God's existence argues from:", options: ["The observable design and fine-tuning of the creation","The existence of universal moral awareness","The fact that the universe exists and requires an uncaused first cause","The universal human capacity for religious experience"], answer: 2 },
      { q: "The Teleological Argument argues from:", options: ["The chain of cause and effect observable in the natural world","The universal existence of moral standards in all cultures","The evidence of design, order, and purpose observable throughout creation","Historical evidence for the bodily resurrection of Jesus"], answer: 2 },
      { q: "The Moral Argument argues from:", options: ["The physical fine-tuning of the universe for life","The biological complexity of living organisms","Universal moral standards pointing to a transcendent moral Lawgiver","The testimony of transformed Christian lives throughout history"], answer: 2 },
      { q: "Presuppositional apologetics holds that:", options: ["God's existence must first be proven through philosophical arguments","All worldviews rest on presuppositions, and the Christian rightly begins with God and His Word","Christianity and all other worldviews begin from the same neutral intellectual starting point","Physical evidence is sufficient on its own to bring a person to genuine saving faith"], answer: 1 },
      { q: "The Ontological Argument for God's existence was classically formulated by:", options: ["Thomas Aquinas","William Paley","Anselm of Canterbury","C.S. Lewis"], answer: 2 },
      { q: "C.S. Lewis's famous 'Trilemma' regarding Jesus argues that He must be one of:", options: ["A prophet, a priest, or a king","A liar, a lunatic, or the Lord","A historical figure, a legend, or a myth","Simply human, partly divine, or fully divine"], answer: 1 },
      { q: "Epistemology is the branch of philosophy that studies:", options: ["The fundamental nature of reality and existence","The nature, sources, and limits of human knowledge and justified belief","The principles and foundations of ethical moral decision-making","The existence and attributes of God through rational argument"], answer: 1 },
      { q: "A Christian worldview rests on the foundational conviction that:", options: ["All competing truth claims are ultimately equal and valid","Human reason is the supreme and final standard of all truth","God exists and has revealed Himself truly in Scripture and through Jesus Christ","Science alone provides a reliable and complete understanding of reality"], answer: 2 }
    ]
  },

  // 
  // 16. CONFLICT MANAGEMENT
  // 
  {
    id: 16,
    code: "COM 201",
    title: "Conflict Management",
    icon: "",
    duration: 60,
    questions: [
      { q: "The biblical process for resolving interpersonal conflict is outlined in:", options: ["Romans 13:1-7","Matthew 18:15-20","Galatians 6:1-5","1 Corinthians 6:1-8"], answer: 1 },
      { q: "According to Matthew 18:15, the first step in resolving a conflict is:", options: ["Taking the matter immediately to church leadership","Bringing two or three witnesses to confront together","Going privately and directly to the person who has wronged you","Seeking external legal arbitration or mediation"], answer: 2 },
      { q: "The primary goal of biblical conflict resolution is:", options: ["To win the argument and establish that you were right","To punish the wrongdoer and enforce appropriate justice","To restore the broken relationship and achieve genuine reconciliation","To establish the authority and wisdom of church leadership"], answer: 2 },
      { q: "Unresolved conflict in the local church is harmful because:", options: ["It damages the church's positive public image and reputation","It destroys Christian witness, grieves the Holy Spirit, and hinders the gospel mission","It fails to satisfy the requirements of denominational church unity policies","It opens the church to potential legal liability and lawsuits"], answer: 1 },
      { q: "Biblical forgiveness in conflict resolution means:", options: ["Pretending the offense never happened","Immediately restoring full trust regardless of ongoing behaviour","A wilful choice to release bitterness and the debt of the offense, trusting God for justice","Never directly confronting the offender about the harm caused"], answer: 2 },
      { q: "An effective mediator in a church conflict should be:", options: ["A qualified legal professional hired by the church for the purpose","A neutral, trusted person who helps both parties communicate and find resolution","The senior pastor who has final and uncontested authority over all decisions","A person who will naturally advocate for the most senior or influential party"], answer: 1 },
      { q: "Ephesians 4:26-27 warns that unresolved anger can:", options: ["Demonstrate emotional maturity and the setting of healthy personal boundaries","Always indicate the presence of demonic possession or oppression","Give the devil a foothold in a person's life and relationships","Be permanently suppressed for the long-term sake of congregational peace"], answer: 2 },
      { q: "James 4:1-2 teaches that conflicts and quarrels arise from:", options: ["Simple misunderstanding and poor personal communication","Covetous desires and selfish passions within the human heart","Demonic attack and direct spiritual warfare from outside","Failure to follow established church rules and governance procedures"], answer: 1 },
      { q: "Listening carefully to the other party in a conflict is important because:", options: ["It signals a willingness to eventually concede and surrender your position","It gives you time to prepare a more effective counter-argument","It honours the other person and may reveal information that changes your understanding","It formally satisfies church governance requirements for a fair and just process"], answer: 2 },
      { q: "Proverbs 15:1 teaches that:", options: ["A loud, forceful voice commands respect and decisively ends arguments","A gentle answer turns away wrath, while a harsh word stirs up more anger","Only foolish people respond gently and without force to provocation","Silence is invariably the wisest and best response to conflict"], answer: 1 }
    ]
  },

  // 
  // 17. HISTORY AND THEOLOGY OF THE RCCG
  // 
  {
    id: 17,
    code: "HTR 301",
    title: "History and Theology of the RCCG",
    icon: "",
    duration: 60,
    questions: [
      { q: "In what year and where was Josiah Olufemi Akindayomi born?", options: ["1910, in Lagos, Southwest Nigeria","July 1909, at No. 12, Odo-Alafin Street in the Southwest Nigeria area of Ondo","1905, in Ibadan, Oyo State","July 1915, in Ile-Ife, Osun State"], answer: 1 },
      { q: "What does the Yoruba dialectal name 'Ola Kakuro nimu ibi wa' mean, which was applied to the family of Akindayomi?", options: ["The blessing of God shall follow our lineage","Wealth and dignity remain in our lineage","Our children shall be great in the land","The glory of our fathers shall not depart"], answer: 1 },
      { q: "What was unusual about the young Josiah's early childhood experience with idol worship?", options: ["He was the chief idol worshipper in his village","He actively recruited other children to worship idols","Whenever he fell sick, his case would defy herbs and remedies; he developed an abhorrence for idol worship","He inherited idol worship as the family trade"], answer: 2 },
      { q: "At what age did Josiah Olufemi Akindayomi first make contact with Christianity?", options: ["15 years old","18 years old — after his eighteenth birthday in 1927","25 years old","30 years old"], answer: 1 },
      { q: "Which church did the young Josiah Akindayomi first join after his contact with Christianity?", options: ["The Redeemed Christian Church of God","The Deeper Life Bible Church","An African Independent Church founded and headed by Late Prophet Moses Orimolade — the Cherubim and Seraphim (C & S) Church","The Anglican Church (CMS)"], answer: 2 },
      { q: "What was the divine instruction God gave to Josiah Akindayomi that prompted his journey from Ondo to Ile-Ife?", options: ["To build a church and gather a congregation","To travel from Ondo to Ile-Ife — a journey of about sixty (60) miles — to serve God","To go to Lagos and start a prayer group","To study theology at a Bible college"], answer: 1 },
      { q: "On what date was the big and deep sore on Josiah Akindayomi's leg healed after his submission to God's service?", options: ["Sunday 10th July 1940","Wednesday 10th July 1940, on his feet","Friday 24th July 1940","Monday 1st August 1940"], answer: 1 },
      { q: "How was Josiah Akindayomi's wedding to Esther conducted, and who presided over it?", options: ["A civil wedding at the Lagos Marriage Registry","At a C & S Church in Ibadan, presided over by the founder and head, Prophet Moses Orimolade at the Ibadan Street branch, Lagos State","At a CMS church in Ondo","In Germany during one of his missionary visits"], answer: 1 },
      { q: "Who was Mama Esther (the first wife of Rev. Akindayomi) confirmed to be, as stated in the course material?", options: ["A German missionary's daughter","A former member of the Deeper Life Bible Church","The first Mother in Israel of the Redeemed Christian Church of God (RCCG), confirmed twelve (12) years later","A trained nurse from Ibadan"], answer: 2 },
      { q: "What was the major challenge Rev. Akindayomi faced during the early days in Lagos regarding livelihood?", options: ["He could not find a church building to rent","He had no source of livelihood — God had told him he would neither live on paid employment nor be his own boss; he had only God as his source","He was rejected by all the churches in Lagos","He could not speak the Yoruba language fluently"], answer: 1 },
      { q: "On arriving in Lagos, which church did Rev. Akindayomi and his wife first join?", options: ["The Assemblies of God Church on Lagos Island","The Cherubim & Seraphim Church, Ibadan Street, Ebute-Metta, with Prophets Onanuga and Seraphim presiding","The Methodist Church at Broad Street, Lagos","The Baptist Convention Church in Surulere"], answer: 1 },
      { q: "In 1947, what regular prayer group did Josiah Olufemi Akindayomi begin, which later introduced the group 'Daily Prayer Group'?", options: ["An all-night prayer vigil every Friday","Bible study and prayer sessions with common hours of 9:00am, 12noon and 3:00pm","A monthly fasting and prayer programme","A weekly Sunday school teaching programme"], answer: 1 },
      { q: "Where was the prayer group first located before it had to move due to the growing number of members?", options: ["At No. 9, Willoughby Street, Ebute-Metta","At the residence of one Mr. Adekoye at No. 34, Oloito Street, Ebute-Metta","In the compound of the C & S church building","At a rented hall in Surulere, Lagos"], answer: 1 },
      { q: "God revealed to Rev. Akindayomi during an evangelical mission in Osogbo in 1956 that the name of the church would be what?", options: ["The Apostolic Faith Mission of God","The Glory of God Christian Church","THE REDEEMED CHRISTIAN CHURCH OF GOD","The Christ Apostolic Church of Nigeria"], answer: 2 },
      { q: "Who were the twelve prominent members listed in the course as part of the group that was ordained at the inception of the Cherubim and Seraphim Church at Igbo-Iapa?", options: ["All twelve were apostles from the C & S headquarters","Bro. J.A. Fakunju, Bro. Mabun, Bro. J.A. Adekoya, Bro. S.K. Padonu, Bro. Fadora, Bro. Ilenusi, Bro. Okuwobi, Bro. Fetuga, Bro. Adefeso, Bro. G. Adehinwa, Bro. Matiloko, and Bro. S.A. Olonode (Secretary)","All twelve were foreign missionaries from Germany","All twelve were former members of the Anglican Church"], answer: 1 },
      { q: "Where was the Redeemed Christian Church of God physically birthed as a house fellowship?", options: ["At Kilometre 46, Lagos-Ibadan Expressway","At No. 9, Willoughby Street, Ebute-Metta, Lagos","At the National Headquarters in Ebute-Metta","At the Redemption Camp, Kilometre 1-5 on the Lagos-Ibadan Expressway"], answer: 1 },
      { q: "What happened to the RCCG church building at No. 9, Willoughby Street, Ebute-Meta?", options: ["It was sold to fund the purchase of Redemption Camp","It was rebuilt five times by the Redeemed Christian Church of God","It was demolished by the Lagos State government","It was gifted to another denomination"], answer: 1 },
      { q: "Which of the following best describes the RCCG's early worship pattern under Rev. Akindayomi?", options: ["It was a very relaxed church that encouraged clapping, dancing and musical instruments","It was characterised by strict rules: segregated seating for men and women, no handshaking between sexes, no hair chemicals for women, no riding motorcycles, and mandatory attendance at the evening service","It was a church that focused primarily on televised services","Worship was entirely conducted in English with a Western choir style"], answer: 1 },
      { q: "What does the Yoruba term 'IJO ELEKUN' mean, which was the nickname given to the RCCG church?", options: ["The church of great miracles","The weeping church","The church of the Holy Spirit","The church of the righteous"], answer: 1 },
      { q: "According to the course, what is the full definition of true worship as given?", options: ["Clapping of hands and singing loudly unto God","Worship is not even a temporary practice but a consistent lifestyle pertaining to uninterrupted reverence of God — God is a spirit and they that worship Him must worship Him in spirit and in truth (John 4:24)","Worship is purely a physical act of prostrating before God","Worship is exclusively the singing of hymns and psalms in church"], answer: 1 },
      { q: "What simple quote best describes RCCG's leadership philosophy as stated in the course?", options: ["The pastor is the ultimate authority in the church","God leads and all men answer to God","The General Council is the supreme governing body of the church","Human representatives set the standards for the mission"], answer: 1 },
      { q: "In the early administrative structure of RCCG under the founder, who served as the General Superintendent (GS)?", options: ["Pastor Enoch Adejare Adeboye","The founder himself — Rev. Josiah Olufemi Akindayomi","Bro. J.A. Fakunju","Pastor Joseph Obayemi"], answer: 1 },
      { q: "What were the three principal organs of the RCCG church mentioned in the course material?", options: ["The Choir, the Ushers and the Sunday School","The Executive Council (comprising Principal Officers), the General Council (comprising Principal Officers and all Ordained Ministers), and the Parish Council (comprising Principal Officers of the church at parish level)","The Mission Board, the Finance Committee and the Prayer Band","The Supreme Council, the Board of Trustees and the Congregation"], answer: 1 },
      { q: "What role did the General Secretary hold in the early administrative structure of RCCG?", options: ["He was the Chief Administrative Officer and the next in hierarchy after the founder, whose tenure was for life","He was only responsible for writing minutes of meetings","He served as head of the Sunday school department","He was the head of the finance committee"], answer: 0 },
      { q: "What was described as 'the most difficult period in the church's history' regarding the administrative structure?", options: ["The period of rapid numerical growth under Pastor Adeboye","The events surrounding the demise of Rev. Akindayomi — RCCG already had a constitution before the founder died, which described the church's administration structure","The period when the church split into factions in the 1990s","The relocation of the church from Ebute-Metta to Redemption Camp"], answer: 1 },
      { q: "With how many small parishes did the founder pass leadership to the new General Overseer when Rev. Akindayomi died?", options: ["100 parishes","39 small parishes across Lagos and its environs with a total membership of less than one thousand","500 parishes across Nigeria","12 parishes confined to Lagos Island"], answer: 1 },
      { q: "Between 1956 and 1960, what was the RCCG's relationship with the Apostolic Faith Mission of South Africa?", options: ["The RCCG was an independent church with no foreign affiliations","The church was an affiliate of the Apostolic Faith Mission (AFM) of South Africa — a relationship that was terminated after Nigeria gained political independence","The RCCG was a branch of the AFM headquartered in Cape Town","The church was founded by missionaries from the AFM of South Africa"], answer: 1 },
      { q: "What was the original name given to the Redeemed Christian Church of God by Rev. Josiah Akindayomi before its final name was revealed?", options: ["The Cherubim and Seraphim Prayer Band","A small prayer fellowship band whose other names included 'Egbe Ogo Olima' (the Glory of God) and 'Egbe Ogo Oluwa' (Ijo Ogo Oluwa)","The Apostolic Faith Mission of Nigeria","The Christ Ambassador Church of God"], answer: 1 },
      { q: "What was a distinctive and 'significant feature' of the pre-1980 RCCG regarding its economic practices?", options: ["The church encouraged members to invest in real estate","The leader-founder believed that money should not separate people from God — members should not separately collect tithes and gifts from the congregation; the principal source of income was the collection of tithes and offerings only","The church ran a cooperative bank for its members","Members were required to donate their businesses to the church"], answer: 1 },
      { q: "What group did the RCCG's pre-1980 church congregation see themselves as, according to the course material?", options: ["An international missionary movement","An apocalyptical or rather prophetic movement, made up of mainly disempowered people who prepared and waited for the coming of the end of the world (Parousia)","A social welfare organisation for the poor in Lagos","A choir-focused praise and worship movement"], answer: 1 },
      { q: "On what date did Rev. Josiah Olufemi Akindayomi, the founder of RCCG, die?", options: ["20th January 1981","2nd November 1980 — the 6th of December 1980, at a ripe old age of seventy-one (71)","25th December 1980","4th August 1975"], answer: 1 },
      { q: "According to the course, what recorded instructions did Rev. Akindayomi leave regarding his successor before his death?", options: ["He publicly named Pastor Adeboye as his successor in a church service","He showed his wife (Mrs. Esther Akindayomi) his plans for the church including his father's tape containing the record of his plans for the successor; a Senior Pastor recalled that Rev. Akindayomi directed that a letter of forgiveness be written to the Apostolic Faith Church","He wrote a formal letter to the General Council naming three possible successors","He left no instructions and the decision was left entirely to the General Council"], answer: 1 },
      { q: "Who was eventually prayed for, installed and announced as the new General Overseer of RCCG on Tuesday, the 20th of January 1981?", options: ["Pastor Joseph Abiona","Pastor Enoch Adejare Adeboye — installed as the leader of the RCCG and successor to the founder","Pastor J.O. Akindayomi (son of the founder)","Pastor Ifeoluwa Akindayomi"], answer: 1 },
      { q: "What was one of the major reactions to the new RCCG leadership of Pastor Adeboye?", options: ["All members of the church unanimously accepted him immediately","Some older pastors felt betrayed, cheated and short-changed; some members felt that Pastor Adeboye was a young, educated man with little or no prior experience in church leadership; some seceded and established their own independent churches","The government intervened to prevent any leadership change","The Apostolic Faith Church took over the management of RCCG"], answer: 1 },
      { q: "According to the RCCG constitution (Article A.2), how shall a successor to the General Overseer be elected?", options: ["By a public vote of all RCCG members worldwide","By a simple majority vote of the General Council — and Rev. Akindayomi rightly informed him that 'the Church is ruled by the Bible, my Son, the Bible is your Constitution — but the real constitution of the RCCG is the Bible'","By appointment from the Board of Trustees","By selection from a list of foreign missionaries"], answer: 1 },
      { q: "What was the first major action that marked the beginning of great positive changes in RCCG under Pastor Adeboye?", options: ["He immediately relocated the church headquarters to Abuja","He moved the church from Ebute-Meta to Redemption Camp and said God had promised him a city not just a place of worship","He disbanded all the existing parishes and started fresh","He appointed foreign missionaries as department heads"], answer: 1 },
      { q: "According to the material, what does 'RCCG is ruled by the Bible and the Holy Spirit' mean for the church?", options: ["The church rejects any form of written constitution","RCCG affirms that the church is ruled by the leading of the Bible and the Holy Spirit, as confirmed by Senior Pastors; the constitution also confirmed that holiness will be our lifestyle","Only the General Overseer can interpret the Bible for the church","The church follows only New Testament books and rejects the Old Testament"], answer: 1 },
      { q: "In Module Eight, what were the six administrative blocs of RCCG Nigeria listed in ascending order?", options: ["Cities, Towns, Villages, Districts, States, Regions","House Fellowships, Parishes, Areas, Zones, Provinces, Regions","Cells, Groups, Congregations, Districts, Zones, National","House Meetings, Local Parishes, Deaneries, Archdeaconries, Dioceses, Provinces"], answer: 1 },
      { q: "What title replaced 'General Superintendent' in RCCG and who introduced it?", options: ["'Bishop' — introduced by Pastor Enoch Adeboye in 1985","'General Overseer (GO)' — introduced by Pastor E. A. Adeboye upon his assuming the leadership of the church; the church maintains two headquarters, one as National HQ and the other as International HQ","'Archbishop' — introduced through the Apostolic Faith Mission","'Presiding Pastor' — adopted from the Assemblies of God structure"], answer: 1 },
      { q: "The five regions at inception of the administrative structure included Lagos Region. What did the Lagos Region consist of?", options: ["Only parishes within Lagos Island","All parishes located within Lagos state, Oyo, and parts of Ogun State","All parishes located within Lagos State, Ogun, Ondo and Osun states with Regional Headquarters at Ile-Ife","Only parishes in Ikeja, Surulere and Victoria Island"], answer: 2 },
      { q: "What is 'Let's-Go-A-Fishing' (LGAF) described as in the course material?", options: ["A boat fishing competition organised by the church for recreation","One of the major RCCG evangelistic programmes — a Go-A-Fishing programme scheduled typically at Christmas and Easter festive seasons, aimed at winning more souls into the body of Christ","A programme for training fishermen in coastal communities","A fundraising event for the church's building projects"], answer: 1 },
      { q: "What is the 'Monthly Holy Ghost Service' described as in the RCCG activities section?", options: ["A monthly offering collection service held on the first Sunday of every month","The most popular of all the church programmes — it comes up every first Friday of the month; the programme records attendance of millions of people from within and outside Nigeria, and is also broadcast live on television and radio channels","A healing service exclusively for church workers held monthly","A discipleship training session for new converts only"], answer: 1 },
      { q: "What is the 'Holy Ghost Congress' described as in the course?", options: ["An annual parliament of RCCG pastors to make church laws","A programme that holds every December with worshippers from different parts of the world; it is a seven-day programme which started as a three-day event at Lekki in Lagos State in 1998","A quarterly prayer retreat exclusively for ordained ministers","A monthly Bible study seminar held at Redemption Camp"], answer: 1 },
      { q: "What was the 'Pastors' Seed Family (PSF)' described as in RCCG activities?", options: ["A children's church programme for pastors' children only","A new movement in operation in RCCG — a platform for RCCG Pastors and Ministers to come together as a body and share their areas of common interest, encourage and develop one another in all spheres; the forum was launched in 2008","A seed-faith financial giving programme for pastors","A retirement programme for senior ministers of RCCG"], answer: 1 },
      { q: "What was the change in the RCCG's worship pattern under Pastor Adeboye compared to the era of Rev. Akindayomi?", options: ["The church became stricter and banned all musical instruments","Hymns and worship songs were retained but with an addition of a few to spice up the church's musical front — drums, trumpets, saxophones, a huge mass choir, an orchestral and several anointed singers were added; Pastor Adeboye is known as RCCG General Overseer","The church adopted a completely Catholic style of worship","All forms of congregational singing were abolished in favour of recorded music"], answer: 1 },
      { q: "What is the RCCG Mission and Vision Statement as given in the course material?", options: ["To build the largest church in the world within ten years","RCCG as a church has a very unique driving force — its purpose is to make a member of RCCG in every family of all nations; to make heaven; to take as many people as possible with us; to have members of RCCG in every city and town, within five minutes walking distance in every city and town of developed countries, and to plant churches in every nation","To establish Bible colleges in every state of Nigeria","To train missionaries exclusively for African nations"], answer: 1 },
      { q: "What is RCCG's doctrinal stance on 'Sound Doctrines' regarding non-heretic churches?", options: ["RCCG regards itself as the only true church and rejects all other denominations","RCCG has put in a lot into properly researching and interpreting the Bible for careful extraction of non-heretic doctrines, which encourages serious minded converts as well as other Christians looking to switch worship platforms to consider the church","RCCG follows only the doctrines set by the Apostolic Faith Mission of South Africa","Sound doctrine in RCCG means strict adherence to the Yoruba cultural practices in worship"], answer: 1 },
      { q: "What is RCCG's stance on 'Anti-Ritualism' regarding the power of God?", options: ["The church endorses certain African traditional rites as part of worship","RCCG clearly affirms that the power of God can be manifested without any form of ritual processes and rites — while some Christian denominations have a slight pinch of ritualization embedded in their worship, deliverance and healing services, RCCG affirms objects such as holy water, anointing oil and sacrifice have slight difference compared to the latter","RCCG forbids all forms of prayer and fasting as unnecessary rituals","The church only recognises miracles performed by ordained pastors"], answer: 1 },
      { q: "What does the Greek prefix 'para' mean, and how does it apply to para-church structures in RCCG?", options: ["Para means 'above' — para-church structures are above the church in authority","Para means 'beside or alongside' — para-church structures are work-groups that run alongside the church; they carry out specific functions on behalf of the church while the mission arm of the church remains independent from the church","Para means 'inside' — para-church structures operate only inside the main church building","Para means 'against' — para-church structures were formed to challenge the church leadership"], answer: 1 },
      { q: "What was the Christ the Redeemer's Ministry (CRM) and why was it significant in RCCG history?", options: ["A children's ministry programme started at Redemption Camp in 2000","CRM was the most important and influential para-church group to be established in RCCG; it was the training and proselytizing arm of the mission — CRM represents the evangelistic arm of RCCG executing the church's revival and proselytizing programmes; according to Ojo (1997:10), CRM is the training arm of the mission which 'started with the church's revival and has the aim of winning the world for Christ'","A foreign missionary organisation that partnered with RCCG in the 1970s","A financial programme for raising funds for the National Headquarters building"], answer: 1 }
    ]
  },

  // 
  // 18. ORDER OF SERVICE
  // 
  {
    id: 18,
    code: "OOS 101",
    title: "Order of Service",
    icon: "",
    duration: 60,
    questions: [
      { q: "A church order of service refers to:", options: ["The church membership directory listing members in order of seniority","The structured sequence of acts and elements that make up a corporate worship gathering","The personal weekly schedule of the senior pastor","The annual church programme and calendar of events"], answer: 1 },
      { q: "Acts 2:42 describes early church corporate worship as including:", options: ["A structured formal liturgy identical to modern church services","The apostles' teaching, fellowship, breaking of bread, and prayer","Music, offering, and preaching as the three essential elements","Silence, meditation, and extended corporate fasting"], answer: 1 },
      { q: "The purpose of the call to worship in a service is:", options: ["To formally welcome visiting guests to the church building","To transition the congregation from everyday life to intentional corporate focus on God","To introduce and welcome the preacher or speaker of the day","To signal the official beginning of the musical worship portion of the service"], answer: 1 },
      { q: "The sermon in corporate worship primarily serves to:", options: ["Provide academic theological education comparable to formal seminary classes","Proclaim and exposit Scripture for the transformation and edification of the hearers","Entertain the congregation with inspiring personal stories and examples","Satisfy the teaching requirements set by the church's denominational governing body"], answer: 1 },
      { q: "The Lord's Supper (Holy Communion) observed in a service commemorates:", options: ["The miraculous feeding of the five thousand","Christ's Last Supper with His disciples, and proclaims His death and return","The final resurrection victory of Christians over physical death","The descent of the Holy Spirit upon the disciples at Pentecost"], answer: 1 },
      { q: "An altar call or gospel invitation in a service gives people an opportunity to:", options: ["Contribute to the financial needs of the church and its ministry","Publicly respond to the gospel or the Word of God that has been preached","Mark the conclusion of the corporate worship music portion of the service","Be formally introduced to the congregation as new church members"], answer: 1 },
      { q: "The benediction at the close of a service is:", options: ["A farewell greeting encouraging people to return the following week","A formal blessing pronounced over the congregation as they are sent into the world","A final appeal for financial giving before the congregation is dismissed","A concise recapitulation of the sermon's three or four main points"], answer: 1 },
      { q: "Congregational prayer in a corporate service fulfils the biblical pattern of:", options: ["Bringing collected individual private devotions into a public setting","The corporate priestly ministry of all believers interceding together before God","A formal denominational liturgical requirement that must be satisfied","Demonstrating the advanced spiritual maturity and gifting of the prayer leader"], answer: 1 },
      { q: "The public reading of Scripture in a corporate service is important because:", options: ["It satisfies a longstanding church custom and cultural tradition","God's Word read publicly is itself a proclamation — living, active, and powerful","It helps the congregation locate and follow along in their personal Bibles","It demonstrates the literacy and academic preparation of the church's leadership"], answer: 1 },
      { q: "The regulative principle of worship holds that:", options: ["Contemporary worship should follow culturally relevant and current trends","Whatever Scripture does not explicitly forbid is permissible in corporate worship","Only what Scripture positively commands should be included in corporate worship","Church tradition and history ultimately regulate the order and content of service"], answer: 2 }
    ]
  },

  // 
  // 19. EVANGELISM
  // 
  {
    id: 19,
    code: "EVM 301",
    title: "Evangelism",
    icon: "",
    duration: 60,
    questions: [
      { q: "The Great Commission in Matthew 28:19-20 commands believers to:", options: ["Gather weekly for formal corporate worship services","Make disciples of all nations — baptising and teaching them to obey Christ","Send only professional missionaries to every unreached nation","Plant established churches in all the major cities of the world"], answer: 1 },
      { q: "The word 'gospel' (Greek: euangelion) literally means:", options: ["The way of eternal life","Good news","Holy Scripture","The eternal kingdom of God"], answer: 1 },
      { q: "Acts 1:8 describes the pattern for Christian witness as moving:", options: ["From foreign nations first, then working back to local communities","Outward from Jerusalem, to Judea and Samaria, and then to the ends of the earth","Focused exclusively on Israel before any outreach to the Gentile nations","Beginning with miraculous signs and wonders, followed by verbal proclamation"], answer: 1 },
      { q: "Personal evangelism primarily involves:", options: ["Distributing gospel literature and tracts to strangers","Sharing the good news of Jesus Christ from within your own life and relational network","Inviting people to attend church programmes, concerts, and events","Engaging in formal public debates concerning the existence of God"], answer: 1 },
      { q: "Contextualization in evangelism means:", options: ["Removing the inherent offense of the gospel to make it universally acceptable","Adapting the communication of the gospel to the cultural context without compromising its content","Adopting elements of other religious practices in order to attract seekers","Preaching only in the mother tongue of the target cultural group"], answer: 1 },
      { q: "Who is widely known as the 'Father of Modern Protestant Missions'?", options: ["Hudson Taylor","Adoniram Judson","William Carey","David Livingstone"], answer: 2 },
      { q: "The primary motivation for Christian evangelism should be:", options: ["Obligation to maintain the numerical growth of the local church","Fear of divine punishment for failure to obey the evangelical mandate","Love for God and for lost people, flowing from obedience to Christ's command","A strategic desire for the growth and geographical expansion of the church"], answer: 2 },
      { q: "An 'unreached people group' is defined as:", options: ["A group that has actively and formally rejected the Christian faith","A community that has literally never heard the gospel even once","A people group with no viable indigenous church capable of evangelising its own people without external help","A group geographically isolated with no access roads or communication infrastructure"], answer: 2 },
      { q: "Lifestyle evangelism emphasises:", options: ["Replacing all verbal proclamation completely with practical acts of service","Living a consistent, credible Christian life that opens doors for and supports verbal witness","Making Christianity attractive through broad cultural accommodation","Attending as many large evangelistic crusades and outreaches as possible"], answer: 1 },
      { q: "The parable of the lost sheep in Luke 15 illustrates God's heart for the lost as:", options: ["Indifferent to individuals who have chosen to wander away","Pleased when lost people take their own initiative to return","Actively seeking every single lost person and rejoicing greatly over each one found","Primarily concerned with the ninety-nine who remain safely and faithfully within"], answer: 2 }
    ]
  },

  // 
  // 20. CHRISTOLOGY
  // 
  {
    id: 20,
    code: "CHR 301",
    title: "Christology",
    icon: "",
    duration: 60,
    questions: [
      { q: "Christology is derived from the Greek words Christos and:", options: ["Theos","Logos","Pneumatos","Bios"], answer: 1 },
      { q: "The term 'Christ' translates the Hebrew mashiakh, meaning:", options: ["King","Anointed one","Prophet","Priest"], answer: 1 },
      { q: "Which Gospel portrays Jesus as the 'Universal Redeemer'?", options: ["Matthew","Mark","Luke","John"], answer: 2 },
      { q: "Jesus is identified as 'Yahweh' in the New Testament by comparing:", options: ["John 1:1 with Gen 1:1","Luke 1:68 with Psalm 106:48","Mark 1:1 with Mal 3:1","None of the above"], answer: 1 },
      { q: "The 'Word' (Logos) title is found in:", options: ["Matthew 1","John 1","Luke 1","Mark 1"], answer: 1 },
      { q: "'Only Begotten' (John 1:14) emphasizes:", options: ["Creation","Uniqueness in relation to the Father","Physical birth only","Human weakness"], answer: 1 },
      { q: "Micah 5:2 states Jesus' goings forth have been from:", options: ["Bethlehem","Old, from everlasting","Nazareth","Jerusalem"], answer: 1 },
      { q: "An 'Obscure Prophecy' in the OT is:", options: ["Deut 18:15","Genesis 3:15","Isaiah 9:6","Micah 5:2"], answer: 1 },
      { q: "'Immutability' means Jesus' divine nature is:", options: ["Changing","Unchanged","Finite","Human"], answer: 1 },
      { q: "As 'High Priest,' Jesus mediated the:", options: ["Old Covenant","New Covenant","Law of Moses","Roman Law"], answer: 1 },
      { q: "Which two Evangelists give the genealogy of Christ?", options: ["Matthew & Mark","Matthew & Luke","Luke & John","Mark & John"], answer: 1 },
      { q: "Matthew's genealogy starts from:", options: ["Adam","Abraham","David","Noah"], answer: 1 },
      { q: "How many women are mentioned in Matthew's genealogy?", options: ["One","Two","Four","Six"], answer: 2 },
      { q: "Which OT prophet wrote most about the 'Suffering Servant'?", options: ["Jeremiah","Isaiah","Daniel","Amos"], answer: 1 },
      { q: "Jesus' messianic office includes the roles of Prophet, High Priest, and:", options: ["Deacon","King","Apostle","Scribe"], answer: 1 },
      { q: "The 'First Begotten of creation' (Col 1:15) refers to Jesus':", options: ["Weakness","Priority in rank/time","Creation","Sin"], answer: 1 },
      { q: "'Christology from below' starts with the:", options: ["Deity","Fully human Jesus","Trinity","Angels"], answer: 1 },
      { q: "Jesus demonstrated authority to forgive sins by:", options: ["Writing","Healing the sick","Paying taxes","Singing"], answer: 1 },
      { q: "Jesus' pre-existence is implied by the use of 'Us' in:", options: ["Genesis 1:26","Exodus 3","Psalm 23","John 11"], answer: 0 },
      { q: "Prophecies of Christ were written:", options: ["All at once","Over nearly 1500 years","By one man","Only in Greek"], answer: 1 },
      { q: "'Soteriology' is the doctrine of:", options: ["Christ's person","Christ's saving work","The Holy Spirit","End times"], answer: 1 },
      { q: "Jesus was to enter Jerusalem in triumph, as foretold by:", options: ["Malachi","Zechariah","Jonah","Joel"], answer: 1 },
      { q: "The title 'Son of God' expresses:", options: ["Creation","Eternal divine relationship/equality","Biological birth","Minority"], answer: 1 },
      { q: "Jesus' 'Divine Works' include creating and:", options: ["Sinning","Sustaining all things","Failing","Dying forever"], answer: 1 },
      { q: "'Self-existent' means Jesus:", options: ["Needs air","Has ground of existence in Himself","Depends on man","Is a phantom"], answer: 1 },
      { q: "Which Gospel reveals Jesus primarily as the 'Son of God'?", options: ["Matthew","Mark","Luke","John"], answer: 3 },
      { q: "Rahab was a:", options: ["Queen","Prostitute","Priestess","Lawyer"], answer: 1 },
      { q: "Jesus' bone was NOT to be:", options: ["Seen","Broken","Touched","Washed"], answer: 1 },
      { q: "'Omniscience' means Jesus is:", options: ["All-powerful","All-knowing","Everywhere","Sinless"], answer: 1 },
      { q: "Jesus' humanity was joined to His:", options: ["Divine nature","Personhood","Sins","Wings"], answer: 1 },
      { q: "The 'Last Adam' refers to Jesus as the:", options: ["First sinner","Leader of the new humanity","Last man alive","Gardener"], answer: 1 },
      { q: "Which Council used 'intellectualized Christology'?", options: ["Trent","Chalcedon","Nicea","Vatican II"], answer: 1 },
      { q: "Jesus spoke with 'Authority,' unlike the:", options: ["Apostles","Pharisees","Prophets","Angels"], answer: 1 },
      { q: "The 'Messiah' concept combines a Davidic King with the priestly tradition of:", options: ["Aaron","Moses","Samuel","Eli"], answer: 1 },
      { q: "Jesus will judge the unsaved after the:", options: ["Wedding","Millennial rule","Baptism","Fast"], answer: 1 },
      { q: "'Christology' literally means:", options: ["Words about God","Words about Christ","Words about life","Words about the church"], answer: 1 },
      { q: "As 'King,' Jesus currently delivers believers from:", options: ["Taxes","Spiritual enemies","Work","Gravity"], answer: 1 },
      { q: "Jesus' baptism and anointing began His:", options: ["Childhood","Messianic career","Retirement","Education"], answer: 1 },
      { q: "The 'Septuagint' is the:", options: ["New Testament","Greek version of the OT","Latin Bible","Hebrew Law"], answer: 1 },
      { q: "Jesus' 'juridical work' involves:", options: ["Farming","Exercising judgment","Building houses","Fishing"], answer: 1 },
      { q: "'Omnipresence' means Jesus is:", options: ["Powerful","Everywhere","Knowing","Kind"], answer: 1 },
      { q: "Prophecy said Jesus' hands and feet would be:", options: ["Painted","Pierced","Bound with gold","Hidden"], answer: 1 },
      { q: "Matthew wrote primarily for:", options: ["Romans","Jews","Greeks","Egyptians"], answer: 1 },
      { q: "The 'Deity of Christ' is the:", options: ["Roof","Bedrock of Christianity","Window","Doorbell"], answer: 1 },
      { q: "Jesus is the 'Instrumental Cause' of:", options: ["Sin","All things","Evil","Confusion"], answer: 1 },
      { q: "The name 'Jesus Christ' identifies Him as the:", options: ["Servant","Messiah","Judge only","Student"], answer: 1 },
      { q: "Matthew portrays Jesus as the fulfillment of:", options: ["Science","Jewish OT prophecy","Greek myths","Roman law"], answer: 1 },
      { q: "Jesus was to be 'despised and rejected,' as seen in:", options: ["Isaiah 53","Psalm 1","Proverbs 31","Ruth 1"], answer: 0 },
      { q: "Jesus 'revealed the Father' through His:", options: ["Silence only","Words, actions, and character","Wealth","Politics"], answer: 1 },
      { q: "'Christology precedes Soteriology' in:", options: ["Time","Traditional logic","Rome","The future"], answer: 1 }
    ]
  },

  // 
  // 21. STUDIES IN DANIEL
  // 
  {
    id: 21,
    code: "DAN 301",
    title: "Studies in Daniel",
    icon: "",
    duration: 60,
    questions: [
      { q: "Daniel was written around:", options: ["1000 BC","607 BC","4 BC","70 AD"], answer: 1 },
      { q: "The name Daniel means:", options: ["Gift of God","My judge is God","God is great","Strong man"], answer: 1 },
      { q: "Daniel's Chaldean name was:", options: ["Shadrach","Belteshazzar","Abednego","Darius"], answer: 1 },
      { q: "The first six chapters of Daniel are:", options: ["Prophetical","Historical","Poetic","Legal"], answer: 1 },
      { q: "The theme of Daniel is:", options: ["Church growth","Prophecies of the Gentile World Kingdom","Music","Farming"], answer: 1 },
      { q: "The 'Head of Gold' in the dream represents:", options: ["Medo-Persia","Babylon","Greece","Rome"], answer: 1 },
      { q: "The 'Breast and arms of silver' represent:", options: ["Babylon","Medo-Persia","Greece","Rome"], answer: 1 },
      { q: "The 'Belly and thighs of brass' represent:", options: ["Babylon","Medo-Persia","Grecia","Rome"], answer: 2 },
      { q: "The 'Legs of iron' represent:", options: ["Babylon","Medo-Persia","Greece","Rome"], answer: 3 },
      { q: "The 'Stone cut out without hands' represents:", options: ["A new king","The kingdom of heaven on earth","A literal mountain","An earthquake"], answer: 1 },
      { q: "Which languages were used to record Daniel?", options: ["Hebrew & Greek","Hebrew & Chaldean (Aramaic)","Greek & Latin","English & Hebrew"], answer: 1 },
      { q: "How many chapters are in the book of Daniel?", options: ["10","12","14","16"], answer: 1 },
      { q: "King Jehoiakim was the son of:", options: ["David","Josiah","Solomon","Saul"], answer: 1 },
      { q: "Daniel purposed in his heart NOT to:", options: ["Pray","Defile himself with the king's dainties","Work","Speak"], answer: 1 },
      { q: "Shadrach's Hebrew name was:", options: ["Mishael","Hananiah","Azariah","Daniel"], answer: 1 },
      { q: "Meshach's Hebrew name was:", options: ["Mishael","Hananiah","Azariah","Daniel"], answer: 0 },
      { q: "Abednego's Hebrew name was:", options: ["Mishael","Hananiah","Azariah","Daniel"], answer: 2 },
      { q: "The fiery furnace was heated how many times more?", options: ["3","7","10","12"], answer: 1 },
      { q: "How many men did Nebuchadnezzar see in the fire?", options: ["3","4","5","6"], answer: 1 },
      { q: "The appearance of the fourth man was like:", options: ["An angel","The Son of God","A ghost","A cloud"], answer: 1 },
      { q: "Belshazzar was the son (or grandson) of:", options: ["Darius","Nebuchadnezzar","Cyrus","Josiah"], answer: 1 },
      { q: "Belshazzar desecrated the:", options: ["Walls","Sanctified vessels of the house of God","King's throne","Gardens"], answer: 1 },
      { q: "Who conquered Babylon from Belshazzar?", options: ["Nebuchadnezzar","Cyrus the Persian","Alexander the Great","Herod"], answer: 1 },
      { q: "Daniel was thrown into the lions' den for:", options: ["Stealing","Not omitting a known duty (prayer)","Fighting","Sleeping"], answer: 1 },
      { q: "The name 'Darius' denotes:", options: ["The judge","The maintainer","The strong","The hunter"], answer: 1 },
      { q: "Daniel 6:3 says Daniel was preferred because of an:", options: ["Excellent spirit","Expensive robe","Ancient book","Army"], answer: 0 },
      { q: "The writing on the wall was interpreted by:", options: ["The magicians","Daniel","Belshazzar","The queen"], answer: 1 },
      { q: "Nebuchadnezzar's deposition occurred in Daniel chapter:", options: ["2","4","6","8"], answer: 1 },
      { q: "How many 'world Empires' are in the times of the Gentiles?", options: ["4","8","10","12"], answer: 1 },
      { q: "Which king succeeded Nabopolassar?", options: ["Jehoiakim","Nebuchadnezzar","Darius","Cyrus"], answer: 1 },
      { q: "Daniel was from the tribe of:", options: ["Levi","Judah","Benjamin","Reuben"], answer: 1 },
      { q: "The 'Feet of iron and clay' represent:", options: ["Rome","Revised Rome","Medo-Persia","Babylon"], answer: 1 },
      { q: "There are how many verses of prophecy in Daniel?", options: ["100","139","150","200"], answer: 1 },
      { q: "The first conflict in Daniel was about:", options: ["Magic","Pagan Self Indulgence vs. Abstinence","War","Money"], answer: 1 },
      { q: "The 'Writing on the wall' appeared at:", options: ["A funeral","Belshazzar's feast","A wedding","A war"], answer: 1 },
      { q: "Daniel was promoted and made:", options: ["A slave","Ruler over the province of Babylon","A gardener","A soldier"], answer: 1 },
      { q: "The image made by Nebuchadnezzar (Dan 3) was how high?", options: ["50 feet","125 feet","200 feet","300 feet"], answer: 1 },
      { q: "Who accused the three Hebrews?", options: ["The Jews","Chaldeans","The king's family","The lions"], answer: 1 },
      { q: "'Abednego' means servant of:", options: ["Jehovah","Nego or Nebo","Aku","Baal"], answer: 1 },
      { q: "'Mishael' means:", options: ["Gift of the Lord","Who is what God is","Who Jehovah helps","Prince"], answer: 1 },
      { q: "In the fire, the three Hebrews were:", options: ["Burned","Unharmed","Crying","Sleeping"], answer: 1 },
      { q: "Nebuchadnezzar died shortly after:", options: ["The dream in Ch 4","Daniel's death","The flood","The war with Rome"], answer: 0 },
      { q: "'Mene, Mene, Tekel, Upharsin' was the:", options: ["King's name","Writing on the wall","Song","Prayer"], answer: 1 },
      { q: "Daniel 10-12 is described as the 'Battleground of':", options: ["Soldiers","Theological Controversies","Kings","Lions"], answer: 1 },
      { q: "Josiah was a:", options: ["Wicked king","Righteous king","Priest","Prophet"], answer: 1 },
      { q: "The first suppression of Jerusalem was by:", options: ["Egyptians","Chaldean Babel","Romans","Greeks"], answer: 1 },
      { q: "Daniel was qualified because he was:", options: ["A youth","Talented","A prince","All of the above"], answer: 3 },
      { q: "The best time to serve God is:", options: ["Old age","Youth","When rich","After retirement"], answer: 1 },
      { q: "'Pride and carelessness' will:", options: ["Be rewarded","Never go unpunished","Be ignored","Lead to wealth"], answer: 1 },
      { q: "The 'Seventh world empire' is:", options: ["Greece","Revised Rome","USA","Britain"], answer: 1 }
    ]
  },

  // 
  // 22. ANGELOLOGY
  // 
  {
    id: 22,
    code: "ANG 201",
    title: "Angelology",
    icon: "",
    duration: 60,
    questions: [
      { q: "Angelology is the theological study of:", options: ["The Holy Spirit and the operation of His spiritual gifts","Angels — their nature, classifications, functions, and the related study of Satan and demons","The Last Things and events surrounding the final judgment","The divine council as referenced in Old Testament texts"], answer: 1 },
      { q: "According to Scripture, angels are:", options: ["The spirits of deceased righteous humans who have been elevated and glorified","Purely symbolic representations of God's power and ongoing activity in the world","Created spiritual beings who serve God as His messengers and agents","Lesser divine beings in a hierarchical order below the members of the Trinity"], answer: 2 },
      { q: "The word 'angel' (Greek: angelos; Hebrew: malak) literally means:", options: ["Holy one","Servant or slave","Guardian and protector","Messenger"], answer: 3 },
      { q: "The two holy angels specifically named in the canonical Scriptures are:", options: ["Raphael and Uriel","Michael and Gabriel","Seraphiel and Cherubiel","Metatron and Sandalphon"], answer: 1 },
      { q: "Michael is described in Scripture primarily as:", options: ["The angel of divine healing and personal mercy","The archangel — a chief warrior who defends Israel and contends against evil spiritual powers","The interpreting angel who explains prophetic visions to the prophets","The angel assigned to guard the entrance to the Garden of Eden"], answer: 1 },
      { q: "Gabriel's primary function in Scripture is:", options: ["Spiritual warfare and the physical protection of Israel","Perpetual worship and adoration before the heavenly throne of God","Delivering important divine announcements and prophetic interpretations","Executing God's judgment and wrath upon the wicked"], answer: 2 },
      { q: "Satan's origin as revealed in Scripture is:", options: ["He is an eternal evil force co-equal in power with God","He is a fallen angel who rebelled against God in pride and was cast down","He is a symbolic representation of the collective evil tendencies within humanity","He was specifically created by God with the sole purpose of testing human beings"], answer: 1 },
      { q: "Ephesians 6:12 describes the Christian's true spiritual battle as being against:", options: ["Corrupt human governments and oppressive political systems","Flesh and blood — human enemies and adversaries","Principalities, powers, rulers of darkness, and spiritual wickedness in heavenly places","Our own sinful flesh and stubborn natural human desires"], answer: 2 },
      { q: "The seraphim described in Isaiah 6:2-3 are primarily associated with:", options: ["Carrying divine messages and announcements to human prophets","Guarding and covering the sacred Ark of the Covenant","Continuously worshipping God and joyfully proclaiming His surpassing holiness","Providing personal spiritual protection to individual believers on earth"], answer: 2 },
      { q: "The cherubim in Scripture are most closely associated with:", options: ["Delivering prophetic messages and divine announcements to human recipients","Guarding the holiness of God — e.g. at Eden, above the Ark, and at His throne","Leading communal worship in the great heavenly assembly before God","Carrying out specific acts of divine judgment upon rebellious nations"], answer: 1 }
    ]
  },

  // 
  // 23. HERMENEUTICS
  // 
  {
    id: 23,
    code: "HER 201",
    title: "Hermeneutics",
    icon: "",
    duration: 60,
    questions: [
      { q: "Hermeneutics is best defined as:", options: ["The history of the Bible's composition and canonical formation","The science and art of biblical interpretation","The study of the original biblical languages (Hebrew and Greek)","The process by which the canon of Scripture was officially recognised"], answer: 1 },
      { q: "Exegesis refers to:", options: ["Reading a presupposed personal meaning into the text","Drawing out the intended meaning from the text itself","Strictly allegorical interpretation of the biblical narrative","The application of Scripture to contemporary modern life"], answer: 1 },
      { q: "Eisegesis refers to:", options: ["Drawing the author's intended meaning out of the text","Reading one's own presupposed meaning into the text","The original Greek method of scriptural interpretation","Historical-grammatical critical analysis of the text"], answer: 1 },
      { q: "The hermeneutical principle that 'Scripture interprets Scripture' is called:", options: ["Allegorical interpretation","Grammatical-historical analysis","Analogia Scripturae — the Analogy of Scripture","Typological or figural reading"], answer: 2 },
      { q: "The historical-grammatical method of interpretation focuses on:", options: ["Discovering the spiritual meaning of a text independent of its context","The original historical setting and grammatical meaning intended by the human author","Allegorical, symbolic, and hidden meanings within the text","Church tradition and patristic commentary as the authoritative interpretive guide"], answer: 1 },
      { q: "A biblical 'type' — an OT person, event, or institution that prefigures an NT reality — is studied under:", options: ["Allegory","General literary symbolism","Typology","Metaphorical or figurative analysis"], answer: 2 },
      { q: "The 'literal' meaning of a biblical text refers to:", options: ["Every single word taken with rigid and wooden literalism","The plain, natural meaning intended by the author in its literary and historical context","Only the physically visible and materially tangible meaning","The most widely accepted rendering found in a standard English translation"], answer: 1 },
      { q: "Recognising the literary genre of a biblical text is hermeneutically important because:", options: ["Different genres were simply produced by different categories of human authors","Genre determines how the text was intended to be understood and how it should be interpreted","Only prophetic and poetic genres require unique or special methods of interpretation","Genre is the primary factor that determines both the historical accuracy and reliability of a passage"], answer: 1 },
      { q: "Understanding the cultural and historical background of a text is important in interpretation because:", options: ["It can ultimately substitute for the careful reading of the text itself","It illuminates the meaning the author intended and the audience originally received","It overrides or qualifies the plain grammatical meaning of the individual words","It is only genuinely relevant and necessary for the interpretation of Old Testament texts"], answer: 1 },
      { q: "The 'sensus plenior' (fuller sense) refers to:", options: ["The plain and immediately obvious sense of the text","A deeper or fuller meaning of Scripture intended by God beyond what the human author fully grasped","The complete and entire canon of the biblical Scriptures","A traditional verse-by-verse commentary and exposition method"], answer: 1 }
    ]
  },

  // 
  // 24. INTRODUCTION TO CHURCH CONFLICT MANAGEMENT AND RESOLUTION
  // 
  {
    id: 24,
    code: "CCM 101",
    title: "Intro to Church Conflict Management",
    icon: "",
    duration: 60,
    questions: [
      // MODULE I: INTRODUCTION
      { q: "Who authored the book 'Well Intentioned Dragons' referenced in the lecture on Church Conflict?", options: ["Norman Shawchuck","Keith Huttenlocker","Marshall Shelley","Hocker and William"], answer: 2 },
      { q: "According to the lecture, who is the prime target of conflict in the church?", options: ["Church elders","The Pastor","The choir leader","New members"], answer: 1 },
      { q: "Which of the following is NOT mentioned as a biblical example of conflict?", options: ["Cain and Abel","Adam and Eve","Paul and Barnabas","Solomon and David"], answer: 3 },
      { q: "The study of Church Conflict is described as a fall out of the fact that conflict forms an integral part of:", options: ["Church administration only","Our lives whether we like it or not","Government and politics","Social media interactions"], answer: 1 },
      { q: "Which scripture is cited in the lecture as important for our understanding of conflict among people, problems and solutions?", options: ["John 3:16","Romans 8:28","2 Timothy 3:16","Hebrews 11:1"], answer: 2 },
      // MODULE II: DEFINITION OF CONFLICT
      { q: "The Latin word 'configere' from which 'conflict' is derived means:", options: ["To argue loudly","To strike together","To run away","To negotiate peace"], answer: 1 },
      { q: "Which of the following best defines conflict according to the lecture?", options: ["A situation where one person dominates another","A clash of differing points of opinions and/or values between two or more people","A legal dispute between organisations","A breakdown in financial management"], answer: 1 },
      { q: "Conflict is defined as 'two pieces of matter trying to occupy the same place at the same time.' This is referred to as the:", options: ["Biblical definition","Sociological definition","Working definition","Theological definition"], answer: 2 },
      { q: "According to the lecture, conflict is the interaction of interdependent people who perceive incompatible goals and:", options: ["Seek legal advice from each other","Refuse to communicate entirely","Interference from each other in achieving those goals","Agree to disagree peacefully"], answer: 2 },
      { q: "The Latin prefix 'con' in 'conflict' means:", options: ["Against","Forward","Together","Away"], answer: 2 },
      // MODULE III: CAUSES OF CONFLICT IN THE CHURCH
      { q: "Which of the following is NOT listed as one of the three types of conflict in the church?", options: ["Conflict over budget and accountability","Conflict over church politics and power","Conflict over worship styles and music","Conflict over programmes and doctrine"], answer: 2 },
      { q: "The local church is described as a social institution primarily because:", options: ["It collects tithes and offerings","People are at the heart of every social institution","It is registered with the government","It holds weekly services"], answer: 1 },
      { q: "Which of the following is a unique contextual factor of the church that affects conflict?", options: ["The church uses paid professionals exclusively","The work of the church is accomplished through volunteers","The church never experiences financial issues","Church leaders are always neutral in conflict"], answer: 1 },
      { q: "Which of the following is listed as a cause of conflict in the church?", options: ["Too many prayer meetings","Prescriptive expectations","Building renovations","International missions"], answer: 1 },
      { q: "An indicator of conflict within the church is:", options: ["Growing Sunday school attendance","Parish members informally organizing cliques and factions","Increase in missionary activities","Regular pastoral visitation"], answer: 1 },
      // MODULE IV: PREDICTABLE TIMES OF CONFLICT
      { q: "According to the lecture, which of the following is a predictable time of conflict in the church?", options: ["Annual retreats","Introduction of baby boomers into the church","Christmas carolling","Mid-week Bible study"], answer: 1 },
      { q: "'Trained Incapacities' is a concept associated with which author?", options: ["Marshall Shelley","Norman Shawchuck","Keith Huttenlocker","Hocker and William"], answer: 2 },
      { q: "Which of the following is an example of a 'Trained Incapacity' in handling conflict?", options: ["Setting up a conflict resolution committee","Seeking outside mediation","Spiritualizing it — 'We are surrounded by a sea of lost souls, why bother?'","Documenting all grievances formally"], answer: 2 },
      { q: "'Congregational Patterns' refer to:", options: ["The seating arrangement during services","Corporate patterns of behaviour in dealing with conflict","The order of worship in a congregation","Annual giving trends in the church"], answer: 1 },
      { q: "Moving congregations from one conflict behaviour pattern to another is described as:", options: ["Very simple if the pastor leads","Automatic over time","Extremely difficult","Unnecessary once conflict ends"], answer: 2 },
      // MODULE V: CONFLICT AND CONFLICT MANAGEMENT CYCLES
      { q: "The conflict cycle is credited to:", options: ["Keith Huttenlocker","Marshall Shelley","Norman Shawchuck","Hocker and William"], answer: 2 },
      { q: "Which of the following correctly lists the THREE components of the Conflict Cycle?", options: ["Action, Threat, Reaction","Problem, Discussion, Resolution","Anger, Denial, Acceptance","Complaint, Mediation, Agreement"], answer: 0 },
      { q: "In the conflict cycle, 'Threat' means:", options: ["Behaviour of one party that starts a dispute","Threatens to take damage or destroy a 'territory' claimed by another party","The final stage before reconciliation","A legal warning issued during conflict"], answer: 1 },
      { q: "According to the lecture, the conflict cycle can be broken or discontinued if:", options: ["Both parties agree to leave the church","Basic principles of managing conflict are applied at any stage","The matter is reported to law enforcement","The weaker party surrenders"], answer: 1 },
      { q: "Which stage comes FIRST in 'The Conflict Cycle' diagram?", options: ["Confrontation","Role Dilemma","Tension Development","Injustice Collecting"], answer: 2 },
      // MODULE VI: MIND AND EMOTIONS
      { q: "'Cognitive Dissonance' as described in the lecture refers to:", options: ["The ability to think clearly during conflict","Distorted thinking during conflict","A method of conflict resolution","Healthy disagreement between parties"], answer: 1 },
      { q: "Which of the following is a typical emotion people feel during conflict?", options: ["Gratitude","Ambivalence","Generosity","Patience"], answer: 1 },
      { q: "'Overgeneralization' in conflict is expressed as:", options: ["'I observe in you what I won't recognize in me'","'I extend conclusions beyond observable limits'","'I see or hear only what supports my case'","'I attribute motives beyond their significance'"], answer: 1 },
      { q: "Why should people be given permission to vent during conflict according to the lecture?", options: ["So they can blame others freely","Because repressed feelings will stay and cause future displacement","To give them authority over the process","Because venting always leads to resolution"], answer: 1 },
      { q: "According to the lecture, feelings during conflict must be:", options: ["Ignored to maintain focus on facts","Acknowledged and expressed","Dismissed as irrelevant","Shared only with the pastor"], answer: 1 },
      // MODULE VII: RELATIONSHIPS IN CONFLICT
      { q: "Healthy relationships are described in the lecture as:", options: ["A human achievement through hard work","God-given (divine requirement) and needed for growth","Optional for mature believers","Only relevant outside the church"], answer: 1 },
      { q: "The THREE basic ingredients groups that handle conflict well must possess are:", options: ["Budget, Structure, Leadership","Counsellor, Security, Spirituality","Prayer, Fasting, Worship","Discipline, Authority, Control"], answer: 1 },
      { q: "A 'Constructive relational process' in conflict is described as:", options: ["Hard on people and soft on problem","Soft on people and soft on problem","Soft on people and hard on problem","Avoiding both people and problem"], answer: 2 },
      { q: "Which of the following is NOT one of the five ingredients for building trust?", options: ["Communication","Openness","Dominance","Transparency"], answer: 2 },
      { q: "According to Module VII, which of the following is a major level where conflict can be experienced?", options: ["Personal hygiene differences","Power or Position","Dress code disagreements","Service time preferences"], answer: 1 },
      // MODULE VIII: VARIETIES OF CONFLICT
      { q: "Which of the following is a NEGATIVE result of conflict?", options: ["Group solidarity","Stronger commitment to solutions","Disintegrating and dissociation of relationships","People are communicating"], answer: 2 },
      { q: "Which of the following is a POSITIVE result of conflict?", options: ["Personal hurt","Dysfunctional church","Bitterness","Develops new understanding of other's point of view"], answer: 3 },
      { q: "All conflict is described in the lecture as either:", options: ["Spiritual or physical","Internal or external","Self-centred or others-centred","Public or private"], answer: 2 },
      { q: "Which of the following is listed as one of the THREE basic types of conflict within the church?", options: ["Conflict over worship styles","Conflict over money or budgets","Conflict over building design","Conflict over social media use"], answer: 1 },
      { q: "Conflict brings about which of the following positive outcomes?", options: ["Automatic unity among members","New ways of thinking and doing things","Permanent resolution of all issues","Elimination of leadership problems"], answer: 1 },
      // MODULE IX: COMMUNICATION IN CONFLICT
      { q: "According to the lecture, conflict CANNOT exist without:", options: ["Legal documentation","Communication","A mediator","Financial disputes"], answer: 1 },
      { q: "Which of the following is a simple rule of good communication?", options: ["Good communication promotes judgment","Good communication increases suspense","Good communication promotes trust","Good communication avoids difficult topics"], answer: 2 },
      { q: "'Public Distance' in spatial relationships (proxemics) is measured as:", options: ["Less than one arm's length","Two arm's length","No arm's length","3–6 meters"], answer: 3 },
      { q: "The communication theory model described in the lecture follows which sequence?", options: ["Receiver → Decode → Noise → Encode → Sender","Sender → Encode → Noise → Decode → Receiver","Noise → Sender → Encode → Decode → Receiver","Sender → Decode → Noise → Encode → Receiver"], answer: 1 },
      { q: "'Active Listening' is described in the lecture as:", options: ["Only hearing words without context","Keeping your mouth shut and listening attentively, observing movement and context of communication","Interrupting to clarify immediately","Listening only to facts and ignoring tone"], answer: 1 },
      // MODULE X: STYLES OF CONFLICT MANAGEMENT
      { q: "How many basic styles of conflict management are identified in the lecture?", options: ["Three","Four","Five","Six"], answer: 2 },
      { q: "The purpose of 'The Avoider' style of conflict management is:", options: ["To win at all costs","To preserve the relationship at any cost","To stay off conflict and withdraw to avoid identifying with either side","To get all parties to a mutual agreement"], answer: 2 },
      { q: "Which conflict management style believes that mutually agreeable solutions can be worked out among all conflicting parties?", options: ["The Avoider","The Competitor","The Accommodator","The Collaborator"], answer: 3 },
      { q: "The purpose of 'The Compromiser' is:", options: ["To ensure only the strongest party wins","To ensure that everyone wins a little and gives up a little","To avoid all conflict permanently","To bring in a third party arbitrator"], answer: 1 },
      { q: "A possible use of 'The Competitor' style is:", options: ["When the stakes are low and relationship matters more","When all parties are willing to compromise","When important and vital decisions must be made urgently","When there is plenty of time to explore all options"], answer: 2 }
    ]
  }

]; // END OF EXAMS ARRAY

// ============================================================
// SCHOOL OF DISCIPLESHIP (SOD) — EXAM PORTAL DATA
// ============================================================

// ---- SOD STUDENT MATRIC NUMBERS ----
// Format: "SOD_MATRIC_NUMBER": "Full Student Name"
// Example: "SOD202670646": "Olaiya Flourish Boluwatife"
const SOD_STUDENTS = {
  "SOD202670646": "Olaiya Flourish Boluwatife",
  "SOD202650133": "Olajide Michael Daramola",
  "SOD202684220": "Demilade Adelanke",
  "SOD202698462": "Ayomide Lasore Magaret",
  "SOD202673087": "Elegbede Elizabeth",
  "SOD202683070": "Omowumi Ogunmefun",
  "SOD202647892": "Omotoso Peace Tolani",
  "SOD202676515": "Oladejo Opeyemi",
  "SOD202694104": "Olaniyi Adejoke Oluwaseun",
  "SOD202621438": "Odunayo Oluwatosin Adediwura",
  "SOD202617983": "Oluwatimileyin Olutunde Josiah",
  "SOD202681660": "Olonisola Elijah Akinbode",
  "SOD202689574": "DAHUNSI JOY",
  "SOD202635482": "Bowale Paul",
  "SOD202667360": "Adeyeye Dasola Mary",
  "SOD202673220": "Adedoyin Adetola Adewoye",
  "SOD202610675": "Blessing Olumayede",
  "SOD202672816": "Lydia onyinyechi omooba",
  "SOD202605138": "Adesola Odetayo",
  "SOD202603675": "Chidera Glory Ekezie",
  "SOD202664092": "OSIYEMI RASHEED OLALEKAN",
  "SOD202689538": "REBECCA OMOTOSHO ISAAC",
  "SOD202681591": "EMMANUEL OLANREWAJU",
  "SOD202660598": "REBECCA OWOLABI",
  "SOD202689724": "IBITOYE OMOLARA",
  "SOD202612873": "GEORGE BLESSING",
  "SOD202606220": "Balogun Rebecca",
  "SOD202651630": "Abimbola Shotunde",
  "SOD202614876": "Ebenezer Temitope OGUNNOWO",
  "SOD202676953": "AFOLABI DEBORAH",
  "SOD202607239": "Dorcas Adenike Adana",
  "SOD202676211": "Afolabi Olayinka Mercy",
  "SOD202680726": "Oluwakemi Felicia Shoyoye",
  "SOD202698268": "Damilola Akintayo",
  "SOD202697381": "Odusina Damilola Deborah",
  "SOD202623020": "BELLO HEZEKIAH OLUWASEGUN",
  "SOD202686710": "Oluwatofunmi Oguntibeju",
  "SOD202652919": "Olabisi Faith",
  "SOD202645928": "Eghoghon EBHOHON",
  "SOD202608913": "Omotoso Praise",
  "SOD202670126": "Comfort Ene Oguntibeju",
  "SOD202672161": "Eunice Boluwatife Ademolayan",
  "SOD202647363": "Richard Olasunkanmi Ademolayan",
  "SOD202690146": "Divine-Favour Atewe Chukwuemeke",
  "SOD202690762": "Adegoke Abimbola Epainos",
  "SOD202697539": "Awobusuyi Precious",
  "SOD202683792": "Gloria Adepoju",
  "SOD202603054": "Omotolani Ashiru",
  "SOD202647505": "Ifeoluwa Olagunju",
  "SOD202670459": "FETUGA Oyindolapo Stella",
  "SOD202699990": "Thompson Emmanuel",
  "SOD202652826": "Thompson Temilade",
  "SOD202640513": "Oluwapamilerin Olajide",
  "SOD202666276": "Nwasor Maureen kaobimdi",
  "SOD202683646": "Abiodun Adesanya",
  "SOD202683439": "Peace Igbinosa",
  "SOD202650792": "Abandy Esther Thompson",
  "SOD202637093": "Adigun Olu Matthew",
  "SOD202661784": "Ajayi Damilola Opeyemi",
  "SOD202629605": "Asoah Israel Onoesta",
  "SOD202635261": "Bello Michael",
  "SOD202667020": "Bello Folake",
  "SOD202657924": "Ebohon Princewill",
  "SOD202646931": "Emmanuel Temitayo Olabisi",
  "SOD202692858": "Janet Oluwabunmi",
  "SOD202684307": "Folarin Olawunmi Oluwaseun",
  "SOD202683422": "Odupe Emmanuel",
  "SOD202641076": "Rasaq Afolabi Oreoluwa",
  "SOD202642576": "Matthew Adebayo",
  "SOD202653652": "Omogbemi Rebecca Abimbola",
  "SOD202665264": "Phebe Oluwatoyosi Ogede",
  "SOD202643113": "Taiwo Rofiat Adegoke",
  "SOD202621888": "Kaka Temitope",
  "SOD202691159": "Ogunkola Victoria Titilope",
  "SOD202658803": "Ikutomoni Oluwatobi Deborah",
  // ---- ADMIN TEST ACCOUNT ----
  "SOD202612345": "Admin Test Account",
};

// ---- SOD EXAM DATA ----
// Add SOD exams here following the same format as EXAMS above.
// Example:
// {
//   id: 1,
//   code: "SOD 101",
//   title: "Introduction to Discipleship",
//   icon: "📖",
//   duration: 60,
//   questions: [
//     { q: "Question text?", options: ["A", "B", "C", "D"], answer: 0 }
//   ]
// },
const SOD_EXAMS = [

  // 1. YEAR 1
  {
    id: 1,
    code: "SOD YEAR 1",
    title: "Year 1",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [

      // ---- PAPER 1 (Q1–20) ----
      { q: "You are important to God because without you the work of God will ___", options: ["Stop", "Fail", "Slow down"], answer: 2 },
      { q: "Which year did the School of Disciples start?", options: ["1952", "1985", "1977"], answer: 1 },
      { q: "You might be known in the city or not, but God is ___ of you", options: ["Glad", "Mindful", "In need"], answer: 1 },
      { q: "He ___ you because you count to God", options: ["Likes", "Loves", "Needs"], answer: 2 },
      { q: "He redeemed you, that is why you are ___", options: ["Saved", "a man", "alive"], answer: 0 },
      { q: "The only condition to sit at the same throne with Jesus Christ is to be ___", options: ["A believer", "An overcomer", "A preacher"], answer: 1 },
      { q: "Satan hates you so intensely because you are a ___ of God", options: ["Son", "Friend", "Child"], answer: 1 },
      { q: "Satan hates you warmly because God ___ you warmly", options: ["Loves", "Wants", "Cherish"], answer: 0 },
      { q: "In the case study of Job, after the enemy had stolen everything, the wife came to him and said, ___ God and ___", options: ["course, die", "cause, die", "Curse, die"], answer: 2 },
      { q: "What is the most important reason God is mindful of you?", options: ["Because he is the creator", "Because he is the Almighty", "Because he loves you"], answer: 2 },
      { q: "How often does God love his people?", options: ["When you please him", "Always", "When he is happy"], answer: 1 },
      { q: "\"What is man, that thou art mindful of him?\" is found in:", options: ["Proverbs 8:4", "Psalm 8:4", "Psalm 4:8"], answer: 1 },
      { q: "Which of the following is NOT a reason you are important to God?", options: ["God is mindful of you", "God magnifies you", "God commands the devil not to come near you"], answer: 2 },
      { q: "Which passage supports that God needs the feet of his people?", options: ["Mark 16:15", "Mark 15:15", "Mark 15:16"], answer: 0 },
      { q: "God needs your voice for which of the following?", options: ["Talking", "Interacting", "Prayer"], answer: 2 },
      { q: "When should you give God your time?", options: ["Morning", "All the time", "Evening"], answer: 1 },
      { q: "Which of the following does NOT include an element of total love God requires from his people?", options: ["Heart", "Mind", "Work"], answer: 2 },
      { q: "What is the first thing you need to know about yourself?", options: ["God is good", "God provides", "I am important to God"], answer: 2 },
      { q: "When we suffer, what happens?", options: ["God fights", "God is happy", "God suffers"], answer: 2 },
      { q: "A disciple is a ___ because Jesus is a creator", options: ["Trainee", "Follower", "Creator"], answer: 2 },

      // ---- PAPER 2 (Q21–40) ----
      { q: "Satan hates you, he wants to ___, ___, ___ and ___ you", options: ["Steal, kill, destroy and bind", "Kill, destroy, steal and bind", "Bind, destroy, steal and kill"], answer: 0 },
      { q: "The first thing Satan wants to set against you is your ___", options: ["Soul", "Spirit", "Body"], answer: 2 },
      { q: "When you win a soul, for that soul to become a disciple like yourself, it will cost you something. What must you do?", options: ["You must give of yourself to that person", "You must keep talking to him", "You must pay his bills"], answer: 0 },
      { q: "Which spirit causes deformity in muscles and bones?", options: ["The unclean spirit", "Foul spirit", "Spirit of Infirmity"], answer: 2 },
      { q: "Which demonic spirit causes people to sin, seduces, and always tears and throws down its victim?", options: ["Seducing Spirit", "Unclean Spirit", "Familiar Spirit"], answer: 1 },
      { q: "Demons are ___", options: ["Daughters of men of Noah's day", "The ghosts of offspring of angels", "The falling stars of heaven"], answer: 2 },
      { q: "Demons have certain things in common. Which of the following is true?", options: ["They don't have bodies, unlike human beings", "They have bodies, like human beings", "They are curably evil"], answer: 0 },
      { q: "Demons are subjected to us through ___", options: ["Worship", "Prayer", "The name of Jesus"], answer: 2 },
      { q: "Which of the following is true about the religions that the devil controls?", options: ["They say God is love and will never judge anybody", "They have the Book of Revelations in their Bible", "They believe Jesus was born by a virgin"], answer: 0 },
      { q: "Demons operate by:", options: ["Showing love to the disciples of Jesus", "Influencing leaders to break the laws", "Preaching that Jesus is the son of God"], answer: 1 },
      { q: "Which one is NOT true about the things in heaven?", options: ["The four living beings", "The falling stars", "The seraphim"], answer: 1 },
      { q: "To whom did the Lord say, \"Arise, and go into the street which is called Straight...\"?", options: ["Paul", "Archangel", "Ananias"], answer: 2 },
      { q: "Why does Satan hate the people of God intensely?", options: ["They are humble", "God needs them earnestly", "They are pleasant"], answer: 1 },
      { q: "Who hates Christ before his people?", options: ["Satan", "World", "Enemy"], answer: 1 },
      { q: "Satan wants to steal and destroy you because ___", options: ["He hates you", "You offend him", "You are not his own"], answer: 0 },
      { q: "Which of the following is among what Satan wanted to steal according to Job's story?", options: ["Parent", "Wife", "Children"], answer: 2 },
      { q: "Why does Satan want to destroy your testimony?", options: ["You are not his own", "It is his duty", "You disappoint him"], answer: 0 },
      { q: "How does Satan first use one's body against him/her?", options: ["Sin", "Lust", "Pride"], answer: 1 },
      { q: "When your body does not cooperate with Satan, what other major weapon does he use?", options: ["Principalities and power", "Highly disciplined soldiers of darkness", "Rulers of darkness and powers"], answer: 1 },
      { q: "Even when God is on your side, Satan can use ___ to weigh you down", options: ["Fear", "Suffering", "Hunger"], answer: 0 },

      // ---- PAPER 3 (Q41–60) ----
      { q: "Which of these is NOT among the major weapons of warfare?", options: ["Perseverance", "Faith", "Holiness"], answer: 0 },
      { q: "In Acts 10:9–10, Peter was on top of the house praying and was transferred into the ___ spiritual realm", options: ["Middle", "Upper", "Lower"], answer: 1 },
      { q: "Your permanent victory is certain, subject to one condition. The condition is ___", options: ["Love", "Praise", "Serve"], answer: 2 },
      { q: "You have the assurance of victory because the One who loves you is the ___ and your enemy is a ___", options: ["Real, Fake", "Truth, Liar", "Saviour, Liar"], answer: 1 },
      { q: "If God loves you so much, you should ___ him in return", options: ["Real, Fake", "Truth, Liar", "Love, Serve"], answer: 2 },
      { q: "You must demonstrate that you love God by your ___", options: ["Actions", "Giving", "Prayers"], answer: 0 },
      { q: "Live inside ___ — dwell there", options: ["Christ", "Faith", "Love"], answer: 2 },
      { q: "When you pray until you break through and you are enclosed by ___, nobody can resist you", options: ["Angel", "Demon", "Holy Spirit"], answer: 2 },
      { q: "When the enemy sees you coming and begins to run, you are in the position to ___", options: ["Set the captives free", "Preach the gospel", "Pray for hours"], answer: 0 },
      { q: "Almighty God will purify the sons of Levi so they can present an offering in ___", options: ["Thanksgiving", "Love", "Righteousness"], answer: 2 },
      { q: "Everyone that is going to be used of God must be ___", options: ["Discipled", "Purified", "Powerful"], answer: 1 },
      { q: "The ___ you are, the easier it will be for the flow of the ___", options: ["Purer, Holy Spirit", "Holy, anointing", "Righteous, power"], answer: 0 },
      { q: "\"They that ___ on the Lord shall renew their strength\" (Isaiah 40:31)", options: ["Stay, strength", "Pray, power", "Wait, strength"], answer: 2 },
      { q: "If you love righteousness and hate iniquity, your reward will be ___", options: ["Prosperity", "Wealth", "Oil of gladness"], answer: 2 },
      { q: "\"I am the ___, you are the branches, every ___ in me that bears fruit...\"", options: ["Vine, branch", "Stem, tree", "Vine, tree"], answer: 0 },
      { q: "Which of the following is NOT among the five basic ingredients of devastating prayer?", options: ["Strength", "Total surrender", "Trance"], answer: 0 },
      { q: "At the climax of a warrior's prayer, when they are lifted into the higher spiritual realm, they are said to be in a ___", options: ["Upper room", "Trance", "Secret place of heaven"], answer: 1 },
      { q: "One of these is a defensive weapon ___", options: ["Holiness", "Power", "Salvation"], answer: 0 },
      { q: "The devil uses the demon of sorrow to open its ___ on a Christian", options: ["Destruction", "Assault", "Pain"], answer: 0 },
      { q: "What happens to those who have boldness to suffer for Christ?", options: ["Opened everlasting doors", "Heavens will rejoice", "Crown of glory awaits them"], answer: 2 }

    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 2. YEAR 2
  {
    id: 2,
    code: "SOD YEAR 2",
    title: "Year 2",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [

      // ---- PAPER 1 (Q1–20) ----
      { q: "Being a disciple requires following Jesus in ___ ways", options: ["Some", "Convenient", "All"], answer: 2 },
      { q: "Disciples can be like Jesus in many ways except in", options: ["Power", "Throne", "Boldness"], answer: 1 },
      { q: "As a disciple, you must be like Jesus in ___", options: ["Love", "Faith", "Salvation"], answer: 0 },
      { q: "The greatest way a disciple can show love to others is by", options: ["Giving them a gift", "Telling them about Christ", "Praying for them"], answer: 1 },
      { q: "Which of the following is an aspect of love?", options: ["Chastisement", "Giving", "Praying"], answer: 0 },
      { q: "The conditions of not being chastised as a disciple include the following EXCEPT", options: ["Disobedient", "Young in faith", "Being a bastard"], answer: 0 },
      { q: "To discipline someone we love shows hatred", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "A disciple will be chastised for the following reasons EXCEPT", options: ["To face final judgement", "Not to suffer twice", "Disallowing compromise"], answer: 0 },
      { q: "Chastising the disciples is not necessary no matter what they do", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "Why did the Holy Spirit chastise Ananias and Sapphira?", options: ["They might not corrupt others", "They will not lose their faith", "They will not become more corrupt"], answer: 0 },
      { q: "Wisdom comes to disciples who do wrong through", options: ["Training", "Study", "Chastisement"], answer: 2 },
      { q: "What can make a disciple be regarded as a fool?", options: ["Despising leaders' instructions", "Embracing chastisement", "Always enjoying chastisement"], answer: 0 },
      { q: "Leaders are at great danger of chastisement, but you must ___ for them", options: ["Speak", "Plead", "Pray"], answer: 2 },
      { q: "Seeking absolute counsel from young people is foolish", options: ["True", "False", "Not sure"], answer: 0 },
      { q: "Jesus Christ displayed his humility by doing the following EXCEPT", options: ["Taking the nature of man", "Preaching to sinners", "Becoming obedient"], answer: 1 },
      { q: "You are important to God because without you the work of God will ___", options: ["Stop", "Fail", "Slow down"], answer: 2 },
      { q: "Which year did the School of Disciples start?", options: ["1952", "1985", "1977"], answer: 1 },
      { q: "You might be known in the city or not, but God is ___ of you", options: ["Glad", "Mindful", "In need"], answer: 1 },
      { q: "He ___ you because you count to God", options: ["Likes", "Loves", "Needs"], answer: 2 },
      { q: "He redeemed you, that is why you are ___", options: ["Saved", "A man", "Alive"], answer: 0 },

      // ---- PAPER 2 (Q21–40) ----
      { q: "Those that sow in ___ reap ___", options: ["Tears, joy", "Tears, bountiful", "Pain, joy"], answer: 0 },
      { q: "Praying in a mourning and sorrowful heart shows", options: ["Deepest level of suffering", "Earnest desire for an answer", "Anger at the current situation"], answer: 1 },
      { q: "What does the devil do when he knows you are a determined officer of Jesus Christ?", options: ["Give you more power than God will give", "Attack you until you give up", "Get you out of the battle field and defeat you"], answer: 1 },
      { q: "The devil uses different types of demons. Which of the following is NOT among them?", options: ["Strength", "Sorrow", "Suicide"], answer: 0 },
      { q: "Being sorrowful results in the following EXCEPT", options: ["Less strength", "Dim visions", "More powerful"], answer: 2 },
      { q: "When Satan comes with discouragement, which of these acts is dangerous?", options: ["Drowsy and sleeping", "Awake", "Praying"], answer: 0 },
      { q: "When the devil attacks, which of the following should a disciple NEVER do?", options: ["Run to God", "Get tired", "Refire"], answer: 1 },
      { q: "Satan cannot attack until he sees enough ___", options: ["Information", "Weakness", "Opening"], answer: 0 },
      { q: "The devil's attack can be frustrated if there is no ___", options: ["Spy", "Information", "Principality and Power"], answer: 1 },
      { q: "Satan gathers information from unsuspecting Christians through", options: ["Careless talks", "Prayer points", "Testimony"], answer: 0 },
      { q: "The introductory way the devil attacks people is", options: ["Superficial tactics", "Extraordinary tactics", "Diversionary tactics"], answer: 2 },
      { q: "Proverbs 15:7 calls a fool's mouth his destruction because", options: ["He/she continues to say what will put him/her in trouble", "He/she will continue to say irrelevant things", "He/she won't know when to stop talking"], answer: 0 },
      { q: "Casting out demons is not fun", options: ["True", "False", "Not sure"], answer: 0 },
      { q: "Some demons cannot go out except with", options: ["Fruit of the Spirit", "Prayer and fasting", "Gift of the Spirit"], answer: 1 },
      { q: "Casting out demons can only be done in the name of Jesus. Which Bible passage supports that?", options: ["Philippians 2:10", "Acts 2:10", "Romans 2:10"], answer: 0 },
      { q: "Satan hates you, he wants to ___, ___, ___ and ___ you", options: ["Steal, kill, destroy and bind", "Kill, destroy, steal and bind", "Bind, destroy, steal and kill"], answer: 0 },
      { q: "The first thing Satan wants to set against you is your ___", options: ["Soul", "Spirit", "Body"], answer: 2 },
      { q: "When you win a soul, for that soul to become a disciple like yourself, what must you do?", options: ["You must give of yourself to that person", "You must keep talking to him", "You must pay his bills"], answer: 0 },
      { q: "Which spirit causes deformity in muscles and bones?", options: ["The unclean spirit", "Foul spirit", "Spirit of Infirmity"], answer: 2 },
      { q: "Which demonic spirit causes people to sin, seduces, and always tears and throws down its victim?", options: ["Seducing Spirit", "Unclean Spirit", "Familiar Spirit"], answer: 1 },

      // ---- PAPER 3 (Q41–60) ----
      { q: "Which of these is NOT among the major weapons of warfare?", options: ["Perseverance", "Faith", "Holiness"], answer: 0 },
      { q: "You focus the attention of the ___ unto yourself when you pray in the name of Jesus Christ", options: ["God", "Archangels", "Universe"], answer: 2 },
      { q: "In Acts 10:9–10, Peter was on top of the house praying and was transferred into the ___ spiritual realm", options: ["Middle", "Upper", "Lower"], answer: 1 },
      { q: "Your permanent victory is certain, subject to one condition. The condition is ___", options: ["Love", "Faith", "Obedience"], answer: 2 },
      { q: "You have the assurance of victory because the One who loves you is the ___ and your enemy is a ___", options: ["Real, Fake", "Truth, Liar", "Saviour, Liar"], answer: 1 },
      { q: "If God loves you so much, you should ___ him in return", options: ["Praise", "Love", "Serve"], answer: 1 },
      { q: "You must demonstrate that you love God by your ___", options: ["Actions", "Giving", "Prayers"], answer: 0 },
      { q: "Live inside ___, dwell there", options: ["Christ", "Faith", "Love"], answer: 2 },
      { q: "Which weapon does Satan use to weigh us down?", options: ["Sorrow", "Fear", "Discouragement"], answer: 1 },
      { q: "When you pray until you break through and you are enclosed by ___, nobody can resist you", options: ["Angel", "Demon", "Holy Spirit"], answer: 2 },
      { q: "How can a delivered soul be more offensive to the advances of the enemy?", options: ["Witnessing", "Going to church", "Dressing as S.U"], answer: 0 },
      { q: "Which of the following is a sign of deliverance?", options: ["Brighter life", "Speaking in tongues", "Casting and binding"], answer: 0 },
      { q: "Possessive demons can be in the church and not be detected", options: ["True", "False", "Not sure"], answer: 0 },
      { q: "Absolute attack against the works or sacrifice of God is", options: ["Missed attack", "Direct attack", "Mistake attack"], answer: 1 },
      { q: "Indirect attack of demons can come in a ___ form", options: ["Subtle", "Loving", "Kindness"], answer: 0 },
      { q: "Religious demons can do any of the following EXCEPT", options: ["Perform several miracles", "Pleading the blood of Jesus", "Have some form of goodness"], answer: 1 },
      { q: "The ultimate way to expose all kinds of demons is the presence of the ___", options: ["Spiritual worshipper", "Holy Spirit", "Prayer warriors"], answer: 1 },
      { q: "Deliverance of the demon-possessed involves ___ and ___", options: ["Convincing, conviction", "Ministry, message", "Gospel, faith"], answer: 0 },
      { q: "For willing victims to be delivered, they must understand that", options: ["Peace is superior to power", "There is a God", "They are disciples"], answer: 0 },
      { q: "Ministers must have ___ to identify those who need deliverance", options: ["Discernment", "Power", "Strength"], answer: 0 }

    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 3. YEAR 3
  {
    id: 3,
    code: "SOD YEAR 3",
    title: "Year 3",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [

      // ---- PAPER 1 (Q1–40) ----
      { q: "Stone is a form of ___ to a believer", options: ["Obstacle", "Object", "War instrument"], answer: 0 },
      { q: "For the fruit to grow properly the ___ need to be ___", options: ["Excess, cut down", "Bad fruit, plucked", "Hindrances, removed"], answer: 2 },
      { q: "Everyone is born with a heart of stone", options: ["True", "False", "Not sure"], answer: 0 },
      { q: "The heart of man is desperately wicked and must be replaced after salvation with ___", options: ["Heart of stone", "Heart of flesh", "Heart of love"], answer: 1 },
      { q: "Every brethren are filled with heart of Christ", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "Brethren who have stony heart should be removed so that", options: ["They won't infect others", "Others will serve God", "The church can stand"], answer: 0 },
      { q: "While some stones are not desirable, but some are gathered among the brethren because they are", options: ["Precious stone", "Valuable stone", "Living stone"], answer: 2 },
      { q: "The only condition for not embracing is", options: ["Faith", "Salvation", "God's purpose"], answer: 2 },
      { q: "Some are born and some make themselves available as ___ for the kingdom of God's sake", options: ["Eunuchs", "Priest", "Disciples"], answer: 0 },
      { q: "Getting things of eternal value doesn't require losing things not of eternal value", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "Once you believe Jesus is the Son of God then you have ___", options: ["Won", "Sinless", "Great"], answer: 0 },
      { q: "The victory that a disciple has is ___", options: ["Love", "Jesus Christ", "World"], answer: 1 },
      { q: "God has given the disciples an insurance cover which can be found in", options: ["Luke 10:19", "Luke 11:15", "Luke 11:19"], answer: 0 },
      { q: "Working under the authority of Christ gives you power over", options: ["Sins", "Doubts", "Evil forces"], answer: 2 },
      { q: "Once a person becomes a disciple he is anointed and that gives him/her the ability to", options: ["Break yokes", "Preach", "Win souls"], answer: 0 },
      { q: "Which of the following is correct?", options: ["Anointing is proportionate to faith", "Anointing is proportionate to love", "Anointing is proportionate to holiness"], answer: 2 },
      { q: "Once a disciple submits himself/herself to Christ, the devil flees from them", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "Every battle fought by disciples ends in victory but requires", options: ["Faith", "Patience", "Obedience"], answer: 0 },
      { q: "The seventh pillar of a disciple's victory is", options: ["Love of God", "Grace of God", "Peace of God"], answer: 0 },
      { q: "Disciples are more than conquerors because of", options: ["Faith in God", "Righteousness", "God's love"], answer: 2 },
      { q: "Ultimately, among other things, a disciple must be to his master", options: ["A giver", "A maker of other disciples", "A shower of love to others"], answer: 1 },
      { q: "For a disciple to become a teacher he must first be a", options: ["Learner", "Reader", "Winner"], answer: 0 },
      { q: "For a disciple to learn all the acts of his master he must be a", options: ["Worker", "Listener", "Son"], answer: 2 },
      { q: "The greatest reward of sonship to God is becoming ___ to him", options: ["Heir", "Peace", "Good success"], answer: 0 },
      { q: "Becoming a friend of God gives us permission to access the following EXCEPT", options: ["Holy place", "Holy of holies", "Holy words"], answer: 2 },
      { q: "Out of ___ he chose seventy which he sent out two by two, then chose twelve, out of which three are called apostles then one bosom friend", options: ["Five hundred", "Seven hundred", "Two hundred"], answer: 0 },
      { q: "Becoming a true friend of Jesus is enough because becoming a special friend will cost much more than I can afford", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "One way disciples can be branded for Christ is by", options: ["Character", "Love", "Knowledge"], answer: 0 },
      { q: "Being branded for God ensures", options: ["Salvation", "Grace", "Distinction from the enemy"], answer: 2 },
      { q: "You are important to God because without you the work of God will ___", options: ["Stop", "Fail", "Slow down"], answer: 2 },
      { q: "Which year did the School of Disciples start?", options: ["1952", "1985", "1977"], answer: 1 },
      { q: "You might be known in the city or not, but God is ___ of you", options: ["Glad", "Mindful", "In need"], answer: 1 },
      { q: "He ___ you because you count to God", options: ["Likes", "Loves", "Needs"], answer: 2 },
      { q: "He redeemed you, that is why you are ___", options: ["Saved", "A man", "Alive"], answer: 0 },
      { q: "The only condition to sit at the same throne with Jesus Christ is to be ___", options: ["A believer", "An overcomer", "A preacher"], answer: 1 },
      { q: "Satan hates you so intensely because you are a ___ of God", options: ["Son", "Friend", "Child"], answer: 1 },
      { q: "Satan hates you warmly because God ___ you warmly", options: ["Loves", "Wants", "Cherish"], answer: 0 },
      { q: "In the case study of Job, after the enemy had stolen everything, the wife came to him and said, ___ God and ___", options: ["course, die", "cause, die", "Curse, die"], answer: 2 },
      { q: "What is the most important reason God is mindful of you?", options: ["Because he is the creator", "Because he is the Almighty", "Because he loves you"], answer: 2 },
      { q: "How often does God love his people?", options: ["When you please him", "Always", "When he is happy"], answer: 1 },

      // ---- PAPER 2 (Q41–80) ----
      { q: "God swore to get rid of his enemies. This can be found in", options: ["Isaiah 62:6-9", "Isaiah 64:6-9", "Isaiah 65:6-9"], answer: 0 },
      { q: "God is always ready to fight for his people, but they must be ___ too", options: ["Studying his walks", "Praying", "Willing to fight"], answer: 2 },
      { q: "A reason for striving to have more disciples is for", options: ["Soldiers' increasement", "Uniting to pray and fast", "Performing miracles"], answer: 0 },
      { q: "\"This ___ I commit unto thee, son Timothy according to the ___ which went before on thee, that thou by them mightiest war a good ___\"", options: ["Work, words, war", "Charge, prophecy, warfare", "Gospel, blessings, battle"], answer: 1 },
      { q: "The captain of the host of heavenly armies is", options: ["Jesus", "Twenty-four elders", "God"], answer: 0 },
      { q: "Knowing God as Jehovah Nissi gives you assurance of victory. What is Nissi?", options: ["Weapon", "Armor", "Banner"], answer: 2 },
      { q: "Those who join his army are ___ while those who refuse to fight are ___", options: ["Increased, decreased", "Blessed, cursed", "Lifted, locked down"], answer: 1 },
      { q: "God ___ Jesus Christ in the ___ and ___: who went about doing good", options: ["Anointed, signs and wonders", "Anointed, Holy Spirit, power", "Anointed, Power, Holy Spirit"], answer: 1 },
      { q: "Jesus did nothing without the anointing from ___", options: ["Holy Spirit", "God the father", "Baptism of water"], answer: 0 },
      { q: "When there is anointing there will be power in ___ of the disciple", options: ["Prayer", "Words", "Mouth, hand and garment"], answer: 2 },
      { q: "The Holy Spirit given to each person depends on the level of spirituality", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "The requirements for free flow of anointing includes the following EXCEPT", options: ["Purity", "Glory", "Constant link"], answer: 1 },
      { q: "The most important advice the Bible gives to the disciples is to", options: ["Beware of devil's net", "Look unto him", "Wait until he comes"], answer: 0 },
      { q: "The devil uses flattery because of the hidden desire of individuals to be ___", options: ["Saved", "Loved", "First"], answer: 2 },
      { q: "Flattery is a nature of humans because of carnality that can be associated with", options: ["Devil", "Pride", "Wealth"], answer: 1 },
      { q: "A man that flattereth his neighbour spread a ___ for his ___", options: ["Trap, life", "Net, feet", "Danger, glory"], answer: 1 },
      { q: "The Lord so hates flattery that he promises to cut off all flattering ___", options: ["Lips", "Mouth", "Tongue"], answer: 0 },
      { q: "A disciple feeling too big because of past victories is a form of flattery", options: ["True", "False", "Not sure"], answer: 0 },
      { q: "Flattery can cause you ___", options: ["Familiarity with God", "To be against God", "Ignorance"], answer: 1 },
      { q: "Wiles of the devil can be escaped by", options: ["Rejecting flattery", "Rejecting gifts", "Rejecting most opinions"], answer: 0 },
      { q: "When the fellowship between God and man is broken ___ comes", options: ["Trouble", "Fear", "Fight"], answer: 0 },
      { q: "The devil breaks a disciple's fellowship using any of the following EXCEPT", options: ["Sin", "Disobedience", "Salvation"], answer: 2 },
      { q: "The children of Israel could not be cursed because", options: ["God has blessed them", "The offering is not enough", "The prophet is not competent"], answer: 0 },
      { q: "The fellowship of the children of Israel or Samson with God was broken using", options: ["Fear", "Sin", "Death"], answer: 1 },
      { q: "Why is hell alerted when a disciple is branded?", options: ["To wage war", "To replace the person", "To accept defeat"], answer: 0 },
      { q: "Absence of the devil's attack on a disciple shows holiness", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "When you say you are for Christ ___ must change about you", options: ["Everything", "Some things", "Few things"], answer: 0 },
      { q: "Everyone the king requested to be separated ate the king's delicacies which made them fat", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "The Jews who refused to eat the king's delicacies requested for ___ and ___ instead", options: ["Beans and water", "Vegetable, meat", "Flour, wheat"], answer: 0 },
      { q: "When the devil is pursuing some people, he is ready to sacrifice ___ along", options: ["Nobody", "Few", "Many"], answer: 2 },
      { q: "The devil applies the same approach to attack disciples all the time", options: ["True", "False", "Not sure"], answer: 1 },
      { q: "Without ___ God will have a problem", options: ["Humans", "Satan", "Jesus"], answer: 1 },
      { q: "God needs ___ to examine his children before they are promoted", options: ["Jesus", "Fellow disciples", "Satan"], answer: 2 },
      { q: "You ___ God because you know as disciples you are not worthy of His Crown of Glory", options: ["Praise", "Honour", "Give to"], answer: 0 },
      { q: "Worship as a weapon of warfare has principal ways it can be used. Which is NOT one of them?", options: ["By calling the Lord's name appropriately", "By singing songs you know", "By recalling what he has done for you"], answer: 1 },
      { q: "God that is more than enough is also called", options: ["Jehovah Elohim", "Jehovah El-Shaddai", "Jehovah Nissi"], answer: 1 },
      { q: "Jehovah Nissi means the following EXCEPT", options: ["God is our champion", "God is our provider", "God our Banner"], answer: 1 },
      { q: "Jehovah Jireh means", options: ["The Lord that protects", "The Lord that takes", "The Lord that provides"], answer: 2 },
      { q: "When you call God Jehovah Tsidkenu, you are thanking him for your", options: ["Salvation", "Safety", "Good health"], answer: 0 },
      { q: "When you call him Jehovah Shalom, you are calling him your", options: ["Security", "Peace", "Provider"], answer: 1 },

      // ---- PAPER 3 (Q81–120) ----
      { q: "An angry man is lifted away from the world of ___", options: ["Wisdom", "Reality", "Purity"], answer: 1 },
      { q: "The devil's anointing comes in various forms EXCEPT", options: ["Disobedience", "Anger", "Impure thoughts"], answer: 0 },
      { q: "Anger is called temporary madness because", options: ["It makes people run away from you", "It causes madness", "When it reaches its height, the victim is ready to die"], answer: 2 },
      { q: "An angry man loses the ability to", options: ["Reason rightly", "Reason logically", "Bless others"], answer: 1 },
      { q: "Most of the sayings about the devil's anointing are found in which book of the Bible?", options: ["Psalms", "Galatians", "Proverbs"], answer: 2 },
      { q: "A ___ man is slow to anger", options: ["Diligent", "Wise", "Righteous"], answer: 1 },
      { q: "The Bible says only ___ is free to be angry", options: ["A fool", "A young believer", "An unbeliever"], answer: 0 },
      { q: "The reverse order of anger is", options: ["Impatience", "Impure thoughts", "Malice"], answer: 1 },
      { q: "The anointing that produces a tender and loving feeling is", options: ["Immorality", "Impure thoughts", "Fornication"], answer: 1 },
      { q: "The devil uses ___ thoughts to divert his victim's attention especially when opportunity is coming his way", options: ["Sexual", "Suicide", "Impure"], answer: 2 },
      { q: "Impure thoughts make you wander from the ___ even though for a short time", options: ["Narrow path", "Wide path", "Smooth path"], answer: 0 },
      { q: "If you yield to immoral thoughts, you will be forsaken ___", options: ["By God", "By God's word", "By the Holy Spirit"], answer: 0 },
      { q: "Enmity with God is when you begin to have ___", options: ["Immoral thoughts", "Wicked thoughts", "Doubt"], answer: 0 },
      { q: "Immoral thoughts lead to wandering from the way of understanding, which can lead to", options: ["Sin and sickness", "Poverty and death", "Stagnancy and suffering"], answer: 1 },
      { q: "Anytime someone is trying to annoy you, make up your mind to refuse to be a ___", options: ["Dullard", "Fool", "Devil"], answer: 1 },
      { q: "At the stage of having impure thoughts ___ is near", options: ["Danger", "Victory", "Promotion"], answer: 0 },
      { q: "An immediate ___ must be declared when you find yourself battling with immoral thoughts", options: ["Prayer", "Fasting", "Deliverance"], answer: 1 },
      { q: "To increase your commitment to God ___ goals must be set", options: ["Few", "Many", "Mighty"], answer: 2 },
      { q: "Which of the following is NOT among the goals when battling with immoral thoughts?", options: ["Prayer hours", "Deliverance", "Bible study"], answer: 1 },
      { q: "The invisible weapon is called ___", options: ["The name of Jesus", "All will be well", "Praises"], answer: 1 },
      { q: "The powerful and unquenchable weapon is", options: ["Joy", "Prayer", "All will be well"], answer: 2 },
      { q: "Which weapon brings comfort to the disciple?", options: ["Joy", "All will be well", "Worship"], answer: 1 },
      { q: "A disciple is a priest of God and a priest of God can", options: ["Prophecy", "Preach", "Worship"], answer: 0 },
      { q: "The weapon with a positive confession is", options: ["We shall be great", "God is good", "All will be well"], answer: 2 },
      { q: "The Bible says the word of God is ___ settled", options: ["Permanently", "Absolutely", "Forever"], answer: 2 },
      { q: "When a disciple says 'All will be well', it brings ___ to God", options: ["Confidence", "Pleasure", "Fulfilment"], answer: 1 },
      { q: "Who lost her son in the Bible and refused to agree that her son was dead?", options: ["The Zarephath woman", "The Shunamite woman", "Naomi"], answer: 1 },
      { q: "\"The Lord that delivered me out of the paw of the lion and the paw of the bear, he will deliver me out of the hand of the Philistine\" — who made that statement?", options: ["Solomon", "Samuel", "David"], answer: 2 },
      { q: "Who prevailed over the Philistine with a sling and a stone?", options: ["Daniel", "David", "Joseph"], answer: 1 },
      { q: "Abraham and Isaac are perfect examples of ___", options: ["Faith", "Pilgrim", "Invisible"], answer: 0 },
      { q: "Shouting ___ makes God happy", options: ["I am victorious", "All will be well", "Hallelujah"], answer: 1 },
      { q: "Complete the statement: 'What shall we then say to these things? If God be for ___, who will be ___'", options: ["Us, against us", "Disciples, against disciples", "Saints, against them"], answer: 0 },
      { q: "Moses and the children of Israel crossed the ___", options: ["White sea", "Black sea", "Red sea"], answer: 2 },
      { q: "When you ___ victory is sure", options: ["Give", "Shout", "Praise"], answer: 1 },
      { q: "When you shout it could be that God has accepted your ___", options: ["Praise", "Offering", "Repentance"], answer: 1 },
      { q: "When you shout, it could also mean", options: ["God is present in our midst", "A healing took place", "There is a breakthrough"], answer: 0 },
      { q: "The following are reasons why we clap and shout EXCEPT", options: ["God is going to subdue the people under us", "God is happy with us", "God is going to give us a victory"], answer: 1 },
      { q: "Which of the situations made Jesus shout?", options: ["The woman with the flow of blood", "Lazarus", "The blind man in the street"], answer: 1 },
      { q: "Anointing is like", options: ["Oil", "Fire", "Heat"], answer: 2 },
      { q: "Anointing can be transferred through the following EXCEPT", options: ["Radiation", "Pouring of oil", "Conduction"], answer: 1 }

    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 4. YEAR 4
  {
    id: 4,
    code: "SOD YEAR 4",
    title: "Year 4",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 5. YEAR 5
  {
    id: 5,
    code: "SOD YEAR 5",
    title: "Year 5",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 6. YEAR 6
  {
    id: 6,
    code: "SOD YEAR 6",
    title: "Year 6",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 7. YEAR 7
  {
    id: 7,
    code: "SOD YEAR 7",
    title: "Year 7",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 8. YEAR 8
  {
    id: 8,
    code: "SOD YEAR 8",
    title: "Year 8",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 9. YEAR 9
  {
    id: 9,
    code: "SOD YEAR 9",
    title: "Year 9",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 10. YEAR 10
  {
    id: 10,
    code: "SOD YEAR 10",
    title: "Year 10",
    icon: "📖",
    duration: 60,
    theoryDuration: 45,
    questions: [
      { q: "Placeholder question 1", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
    ],
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

];

// ============================================================
// SOD THEORY EXAMS
// Three grouped theory cards on the student dashboard.
// Add actual questions by replacing the placeholders below.
// keywords: words the student's answer must contain to earn marks.
// marks: total marks available for that question.
// ============================================================
const SOD_THEORY_EXAMS = [

  // 1. YEAR 1-3 THEORY
  {
    id: 1,
    code: "THEORY Y1-3",
    title: "Year 1\u20133 Theory",
    icon: "\u270D\uFE0F",
    duration: 90,
    theoryQuestions: [

      // ---- SECTION A — 3 marks each (Q1-Q20) ----
      { id:  1, marks: 3, question: "What is the first thing you need to know about yourself?",                                                                     options: ["You are loved by your family", "You are very important to the Almighty God", "You are known by the president", "You are a sinner saved by grace"], answer: 1 },
      { id:  2, marks: 3, question: "God said one will chase 1,000 and two will chase 10,000. Five will chase how many?",                                           options: ["1,000,000", "5,000,000", "10,000,000", "100,000,000"], answer: 2 },
      { id:  3, marks: 3, question: "Your victory is certain subject to one condition. What is that condition?",                                                    options: ["Fasting", "Obedience", "Prayer", "Church attendance"], answer: 1 },
      { id:  4, marks: 3, question: "What is the weapon that Satan uses to weigh believers down?",                                                                  options: ["Sickness", "Poverty", "Fear", "Confusion"], answer: 2 },
      { id:  5, marks: 3, question: "Who is a disciple?",                                                                                                          options: ["A church member and a tithe payer", "A disciplined follower and imitator of a leader", "A pastor and a preacher", "A baptised and confirmed believer"], answer: 1 },
      { id:  6, marks: 3, question: "Why has God chosen you?",                                                                                                     options: ["To build churches and cathedrals", "To be rich and prosperous", "To show forth His praises and glorify Him", "To lead a political movement"], answer: 2 },
      { id:  7, marks: 3, question: "What is the only condition to sit on the same throne as Jesus Christ?",                                                       options: ["You must be a pastor", "You must be an overcomer", "You must be a tither", "You must be a prayer warrior"], answer: 1 },
      { id:  8, marks: 3, question: "What is the first thing Satan wants to set against you?",                                                                     options: ["Your finances", "Your family", "Your body / the flesh", "Your ministry"], answer: 2 },
      { id:  9, marks: 3, question: "Why must God chasten us? Which of the following is NOT a correct reason?",                                                    options: ["Like father like son — to partake of His holiness", "The justice of God — no man suffers twice for the same offence", "Because God enjoys punishing His children", "So that the spiritual leader can intercede on our behalf"], answer: 2 },
      { id: 10, marks: 3, question: "Why must we be like Our Lord Jesus Christ in humility?",                                                                      options: ["Because humility makes us popular among men", "Because the way to conquer is the way to stoop — the way up is the way down", "Because humble people never face persecution", "Because humility guarantees financial blessings only"], answer: 1 },
      { id: 11, marks: 3, question: "How can one become humble? Which answer is CORRECT?",                                                                         options: ["By fasting only", "Voluntarily by personal decision or by force through God's dealings", "By attending church regularly", "By reading the Bible daily only"], answer: 1 },
      { id: 12, marks: 3, question: "What is zeal?",                                                                                                              options: ["A quiet and patient waiting on God", "A burning desire to get things done with determination that every obstacle becomes fuel", "An emotional feeling during worship", "A gift of the Holy Spirit reserved for pastors"], answer: 1 },
      { id: 13, marks: 3, question: "Why is a disciple a pilgrim?",                                                                                               options: ["Because he travels to Jerusalem every year", "Because this world is not his home — his citizenship is in heaven", "Because he has no permanent job or house", "Because he moves from church to church"], answer: 1 },
      { id: 14, marks: 3, question: "What is the first pillar of the disciple's victory?",                                                                        options: ["Prayer", "Holiness", "Faith", "Fasting"], answer: 2 },
      { id: 15, marks: 3, question: "What are the conditions for the free flow of anointing?",                                                                    options: ["Fasting and tithing", "Pure vessel and constant prayer in the Spirit", "Church membership and regular attendance", "Speaking in tongues and prophecy only"], answer: 1 },
      { id: 16, marks: 3, question: "What does examination signify for a disciple?",                                                                              options: ["Punishment from God", "That God is angry with the disciple", "That promotion is near", "That the disciple has sinned greatly"], answer: 2 },
      { id: 17, marks: 3, question: "How long is the disciple's examination?",                                                                                    options: ["It lasts a lifetime", "It is permanent and never ends", "It is temporary and does not last forever", "It lasts exactly forty days"], answer: 2 },
      { id: 18, marks: 3, question: "What are the three ways anointing can be transferred?",                                                                      options: ["Fasting, prayer and worship", "Preaching, teaching and prophecy", "Conduction, convection and radiation", "Laying of hands, anointing oil and holy water"], answer: 2 },
      { id: 19, marks: 3, question: "What is the victory every disciple has?",                                                                                    options: ["Victory through wealth and prosperity", "Victory through faith in Jesus Christ", "Victory through church membership", "Victory through political influence"], answer: 1 },
      { id: 20, marks: 3, question: "What is the seventh pillar of the disciple's victory?",                                                                      options: ["Prayer", "Holiness", "Faith", "Obedience"], answer: 3 },

      // ---- SECTION B — 2 marks each (Q21-Q35) ----
      { id: 21, marks: 2, question: "Which of the following is NOT a reason you are important to God?",                                                            options: ["God is mindful of you", "God visits you every morning", "God needs your money, time and talents for His work", "God depends on you to sustain His throne in heaven"], answer: 3 },
      { id: 22, marks: 2, question: "Which of the following correctly states a reason you are important to God?",                                                  options: ["God magnifies you even before Satan", "God needs you to run His heavenly administration", "God chose you because you are more righteous than others", "God visits you only when you pray"], answer: 0 },
      { id: 23, marks: 2, question: "Which of the following is a correct reason you are important to God?",                                                        options: ["God has crowned you with wealth and fame", "God has crowned you with glory and honour", "God has given you dominion over other human beings", "God takes account of you only after you are born again"], answer: 1 },
      { id: 24, marks: 2, question: "From the lesson on transferring the anointing, which of the following is an example of CONDUCTION?",                          options: ["Paul's handkerchiefs being taken to the sick", "Peter's shadow falling on the sick", "Philip casting out demons by speaking", "Elijah lying upon the widow's dead son"], answer: 3 },
      { id: 25, marks: 2, question: "Which of the following is a correct example of CONVECTION in the transfer of anointing?",                                     options: ["Moses laying hands on Joshua", "Paul commanding blindness on Elymas", "Paul's aprons and handkerchiefs carried to the sick", "Peter taking the lame man by the hand"], answer: 2 },
      { id: 26, marks: 2, question: "Which of the following is a correct example of RADIATION in the transfer of anointing?",                                     options: ["Elisha lying upon the Shunammite's dead son", "Paul laying on Eutychus who had fallen and died", "Moses laying hands on Joshua", "Peter saying \u201cGod has healed you\u201d to Aeneas who rose immediately"], answer: 3 },
      { id: 27, marks: 2, question: "Which of the following might make a disciple NOT be chastised?",                                                              options: ["They are too holy to need correction", "They are too young in faith / spiritual babes", "They pray too much to need discipline", "They give too many offerings to be corrected"], answer: 1 },
      { id: 28, marks: 2, question: "What is the second reason a disciple might not be chastised?",                                                                options: ["They are already living perfectly holy", "They are senior pastors above correction", "They are bastards — God has given up on them", "They have been exempted by a man of God"], answer: 2 },
      { id: 29, marks: 2, question: "When you shout as a weapon of warfare, what is the FIRST thing that happens?",                                                options: ["The enemy immediately flees", "It signals that God has accepted your offering", "Angels begin to fight on your behalf", "Your prayers are automatically answered"], answer: 1 },
      { id: 30, marks: 2, question: "When Israel brought the Ark into the camp and shouted, what was the Philistines' immediate reaction?",                        options: ["They prepared to attack harder", "They laughed and mocked Israel", "They were filled with dread and fear", "They surrendered immediately"], answer: 2 },
      { id: 31, marks: 2, question: "Which scripture confirms that shouting demonstrates God is present in the midst of His people?",                              options: ["Psalm 23:1", "Isaiah 12:6", "Romans 8:37", "Hebrews 11:6"], answer: 1 },
      { id: 32, marks: 2, question: "At Jericho, when did the walls fall?",                                                                                       options: ["After seven days of marching silently", "When Joshua prayed alone", "The moment the people shouted", "When the priests blew the trumpets only"], answer: 2 },
      { id: 33, marks: 2, question: "Which of the following correctly describes what happens when a disciple shouts?",                                             options: ["It is merely an emotional expression with no spiritual effect", "It prophesies imminent victory and releases the miracle", "It only works when a pastor leads the shout", "It replaces the need for prayer and fasting"], answer: 1 },
      { id: 34, marks: 2, question: "Which of the following is TRUE about the disciple's examination?",                                                           options: ["It is sent by the devil alone with no divine purpose", "God uses Satan as an examiner to test and promote His children", "Only sinful disciples go through examinations", "Examinations only come to new converts"], answer: 1 },
      { id: 35, marks: 2, question: "Which of the following is NOT one of the ways anointing can be transferred?",                                                options: ["Conduction — through direct physical contact", "Convection — through an anointed object", "Radiation — through spoken words across a distance", "Evaporation — through the disciple's sweat and tears"], answer: 3 },

      // ---- BONUS / REVISION — 1 mark each (Q36-Q45) ----
      { id: 36, marks: 1, question: "According to the School of Disciples, Satan wants to do three things to you. Which option is CORRECT?",                       options: ["Confuse, mislead and distract", "Steal, kill and destroy", "Tempt, accuse and discourage", "Oppress, depress and suppress"], answer: 1 },
      { id: 37, marks: 1, question: "Which of the following is NOT one of Satan's characteristics as taught in the manual?",                                      options: ["He is wise and cunning", "He was formerly the choirmaster of heaven", "He is totally good and redeemable", "He is full of pride"], answer: 2 },
      { id: 38, marks: 1, question: "According to the lesson on knowing your enemy, Satan loves which of the following?",                                          options: ["Humility and simplicity", "Jewellery and stones of fire", "Prayer and fasting", "Worship and praise"], answer: 1 },
      { id: 39, marks: 1, question: "The only language Satan understands is:",                                                                                    options: ["The language of prayer alone", "The language of fasting alone", "The language of violence / resistance", "The language of tears and weeping"], answer: 2 },
      { id: 40, marks: 1, question: "According to the manual, demons prefer to inhabit which of the following?",                                                   options: ["Trees and rivers", "Churches and altars", "Human beings", "Holy objects and Bibles"], answer: 2 },
      { id: 41, marks: 1, question: "When Paul and Silas praised God in prison, what happened?",                                                                   options: ["The jailer brought them food", "They were given early release", "There was an earthquake and every yoke was broken", "The other prisoners joined them in worship"], answer: 2 },
      { id: 42, marks: 1, question: "According to the manual, the condition for permanent victory is:",                                                            options: ["Fasting three times a week", "Paying your tithes faithfully", "Obedience to the commandments of God", "Attending every church programme"], answer: 2 },
      { id: 43, marks: 1, question: "According to Lesson C6, joy is a weapon of warfare. What does joy give the disciple?",                                        options: ["Wealth and prosperity", "Strength", "Immunity from all sickness", "Freedom from all trials"], answer: 1 },
      { id: 44, marks: 1, question: "Which of the following is NOT one of the ingredients of devastating prayer?",                                                 options: ["Total surrender", "Privacy", "Heart cry", "Shouting loudly in public"], answer: 3 },
      { id: 45, marks: 1, question: "According to the manual, which of the following is TRUE about demons?",                                                       options: ["Demons can repent and be saved", "Demons have no intelligence or organisation", "Demons are incurably evil and can never repent", "Demons are only active in non-Christian nations"], answer: 2 }

    ]
  },

  // 2. YEAR 4-6 THEORY
  {
    id: 2,
    code: "THEORY Y4-6",
    title: "Year 4\u20136 Theory",
    icon: "\u270D\uFE0F",
    duration: 45,
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  },

  // 3. YEAR 7-10 THEORY
  {
    id: 3,
    code: "THEORY Y7-10",
    title: "Year 7\u201310 Theory",
    icon: "\u270D\uFE0F",
    duration: 45,
    theoryQuestions: [
      {
        id: 1,
        question: "Placeholder theory question 1. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      },
      {
        id: 2,
        question: "Placeholder theory question 2. (Replace with your actual question.)",
        marks: 10,
        keywords: ["keyword1", "keyword2", "keyword3"]
      }
    ]
  }

];

// ============================================================
// STEWARDS IN TRAINING (SIT) — EXAM PORTAL DATA
// ============================================================

// ---- SIT STUDENT MATRIC NUMBERS ----
// Format: "SIT_MATRIC_NUMBER": "Full Student Name"
// Example: "SIT2026001": "Brother James Oluwole"
const SIT_STUDENTS = {
  // ---- ADD STUDENTS BELOW THIS LINE ----
  "SIT2026001": "Oluwatobi Kolapo",
  // ---- END OF STUDENT LIST ----
};

// ---- SIT ADMIN CREDENTIALS ----
const SIT_ADMIN = {
  username: "admin",
  password: "Envoys@Admin2024"
};

// ---- SIT MCQ EXAM DATA ----
// Add SIT exams here following the same format.
// Example:
// {
//   id: 1,
//   code: "SIT 101",
//   title: "Introduction to Stewardship",
//   icon: "🌱",
//   duration: 60,
//   questions: [
//     { q: "Question text?", options: ["A", "B", "C", "D"], answer: 0 }
//   ]
// },
const SIT_EXAMS = [

  // ---- STARTER PACK MODULE 1 ----
  {
    id: 1,
    code: "SIT MOD 1",
    title: "Starter Pack Module 1",
    icon: "🎖️",
    duration: 90,
    questions: [

      // ---- THE BIBLE (Q1–10) ----
      { q: "According to 2 Timothy 3:16-17, all scripture is given by inspiration of:", options: ["God", "Man", "The Church", "The Apostles"], answer: 0 },
      { q: "How many books are contained in the Bible in total?", options: ["39", "27", "66", "73"], answer: 2 },
      { q: "How many books are in the Old Testament?", options: ["27", "39", "46", "66"], answer: 1 },
      { q: "The Bible is described as the CONSTITUTION of every believer because:", options: ["It was written by kings", "It is the oldest book", "It was approved by the church", "The teachings and conducts of every believer are established in it"], answer: 3 },
      { q: "According to Psalm 119:105, the word of God is described as:", options: ["A lamp to my feet and a light to my path", "A sword in my hands", "A shield and buckler", "A river of life"], answer: 0 },
      { q: "Which scripture warns against adding to or subtracting from the word of God?", options: ["John 3:16", "Matthew 5:17", "Deuteronomy 4:2 and Revelation 22:18-19", "Romans 1:16"], answer: 2 },
      { q: "The New Testament is described as the revelation of:", options: ["Future prophecies only", "The mysteries contained in the Old Testament", "The laws of Moses", "The history of Israel"], answer: 1 },
      { q: "To be approved of God, a believer is instructed to:", options: ["Read the Bible casually", "Attend church regularly", "Give tithes and offerings", "Study the Bible diligently — 2 Timothy 2:15"], answer: 3 },
      { q: "The doctrines of the Bible are described as all of the following EXCEPT:", options: ["Holy", "True", "Changeable", "Immutable"], answer: 2 },
      { q: "According to John 1:1, the word of God is identified with:", options: ["Jesus Christ", "The Holy Spirit", "The angels", "The prophets"], answer: 0 },

      // ---- GOD & TRINITY (Q11–20) ----
      { q: "Trinity means the union of:", options: ["God and His angels", "Three divine persons in one unified Godhead", "The Father and the Son only", "God and all believers"], answer: 1 },
      { q: "Which scripture records God saying 'Let us make man in our image'?", options: ["Genesis 1:26", "Genesis 2:7", "John 1:1", "Isaiah 6:8"], answer: 0 },
      { q: "The Holy Spirit is described as:", options: ["A force or energy", "An angel", "The third person in the Trinity", "A created being"], answer: 2 },
      { q: "Which scripture is used to support the doctrine of the Trinity at the baptism of Jesus?", options: ["John 3:16", "Romans 8:11", "Acts 2:4", "Matthew 3:13-17"], answer: 3 },
      { q: "According to John 5:26, every creature receives life from:", options: ["God", "The angels", "Nature", "The Holy Spirit alone"], answer: 0 },
      { q: "The work of the Holy Spirit DOES NOT include:", options: ["Regeneration of man", "Sanctification of born-again souls", "Creating the physical universe alone", "Empowering believers — Acts 1:8"], answer: 2 },
      { q: "Jesus Christ is described as:", options: ["A great prophet only", "God revealed in flesh — John 1:14", "An angel sent from heaven", "A created being"], answer: 1 },
      { q: "The benediction in 2 Corinthians 13:14 references all three persons of the Trinity. Which is CORRECTLY listed?", options: ["The Lord Jesus Christ, God, and the Holy Spirit", "The Father, Moses, and the Holy Spirit", "Jesus, the angels, and the church", "God, the prophets, and the apostles"], answer: 0 },
      { q: "The doctrine of the Trinity is described as:", options: ["A simple truth that everyone understands", "A man-made doctrine", "Only relevant to theologians", "A great mystery and a revealed truth — Deuteronomy 29:29"], answer: 3 },
      { q: "How many books are in the New Testament?", options: ["39", "20", "27", "33"], answer: 2 },

      // ---- THE DEVIL (Q21–28) ----
      { q: "What was the original name of the devil when he was an archangel in Heaven?", options: ["Beelzebub", "Lucifer", "Apollyon", "Abaddon"], answer: 1 },
      { q: "The devil was expelled from Heaven because of:", options: ["Pride", "Lying", "Stealing", "Disobedience to creation orders"], answer: 0 },
      { q: "According to Revelation 20:1-3, the devil will be chained in the bottomless pit for:", options: ["7 years", "100 years", "1,000 years", "Eternity immediately"], answer: 2 },
      { q: "The Bible describes the devil as all of the following EXCEPT:", options: ["A murderer", "A deceiver", "A tempter", "An all-powerful being"], answer: 3 },
      { q: "According to James 4:7, how should a believer deal with the devil?", options: ["Submit to God and resist the devil", "Ignore the devil completely", "Pray and fast for 40 days", "Consult a spiritual leader"], answer: 0 },
      { q: "According to 1 Peter 5:8, the devil walks about as:", options: ["A wolf in sheep's clothing", "A roaring lion seeking whom he may devour", "A thief in the night", "A snake in the grass"], answer: 1 },
      { q: "The devil is described as the author of:", options: ["Death only", "Sin only", "Sin, sickness, and death — John 10:10", "Poverty and failure only"], answer: 2 },
      { q: "What fraction of the angels rebelled with Lucifer in Heaven?", options: ["A third part", "Half", "A quarter", "Two thirds"], answer: 0 },

      // ---- ABOUT MAN (Q29–31) ----
      { q: "According to Genesis 2:7, man is made up of which three parts?", options: ["Mind, heart, and body", "Body, soul, and spirit", "Flesh, blood, and bone", "Reason, emotion, and will"], answer: 1 },
      { q: "Man is described as God's ambassador on earth to:", options: ["Worship God alone", "Build the church", "Write the scriptures", "Take control over all other creatures on God's behalf — Genesis 1:26-28"], answer: 3 },
      { q: "According to the course, a child should be named on which day after birth?", options: ["First day", "Third day", "Eighth day — Luke 2:21", "Fortieth day"], answer: 2 },

      // ---- PERSONAL TRANSFORMATION (Q32–38) ----
      { q: "Repentance is defined as:", options: ["Godly sorrow for sin with a decision to abstain from them", "Going to confession in church", "Performing religious rituals", "Reading the Bible daily"], answer: 0 },
      { q: "Justification means being declared righteous such that we stand before God:", options: ["As saints who have suffered", "As though we have never sinned", "With our good works as evidence", "Through the merit of our ancestors"], answer: 1 },
      { q: "Sanctification means:", options: ["Water baptism in a river", "Attending Bible school", "Total separation from sin and worldliness unto God", "Becoming a church elder"], answer: 2 },
      { q: "Which of the following is NOT an unscriptural meaning of the New Birth?", options: ["Being religious or churchy", "Keeping the Law", "Being educated and cultured", "Receiving God's life and righteousness by faith"], answer: 3 },
      { q: "The memory verse for Understanding the New Birth (Study II) is found in:", options: ["2 Corinthians 5:17", "John 3:16", "Romans 8:1", "Acts 4:12"], answer: 0 },
      { q: "According to Romans 5:12, the fall of man through Adam resulted in:", options: ["Only physical death entering the world", "Sin entering into all men", "The loss of the scriptures", "The creation of angels"], answer: 1 },
      { q: "Which of the following is NOT listed as an evidence of the New Birth?", options: ["A changed life", "An overcoming life", "Witness of the Spirit", "Speaking in tongues immediately at conversion"], answer: 3 },

      // ---- BAPTISM (Q39–46) ----
      { q: "How many types of baptism must every true believer undergo?", options: ["One", "Two", "Three", "Four"], answer: 2 },
      { q: "The agent who carries out baptism INTO CHRIST at salvation is:", options: ["The Holy Spirit", "The pastor", "The elders of the church", "The believer himself"], answer: 0 },
      { q: "The Greek word for baptism 'Baptizo' means:", options: ["To sprinkle", "To submerge or immerse", "To pour", "To anoint"], answer: 1 },
      { q: "Water baptism is to be carried out in the name of:", options: ["Jesus only", "The Holy Spirit only", "The Father, the Son, and the Holy Spirit — Matthew 28:19", "The local church authority"], answer: 2 },
      { q: "What is the immediate outward sign of Holy Spirit baptism according to Acts 2:4?", options: ["Falling under the power", "Weeping and crying", "Visions and dreams", "Speaking in tongues"], answer: 3 },
      { q: "The agent of the Holy Spirit baptism is:", options: ["Jesus Christ — John 14:16-17", "The pastor", "The elders", "The angels"], answer: 0 },
      { q: "According to Acts 5:32, the Holy Spirit is given to those who:", options: ["Fast for 40 days", "Obey God", "Pay their tithes", "Attend church consistently"], answer: 1 },
      { q: "Water baptism is described as:", options: ["Optional for believers", "A means of salvation", "A command — not optional so long as a believer is alive after conversion", "Only for ordained ministers"], answer: 2 },

      // ---- PRAYER & FASTING (Q47–55) ----
      { q: "Prayer is defined as:", options: ["Divine communication and fellowship with God", "A religious ceremony in church", "Repeating memorised words", "Singing hymns and praises only"], answer: 0 },
      { q: "According to Mark 9:29, some things can only come forth by:", options: ["Fasting only", "Prayer and fasting", "Prayer alone", "The laying on of hands"], answer: 1 },
      { q: "Which of the following is NOT listed as a type of prayer?", options: ["Intercession", "Thanksgiving", "Supplication", "Meditation"], answer: 3 },
      { q: "Biblical fasting means:", options: ["Reducing food intake", "Eating only fruits and vegetables", "Abstaining from food and drinks for a period", "Fasting from social media"], answer: 2 },
      { q: "According to Isaiah 40:31, one of the advantages of fasting and waiting on the Lord is:", options: ["Renewing of strength", "Instant answers to all prayers", "Healing of all diseases", "Financial breakthrough"], answer: 0 },
      { q: "During fasting, married couples are instructed to abstain from sexual relations based on:", options: ["Church tradition", "1 Corinthians 7:5", "Leviticus 27:30", "Genesis 2:24"], answer: 1 },
      { q: "According to 1 Thessalonians 5:17, believers are commanded to pray:", options: ["Only on Sundays", "Three times a day", "During crises only", "Without ceasing"], answer: 3 },
      { q: "Which requirement for effective prayer involves praying in other tongues?", options: ["1 Corinthians 14:2,4,14-18 and Jude 20", "James 5:14", "Romans 10:9", "Acts 2:38"], answer: 0 },
      { q: "An 'Absolute Fast' is defined as:", options: ["Eating only once a day", "Abstaining from meat only", "Abstaining from food and water for a stipulated period", "Fasting for 40 days without exception"], answer: 2 },

      // ---- DIVINE HEALING (Q56–62) ----
      { q: "According to 1 Peter 2:24, our healing was purchased through:", options: ["Our prayers and fasting", "The stripes of Jesus Christ", "The anointing oil", "The laying on of hands by elders"], answer: 1 },
      { q: "The force behind sickness according to the course is:", options: ["Satan — Job 2:1-9; Luke 13:16", "God's judgment only", "Natural causes alone", "Generational curses only"], answer: 0 },
      { q: "Which of the following is NOT listed as a source of illness?", options: ["Sin", "Curses and demonic attack", "Malnutrition", "Failure to attend church regularly"], answer: 3 },
      { q: "The course instructs that healing should be received free of charge based on:", options: ["Church policy", "Common sense", "Matthew 10:8 — 'Freely you have received, freely give'", "The decision of church elders"], answer: 2 },
      { q: "Anointing the sick with oil and prayer of faith by elders is based on:", options: ["Mark 16:18 only", "James 5:14-15", "Acts 28:8 only", "1 Corinthians 12:9"], answer: 1 },
      { q: "Healing without medicine is described as:", options: ["Biblical — Matthew 4:23; Psalm 103:3", "Dangerous and unscriptural", "Only for special ministers", "Limited to the apostolic age"], answer: 0 },
      { q: "Restitution in the course context is described as:", options: ["Receiving healing from God", "Paying offerings in the church", "Breaking evil covenants", "A mark of true repentance — payment or restoration of what is damaged"], answer: 3 },

      // ---- DELIVERANCE (Q63–70) ----
      { q: "Deliverance is described as including all of the following EXCEPT:", options: ["Setting someone free", "Breaking of yokes", "Performing elaborate rituals with water and candles", "Expelling demons"], answer: 2 },
      { q: "Can a Christian's SPIRIT be inhabited by demons?", options: ["Yes, if the Christian is weak", "No — the spirit is recreated at new birth and is the abode of God", "Only under severe spiritual attack", "Yes, if the Christian is backslidden"], answer: 1 },
      { q: "The three major doorways that give Satan authority in a person's life are:", options: ["Covenants, curses, and sins", "Poverty, sickness, and ignorance", "Pride, envy, and hatred", "Unbelief, doubt, and fear"], answer: 0 },
      { q: "According to Proverbs 26:2, demons cannot possess or oppress a man without:", options: ["Permission from God", "The man being very sinful", "A cause", "The man being unaware"], answer: 2 },
      { q: "To stay delivered, the course recommends all of the following EXCEPT:", options: ["Living a holy life", "Studying the Bible", "Fellowship with Christians", "Isolating yourself from other people"], answer: 3 },
      { q: "The soul of a Christian CAN be oppressed by demons because:", options: ["The blood of Jesus wears off over time", "The new birth is a rebirth of the spirit, not the soul", "Christians are not fully protected", "Prayer is not always effective"], answer: 1 },
      { q: "Which of the following methods of deliverance is listed in the course?", options: ["Pleading the blood of Jesus and speaking in tongues", "Special ritual washing in a river", "Burning candles and holy water", "Wearing a cross or special garment"], answer: 0 },
      { q: "The memory verse for Deliverance II is found in:", options: ["John 8:32", "Obadiah 1:17", "Romans 12:1-2", "Isaiah 10:27"], answer: 2 },

      // ---- QUIET TIME (Q71–76) ----
      { q: "Quiet time is defined as:", options: ["Silent prayer in church", "Time set aside regularly to meet with God and communicate through the Living Word", "Reading the Bible in bed at night", "Attending midweek service"], answer: 1 },
      { q: "According to Daniel 6:10, how often should a believer observe quiet time at minimum?", options: ["At least once a day", "Once a week", "Every Sunday", "Whenever convenient"], answer: 0 },
      { q: "The memory verse for Quiet Time (1 Peter 2:2) describes the desire for:", options: ["The power of God", "Spiritual gifts", "The sincere milk of the word to grow", "Eternal life"], answer: 2 },
      { q: "Which of the following is NOT listed as a material required for quiet time?", options: ["A Holy Bible", "A notebook and biro", "A list of prayer points", "A special prayer garment"], answer: 3 },
      { q: "The best time of day recommended for quiet time according to Psalm 63:1 is:", options: ["Early in the morning", "At midday", "In the evening", "At midnight"], answer: 0 },
      { q: "Which of the following is described as an obstacle to effective quiet time?", options: ["Reading too much of the Bible", "Haste, disturbance, and laziness", "Praying in tongues", "Having too many prayer points"], answer: 1 },

      // ---- CHARACTER & DISCIPLINE (Q77–84) ----
      { q: "Malice is defined as:", options: ["Telling lies about others", "Being arrogant and proud", "Having a desire to harm others or ill will", "Failing to pay tithes"], answer: 2 },
      { q: "Which scripture says 'It is an honour for a man to desist from strife'?", options: ["Proverbs 20:3", "Proverbs 17:14", "2 Timothy 2:24", "Titus 3:9"], answer: 0 },
      { q: "Unforgiveness can result in all the following EXCEPT:", options: ["Hindrance to prayers", "Exposure to the devil the tormentor", "Bitterness and revenge", "Increased anointing and spiritual power"], answer: 3 },
      { q: "According to Ecclesiastes 7:9, a person who is easily angry is described as:", options: ["Spiritually weak", "Foolish", "Under a curse", "Backslidden"], answer: 1 },
      { q: "The memory verse for Christian Conduct (1 Corinthians 14:40) says:", options: ["Love never fails", "Pray without ceasing", "Let all things be done decently and in order", "Be sober and vigilant"], answer: 2 },
      { q: "Which of the following is NOT listed as a cause of pride?", options: ["Status and position", "Knowledge and physical endowments", "Spiritual gifts", "Poverty and lack"], answer: 3 },
      { q: "Gossip is described as having all the following consequences EXCEPT:", options: ["Building stronger relationships", "Betrayal of confidence", "Character assassination", "Separation of friends"], answer: 0 },
      { q: "According to Ephesians 4:28, the instruction given to those who used to steal is to:", options: ["Make restitution to those they stole from", "Fast and pray for forgiveness", "Repent and steal no more but rather work", "Publicly confess in the church"], answer: 2 },

      // ---- MONEY, TITHES & OFFERING (Q85–90) ----
      { q: "Tithe is defined as:", options: ["Half of your income", "One tenth of your total or gross income", "A freewill offering", "Whatever amount you choose to give"], answer: 1 },
      { q: "According to Malachi 3:9, failure to pay tithes places a person:", options: ["Under a curse from the highest authority", "Under church discipline only", "In financial difficulty only", "At risk of losing their job"], answer: 0 },
      { q: "The difference between tithes and offerings is that:", options: ["Tithes are voluntary while offerings are compulsory", "Offerings are ten percent of income", "Tithe is a fixed tenth while offering is a gift given in addition to tithe", "There is no difference"], answer: 2 },
      { q: "According to the course, the only Bible-recommended debt for a Christian is:", options: ["A mortgage for a home", "A business loan", "Church building fund contributions", "The debt of love — Romans 13:8"], answer: 3 },
      { q: "Paying of tithes is described as:", options: ["An optional act of worship", "Not a sacrifice but returning to God what belongs to Him", "A means of earning God's favour", "Only relevant under the Old Testament law"], answer: 1 },
      { q: "Fornication is defined as a sin that:", options: ["Is common but not acceptable to God", "Is permissible before marriage", "Is only physical and has no spiritual consequences", "Is covered by God's grace automatically"], answer: 0 },

      // ---- RELATIONSHIP & MARRIAGE (Q91–93) ----
      { q: "According to the course, divorce is permissible ONLY when:", options: ["There is persistent poverty or hardship", "The couple no longer loves each other", "A life partner has committed adultery — Matthew 5:31-32", "The marriage was contracted outside the church"], answer: 2 },
      { q: "The course states that no marriage should be contracted with:", options: ["Someone from a different tribe", "Unbelievers — 2 Corinthians 6:14-17", "Someone of a different denomination", "Someone without a university degree"], answer: 1 },
      { q: "According to Hebrews 13:4, marriage is described as:", options: ["Honourable in all", "A necessary obligation", "A secular arrangement", "Optional for ministers"], answer: 0 },

      // ---- END TIMES (Q94–100) ----
      { q: "The second coming of Christ will occur in how many stages?", options: ["One stage", "Two stages", "Three stages", "Four stages"], answer: 1 },
      { q: "The first phase of Christ's return involves:", options: ["The battle of Armageddon", "The White Throne Judgment", "The rapture of the saints to meet Christ in the sky", "The millennial reign beginning immediately"], answer: 2 },
      { q: "The Great Tribulation following the rapture will last for how long?", options: ["Seven years", "Three and a half years", "One thousand years", "Forty-two days"], answer: 0 },
      { q: "The Millennial Reign of Christ will last for:", options: ["7 years", "100 years", "Forever", "1,000 years — Revelation 20:1-6"], answer: 3 },
      { q: "The Great White Throne Judgment is for:", options: ["The angels who fell", "All the wicked dead from Adam to the end of the millennium", "Believers who did not tithe", "Church leaders who failed in ministry"], answer: 1 },
      { q: "The judgment seat of Christ (for believers) takes place:", options: ["After the millennial reign", "At the moment of death", "During the 7-year period between rapture and the second advent", "At the Great White Throne"], answer: 2 },
      { q: "According to 2 Peter 3:10-13, after the final judgment God will create:", options: ["A new Heaven and a new Earth", "A restored version of the current earth", "An improved Garden of Eden", "A spiritual realm only"], answer: 0 },

    ]
  },

  // ---- END OF EXAM LIST ----

];

// ============================================================
// SIT THEORY EXAMS
// ============================================================
const SIT_THEORY_EXAMS = [

  // ---- ADD THEORY EXAMS BELOW THIS LINE ----

  // ---- END OF THEORY EXAM LIST ----

];