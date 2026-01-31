export interface FirstAidStep {
  title: string;
  description: string;
}

export interface FirstAidGuide {
  id: string;
  icon: string;
  title: string;
  steps: FirstAidStep[];
}

export const FIRST_AID_DATA: Record<string, FirstAidGuide[]> = {
  en: [
    {
      id: "cpr",
      icon: "HeartPulse",
      title: "CPR (Adult)",
      steps: [
        { title: "Check Surroundings", description: "Ensure the area is safe for you and the victim." },
        { title: "Check Response", description: "Tap shoulders and shout. If no response, call emergency services." },
        { title: "Chest Compressions", description: "Push hard and fast in the center of the chest (100-120bpm)." },
        { title: "Rescue Breaths", description: "If trained, give 2 breaths after every 30 compressions." }
      ]
    },
    {
      id: "bleeding",
      icon: "Droplets",
      title: "Severe Bleeding",
      steps: [
        { title: "Apply Pressure", description: "Press a clean cloth or bandage firmly on the wound." },
        { title: "Maintain Pressure", description: "Do not lift the cloth to check. Add more layers if soaked." },
        { title: "Elevate", description: "If possible, keep the wounded area above the heart." },
        { title: "Tourniquet", description: "As a last resort for limbs, tie a cloth tightly above the wound." }
      ]
    },
    {
      id: "burns",
      icon: "Flame",
      title: "Burns",
      steps: [
        { title: "Cool the Burn", description: "Run cool (not cold) tap water over the burn for 10-20 minutes." },
        { title: "Remove Jewelry", description: "Gently remove rings or tight items before the area swells." },
        { title: "Cover Loosely", description: "Use a sterile bandage or clean plastic wrap. Do not apply butter or ointments." },
        { title: "Seek Help", description: "Call help if the burn is large, deep, or on the face." }
      ]
    }
  ],
  hi: [
    {
      id: "cpr",
      icon: "HeartPulse",
      title: "CPR (वयस्क)",
      steps: [
        { title: "आस-पास की जाँच लें", description: "सुनिश्चित करें कि क्षेत्र आपके और पीड़ित के लिए सुरक्षित है।" },
        { title: "प्रतिक्रिया जाँचें", description: "कंधों को थपथपाएं और चिल्लाएं। कोई प्रतिक्रिया न होने पर आपातकालीन सेवाओं को कॉल करें।" },
        { title: "छाती को दबाना", description: "छाती के बीच में जोर से और तेजी से दबाएं (100-120 बार प्रति मिनट)।" }
      ]
    },
    {
      id: "bleeding",
      icon: "Droplets",
      title: "भारी रक्तस्राव",
      steps: [
        { title: "दबाव डालें", description: "घाव पर एक साफ कपड़ा या पट्टी जोर से दबाएं।" },
        { title: "दबाव बनाए रखें", description: "कपड़ा हटाकर जाँच न करें। अगर भीग जाए तो और परतें जोड़ें।" }
      ]
    },
    {
      id: "burns",
      icon: "Flame",
      title: "जलना (झुलसना)",
      steps: [
        { title: "ठंडा करें", description: "जली हुई जगह पर 10-20 मिनट तक ठंडा नल का पानी डालें।" },
        { title: "ढीला ढकें", description: "साफ पट्टी या प्लास्टिक रैप का उपयोग करें। मक्खन या मलहम न लगाएं।" }
      ]
    }
  ],
  te: [
    {
      id: "cpr",
      icon: "HeartPulse",
      title: "CPR (పెద్దలు)",
      steps: [
        { title: "పరిసరాలను తనిఖీ చేయండి", description: "ప్రాంతం మీకు మరియు బాధితుడికి సురక్షితంగా ఉందని నిర్ధారించుకోండి." },
        { title: "ప్రతిస్పందన తనిఖీ", description: "భుజాలను తట్టి అరవండి. స్పందన లేకపోతే అత్యవసర సేవలకు కాల్ చేయండి." }
      ]
    },
    {
      id: "bleeding",
      icon: "Droplets",
      title: "తీవ్రమైన రక్తస్రావం",
      steps: [
        { title: "ఒత్తిడిని కలిగించండి", description: "గాయంపై శుభ్రమైన గుడ్డ లేదా బ్యాండేజీని గట్టిగా నొక్కండి." }
      ]
    },
    {
      id: "burns",
      icon: "Flame",
      title: "కాలిన గాయాలు",
      steps: [
        { title: "చల్లబరచండి", description: "కాలిన చోట 10-20 నిమిషాల పాటు చల్లని నీటిని పోయండి." }
      ]
    }
  ],
  ta: [
    {
      id: "cpr",
      icon: "HeartPulse",
      title: "CPR (பெரியவர்கள்)",
      steps: [
        { title: "சுற்றுப்புறத்தைச் சரிபார்க்கவும்", description: "பகுதி உங்களுக்கும் பாதிக்கப்பட்டவருக்கும் பாதுகாப்பானது என்பதை உறுதிப்படுத்தவும்." },
        { title: "பதிலைச் சரிபார்க்கவும்", description: "தோள்களைத் தட்டி சத்தம் போடவும். பதில் இல்லையெனில் அவசர சேவையை அழைக்கவும்." }
      ]
    },
    {
      id: "bleeding",
      icon: "Droplets",
      title: "கடுமையான இரத்தப்போக்கு",
      steps: [
        { title: "அழுத்தம் கொடுக்கவும்", description: "காயத்தின் மீது சுத்தமான துணி அல்லது கட்டை வைத்து பலமாக அழுத்தவும்." }
      ]
    },
    {
      id: "burns",
      icon: "Flame",
      title: "தீக்காயங்கள்",
      steps: [
        { title: "குளிர்விக்கவும்", description: "தீக்காயத்தின் மேல் 10-20 நிமிடங்கள் குளிர்ந்த நீரை ஊற்றவும்." }
      ]
    }
  ],
  mr: [
    {
      id: "cpr",
      icon: "HeartPulse",
      title: "CPR (प्रौढ)",
      steps: [
        { title: "परिसर तपासा", description: "तुमच्यासाठी आणि पीडितेसाठी परिसर सुरक्षित असल्याची खात्री करा." },
        { title: "प्रतिसाद तपासा", description: "खांद्यावर थाप द्या आणि ओरडा. प्रतिसाद नसल्यास, आपत्कालीन सेवांना कॉल करा." },
        { title: "चेस्ट कॉम्प्रेशन", description: "छातीच्या मध्यभागी जोरात आणि वेगाने दाबा (१००-१२० प्रति मिनिट)." }
      ]
    },
    {
      id: "bleeding",
      icon: "Droplets",
      title: "गंभीर रक्तस्त्राव",
      steps: [
        { title: "दाब द्या", description: "जखमेवर स्वच्छ कापड किंवा पट्टीने जोरात दाब द्या." },
        { title: "दाब कायम ठेवा", description: "तपासण्यासाठी कापड उचलू नका. भिजल्यास आणखी थर जोडा." }
      ]
    },
    {
      id: "burns",
      icon: "Flame",
      title: "भाजणे",
      steps: [
        { title: "थंड करा", description: "भाजलेल्या जागी १०-२० मिनिटे थंड नळाचे पाणी सोडा." },
        { title: "दागिने काढा", description: "सूज येण्यापूर्वी अंगठ्या किंवा घट्ट वस्तू हळूवारपणे काढा." },
        { title: "सैल झाकून ठेवा", description: "स्वच्छ कापड किंवा प्लास्टिक रॅप वापरा. लोणी किंवा मलम लावू नका." }
      ]
    }
  ]
};
