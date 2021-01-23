const faker = require("faker"); // for dummy Data
var md5 = require("md5");
const pool = require("./config");
const gender = ["male", "female"];
const boolean = ["true", "false"];
const level = [1, 2, 3, 4, 5];
const listingTime = ["part time", "full time"];
const status = ["rejected", "wait", "accepted"];
const duration = ["years", "monthes"];
const degrees = ["Bachelor", "Diploma", "UnderGraduated", "Master", "PHD"];
const grades = ["A+", "A ", "A-", "B+", "B ", "B-", "C+", "C ", "C-", "C-"];
const majors = [
  "Athletic",
  "Training",
  "Biology",
  "Chemistry",
  "Environmental Science",
  "Exercise Sci/Kinesiology",
  "Fisheries and Wildlife",
  "Food Science",
  "Forest Management",
  "Marine Science",
  "Nursing (RN/BSN)",
  "Organic/Urban Farming",
  "Pharmacy",
  "Physicians Assistant",
  "Pre - Dental",
  "Pre - Medical",
  "Pre - Veterinary Medicine",
  "Visual & Performance Arts",
  "Apparel/Textile Design",
  "Architecture",
  "Dance",
  "Film/Broadcast",
  "Fine/Studio Art",
  "Graphic Design",
  "Industrial Design",
  "Interior Design",
  "Landscape Architecture",
  "Music",
  "Theatre",
  "Urban Planning",
  "Video Game Design",
  "Web Design/Digital Media",
  "Liberal Arts",
  "Arts Management",
  "Education",
  "Emergency Management",
  "English/Writing",
  "Equine Science/Mgmt",
  "Family & Child Science",
  "History",
  "Journalism",
  "Language Studies",
  "Non-Profit Management",
  "Parks and Recreation Management",
  "Peace/Conflict Studies",
  "Philosophy",
  "Political Science",
  "Psychology / Sociology",
  "Sports Turf/Golf Mgmt",
  "Women/Gender Studies",
  "Engineering & Technology",
  "Aerospace Engineering",
  "Astronomy / Physics",
  "Aviation/Aeronautics",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science",
  "Cyber Security",
  "Electrical Engineering",
  "Energy Science",
  "Industrial Engineering",
  "Industrial Technology",
  "Materials Science",
  "Mathematics",
  "Mechanical Engineering",
  "Accounting - General",
  "Business - General",
  "Construction Management",
  "Data Science - Analytics",
  "Economics (National + Global)",
  "Finance",
  "Hospitality Management",
  "Human Resources Mgmt",
  "Information Systems (MIS)",
  "Insurance & Risk Mgmt",
  "Marketing / Advertising",
  "Public Health Administration",
  "Sport Management",
  "Supply Chain Mgmt (Logistics)",
];
const skills = [
  "QRC",
  "UI/UX",
  "Android",
  "Mobile Development",
  "QA",
  "Star-CCM+",
  "OLEDs",
  "CGL",
  "Rational DOORS",
  "FDS",
  "eZ Publish",
  "Google Webmaster Tools",
  "Invoicing",
  "Consultant",
  "UFC",
  "Tier II Reporting",
  "WS-I",
  "Telecommunications",
  "NMS",
  "French",
  "Wwise",
  "RS/6000",
  "ebXML",
  "Zend",
  "Fertilizers",
  "Job Search Strategies",
  "HMDA",
  "Oceanography",
  "GUI development",
  "NSA-IAM",
  "Mystery Shopping",
  "Luminex",
  "Curriculum Development",
  "WS",
  "Kontakt",
  "Animal Husbandry",
  "Lead Generation",
  "Rapid Prototyping",
  "Octave",
  "Multilingual",
  "Volleyball",
  "TUPE",
  "RSA SecurID",
  "Start-ups",
  "WLI",
  "QRC",
  "Analysis",
  "Psychotherapy",
  "Ukrainian",
  "TUPE",
  "Value Engineering",
  "Glasses",
  "Durable Goods",
  "LSL",
  "Kondor+",
  "European Law",
  "Recruitment Advertising",
  "Basel II",
  "HST",
  "TUPE",
  "JTA",
  "DGFT",
  "ETFs",
  "MDL",
  "Psychology",
  "Hazard Recognition",
  "Luxury Travel",
  "White Box Testing",
  "NMR Spectroscopy",
  "Systems Engineering",
  "Turbines",
  "Financial Services",
  "EBPP",
  "IoC",
  "TS",
  "Akka",
  "LabWindows/CVI",
  "SQL Server Management Studio",
  "Gold",
  "Events Coordination",
  "Eagle PCB",
  "Website Development",
  "NLRB",
  "Teaching Writing",
  "Yacht Deliveries",
  "BPF",
  "ABR",
  "Brokers",
  "XRY",
  "Civil Litigation",
  "AU",
  "Illustration",
  "iFix",
  "Pymol",
  "IHE",
  "Graphics",
  "NX Unigraphics",
  "Fertility",
  "Fashion Blogging",
  "DDoS",
  "Omnet++",
  "SAP",
  "SQL Tuning",
  "NHS",
  "Packaging",
  "Video Production",
  "IVIG",
  "Market Planning",
  "SPSS",
  "Government",
  "Cash Flow",
  "DOS",
  "RMA",
  "SWIFT Messaging",
  "EPANET",
  "SDLX",
  "Oil &amp; Gas Exploration",
  "Self-esteem",
  "Lutron",
  "Employee Relations",
  "PDS Frameworks",
  "xSeries",
  "Java",
  "JProbe",
  "PMI",
  "Private Duty",
  "Corporate Communications",
  "CBCP",
  "Underscore.js",
  "Omegamon",
  "Interior Design",
  "Swing",
  "IMS DB/DC",
  "Onshore",
  "SDA",
  "Emerging Markets",
  "PDE",
  "Social Services",
  "CISSP",
  "Olefins",
  "Billing Systems",
  "JRockit",
  "Nitric Oxide",
  "JDK",
  "XML Schema",
  "Medical-Surgical",
  "Construction",
  "EPA",
  "Data Analysis",
  "TQM",
  "ODBC",
  "ERDAS Imagine",
  "Soft Skills",
  "ICEM CFD",
  "IGCC",
  "vShield",
  "Zymography",
  "Economics",
  "Observation",
  "PS3",
  "Play-by-play",
  "High Yield",
  "TPL",
  "TFTP",
  "Ionic Liquids",
  "UART",
  "Internal Controls",
  "Revenue Cycle Management",
  "FCIP",
  "DFMEA",
  "QSA",
  "Customer Engagement",
  "Avionics",
  "Multithreading",
  "Vtiger",
  "Outside Sales",
  "Biotechnology",
  "Occupational Health",
  "Jiu-Jitsu",
  "Screening",
  "GNMA",
  "Cisco VoIP",
  "Product Marketing",
  "OH&amp;S",
  "French",
  "Lyric Soprano",
  "SEP IRA",
  "MMC",
  "CFDesign",
  "Development Economics",
  "Kaledo",
  "Art Direction",
  "Glaucoma",
  "OmniGraffle",
  "Simulations",
  "UFC",
  "GFAS",
  "SFR",
  "MBCI",
  "HR Software",
  "Phase II Subsurface Investigations",
  "IPS",
  "SFR Certified",
  "Objective-C",
  "NLP",
  "Emergency Room",
  "Upstream",
  "Java Enterprise Edition",
  "LDAP",
  "Xen",
  "Brokerage",
  "QMF for Windows",
  "SRED",
  "GT Strudl",
  "FTSE 100",
  "Russian",
  "Microsoft MVP",
  "AHP",
  "Inventory Control",
  "Class Actions",
  "HFM",
  "Vectorworks",
  "iPad Development",
  "DTC",
  "GL",
  "OAT",
  "LCM",
  "TPM",
  "RTM",
  "Platform LSF",
  "X-ray",
  "Solar PV",
  "Utility Industry",
  "JAX-WS",
  "PKMS",
  "Cycling",
  "User Experience",
  "VA Loans",
  "QC 9.2",
  "EWSD",
  "Ultrasonic Testing",
  "RSA Security",
  "SAP OM",
  "CI",
  "DCOM",
  "Gold",
  "Ice Hockey",
  "MGCP",
  "Certified DDI Facilitator",
  "Vsftpd",
  "Interior Architecture",
  "Operations Management",
  "Horticulture",
  "Start-ups",
  "ODI",
  "HCV",
  "Cloud Computing IaaS",
  "Small Business Online Marketing",
  "Twilio",
  "Defect Life Cycle",
  "Brand Awareness",
  "WSPG",
  "Kundalini",
  "AWS CWI",
  "Plant Identification",
  "WGA",
  "Slope Stability",
  "Google Apps",
  "CM Synergy",
  "JNI",
  "System Architecture",
  "Sports Play-by-play",
  "UK GAAP",
  "JCL",
  "WFA",
  "Public Administration",
  "VLSI CAD",
  "Not for Profit",
  "Gmail",
  "Test Driven Development",
  "TFT",
  "Custom CMS Development",
  "Security",
  "NDMP",
  "Karate",
  "Yeast two-hybrid",
  "LDI",
  "BGA",
  "GST",
  "VNA",
  "Vaccines",
  "SharePoint Designer",
  "Circuit Design",
  "DCM",
  "OTM",
  "FTC",
  "Petroleum Geology",
  "UPS Systems",
  "US Tax",
  "ASIC",
  "Warehousing",
  "Angel LMS",
  "Raw Materials",
  "MCAD",
  "DNA methylation",
  "IXIA",
  "First Aid",
  "JGrasp",
  "Automotive",
  "Sybase IQ",
  "Radio Broadcasting",
  "Lyris",
  "Executive Coaching",
  "Image Manipulation",
  "PPBES",
  "KPO",
  "Quantitative Finance",
  "LTL",
  "SFR Certified",
  "Operations Management",
  "CNAS",
  "KVM Switches",
  "Urban Infill",
  "Aerial Silks",
  "Sports Medicine",
  "Jing",
  "DNA Repair",
  "Lustre",
  "Globalization",
  "Typography",
  "Feature Articles",
  "XOG",
  "NoSQL",
  "E-zines",
  "Nginx",
  "Financial Mgmt",
  "VMS",
  "360 Feedback",
  "Utility Mapping",
  "HFM",
  "Skin Care Products",
  "Pension Funds",
  "Performing Arts",
  "SDK",
  "iOS Development",
  "JSA",
  "BTS Installation",
  "Lubrication",
  "BPO",
  "Canon XL2",
  "PCIe",
  "Zillow",
  "VMware vCenter",
  "Team Mgmt",
  "DNS Administration",
  "EE4",
  "Air Force",
  "RMP",
  "Kundalini Yoga",
  "FCIP",
  "DFS",
  "Utility Construction",
  "US GAAP",
  "SSL Certificates",
  "FDS",
  "Occupational Rehabilitation",
  "Oil &amp; Gas Services",
  "Global Custody",
  "Urban Regeneration",
  "IEX Total View",
  "General Insurance",
  "Jerseys",
  "Project Oversight",
  "Eclipse RCP",
  "WGA",
  "MDS 3.0",
  "RTCP",
  "LPT",
  "FCAPS",
  "KDE",
  "HCM Processes &amp; Forms",
  "OLT",
  "MPEG2",
  "Olfaction",
  "Apache",
  "Sound FX Editing",
  "Sea Kayaking",
  "OTS",
  "Public Safety",
  "Skin Care",
  "Animation",
  "Product Marketing",
  "MRI",
  "Type Rating",
  "Aesthetic Surgery",
  "XLSTAT",
  "Psychotherapy",
  "RFC",
  "Video over IP",
  "Oasys",
  "Energy Efficiency",
  "CMMS",
  "Federal Government",
  "iWay",
  "Unified Communications",
  "Estimates",
  "Rheumatoid Arthritis",
  "Hospital Sales",
  "Energy Efficiency",
  "Lunix",
  "European Markets",
  "Yacc",
  "Twitter Marketing",
  "Access Control",
  "DGGE",
  "Lubricants",
  "Stage Make-up",
  "Yeast two-hybrid",
  "American Sign Language",
  "Electronic Payments",
  "GSA Schedules",
  "HR Management",
  "Financial Analysis",
  "eGate",
  "Constructive Feedback",
  "PDL",
  "Utility Construction",
  "Grassroots",
  "Usability Engineering",
  "Medical Imaging",
  "Guitar",
  "Creative Direction",
  "RED MX",
  "Civil Aviation",
  "VDSL",
  "Ocular Disease",
  "General Surgery",
  "EU Law",
  "Slackware",
  "Go",
  "Utility Construction",
  "European Languages",
  "IUI",
  "Gas",
  "Yeast",
  "Erosion",
  "Fund Accounting",
  "CME",
  "CBT",
  "Buyer Representation",
  "IO",
  "Csh",
  "XRY",
  "Aircraft Systems",
  "PFGE",
  "Accounts Receivable",
  "BGP",
  "CVaR",
  "IP",
  "Music Festivals",
  "Team Management",
  "Lightroom",
  "Hotels",
  "Pneumatics",
  "OEM negotiations",
  "Personal Development",
  "Solid Oxide Fuel Cells",
  "JSA",
  "FBO",
  "UML",
  "Benefits Negotiation",
  "Music Industry",
  "RBI",
  "FCoE",
  "CXF",
  "Sea Kayaking",
  "VCI",
  "Theory",
  "Wound Care",
  "Situational Awareness",
  "MFG-Pro",
  "Omniture",
  "KPI Implementation",
  "Medical Devices",
  "UltraTax",
  "CI",
  "Ultrasonic Testing",
  "Grassroots",
  "Project Bidding",
  "American Literature",
  "VRU",
  "TV News Production",
  "VSS",
  "OSHA Certified",
  "IEF",
  "Backbone.js",
  "Distribution Center Operations",
  "HR Project Management",
  "Maritime Operations",
  "Wildlife",
  "Cardiology",
  "Arbitration",
  "XForms",
  "Xero",
  "TSP",
  "WPF Development",
  "FTSE 100",
  "Audio Typing",
  "Wellness",
  "Fit-out",
  "IBM Certified",
  "Shrinkage",
  "Behavioral Health",
  "Quality by Design",
  "Sustainability",
  "Roofers",
  "ERISA",
  "Analytics",
  "RSA Security",
  "Windows XP",
  "JTAPI",
  "Customer Engagement",
  "Global Marketing",
  "CNG",
  "21 CFR",
  "ILOG",
  "Yardi Property Management",
  "Vi",
  "PTF",
  "PFEP",
  "DHCP",
  "CQT",
  "GSA Schedules",
  "IDL",
  "User Acceptance Testing",
  "AOP",
  "Conservation Issues",
  "WLI",
  "CTRM",
  "NCIE",
  "Yeast two-hybrid",
  "GI",
  "Mutual Funds",
  "XLSTAT",
  "Twitter Marketing",
  "Image Editing",
  "PDCA",
  "DxDesigner",
  "PVS",
  "Rubber",
  "SaaS",
  "IOS-XR",
  "DC-10",
  "DLC",
  "QINSy",
  "Training Delivery",
  "Architectural Illustration",
  "Web TV",
  "Channel Partners",
  "PMD",
  "Electrical Engineering",
  "UFC",
  "RF Circuits",
  "OLEDs",
  "Digital Media",
  "Software Documentation",
  "Press Kits",
  "Allergic Rhinitis",
  "Workforce Management",
  "Smarty",
  "KT",
  "GSM",
  "Kaseya",
  "GUI development",
  "Zen Shiatsu",
  "SSP",
  "Weapons",
  "Oxy-acetylene",
  "Channel Partners",
  "NDS",
  "Financial Analysis",
  "LPN",
  "iHotelier",
  "HBV",
  "Public Affairs",
  "Kantar",
  "EOS",
  "Human Factors",
  "JTA",
  "Oil Painting",
  "Physicians",
  "ABAP",
  "RDBMS",
  "Erwin",
  "Market Planning",
  "NCBI",
  "Numerical Simulation",
  "Asset Allocation",
  "XBR",
  "Genetics",
  "VMware Player",
  "DFSORT",
  "UIX",
  "Pigments",
  "TPD",
  "Ocular Disease",
  "Umbraco",
  "Eaglesoft",
  "Yeast",
  "Non-profit Board Development",
  "Outlook",
  "PWS",
  "Healthy Eating",
  "NSE",
  "Eze Castle",
  "Steam Turbines",
  "OAM",
  "Youth Entrepreneurship",
  "ATR-FTIR",
  "Gynecology",
  "Ambulatory",
  "Petroleum",
  "CSI",
  "RCA",
  "NAS",
  "Lutron",
  "Eyebrow",
  "TBS",
  "Loss Prevention",
  "QRM",
  "Utilization Review",
  "NHS",
  "Client Services",
  "Digital Strategy",
  "Ultrasonic Testing",
  "GNMA",
  "FCPA",
  "RF Test",
  "NHibernate",
  "Rugby",
  "Switchboard",
  "RFP Design",
  "VAS",
  "Workshop Facilitation",
  "SQL PL",
  "PFMEA",
  "CMS-1500",
  "CAESAR II",
  "AV Integration",
  "PMR",
  "Management by Objectives",
  "MCMS",
  "xPression",
  "Youth Work",
  "DPF",
  "Hoshin Kanri",
  "TCD",
  "FCE",
  "Food Quality",
  "XP/Vista/7",
  "Yamaha Digital Consoles",
  "Contemporary Art",
  "DLP",
  "DNSSEC",
  "FDA GMP",
  "Chronic Illness",
  "TTD",
  "Youth Entrepreneurship",
  "ArcGIS",
  "Nagios",
  "VCI",
  "Updos",
  "Youth Engagement",
  "Tortoise CVS",
  "Family Law",
  "Waxing",
  "DFSS",
  "DNA fingerprinting",
  "Cisco UCS",
  "Information Assurance",
  "Tutoring",
  "Utility Billing",
  "Operating Systems",
  "NGL",
  "HW Design",
  "pgAdmin",
  "Apache ZooKeeper",
  "Music Industry",
  "Clerical Skills",
  "JTest",
  "cXML",
  "WPC",
  "Nintex",
  "New Product Ideas",
  "PVM",
  "MPages",
  "Database Administration",
  "Cleaning Validation",
  "LS9",
  "Retail",
  "Vector NTI",
  "UK Law",
  "Numerical Simulation",
  "Xytech",
  "Materials Science",
  "TBS",
  "RFQ Development",
  "Hazard Recognition",
  "FCRA",
  "CGI",
  "Educational Outreach",
  "Materials Science",
  "GCC",
  "Citrix XenApp",
  "Mobile Devices",
  "Publications",
  "IT Outsourcing",
  "DBAccess",
  "Ebay Sales",
  "EIS",
  "Liability",
  "Nginx",
  "Hand-drawn Typography",
  "Job Scheduling",
  "OLED",
  "Db4o",
  "Health Economics",
  "Order Picking",
  "MMC",
  "Lyricist",
  "FW",
  "Buyers",
  "DPF",
  "Motivational Interviewing",
  "SEP IRA",
  "Private Piloting",
  "GGY Axis",
  "NT Backup",
  "Alternative Dispute Resolution",
  "Mentoring",
  "Curriculum Design",
  "QAC",
  "PSpice",
  "RDBMS",
  "SQL PL",
  "UART",
  "Commercial Real Estate",
  "PTS",
  "TPX",
  "Process Scheduler",
  "Umbrellas",
  "International Human Rights",
  "RV",
  "Strategy",
  "SNMP",
  "TCLEOSE Instruction",
  "NIR Spectroscopy",
  "DPR",
  "Illustrator",
  "ISO 13485",
  "Trade Shows",
  "MDOP",
  "Dbx",
  "DNA quantification",
  "Storytelling",
  "Judicial Review",
  "PWM",
  "Buyer&#39;s Agent",
  "3D Modeling",
  "Ksh",
  "Digital Printing",
  "HLR",
  "Vsftpd",
  "Hypnosis",
  "Multi-channel Marketing",
  "JSTOR",
  "GT-Power",
  "Alternative Energy",
  "IAD",
  "Sustainable Design",
  "Key Account Management",
  "Microsoft Exchange",
  "Agriculture",
  "CCTV",
  "MSS",
  "American Sign Language",
  "Power Plants",
  "Child Development",
  "OECD",
  "Testing",
  "3D Visualization",
  "Distributed Systems",
  "iOS Design",
  "Military Logistics",
  "Hibernate",
  "JCL",
  "Sony Vegas",
  "Teeth Whitening",
  "Electrical Troubleshooting",
  "RBAC",
  "DBI",
  "Cleaning Validation",
  "Internet Yellow Pages",
  "Pharmacy Benefit Management",
  "Data Entry",
  "Iptables",
  "NDC",
  "Economic Research",
  "IOS-XR",
  "IKB",
  "CNC Operation",
  "CBT",
  "PMO set-up",
  "Media Relations",
  "PMM",
  "cDNA",
  "DDNS",
  "Zillow",
  "Corporate Governance",
  "Organizational Effectiveness",
  "Attorneys",
  "XML Standards",
  "Project Bidding",
  "TTS",
  "Vacation",
  "UltraEdit",
  "DBVisualizer",
  "Lithium-ion Batteries",
  "KMS",
  "Menu Development",
  "AAAHC",
  "JDE CNC",
  "Petroleum Geology",
  "RTOS",
  "RVs",
  "CCNP Certified",
  "Real Estate",
  "Health Economics",
  "Windows XP",
  "Broadcast",
  "EZNews",
  "DDIC",
  "Contact Centers",
  "Dell KACE",
  "GPS",
  "CDL Class A",
  "CSV",
  "Music Education",
  "Yachting",
  "Zeta Potential",
  "RMAN",
  "VM",
  "Long-term Care",
  "Web Services",
  "MM modules",
  "Snowmobile",
  "Poka Yoke",
  "DNA methylation",
  "Iron",
  "Site Development",
  "HP Networking",
  "IELTS",
  "Entity Framework",
  "DoD",
  "Construction",
  "Professional Liability",
  "Hyper-V",
  "Avaya IP Telephony",
  "LMDS",
  "EOC",
  "Microsoft SQL Server",
  "UK Employment Law",
  "FMEA",
  "Working Abroad",
  "Drug Discovery",
  "Earthquake Engineering",
  "HSM",
  "Axis2",
  "Credit",
  "Close Protection",
  "DMZ",
  "Water Quality",
  "Ocean Transportation",
  "KXEN",
  "PJM",
  "MPBN",
  "Notary Public",
  "Wicklander-Zulawski Interview &amp; Interrogation",
  "Construction Drawings",
  "Japanese Language Proficiency Test",
  "Historic Preservation",
  "Minority Owned",
  "Yields",
  "Abstracting",
  "PC building",
  "Airline Management",
  "AV Integration",
  "ZBrush",
  "Working With Children",
  "Test Planning",
  "Java Applets",
  "BDC",
  "Video Games",
  "Tax Law",
  "CPCU",
  "Fitness",
  "ODC",
  "Corporate Tax",
  "Klocwork",
  "Mobile Marketing",
  "BSF",
  "Lumion",
  "CVaR",
  "Outsourcing",
  "HBOC",
  "Agarose Gel Electrophoresis",
  "Cybercrime",
  "Cost Efficiency",
  "CCIM",
  "Basel III",
  "Youth Engagement",
  "Football",
  "Vacation Homes",
  "UK Corporation Tax",
  "Participant Observation",
  "Machine Knitting",
  "Wound Care",
  "Budgeting",
  "Djbdns",
  "IGOR Pro",
  "Pylons",
  "Oilfield",
  "Myers-Briggs Certified",
  "Supplier Evaluation",
  "Waste Management",
  "DLS",
  "Youth Mentoring",
  "MXG",
  "vShield",
  "OHSAS 18001",
  "Classroom",
  "Change Management",
  "Physical Security",
  "NDIS",
  "Jet Ski",
  "CBM",
  "Beer",
  "Non-Conforming",
  "AC Nielsen",
  "DQL",
  "ISO 14971",
  "UCCE",
  "Engineering Management",
  "RMI",
  "Nortel DMS",
  "CTRS",
  "Medical-Surgical",
  "NT Backup",
  "Occupational Therapy",
  "SFR Certified",
  "Organizational Design",
  "Wide Format Printing",
  "Agile Methodologies",
  "PIM-DM",
  "Ecological Restoration",
  "TFTP",
  "Non-profit Board Development",
  "EZ Labor",
  "Business Object",
  "Lucene",
  "IT Management",
  "TTCN-3",
  "Scripting",
  "National Accounts",
  "KBOX",
  "Urban Economics",
  "MLRO",
  "US Tax",
  "Economic Modeling",
  "WSE",
  "RPM",
  "AutoCAD Civil 3D",
  "DNS Management",
  "PWM",
  "GBA",
  "NDM",
  "Hyper-V",
  "BSR Advance",
  "Apache Pig",
  "Kompozer",
  "Document Imaging",
  "CVM",
  "Literature",
  "LDO",
  "DDE",
  "SAP BW",
  "KML",
  "Hair Care",
  "VPython",
  "Sarbanes-Oxley Act",
  "GPS Tracking",
  "Hardware Architecture",
  "Djembe",
  "RPO",
  "Eye Surgery",
  "Android",
  "Mobile Development",
  "UI/UX",
  "Project Manager",
  "Data Analysis",
  "Testing and QA",
  "System Analyst",
  "Web",
  "JS",
  "Marketing",
  "AI",
  "graphics",
  "Animation",
  "DataBase Managment",
  "Mobile Networks",
  "Networking",
  "Multimedia",
  "Digital Media",
];
const unis = [
  "Mahatma Gandhi Kashi Vidyapith ",
  "Brescia University",
  "Barchelona Uni",
  "Oxford University",
  " ,University of Chicagho",
  "Universidad Los Andes",
  "Sage Graduate School",
  "University of Milan - Bicocca",
  "National Institute of Industrial Engineering",
  "Universidad del Cauca",
  "Instituto Politأ©cnico de Castelo Branco",
  "City University of New York",
  "Lehman College",
  "Annamalai University",
  "Josai International University",
  "Waseda University",
  "Escuela de Arquitectura y Diseأ±o",
  "Gdynia Maritime Academy",
  "Christian-Albrechts-Universitأ¤t Kiel",
  "Institute of Textile Technology",
  "Marshall University",
  "Institut des hautes أ©tudes أ©conomiques et commerciales",
  "Universidad Domingo Savio",
  "Universitأ© de Ziguinchor",
  "Universidade de Ribeirأ£o Preto",
  "Universitأ© de Savoie",
  "Gandhi Institute of Technology and Managment",
  "Odessa National Marine University",
  "Shomal University",
  "Norton University",
  "Universidad Nacional del Sur",
  "Mount Carmel College of Nursing",
  "Universidade Federal de Minas Gerais",
  "Univesidade Agostinho Neto",
  "Central Institute of Fisheries Education",
  "University of Aberdeen",
  "International Academy of  Merchandising and Design Chicago",
  "University of Mustansiriyah",
  "Palm Beach State College",
  "Ufa State Institute of Arts",
  "University of Nebraska - Kearney",
  "Johnson Bible College",
  "Campbellsville College",
  "Ahwaz Jondishapour University of Medical Sciences",
  "Kyoto University of Foreign Studies",
  "Universidade Independente de Angola",
  "Fachhochschule Ludwigshafen",
  "Hochschule fأ¼r Wirtschaft",
  "Belgorod State Technical University",
  "University of Oregon",
  "Istanbul University",
  "Faculdade Integradas do Cearأ،",
  "Karakoram International University",
  "Universitas Kristen Petra",
  "Western University",
  "Universidad de Morأ³n",
  "Canadian College of Business & Computers",
  "Makanlal Chutur Vedi University",
  "Theatre Academy Finland",
  "Hebei University of Science and Technology",
  "University of Arkansas (System)",
  "Centro Universitأ،rio Barao de Maua",
  "Beijing Medical University",
  "The Federal Polytechnic Offa",
  "Fushun Petroleum University",
  "Ecole Franأ§aise d'Electronique et d'Informatique",
  "Ecole Nationale Supأ©rieure d'Electronique et de Radioelectricite de Bordeaux",
  "Moscow Technical University of Informatics and Communication",
  "Maharshi Dayanand Sarswati University Ajmer",
  "Sudan University for Science and Technology",
  "Australian Correspondence Schools",
  "Institut National des Tأ©lأ©communications",
  "Fachhochschule Braunschweig/Wolfenbأ¼ttel",
  "Tumkur University",
  "University of Medicine and Pharmacy of Bucharest",
  "Universitas Wijaya Kusuma Surabaya",
  "Universidad Nacional del Littoral",
  "Tshwane University of Technology",
  "Auburn University",
  "Narsee Monjee Institute of Management Studies",
  "Institute of Teachers Education",
  "Malay Language",
  "Medcenter One College of Nursing",
  "University of Michigan - Dearborn",
  "Changchun University of Technology",
  "Davenport College of Business",
  "Kalamazoo",
  "Visvesvaraya National Institute of Technology",
  "Universitأ© de Thiأ¨s",
  "Kolej Universiti Insaniah",
  "Hilbert College",
  "Universitأ© Protestante au Congo",
  "University of Technology Phnom Penh",
  "Jaramogi Oginga Odinga University of Science and Technology",
  "Vellore Institute of Technology",
  "Universidad Empresarial Mateo Kuljis",
  "University of Rajshahi",
  "Saurashtra University",
  "Inchon University",
  "Thomas College Maine",
  "Siberian State Transport University",
  "The Tulane University of New Orleans",
  "Balochistan University of Engineering and Technology Khuzdar",
  "Rheinische Fachhochschule Kأ¶ln",
  "Dalian Medical University",
  "Universitأ¤t Siegen",
  "Universitأ© de Cocody",
  "Lublin University of Technology ",
  "MIT",
  "Stanford",
  "IUG",
  "AUG",
  "AL-Mansoura University",
  "AL-Zagazig University",
  "Al-Quds University",
  "Beir Zeit University",
  "AlYarmouk University",
];

