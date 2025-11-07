const translations = {
  en: {
    brand: "IrigMA",
    nav: {
      home: "Home",
      problem: "Problem",
      solution: "Solution",
      impact: "Impact",
      budget: "Budget",
      contact: "Contact",
    },
    hero: {
  title: "IrigMA",
      subtitle: "Intelligent irrigation & farm monitoring system",
      lead: "A low-cost solution adapted to the Moroccan context",
      discover: "Discover the solution",
      contact: "Contact us",
      stats: {
        s1: { value: "20-40%", label: "Water savings" },
        s2: { value: "95%", label: "Sensor accuracy" },
        s3: { value: "3-4 months", label: "Typical ROI" },
        s4: { value: "300M DH", label: "Market size" },
      },
    },
    cta: {
      invest_title: "Invest in the future of agriculture",
      invest_lead: "Join us to revolutionize Moroccan agriculture and create lasting impact",
      contact_heading: "Contact us",
      name: "Full name",
      email: "Email",
      message: "Message",
      send: "Send message",
      
      coords: "Contact details",
      // small UI strings
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        message: "Tell us about your interest...",
      },
      toast: {
        title: "Message sent!",
        description: "We will contact you shortly.",
      },
      highlights: {
        roi: { title: "Attractive ROI", desc: "300M DH market with 25% YoY growth" },
        social: { title: "Social impact", desc: "85% of Moroccan farmers affected" },
        adv: { title: "Competitive advantage", desc: "50% cheaper with superior technology" },
      },
      invest_info: {
        title: "Investment information",
        items: {
          s1: { title: "Amount sought", value: "500,000 - 1,000,000 DH" },
          s2: { title: "Valuation", value: "To be discussed depending on contribution" },
          s3: { title: "Projected ROI", value: "200-300% over 3 years" },
          s4: { title: "Use of funds", value: "Production, marketing, R&D" },
        },
      },
    },
    problem: {
      title: "The Problem",
      subtitle: "Morocco faces a major water crisis that directly impacts agriculture",
      stats: {
        s1: { value: "-30%", label: "Drop in rainfall", trend: "Alarming trend" },
        s2: { value: "+40%", label: "Increase in water consumption", trend: "Continued growth" },
        s3: { value: "40-50%", label: "Irrigation waste", trend: "Major loss" },
        s4: { value: "85%", label: "Smallholders", trend: "70% without tech access" },
      },
      challenges_heading: "Challenges for smallholders",
      challenges: {
        c1: "Limited and costly water resources",
        c2: "Inefficient traditional irrigation systems",
        c3: "Lack of access to modern technologies (70%)",
        c4: "High energy costs for pumping",
        c5: "Difficulties in crop monitoring and optimization",
      },
      environmental_heading: "Environmental impact",
      environmental: {
        e1: "Depletion of groundwater",
        e2: "Soil degradation from over-irrigation",
        e3: "CO2 emissions from diesel pumping",
        e4: "Excessive use of fertilizers and pesticides",
        e5: "Threat to national food security",
      },
      banner: "Water emergency: act now to preserve the agricultural future",
    },
    impact: {
      title: "Impact & Results",
      subtitle: "Measurable savings and positive environmental impact",
      savings: {
        heading: "Savings per hectare",
        categories: {
          water: "Water",
          energy: "Energy",
          costs: "Costs",
        },
      },
      legend: { before: "Before", after: "After" },
      environmental: {
        heading: "Environmental impact",
        e1: "CO2 reduced",
        e2: "Water saved",
        e3: "Productivity",
      },
      metrics: {
        heading: "Key benefits",
        m1: { label: "Water consumption reduction" },
        m2: { label: "Energy savings" },
        m3: { label: "CO2 emissions reduction" },
        m4: { label: "Productivity increase" },
      },
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Planned milestones",
      phases: {
        p1: {
          week: "Week 1-2",
          title: "MVP & Design",
          tasks: {
            t1: "Full system architecture",
            t2: "Select optimal components",
            t3: "Prototype app development",
            t4: "Individual sensor testing",
          },
        },
        p2: {
          week: "Week 3-4",
          title: "Physical Prototype",
          tasks: {
            t1: "Complete hardware assembly",
            t2: "ESP32 & sensors integration",
            t3: "Solar power installation",
            t4: "Field-condition testing",
          },
        },
        p3: {
          week: "Week 5-6",
          title: "Beta",
          tasks: {
            t1: "Deploy with 5 farmers",
            t2: "Collect user feedback",
            t3: "UI/UX adjustments",
            t4: "AI algorithm optimization",
          },
        },
        p4: {
          week: "Week 7-8",
          title: "Final version",
          tasks: {
            t1: "Fix identified bugs",
            t2: "Complete documentation",
            t3: "User training",
            t4: "Commercial launch",
          },
        },
      },
      progress: { title: "Overall progress", value: "75%" },
      timeline: ["Q1 2025 — Prototype", "Q2 2025 — Pilot", "Q3 2025 — Scale", "Q4 2025 — Launch"],
    },
  architecture: {
      title: "Technical Architecture",
      subtitle: "Robust and flexible infrastructure",
      hardware: {
        heading: "Hardware Stack",
        items: {
          h1: { layer: "Sensors", tech: "YL-69, DHT11, DS18B20" },
          h2: { layer: "Microcontroller", tech: "ESP32 (Wi-Fi, Bluetooth)" },
          h3: { layer: "Power", tech: "20W Solar panel + 12V battery" },
          h4: { layer: "Actuators", tech: "5V relays, solenoid valves" },
        },
      },
      software: {
        heading: "Software Stack",
        items: {
          s1: { layer: "Backend", tech: "Node.js, Python (ML)" },
          s2: { layer: "Database", tech: "MongoDB, InfluxDB" },
          s3: { layer: "Frontend", tech: "React, PWA" },
          s4: { layer: "Cloud", tech: "AWS IoT / Firebase" },
        },
      },
      connectivity: {
        heading: "Connectivity options",
        c1: { title: "Wi-Fi", desc: "Internet connectivity for remote monitoring" },
        c2: { title: "Bluetooth", desc: "Local control and short-range communication" },
        c3: { title: "SMS", desc: "Real-time alerts via SMS gateway" },
        c4: { title: "Offline mode", desc: "Autonomous operation when network is unavailable" },
      },
    
    },

    solution: {
      title: "Our Solution",
      subtitle: "A complete, low-cost system adapted to the Moroccan context",
      image_alt: "IoT sensors and solar-powered field equipment",
      hardware_heading: "Hardware components",
      hardware: {
        h1: { name: "YL-69", desc: "Soil moisture sensor" },
        h2: { name: "DHT11", desc: "Air temperature & humidity" },
        h3: { name: "DS18B20", desc: "Soil temperature" },
        h4: { name: "ESP32", desc: "IoT microcontroller" },
        h5: { name: "Solar", desc: "Panel + battery" },
      },
      app_heading: "Smart application",
      app: {
        f1: { title: "Web/Mobile app", desc: "Intuitive multilingual interface" },
        f2: { title: "SMS alerts", desc: "Real-time notifications" },
        f3: { title: "Monitoring", desc: "Temperature & moisture tracking" },
        f4: { title: "Irrigation control", desc: "Automated scheduling" },
      },
      flow: { s1: "Sensors", s2: "ESP32", s3: "Cloud", s4: "Application" },
    },
    objectives: {
      title: "Our Objectives",
      subtitle: "A comprehensive solution to revolutionize Moroccan agriculture",
      items: {
        s1: { title: "Maximum precision", description: "Real-time soil moisture measurement with 95% accuracy for optimal irrigation" },
        s2: { title: "Substantial savings", description: "Reduce water consumption by 20-40% and cut energy use by 30% with smart irrigation" },
        s3: { title: "Total accessibility", description: "Multilingual app (Arabic, Amazigh, Darija) with SMS and voice notifications for all farmers" },
        s4: { title: "Artificial intelligence", description: "Predictive recommendations with 85% accuracy based on weather and historical data" },
      },
      metrics: {
        m1: { value: "95%", label: "Sensor accuracy", desc: "Reliable measurements" },
        m2: { value: "20-40%", label: "Water savings", desc: "Consumption reduction" },
        m3: { value: "85%", label: "AI accuracy", desc: "Actionable recommendations" },
      },
    },
    results: {
      title: "Measured Results",
      subtitle: "Concrete, measurable impacts for Moroccan agriculture",
      metrics: {
        m1: { label: "Water savings", trend: "Compared to traditional methods" },
        m2: { label: "Energy reduction", trend: "Thanks to solar power" },
        m3: { label: "Productivity", trend: "Average yield increase" },
      },
      cards: {
        environment: {
          title: "Environmental impact",
          i1: "CO2 reduction: -25% per hectare",
          i2: "Groundwater preservation",
          i3: "Less fertilizer needed",
          i4: "Sustainable farming",
        },
        social: {
          title: "Social impact",
          i1: "Accessibility for all",
          i2: "Training & empowerment",
          i3: "Tech job creation",
          i4: "Food security",
        },
        economic: {
          title: "Economic impact",
          i1: "ROI: 3-4 months",
          i2: "Agricultural revenues +15-25%",
          i3: "Operational cost reduction",
          i4: "Increased competitiveness",
        },
      },
      success: {
        title: "Pilot testimonial",
  quote: "\"With IrigMA I reduced my water bill by 40% and my tomatoes are better than ever. The Darija app is easy to use, even for non-technical farmers.\"",
        author: "Mohammed, farmer in Souss-Massa",
        meta: "5 hectares of vegetable crops",
      },
    },

    conclusion: {
      title: "Conclusion",
      subtitle: "Summary and next steps",
      paragraphs: {
  p1: "IrigMA Maroc provides an affordable, scalable solution to water scarcity and productivity challenges faced by Moroccan farmers.",
        p2: "With rapid ROI, multilingual support and solar autonomy, the system is designed for wide adoption from smallholders to commercial farms.",
        p3: "Next steps: pilot deployments, local manufacturing partnerships, and ongoing data-driven improvements.",
      },
  cta: { contact: "Contact us to join the pilot", invest: "Request investment pack" },
      cards: {
        results: { title: "Measured results", description: "Concrete savings and environmental benefits demonstrated in pilots" },
        solution: { title: "Our solution", description: "Low-cost, solar-powered, multilingual system for smallholders" },
        problem: { title: "The challenge", description: "Addressing water scarcity and inefficiencies in irrigation" },
      },
      vision: {
        heading: "Our vision",
        lead: "Scale affordable precision irrigation across Morocco",
        stats: {
          s1: { value: "95%", label: "Sensor accuracy" },
          s2: { value: "20-40%", label: "Water savings" },
          s3: { value: "3-4 months", label: "Typical ROI" },
        },
      },
    },

    targetUsers: {
      title: "Target users",
      subtitle: "Solutions tailored to each type of farmer",
      small: {
        heading: "Small farmers",
        lead: "85% of Moroccan holdings",
        features: {
          f1: { strong: "Plug & Play kit:", text: "Simple installation in 30 minutes" },
          f2: { strong: "SMS alerts:", text: "Notifications even without a smartphone" },
          f3: { strong: "Voice support:", text: "Instructions in Darija" },
          f4: { strong: "Fast ROI:", text: "Return on investment in 3-4 months" },
        },
        price: "Estimated price: 2,500–3,000 MAD",
      },
      large: {
        heading: "Large farmers",
        lead: "Industrial-scale operations",
        features: {
          f1: { strong: "Multi-plot management:", text: "Complete overview" },
          f2: { strong: "Advanced dashboard:", text: "Analytics and detailed reports" },
          f3: { strong: "Predictive AI:", text: "Personalized recommendations" },
          f4: { strong: "API integration:", text: "Compatible with your systems" },
        },
        footer: "Custom solution with premium support",
      },
    },
    
    budget: {
      title: "Budget & ROI",
      subtitle: "A profitable investment within months",
      pie: {
        title: "Budget breakdown",
        total_label: "Total",
        center_label: "Budget",
      },
        items: {
          sensors: "Sensors",
          esp: "ESP32 & modules",
          solar: "Solar & battery",
          relays: "Relays & valves",
          enclosure: "Enclosure & cables",
        },
        items_desc: {
          sensors: "Soil moisture and temperature sensors",
          esp: "ESP32 microcontroller and modules",
          solar: "Solar panel and battery pack",
          relays: "Relay board and valve control",
          enclosure: "Waterproof IP67 enclosure",
        },
        prototype: {
          heading: "Prototype cost",
          totalLabel: "Total prototype cost",
        },
        roi: {
          heading: "Return on investment",
          savingsHeading: "Monthly savings (1 hectare)",
          savings: {
            water: { label: "Water:", value: "300-400 DH" },
            energy: { label: "Energy:", value: "150-200 DH" },
            productivity: { label: "Productivity (+20%):", value: "500-800 DH" },
            totalLabel: "Monthly total:",
            totalValue: "950-1400 DH",
          },
          reachedIn: "ROI reached in",
          months: "3-4 months",
          forArea: "For a 1 hectare farm",
          title: "Return on investment",
          break_even_label: "Break-even",
          break_even_months: "Months 5-6",
          profit_label: "Profit",
        },
        price: {
          estimated: "Estimated selling price:",
          estimatedValue: "2 500-3 000 DH",
          comparison: "40-50% cheaper than competitors",
        },
        comparison: {
          title: "Comparison with competitors",
    headers: { criterion: "Criterion", our: "IrigMA", competitor: "Competitor" },
          rows: {
            price: { criterion: "Price", our: "2 500-3 000 DH", competitor: "5 000-8 000 DH" },
            multilang: { criterion: "Multilingual support", our: "✓ Darija included", competitor: "✗" },
            solar: { criterion: "Solar powered", our: "✓ Included", competitor: "Paid option" },
            ai: { criterion: "Predictive AI", our: "✓ 85% accuracy", competitor: "Basic" },
            installation: { criterion: "Installation", our: "Plug & Play", competitor: "Technician required" },
          },
        },
    },
    
    advantages: {
      title: "Competitive Advantages",
      subtitle: "A complete solution that stands out on every front",
      items: {
        s1: { title: "AI predictions 85%", description: "Smart recommendations based on history and weather to optimize crops" },
        s2: { title: "Economic analysis", description: "Detailed tracking of costs and benefits per plot to maximize profitability" },
        s3: { title: "Low-cost & Plug & Play", description: "Easy installation without technical expertise, accessible to all farmers" },
        s4: { title: "Production log", description: "Complete history of all farming activities for optimal tracking" },
        s5: { title: "Solar powered", description: "Full energy autonomy thanks to solar panels and batteries" },
        s6: { title: "Multilingual support", description: "Interface in Arabic, Amazigh and Darija with voice notifications" },
      },
      badge: "30-day satisfaction guarantee • WhatsApp support • Docs in Darija",
    },
    footer: {
      copyright: "© 2025 IrigMA. All rights reserved.",
    },
  },
  ar: {
    brand: "إجريما المغرب",
    nav: {
      home: "الرئيسية",
      problem: "المشكلة",
      solution: "الحل",
      impact: "التأثير",
      budget: "الميزانية",
      contact: "تواصل",
    },
    hero: {
  title: "إجريما المغرب",
      subtitle: "نظام ذكي للري ومراقبة المزارع",
      lead: "حل منخفض التكلفة ومتكيف مع السياق المغربي",
      discover: "اكتشف الحل",
      contact: "اتصل بنا",
      stats: {
        s1: { value: "20-40%", label: "توفير المياه" },
        s2: { value: "95%", label: "دقة المستشعر" },
        s3: { value: "3-4 أشهر", label: "متوسط عائد الاستثمار" },
        s4: { value: "300 مليون درهم", label: "حجم السوق" },
      },
    },
    cta: {
      invest_title: "استثمر في مستقبل الزراعة",
      invest_lead: "انضم إلينا لثورة الزراعة المغربية وخلق تأثير دائم",
      contact_heading: "اتصل بنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      coords: "بيانات الاتصال",
      placeholders: {
        name: "اسمك",
        email: "votre@email.com",
        message: "أخبرنا باهتمامك...",
      },
      toast: {
        title: "تم إرسال الرسالة!",
        description: "سنتواصل معك في أقرب وقت.",
      },
      highlights: {
        roi: { title: "عائد جذاب", desc: "سوق بقيمة 300 مليون درهم ونمو سنوي 25%" },
        social: { title: "الأثر الاجتماعي", desc: "85% من المزارعين المغاربة متأثرون" },
        adv: { title: "ميزة تنافسية", desc: "أرخص بنسبة 50% مع تكنولوجيا أفضل" },
      },
      invest_info: {
        title: "معلومات الاستثمار",
        items: {
          s1: { title: "المبلغ المطلوب", value: "500 000 - 1 000 000 درهم" },
          s2: { title: "التقييم", value: "حسب المساهمة" },
          s3: { title: "العائد المتوقع", value: "200-300% على مدى 3 سنوات" },
          s4: { title: "استخدام الأموال", value: "الإنتاج، التسويق، البحث والتطوير" },
        },
      },
    },
    problem: {
      title: "المشكلة",
      subtitle: "يواجه المغرب أزمة مائية كبيرة تؤثر مباشرة على الزراعة",
      stats: {
        s1: { value: "-30%", label: "انخفاض الهطول", trend: "اتجاه مقلق" },
        s2: { value: "+40%", label: "زيادة استهلاك المياه", trend: "نمو مستمر" },
        s3: { value: "40-50%", label: "هدر في الري", trend: "خسارة كبيرة" },
        s4: { value: "85%", label: "صغار المزارعين", trend: "70% بدون وصول للتقنية" },
      },
      challenges_heading: "تحديات صغار المزارعين",
      challenges: {
        c1: "موارد مائية محدودة ومكلفة",
        c2: "أنظمة ري تقليدية غير فعّالة",
        c3: "نقص الوصول إلى التقنيات الحديثة (70%)",
        c4: "تكاليف طاقة عالية للضخ",
        c5: "صعوبات في رصد وتحسين المحاصيل",
      },
      environmental_heading: "الأثر البيئي",
      environmental: {
        e1: "استنزاف المياه الجوفية",
        e2: "تدهور التربة بسبب الإفراط في الري",
        e3: "انبعاثات ثاني أكسيد الكربون المرتبطة بضخ الديزل",
        e4: "الاستخدام المفرط للأسمدة والمبيدات",
        e5: "تهديد الأمن الغذائي الوطني",
      },
      banner: "حالة طوارئ مائية: التحرك الآن للحفاظ على مستقبل الزراعة",
    },
    impact: {
      title: "التأثير والنتائج",
      subtitle: "توفير قابل للقياس وتأثير بيئي إيجابي",
      savings: {
        heading: "التوفير لكل هكتار",
        categories: {
          water: "المياه",
          energy: "الطاقة",
          costs: "التكاليف",
        },
      },
      legend: { before: "قبل", after: "بعد" },
      environmental: {
        heading: "الأثر البيئي",
        e1: "انخفاض CO2",
        e2: "المياه المحفوظة",
        e3: "الإنتاجية",
      },
      metrics: {
        heading: "الفوائد الرئيسية",
        m1: { label: "تقليل استهلاك المياه" },
        m2: { label: "توفير الطاقة" },
        m3: { label: "خفض انبعاثات CO2" },
        m4: { label: "زيادة الإنتاجية" },
      },
  },
    roadmap: {
      title: "خريطة الطريق",
      subtitle: "المعالم المخطط لها",
      phases: {
        p1: {
          week: "الأسبوع 1-2",
          title: "النموذج الأولي والتصميم",
          tasks: {
            t1: "بنية النظام الكاملة",
            t2: "اختيار المكونات المثلى",
            t3: "تطوير تطبيق النموذج الأولي",
            t4: "اختبارات الحساسات الفردية",
          },
        },
        p2: {
          week: "الأسبوع 3-4",
          title: "النموذج الفيزيائي",
          tasks: {
            t1: "تجميع الأجهزة الكامل",
            t2: "دمج ESP32 والحساسات",
            t3: "تركيب نظام الطاقة الشمسية",
            t4: "اختبارات في ظروف ميدانية",
          },
        },
        p3: {
          week: "الأسبوع 5-6",
          title: "النسخة التجريبية",
          tasks: {
            t1: "نشر مع 5 مزارعين",
            t2: "جمع ملاحظات المستخدمين",
            t3: "تعديلات واجهة المستخدم/التجربة",
            t4: "تحسين خوارزميات الذكاء الاصطناعي",
          },
        },
        p4: {
          week: "الأسبوع 7-8",
          title: "النسخة النهائية",
          tasks: {
            t1: "تصحيح الأخطاء المكتشفة",
            t2: "توثيق كامل",
            t3: "تدريب المستخدمين",
            t4: "الإطلاق التجاري",
          },
        },
      },
      progress: { title: "التقدم العام", value: "75%" },
      timeline: ["الربع 1 2025 — نموذج أولي", "الربع 2 2025 — تجريب ميداني", "الربع 3 2025 — توسع", "الربع 4 2025 — إطلاق"],
    },
  architecture: {
      title: "البنية التقنية",
      subtitle: "بنية قوية ومرنة",
      hardware: {
        heading: "المجموعة المادية",
        items: {
          h1: { layer: "الحساسات", tech: "YL-69، DHT11، DS18B20" },
          h2: { layer: "المتحكم", tech: "ESP32 (واي فاي، بلوتوث)" },
          h3: { layer: "الطاقة", tech: "لوحة شمسية 20W + بطارية 12V" },
          h4: { layer: "المشغلات", tech: "ريليهات 5V، صمامات كهربائية" },
        },
      },
      software: {
        heading: "المجموعة البرمجية",
        items: {
          s1: { layer: "الخادم (Backend)", tech: "Node.js، Python (تعلم آلي)" },
          s2: { layer: "قاعدة البيانات", tech: "MongoDB، InfluxDB" },
          s3: { layer: "الواجهة", tech: "React، PWA" },
          s4: { layer: "السحابة", tech: "AWS IoT / Firebase" },
        },
      },
      connectivity: {
        heading: "خيارات الاتصال",
        c1: { title: "واي فاي", desc: "اتصال بالإنترنت للمراقبة عن بُعد" },
        c2: { title: "بلوتوث", desc: "تحكم محلي واتصالات قصيرة المدى" },
        c3: { title: "رسائل SMS", desc: "تنبيهات في الوقت الحقيقي عبر بوابة الرسائل" },
        c4: { title: "وضع عدم الاتصال", desc: "تشغيل مستقل عند عدم توفر الشبكة" },
      },
    
    },
    solution: {
      title: "الحل",
      subtitle: "نظام متكامل منخفض التكلفة ومتكيف مع السياق المغربي",
      image_alt: "حساسات إنترنت الأشياء ومعدات ميدانية مدعومة بالطاقة الشمسية",
      hardware_heading: "المكونات المادية",
      hardware: {
        h1: { name: "YL-69", desc: "مستشعر رطوبة التربة" },
        h2: { name: "DHT11", desc: "درجة حرارة ورطوبة الهواء" },
        h3: { name: "DS18B20", desc: "درجة حرارة التربة" },
        h4: { name: "ESP32", desc: "متحكم دقيق لإنترنت الأشياء" },
        h5: { name: "طاقة شمسية", desc: "لوحة + بطارية" },
      },
      app_heading: "التطبيق الذكي",
      app: {
        f1: { title: "تطبيق ويب/موبايل", desc: "واجهة متعددة اللغات وبديهية" },
        f2: { title: "إشعارات SMS", desc: "إشعارات في الوقت الحقيقي" },
        f3: { title: "مراقبة", desc: "متابعة درجة الحرارة والرطوبة" },
        f4: { title: "تحكم في الري", desc: "جدولة تلقائية" },
      },
      flow: { s1: "الحساسات", s2: "ESP32", s3: "السحابة", s4: "التطبيق" },
    },
    objectives: {
      title: "أهدافنا",
      subtitle: "حل شامل لثورة الزراعة في المغرب",
      items: {
        s1: { title: "دقة قصوى", description: "قياس رطوبة التربة في الوقت الحقيقي بدقة 95% من أجل ري أمثل" },
        s2: { title: "توفير كبير", description: "تقليل استهلاك المياه بنسبة 20-40% وخفض استهلاك الطاقة بنسبة 30% بفضل الري الذكي" },
        s3: { title: "سهولة الوصول", description: "تطبيق متعدد اللغات (العربية، الأمازيغية، الدارجة) مع إشعارات SMS وصوتية لجميع المزارعين" },
        s4: { title: "الذكاء الاصطناعي", description: "توصيات تنبؤية بدقة 85% قائمًة على بيانات الطقس والسجلات التاريخية" },
      },
      metrics: {
        m1: { value: "95%", label: "دقة المستشعر", desc: "قياسات موثوقة" },
        m2: { value: "20-40%", label: "توفير المياه", desc: "تقليل الاستهلاك" },
        m3: { value: "85%", label: "دقة الذكاء الاصطناعي", desc: "توصيات قابلة للتنفيذ" },
      },
    },
    results: {
      title: "النتائج المقاسة",
      subtitle: "تأثيرات ملموسة وقابلة للقياس للزراعة المغربية",
      metrics: {
        m1: { label: "توفير المياه", trend: "مقارنة بالأساليب التقليدية" },
        m2: { label: "خفض الطاقة", trend: "بفضل الطاقة الشمسية" },
        m3: { label: "الإنتاجية", trend: "زيادة متوسط المحصول" },
      },
      cards: {
        environment: {
          title: "الأثر البيئي",
          i1: "خفض CO2: -25% لكل هكتار",
          i2: "حفظ المياه الجوفية",
          i3: "الحاجة إلى سماد أقل",
          i4: "زراعة مستدامة",
        },
        social: {
          title: "الأثر الاجتماعي",
          i1: "سهولة الوصول للجميع",
          i2: "التدريب والتمكين",
          i3: "خلق وظائف تقنية",
          i4: "الأمن الغذائي",
        },
        economic: {
          title: "الأثر الاقتصادي",
          i1: "عائد الاستثمار: 3-4 أشهر",
          i2: "إيرادات زراعية +15-25%",
          i3: "خفض التكاليف التشغيلية",
          i4: "زيادة التنافسية",
        },
      },
      success: {
        title: "شهادة تجريبية",
  quote: "\"بفضل إجريما خفضت فاتورة المياه بنسبة 40% وطماطمي أفضل من أي وقت مضى. تطبيق الدارجة سهل الاستخدام حتى لغير الفنيين.\"",
        author: "محمد، مزارع في سوس ماسة",
        meta: "5 هكتارات من الإنتاج الخضري",
      },
    },

    conclusion: {
      title: "الخلاصة",
      subtitle: "ملخص والخطوات التالية",
      paragraphs: {
  p1: "يوفر إجريما حلاً ميسور التكلفة وقابلًا للتوسع لمشكلات ندرة المياه والإنتاجية التي يواجهها المزارعون المغاربة.",
        p2: "مع عائد استثمار سريع، ودعم لغات متعددة واستقلالية بالطاقة الشمسية، صُمم النظام لاعتماد واسع من صغار المزارعين إلى المزارع التجارية.",
        p3: "الخطوات التالية: تنفيذ تجارب ميدانية، شراكات تصنيع محلية، وتحسينات مستمرة مدفوعة بالبيانات.",
      },
      cta: { contact: "اتصل بنا للانضمام للتجربة", invest: "اطلب حزمة استثمار" },
      cards: {
        results: { title: "النتائج المقاسة", description: "توفيرات ملموسة وفوائد بيئية مثبتة في التجارب" },
        solution: { title: "حلنا", description: "نظام منخفض التكلفة، مدعوم بالشمس ومتعدد اللغات لصغار المزارعين" },
        problem: { title: "التحدي", description: "معالجة ندرة المياه وعدم كفاءة أنظمة الري" },
      },
      vision: {
        heading: "رؤيتنا",
        lead: "نشر الري الدقيق الميسور التكلفة عبر المغرب",
        stats: {
          s1: { value: "95%", label: "دقة المستشعر" },
          s2: { value: "20-40%", label: "توفير المياه" },
          s3: { value: "3-4 أشهر", label: "متوسط عائد الاستثمار" },
        },
      },
    },
    targetUsers: {
      title: "المستخدمون المستهدفون",
      subtitle: "حلول مخصصة لكل نوع من المزارعين",
      small: {
        heading: "صغار المزارعين",
        lead: "85% من الوحدات الفلاحية في المغرب",
        features: {
          f1: { strong: "طقم Plug & Play:", text: "تركيب بسيط في 30 دقيقة" },
          f2: { strong: "تنبيهات SMS:", text: "إشعارات حتى بدون هاتف ذكي" },
          f3: { strong: "دعم صوتي:", text: "إرشادات بالدارجة" },
          f4: { strong: "عائد استثمار سريع:", text: "عائد الاستثمار في 3-4 أشهر" },
        },
        price: "السعر التقديري: 2,500–3,000 درهم",
      },
      large: {
        heading: "المزارعون الكبار",
        lead: "مزارع صناعية",
        features: {
          f1: { strong: "إدارة متعددة القطع:", text: "عرض شامل" },
          f2: { strong: "لوحة متقدمة:", text: "تحليلات وتقارير مفصلة" },
          f3: { strong: "ذكاء تنبؤي:", text: "توصيات شخصية" },
          f4: { strong: "تكامل API:", text: "متوافق مع أنظمتكم" },
        },
        footer: "حل مخصص مع دعم متميز",
      },
    },
  budget: {
      title: "الميزانية والعائد",
      subtitle: "استثمار مربح خلال أشهر",
      items: {
        sensors: "أجهزة الاستشعار",
        esp: "ESP32 والملحقات",
        solar: "الخلايا الشمسية والبطارية",
        relays: "المرابط والصمامات",
        enclosure: "الغطاء والكوابل",
      },
      items_desc: {
        sensors: "أجهزة قياس رطوبة التربة ودرجة الحرارة",
        esp: "متَحكم ESP32 والملحقات",
        solar: "لوحة شمسية وحزمة بطارية",
        relays: "لوحة ريليهات للتحكم في الصمامات",
        enclosure: "صندوق محمي بمعيار IP67",
      },
      prototype: {
        heading: "تكلفة النموذج الأولي",
        totalLabel: "إجمالي تكلفة النموذج الأولي",
      },
      roi: {
        heading: "العائد على الاستثمار",
        savingsHeading: "التوفير الشهري (هكتار واحد)",
        savings: {
          water: { label: "الماء:", value: "300-400 درهم" },
          energy: { label: "الطاقة:", value: "150-200 درهم" },
          productivity: { label: "الإنتاجية (+20%):", value: "500-800 درهم" },
          totalLabel: "الإجمالي الشهري:",
          totalValue: "950-1400 درهم",
        },
        reachedIn: "يُستعاد الاستثمار خلال",
        months: "3-4 أشهر",
        forArea: "لهكتار واحد",
      },
      price: {
        estimated: "سعر البيع المقدر:",
        estimatedValue: "2 500-3 000 درهم",
        comparison: "أرخص بنسبة 40-50% من المنافسين",
      },
      comparison: {
        title: "المقارنة مع المنافسين",
  headers: { criterion: "المعيار", our: "إجريما", competitor: "المنافس" },
        rows: {
          price: { criterion: "السعر", our: "2 500-3 000 درهم", competitor: "5 000-8 000 درهم" },
          multilang: { criterion: "دعم لغات متعددة", our: "✓ الدارجة مدعومة", competitor: "✗" },
          solar: { criterion: "مدعوم بالطاقة الشمسية", our: "✓ مضمّن", competitor: "خيار مدفوع" },
          ai: { criterion: "الذكاء التنبؤي", our: "✓ دقة 85%", competitor: "أساسي" },
          installation: { criterion: "التركيب", our: "توصيل وتشغيل", competitor: "يتطلب فني" },
        },
      },
    },

    advantages: {
      title: "المزايا التنافسية",
      subtitle: "حل متكامل يتميز في كل الجوانب",
      items: {
        s1: { title: "تنبؤات بالذكاء الاصطناعي 85%", description: "توصيات ذكية مبنية على البيانات التاريخية والطقس لتحسين المحاصيل" },
        s2: { title: "تحليل اقتصادي", description: "تتبع مفصل للتكاليف والفوائد لكل حقل لزيادة الربحية" },
        s3: { title: "منخفض التكلفة وسهل التركيب", description: "تركيب سهل دون خبرة تقنية، وقابل للاستخدام من قبل جميع المزارعين" },
        s4: { title: "سجل الإنتاج", description: "سجل كامل لجميع أنشطة الزراعة لمتابعة مثلى" },
        s5: { title: "مدعوم بالطاقة الشمسية", description: "استقلالية طاقية كاملة بفضل الألواح والبطاريات" },
        s6: { title: "دعم متعدد اللغات", description: "واجهة بالعربية، الأمازيغية والدارجة مع إشعارات صوتية" },
      },
      badge: "ضمان رضا 30 يوم • دعم واتساب • توثيق بالدارجة",
    },
    footer: {
      copyright: "© 2025 إجريما المغرب. كل الحقوق محفوظة.",
    },
  },
};

export default translations;
