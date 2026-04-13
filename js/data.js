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
      { q: "The foundation of Christian counselling rests on:", options: ["Human psychological theories adapted for church use","The revealed truth of Scripture and the sufficiency of God's Word","Secular therapy models","Church tradition and pastoral practice alone"], answer: 1 },
      { q: "The primary role of the Christian counsellor is:", options: ["To give advice and solve the counselee's problems directly","To diagnose mental illness and prescribe treatment","To serve as a caring, Scripture-grounded guide who facilitates healing and growth","To act as a judge of the counselee's moral failures"], answer: 2 },
      { q: "Proverbs 11:14 emphasises the value of:", options: ["Private personal prayer in decision-making","Seeking wisdom through a multitude of counsellors","Daily Scripture reading for guidance","Fasting before making major decisions"], answer: 1 },
      { q: "Empathy in counselling is best described as:", options: ["Agreeing with everything the counselee says","Sharing your own personal struggles in return","Understanding and sharing the feelings of another person","Offering immediate practical solutions to the problem"], answer: 2 },
      { q: "Active listening in a counselling session involves:", options: ["Planning your response while the client is still speaking","Giving full attention, using affirming responses, and reflecting understanding","Writing detailed notes throughout the entire session","Frequently interrupting to clarify points of confusion"], answer: 1 },
      { q: "Confidentiality in Christian counselling:", options: ["Is optional and at the counsellor's personal discretion","Is an absolute right that can never be broken under any circumstance","Is ethically required but has recognized exceptions such as risk of serious harm","Applies only in formal church or ministry counselling settings"], answer: 2 },
      { q: "The ultimate goal of Christian counselling is:", options: ["Psychological adjustment and the achievement of personal happiness","The complete elimination of all human suffering","Restoration to wholeness and growing conformity to Christlikeness","Social acceptance and visibly improved personal relationships"], answer: 2 },
      { q: "James 5:16 ('Confess your sins to one another and pray for each other') teaches:", options: ["Only trained priests should hear confessions","Members should publicly expose one another's sins","There is real healing and accountability in honest, transparent Christian community","Only the senior pastor is authorised to receive personal confessions"], answer: 2 },
      { q: "A referral is appropriate in Christian counselling when:", options: ["The counsellor simply disagrees with the counselee's beliefs","The issue exceeds the counsellor's training, competence, or scope of ministry","The counselee misses scheduled appointments frequently","The counsellor is too busy to continue the sessions"], answer: 1 },
      { q: "The 'presenting problem' in counselling refers to:", options: ["The counsellor's own diagnosis of the underlying issue","The issue the counselee states as their primary reason for seeking help","The deep root cause discovered during ongoing sessions","A clinical psychological label assigned by a professional"], answer: 1 }
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
      { q: "Biblical marriage counselling is grounded in:", options: ["Psychological compatibility tests and personality profiles","Cultural norms about modern relationships","God's design for marriage as a covenant reflecting Christ and the Church","Legal requirements and social conventions"], answer: 2 },
      { q: "Ephesians 4:26  'Do not let the sun go down on your anger'  instructs couples to:", options: ["Suppress anger and never express it","Resolve conflict before it hardens into entrenched bitterness","Spend time apart whenever they feel angry","Accept that anger has no place in a Christian marriage"], answer: 1 },
      { q: "Grief counselling should recognise that:", options: ["All grieving people experience the same stages in the same order","Grief is a unique personal journey with no fixed uniform timeline or stages","Grief should be fully resolved within one year of the loss","Expressing deep emotion is a sign of weak faith"], answer: 1 },
      { q: "The stages of grief model was proposed by:", options: ["Sigmund Freud","Carl Rogers","Elisabeth Kübler-Ross","Viktor Frankl"], answer: 2 },
      { q: "When counselling someone struggling with addiction, a biblical approach emphasises:", options: ["Willpower and moral determination alone","Supernatural deliverance requiring no ongoing recovery process","A combination of repentance, accountability, community support, and professional help where needed","Shame and strong discipline as the primary motivators for change"], answer: 2 },
      { q: "Depression in a counsellee should be approached with:", options: ["The assumption that it is always caused directly by personal sin","Compassion, spiritual care, and appropriate referral for clinical assessment where needed","Prayer and fasting with no other form of support","Dismissal of their concern as a failure of personal faith in God"], answer: 1 },
      { q: "Biblical forgiveness in counselling means:", options: ["Feeling no further pain about what happened","Pretending the offense never occurred","Excusing or condoning harmful behaviour permanently","Making a choice to release the debt of the offense, entrusting justice to God"], answer: 3 },
      { q: "Pastoral crisis counselling focuses on:", options: ["Extended long-term psychotherapy and deep psychological analysis","Providing immediate emotional and spiritual support to stabilise a person in acute distress","Formally diagnosing underlying mental health conditions","Delivering extended theological lectures to the person in crisis"], answer: 1 },
      { q: "Trauma-informed counselling recognises that:", options: ["Trauma is purely a spiritual problem requiring only prayer","Past trauma deeply affects a person's behaviour, beliefs, and relationships and requires sensitive care","Traumatised people are necessarily spiritually weaker than others","Trauma counselling is exclusively the domain of clinical professionals"], answer: 1 },
      { q: "The concept of 'transference' in counselling refers to:", options: ["Moving counselling sessions to a different location","The counselee projecting feelings from past relationships onto the counsellor","Referring a counselee to a different professional or specialist","Transferring counselling records between practitioners"], answer: 1 }
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
      { q: "The doctrine of Scripture (Bibliology) teaches that the Bible is:", options: ["A collection of human wisdom and reflection about God","Inspired by God — God-breathed and therefore authoritative and fully sufficient","An inspired record of human spiritual experiences with God","Reliable only in matters of faith, not history or science"], answer: 1 },
      { q: "The doctrine of the Trinity states that God is:", options: ["Three gods working together in perfect unity","One God in three co-equal, co-eternal Persons: Father, Son, and Holy Spirit","One Person who reveals Himself in three different historical modes","A divine community of three closely related divine beings"], answer: 1 },
      { q: "The doctrine of Creation teaches that:", options: ["The universe evolved without any divine involvement","Matter is eternal and God simply shaped and ordered it","God created all things out of nothing (ex nihilo) by His word alone","The physical creation is an illusion and only the spiritual is truly real"], answer: 2 },
      { q: "The doctrine of the Fall teaches that:", options: ["Humans are naturally good and require only education and moral guidance","Adam and Eve's sin brought death, corruption, and guilt upon all of humanity","Sin consists only of specific harmful actions, not of a spiritual condition","The Fall was a necessary developmental step in human moral evolution"], answer: 1 },
      { q: "The doctrine of salvation (Soteriology) teaches that we are saved:", options: ["By faith plus the performance of good works","By church membership and reception of the sacraments","By grace alone through faith alone in Christ alone","By sincere moral effort and genuine religious devotion"], answer: 2 },
      { q: "The doctrine of the Church (Ecclesiology) describes the church as:", options: ["A physical building and sacred location","A religious organisation or human institution","The body of Christ — all true believers united to Him as their Head","A human social organisation designed for moral improvement"], answer: 2 },
      { q: "The bodily resurrection of Jesus Christ is:", options: ["A spiritual metaphor representing new beginnings","The central historical fact on which the entire Christian faith stands or falls","A legend added to the Gospel accounts by later editors","A secondary doctrine of little practical importance for daily Christian life"], answer: 1 },
      { q: "The doctrine of justification means:", options: ["Being made gradually righteous through the performance of good works","The ongoing progressive process of becoming more holy","Being declared righteous by God through faith in Christ alone","Receiving forgiveness through participation in the church's sacraments"], answer: 2 },
      { q: "The Second Coming of Christ is described in Scripture as:", options: ["Already fulfilled spiritually at the fall of Jerusalem in 70 AD","Purely symbolic of the Spirit's ongoing work throughout history","A literal, bodily, visible, and glorious return seen by all people","A secret spiritual event known only to true believers through a special sign"], answer: 2 },
      { q: "The doctrine of the final judgment teaches that:", options: ["All people will ultimately be saved — universalism is true","Only the wicked face any form of divine judgment","All people will stand before God and receive their eternal destiny based on their relationship to Christ","Divine judgment is merely symbolic of God's general displeasure with humanity"], answer: 2 }
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
      { q: "Theology proper is the study of:", options: ["The Church and its ordinances","God Himself — His nature, character, and attributes","Salvation and the doctrine of redemption","The Holy Spirit and the spiritual gifts"], answer: 1 },
      { q: "God's attribute of aseity (self-existence) means:", options: ["God knows all things exhaustively","God is present everywhere simultaneously","God is self-existent and depends on nothing outside Himself for His existence","God never changes in His nature or purposes"], answer: 2 },
      { q: "God's omniscience means He:", options: ["Has the power to accomplish all things that are logically possible","Is fully present in every location simultaneously","Knows all things — past, present, and future — exhaustively and perfectly","Is the ultimate source of all human knowledge and understanding"], answer: 2 },
      { q: "The communicable attributes of God are those that:", options: ["God does not share with any created being","Can be reflected, in finite measure, in human beings made in His image","Are known only through natural revelation in creation","Remain hidden until their full disclosure at the final judgment"], answer: 1 },
      { q: "The incommunicable attributes of God include:", options: ["Love, holiness, and wisdom","Knowledge, reason, and the faculty of will","Aseity, omnipresence, omniscience, and immutability","Patience, compassion, and redeeming grace"], answer: 2 },
      { q: "The doctrine of divine simplicity means:", options: ["God is uncomplicated and easy for humans to fully understand","God is not composed of parts — His essence and all His attributes are one unified whole","God has a limited and manageable number of divine attributes","God's personality and dealings with humanity are straightforward"], answer: 1 },
      { q: "God's immutability means:", options: ["God cannot be moved, influenced, or affected by human prayer or worship","God never changes in His being, perfections, purposes, or promises","God's actions and responses are identical in every conceivable situation","God is entirely emotionless and without any form of divine passion"], answer: 1 },
      { q: "A theophany in the Old Testament refers to:", options: ["A predictive prophecy about the coming Messiah","A visible, physical manifestation or appearance of God","A dream or night vision received by a Hebrew prophet","A miraculous healing performed by God for Israel"], answer: 1 },
      { q: "General revelation refers to God's self-disclosure through:", options: ["The Bible and the preaching of the gospel alone","Visions, dreams, and prophecy exclusively","Creation, nature, human conscience, and the flow of history","Scientific discoveries and philosophical reasoning"], answer: 2 },
      { q: "Special revelation refers to:", options: ["God's revelation of Himself through creation and the natural world","Unusual supernatural signs, healings, and miracles","God's direct, personal revelation through Holy Scripture and the Incarnation of Jesus Christ","God's specific answers to the prayers of individual believers"], answer: 2 }
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
    code: "CED 201",
    title: "Christian Education",
    icon: "",
    duration: 60,
    questions: [
      { q: "Christian education is primarily concerned with:", options: ["Training church administrators for denominational bodies","Teaching academic theology in seminaries and Bible colleges only","The spiritual formation and nurture of believers through biblical instruction","Running Sunday School programmes exclusively"], answer: 2 },
      { q: "Deuteronomy 6:4-9 (the Shema) primarily emphasises:", options: ["Temple worship and the sacrificial system","Faith being lived and taught faithfully within the home and family","The duties of the Levitical priesthood","National identity and political solidarity of Israel"], answer: 1 },
      { q: "Jesus' most frequently used teaching method was:", options: ["Formal academic lectures in the synagogue","Storytelling through parables drawn from everyday life","Writing texts for His disciples to study independently","Formal classroom schooling modelled on the Greek academy"], answer: 1 },
      { q: "James 3:1 warns that teachers in the church:", options: ["Hold the highest honour and rank in the local congregation","Are optional for most church communities","Bear great responsibility as they will face a stricter judgment","Must hold a recognised seminary or academic qualification"], answer: 2 },
      { q: "The term 'pedagogy' refers to:", options: ["The historical development of formal educational institutions","The theory, methods, and practice of teaching","Child and adolescent developmental psychology","The systematic design of educational curriculum materials"], answer: 1 },
      { q: "Discipleship in the church describes:", options: ["Enrolling church members in a formal theological degree course","The ongoing process of making, maturing, and multiplying committed followers of Jesus","Completion of a church membership class and orientation programme","Regular weekly attendance at Sunday worship services"], answer: 1 },
      { q: "The Socratic method of teaching involves:", options: ["Delivering comprehensive lectures on a given subject","Using guided questions and dialogue to stimulate critical thinking and personal discovery","Providing visual demonstrations and concrete object lessons","Requiring rote memorisation of key facts and authoritative texts"], answer: 1 },
      { q: "Howard Gardner's 'Multiple Intelligences' theory is significant for Christian education because:", options: ["It demonstrates that academic intelligence is the only educationally valid type","It proves that intelligence is genetically fixed and cannot be changed","It recognises that people learn differently and contribute varied gifts to the community","It shows that children learn best exclusively through reading and text"], answer: 2 },
      { q: "The ultimate goal of Christian education is:", options: ["Biblical knowledge sufficient to pass formal theological examinations","Increasing church membership and weekly attendance figures","Conformity to the image of Jesus Christ — authentic Christlikeness in all of life","Academic achievement and the attainment of formal theological degrees"], answer: 2 },
      { q: "Informal Christian education refers to:", options: ["Poorly organised or unplanned Sunday School classes","Learning that occurs naturally through relationships, mentoring, modelling, and daily life","Education that contains no biblical or theological content","Instruction given in the absence of a qualified or trained teacher"], answer: 1 }
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
      { q: "According to Ephesians 4:11-12, the primary role of a pastor-teacher is to:", options: ["Manage church finances and administrative matters","Equip the saints for works of ministry","Preach at every single service of the church","Make all major decisions on behalf of the congregation"], answer: 1 },
      { q: "The word 'pastor' comes from a Latin word meaning:", options: ["Leader and ruler","Shepherd","Teacher of doctrine","Elder or overseer"], answer: 1 },
      { q: "The biblical qualifications for an elder/overseer are found primarily in:", options: ["John 10 and Acts 20","1 Timothy 3 and Titus 1","Romans 12 and 1 Corinthians 12","Matthew 5 and Luke 6"], answer: 1 },
      { q: "The ancient pastoral concept of 'cura animarum' (the cure of souls) describes:", options: ["Healing physical diseases through pastoral prayer ministry","The pastor's responsibility for the eternal spiritual welfare of individual people","Delivering people from demonic possession and oppression","A specific church growth model or strategy"], answer: 1 },
      { q: "2 Timothy 4:2 commands the minister to:", options: ["Preach the word — in season and out of season","Build the largest possible congregation","Focus on administrative excellence and organisational efficiency","Carefully avoid all theologically controversial topics"], answer: 0 },
      { q: "Pastoral counselling differs from secular counselling primarily in its:", options: ["Use of recognised therapeutic techniques and frameworks","The length and frequency of counselling sessions","Foundation in Scripture, prayer, and the guidance of the Holy Spirit","Cost or financial arrangement with the counselee"], answer: 2 },
      { q: "Pastoral care involves:", options: ["Preaching and teaching ministry only","Church administration and programme management","Holistic nurture of the spiritual, emotional, and physical well-being of the congregation","Managing church finances, infrastructure, and facilities"], answer: 2 },
      { q: "A pastor's personal spiritual disciplines are essential because:", options: ["They are required by denominational law and governance","They demonstrate the pastor's spiritual superiority over the congregation","A shepherd cannot effectively lead others where they themselves have not personally gone","They directly increase church attendance and membership numbers"], answer: 2 },
      { q: "Accountability in pastoral ministry is important because:", options: ["It demonstrates that pastors are subordinate to church administrators","No person is above temptation and all leaders need correction, support, and accountability","Denominational structures and legal requirements mandate it from outside the church","It is a concept imported from secular human resources management"], answer: 1 },
      { q: "Bivocational ministry refers to:", options: ["A pastor serving two completely separate congregations simultaneously","A pastor who ministers in two different languages or cultural contexts","A pastor who is self-supporting through secular employment while also serving in ministry","A pastor holding two different official ministry titles or positions"], answer: 2 }
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
  // 17. HISTORY AND THEOLOGY
  // 
  {
    id: 17,
    code: "HIT 301",
    title: "History and Theology",
    icon: "",
    duration: 60,
    questions: [
      { q: "The relationship between church history and theology is best described as:", options: ["They are entirely unrelated academic disciplines","Church history provides the living context in which theology was developed, debated, and refined","Theology always determines history rather than the other way around","Church history is relevant only to historians and archivists, not to theologians"], answer: 1 },
      { q: "The Apostles' Creed is historically significant because it:", options: ["Was personally written by the twelve apostles before their deaths","Represents one of the earliest summaries of essential Christian doctrine used in baptism and worship","Is the official and binding doctrinal statement of all Protestant denominations","Is found verbatim in the New Testament as a complete doctrinal formula"], answer: 1 },
      { q: "The Chalcedonian Definition (451 AD) settled the central debate about:", options: ["The number and identity of books in the biblical canon","Whether Sunday worship should permanently replace the Jewish Sabbath","The relationship between Christ's divine and human natures","The supreme authority of the bishop of Rome over all churches"], answer: 2 },
      { q: "Augustine's theology of grace most significantly shaped:", options: ["Eastern Orthodox liturgical and sacramental practice","Protestant Reformation theology, particularly the thought of Luther and Calvin","Liberation theology as it developed in Latin America","The early 20th-century Pentecostal and charismatic movements"], answer: 1 },
      { q: "The Protestant Reformation recovered which central biblical truth?", options: ["The supreme authority of church tradition alongside Scripture","Justification by grace through faith alone in Christ alone","The absolute necessity of all seven sacraments for salvation","The God-given supremacy of the bishop of Rome"], answer: 1 },
      { q: "The Anabaptists of the Reformation period are historically significant for emphasising:", options: ["State church authority and the universal practice of infant baptism","The divine unity of church and state authority","Believer's baptism, church-state separation, and radical discipleship to Christ","The doctrines of divine predestination and absolute sovereignty"], answer: 2 },
      { q: "The Social Gospel movement of the late 19th and early 20th centuries emphasised:", options: ["Personal individual evangelism and the salvation of souls above all other concerns","The application of Christian ethics to social problems, poverty, and systemic injustice","Pentecostal gifts, miraculous healings, and revival preaching","Conservative Reformed theology and strict confessional churches"], answer: 1 },
      { q: "Neo-orthodoxy, most associated with Karl Barth, is theologically characterised by:", options: ["Liberal accommodation to Enlightenment rationalism and modern culture","A return to the centrality of God's own Word and self-revelation as the basis of all theology","Process theology and the view of God as dynamically evolving","Liberation theology and the politics of revolutionary social transformation"], answer: 1 },
      { q: "The ecumenical movement at its core seeks:", options: ["The formal political union of all nations with Christian historical heritage","Greater visible unity and more effective cooperation among Christian churches across denominations","The eventual elimination of all theological differences between all Christian traditions","The universal adoption of a single authoritative liturgical worship style"], answer: 1 },
      { q: "Liberation theology, first articulated in Latin America, primarily emphasises:", options: ["Individual personal piety and retreat from social engagement","God's preferential concern for the poor and oppressed, and the call to structural social justice","Conservative political, economic, and social values as expressions of Christian faithfulness","Traditional evangelical missionary evangelism and the planting of local churches"], answer: 1 }
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
      { q: "Christology is the study of:", options: ["Principles of Christian leadership and discipleship","The doctrine of the Church and her ordinances","The Person and work of Jesus Christ","Christian social and communal ethics"], answer: 2 },
      { q: "The Council of Chalcedon (451 AD) defined Christ as:", options: ["Fully divine but not truly and completely human","Fully human but not truly and eternally divine","A new blended being in whom divine and human natures are permanently merged","One Person in two complete natures — fully divine and fully human — without confusion or separation"], answer: 3 },
      { q: "The heresy of Docetism held that Jesus:", options: ["Was a man adopted as God's Son at His baptism","Was a divine being who merely appeared to have a physical human body","Was the highest created being but not eternal God","Existed as two separate persons — one divine and one human"], answer: 1 },
      { q: "The heresy of Arianism held that Jesus:", options: ["Was fully equal and co-eternal with God the Father","Was a divine being who appeared human but lacked a genuine physical body","Was a created being who had a beginning and was therefore not eternal God","Existed as two completely separate persons with two separate natures"], answer: 2 },
      { q: "The Incarnation refers to:", options: ["The bodily resurrection of Jesus from the dead","The eternal Son of God taking on full and genuine human nature in the womb of the Virgin Mary","The baptism of Jesus in the Jordan River by John","The coming of the Holy Spirit upon the disciples at Pentecost"], answer: 1 },
      { q: "The term 'hypostatic union' describes:", options: ["The eternal relationship of love between the Father and the Son","The spiritual unity of all true believers in the body of Christ","The union of divine and human natures in the one Person of Jesus Christ","The union of the immortal spirit and mortal body in every human person"], answer: 2 },
      { q: "Jesus' threefold office is described as Prophet, Priest, and:", options: ["Judge","King","Apostle","Lord"], answer: 1 },
      { q: "The humiliation of Christ in His earthly ministry includes:", options: ["His glorious resurrection and ascension to the right hand of the Father","His eternal existence as the second Person of the Holy Trinity","His incarnation, suffering, death, and burial","His miracles of healing and His authoritative public teaching"], answer: 2 },
      { q: "The exaltation of Christ includes:", options: ["His becoming human through the miraculous Incarnation","His baptism in the Jordan and His forty-day wilderness temptation","His resurrection, ascension, session at God's right hand, and second coming in glory","His agonising suffering on the cross and His burial in the tomb"], answer: 2 },
      { q: "Kenosis (from Philippians 2:7) describes:", options: ["Christ's complete abandonment of His divine nature upon becoming human","Christ's voluntary self-limiting in the independent exercise of certain divine attributes while becoming human","The claim that Christ was completely identical to an ordinary human being in every way","The suffering and public humiliation Christ endured on the road to the cross"], answer: 1 }
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
      { q: "The book of Daniel is set during the period of:", options: ["The era of the Judges and the early monarchy of Israel","The wilderness wanderings of Israel after the Exodus","The Babylonian and later Persian exile of Judah","The ministry of Ezra and Nehemiah after the return from exile"], answer: 2 },
      { q: "Daniel and his companions refused the king's food in Babylon because:", options: ["The food was simply not to their personal taste or preference","They wanted to demonstrate that their God would provide supernaturally for them","They were committed to honouring God by maintaining their dietary convictions","Daniel had received a prophetic dream warning him that the food was poisoned"], answer: 2 },
      { q: "Shadrach, Meshach, and Abednego were thrown into the fiery furnace because they refused to:", options: ["Eat the king's food and drink his wine","Worship the golden statue erected by King Nebuchadnezzar","Pray to King Nebuchadnezzar as a divine god","Reveal Daniel's interpretation of the king's troubling dream"], answer: 1 },
      { q: "In Daniel chapter 2, Nebuchadnezzar's great statue in his dream was interpreted as:", options: ["A vision of the successive kings of Israel from David onward","A warning of Egypt's imminent military invasion of Babylon","A succession of world empires, culminating in God's eternal and unshakeable kingdom","A personal prophecy about Nebuchadnezzar's own illness and eventual restoration"], answer: 2 },
      { q: "The mysterious writing on the wall (Mene, Mene, Tekel, Parsin) in Daniel 5 appeared during the reign of:", options: ["Nebuchadnezzar","Darius the Mede","Belshazzar","Cyrus the Great of Persia"], answer: 2 },
      { q: "Daniel was cast into the lions' den because:", options: ["He openly refused to serve in the Medo-Persian government","His political enemies discovered and exploited his faithful habit of praying to God three times daily","He publicly rebuked King Darius the Mede for practising idolatry","He gave an interpretation of a royal dream that deeply angered the king"], answer: 1 },
      { q: "The 'Son of Man' figure in Daniel 7:13-14 is described as receiving:", options: ["Temporary authority over Babylon and the Persian Empire only","Authority limited to the people of Israel during an earthly millennium","Everlasting dominion, glory, and a kingdom encompassing all peoples and nations","Power equal to but properly subordinate to the Ancient of Days"], answer: 2 },
      { q: "Daniel's 'Seventy Weeks' prophecy in chapter 9 is widely understood to concern:", options: ["The literal seventy-year duration of the Babylonian exile of Israel","The total number of generations from Abraham to the birth of Christ","God's unfolding redemptive programme including the Messiah's coming, death, and the end of the age","The seventy elders initially appointed during the time of Nehemiah's reforms"], answer: 2 },
      { q: "The four great beasts of Daniel chapter 7 represent:", options: ["Four demonic kingdoms operating simultaneously in the invisible spiritual realm","Four successive great world empires in the flow of human history","Four distinct stages in Israel's spiritual life and national development","Four separate kingdoms arising simultaneously in the final days of history"], answer: 1 },
      { q: "A key theological conviction woven throughout the entire book of Daniel is:", options: ["The critical importance of ritual dietary laws and ceremonial religious purity","The supreme value of human wisdom and personal perseverance in adversity","The absolute sovereignty of God over all human kingdoms, rulers, and the entire course of history","The priority of political engagement and influence for the faithful people of God"], answer: 2 }
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

  // 3. YEAR 3
  {
    id: 3,
    code: "SOD YEAR 3",
    title: "Year 3",
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