async function insertDegrees() {
  try {
    for (let i = 0; i < degrees.length; i++) {
      const insertS = await pool.query(
        "insert into degree values ($1) returning *",
        [degrees[i]]
      );
    }
  } catch (error) {
    console.log("there is an error in getting one test: ");
    console.error(error.message);
  }
}
// insertDegrees();

async function insertStudent() {
  try {
    const id = Date.now().toString();
    const email = id + "@gmail.com";
    // const schemaTest = pool.query("set search_path to 'jobPortal';");
    const insertS = pool.query(
      "insert into student (s_name, full_name, paswd, email, city, image, major, gender) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
      [
        id,
        faker.name.findName(),
        md5(faker.internet.password()),
        email,
        faker.address.city(),
        null,
        majors[Math.floor(Math.random() * majors.length)],
        gender[Math.floor(Math.random() * gender.length)],
      ]
    );
    console.log("std");
  } catch (error) {
    console.log("there is an error in inserting in student: ");
    console.error(error.message);
  }
}
insertStudent();
for (let i = 0; i < 10000; i++) {
  //671 //738
  insertStudent();
}

async function insertCompany() {
  try {
    const id = Date.now().toString();
    const email = id + "@gmail.com";
    // const schemaTest = pool.query("set search_path to 'jobPortal';");
    const insertC = await pool.query(
      "insert into company (c_name, company_name, paswd, email, city, icon, about, url, video) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
      [
        id,
        faker.company.companyName(),
        md5(faker.internet.password()),
        email,
        faker.address.city(),
        null,
        faker.lorem.paragraph(),
        faker.internet.url(),
        null,
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in company: ");
    console.error(error.message);
  }
}
// insertCompany();

async function insertListing() {
  try {
    const getCompanyId = await pool.query("select c_name from company");
    const companyIds = [];
    for (let i = 0; i < getCompanyId.rows.length; i++) {
      const element = getCompanyId.rows[i].c_name;
      companyIds.push(element);
    }
    for (let index = 0; index < 250000; index++) {
      const insertL = await pool.query(
        "insert into job_listing (listing_id, c_name, enabled, title, description, count, salary_range, p_f_time) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
        [
          Date.now().toString(),
          companyIds[Math.floor(Math.random() * companyIds.length)],
          boolean[Math.floor(Math.random() * boolean.length)],
          faker.lorem.sentence(),
          faker.lorem.paragraph(),
          1,
          Math.floor(Math.random() * (3000 - 100) + 100),
          listingTime[Math.floor(Math.random() * listingTime.length)],
        ]
      );
      console.log("listing");
    }
  } catch (error) {
    console.log("there is an error in inserting in listings: ");
    console.error(error.message);
  }
}
// insertListing();
// for (let i = 0; i < 50; i++) {
//   insertListing();
//   console.log("ha");
// }

async function insertViews() {
  try {
    const getListing = await pool.query(
      "select listing_id, c_name from job_listing"
    );
    const listingsWithCompany = [];
    for (let i = 0; i < getListing.rows.length; i++) {
      const listingId = getListing.rows[i].listing_id;
      const companyId = getListing.rows[i].c_name;
      listingsWithCompany.push([listingId, companyId]);
    }
    const RandomListing =
      listingsWithCompany[
        Math.floor(Math.random() * listingsWithCompany.length)
      ];
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }
    const insertV = await pool.query(
      "insert into views (s_name, listing_id, c_name, count) values ($1, $2, $3, $4) returning *",
      [
        studentIds[Math.floor(Math.random() * studentIds.length)],
        RandomListing[0],
        RandomListing[1],
        Math.floor(Math.random() * (20 - 1) + 1),
      ]
    );
  } catch (error) {
    console.log("there is an error in getting one test: ");
    console.error(error.message);
  }
}
// insertViews();

async function insertSkill() {
  try {
    const insertSkill = await pool.query(
      "insert into skill (skill_name) values ($1) returning *",
      [skills[Math.floor(Math.random() * skills.length)]]
    );
  } catch (error) {
    console.log("there is an error in inserting in needs: ");
    console.error(error.message);
  }
}

// insertSkill();

async function insertLevel() {
  try {
    const insertSkill = await pool.query(
      "insert into level (level_num) values (default) returning *",
      []
    );
  } catch (error) {
    console.log("there is an error in inserting in needs: ");
    console.error(error.message);
  }
}
// insertLevel();
// for (let i = 0; i < 5; i++) {
//   insertLevel();
// }

async function insertNeeds() {
  try {
    const getListing = await pool.query(
      "select listing_id, c_name from job_listing"
    );
    const listingsWithCompany = [];
    for (let i = 0; i < getListing.rows.length; i++) {
      const listingId = getListing.rows[i].listing_id;
      const companyId = getListing.rows[i].c_name;
      listingsWithCompany.push([listingId, companyId]);
    }
    const RandomListing =
      listingsWithCompany[
        Math.floor(Math.random() * listingsWithCompany.length)
      ];
    // console.log(RandomListing);
    const getSkills = await pool.query("select skill_name from skill");
    const SkillsName = [];
    for (let i = 0; i < getSkills.rows.length; i++) {
      const element = getSkills.rows[i].skill_name;
      SkillsName.push(element);
    }

    const insertL = await pool.query(
      "insert into needs (listing_id , c_name , skill_name  ,level_num) values ($1, $2, $3, $4) returning *",
      [
        RandomListing[0],
        RandomListing[1],
        SkillsName[Math.floor(Math.random() * SkillsName.length)],
        level[Math.floor(Math.random() * level.length)],
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in needs: ");
    console.error(error.message);
  }
}
// insertNeeds();

async function insertQualifiedIn() {
  try {
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }
    const getSkills = await pool.query("select skill_name from skill");
    const SkillsName = [];
    for (let i = 0; i < getSkills.rows.length; i++) {
      const element = getSkills.rows[i].skill_name;
      SkillsName.push(element);
    }

    const insertL = await pool.query(
      "insert into qualified_in (s_name, skill_name, level_num) values ($1, $2, $3) returning *",
      [
        studentIds[Math.floor(Math.random() * studentIds.length)],
        SkillsName[Math.floor(Math.random() * SkillsName.length)],
        level[Math.floor(Math.random() * level.length)],
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in qualified_in: ");
    console.error(error.message);
  }
}
// insertQualifiedIn();

async function insertApplication() {
  try {
    const getListing = await pool.query(
      "select listing_id, c_name from job_listing"
    );
    const listingsWithCompany = [];
    for (let i = 0; i < getListing.rows.length; i++) {
      const listingId = getListing.rows[i].listing_id;
      const companyId = getListing.rows[i].c_name;
      listingsWithCompany.push([listingId, companyId]);
    }
    for (let index = 0; index < 500000; index++) {
      const RandomListing =
        listingsWithCompany[
          Math.floor(Math.random() * listingsWithCompany.length)
        ];
      const insertV = await pool.query(
        "insert into application (app_id , listing_id , c_name , app_date  ,extra_info , status) values ($1, $2, $3, $4, $5, $6) returning *",
        [
          Date.now().toString(),
          RandomListing[0],
          RandomListing[1],
          faker.date.between("2019-01-01", "2020-06-14"),
          faker.lorem.sentences(),
          status[Math.floor(Math.random() * status.length)],
        ]
      );
      console.log("app");
    }
  } catch (error) {
    console.log("there is an error in inserting application: ");
    console.error(error.message);
  }
}
// insertApplication();

async function insertFills() {
  try {
    const getListing = await pool.query(
      "select listing_id, c_name, app_id from application"
    );
    const listingsWithCompanyWithApp = [];
    for (let i = 0; i < getListing.rows.length; i++) {
      const listingId = getListing.rows[i].listing_id;
      const companyId = getListing.rows[i].c_name;
      const appId = getListing.rows[i].app_id;
      listingsWithCompanyWithApp.push([listingId, companyId, appId]);
    }
    const RandomApplication =
      listingsWithCompanyWithApp[
        Math.floor(Math.random() * listingsWithCompanyWithApp.length)
      ];
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }

    const insertL = await pool.query(
      "insert into fills (listing_id, c_name, s_name, app_id) values ($1, $2, $3, $4) returning *",
      [
        RandomApplication[0],
        RandomApplication[1],
        studentIds[Math.floor(Math.random() * studentIds.length)],
        RandomApplication[2],
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in needs: ");
    console.error(error.message);
  }
}
// insertFills();

async function insertNotifications() {
  try {
    const getListing = await pool.query(
      "select listing_id, c_name, app_id, s_name from fills"
    );
    const listingsWithCompanyWithApp = [];
    for (let i = 0; i < getListing.rows.length; i++) {
      const listingId = getListing.rows[i].listing_id;
      const companyId = getListing.rows[i].c_name;
      const appId = getListing.rows[i].app_id;
      const studentId = getListing.rows[i].s_name;
      listingsWithCompanyWithApp.push([listingId, companyId, appId, studentId]);
    }
    const RandomApplication =
      listingsWithCompanyWithApp[
        Math.floor(Math.random() * listingsWithCompanyWithApp.length)
      ];

    const insertL = await pool.query(
      "insert into notification (n_id, listing_id, c_name, s_name, app_id, message, isread) values ($1, $2, $3, $4, $5, $6, $7) returning *",
      [
        Date.now().toString(),
        RandomApplication[0],
        RandomApplication[1],
        RandomApplication[3],
        RandomApplication[2],
        faker.lorem.sentence(),
        boolean[Math.floor(Math.random() * boolean.length)],
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in notifications: ");
    console.error(error.message);
  }
}
// insertNotifications();

async function insertProjects() {
  try {
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }

    const insertP = await pool.query(
      "insert into project (s_name, project_id, title, technologies, description) values ($1, $2, $3, $4, $5) returning *",
      [
        studentIds[Math.floor(Math.random() * studentIds.length)],
        Date.now().toString(),
        faker.lorem.word(),
        faker.lorem.words(),
        faker.lorem.paragraph(),
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in qualified_in: ");
    console.error(error.message);
  }
}
// insertProjects();

async function insertWork() {
  try {
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }
    const durationTime =
      Math.floor(Math.random() * (10 - 2) + 2) +
      " " +
      duration[Math.floor(Math.random() * duration.length)];
    const insertP = await pool.query(
      "insert into work_experience (s_name, work_id, job_title, description, duration) values ($1, $2, $3, $4, $5) returning *",
      [
        studentIds[Math.floor(Math.random() * studentIds.length)],
        Date.now().toString(),
        faker.name.jobTitle(),
        faker.lorem.sentences(),
        durationTime,
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in qualified_in: ");
    console.error(error.message);
  }
}
// insertWork();

async function insertEdu() {
  try {
    const getStudentId = await pool.query("select s_name from student");
    const studentIds = [];
    for (let i = 0; i < getStudentId.rows.length; i++) {
      const element = getStudentId.rows[i].s_name;
      studentIds.push(element);
    }
    const getDegrees = await pool.query("select degreename from degree");
    const degrees = [];
    for (let i = 0; i < getDegrees.rows.length; i++) {
      const element = getDegrees.rows[i].degreename;
      degrees.push(element);
    }
    const insertP = await pool.query(
      "insert into educational_details (s_name, detail_id, university, year_of_passing, general_grade, degreename, description) values ($1, $2, $3, $4, $5, $6, $7) returning *",
      [
        studentIds[Math.floor(Math.random() * studentIds.length)],
        Date.now().toString(),
        unis[Math.floor(Math.random() * unis.length)],
        faker.date.past().getYear(),
        grades[Math.floor(Math.random() * grades.length)],
        degrees[Math.floor(Math.random() * degrees.length)],
        faker.lorem.sentence(),
      ]
    );
  } catch (error) {
    console.log("there is an error in inserting in education: ");
    console.error(error.message);
  }
}
// insertEdu();

async function insertingData() {
  await insertStudent();
  // insertCompany();
  // await insertListing();
  // console.log("haha");
  // insertSkill();
  // insertNeeds();
  // insertQualifiedIn();
  // insertViews();
  // insertApplication();
  // insertFills();
  // insertNotifications();
  // insertProjects();
  // insertWork();
  // insertEdu();
  setTimeout(insertingData, 2);
}
// insertingData();
