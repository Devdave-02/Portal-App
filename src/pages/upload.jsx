import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "./upload.css";

function UploadResult() {
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [results, setResults] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Sample course data
  const courseData = {
  Medicine: {
    "100L": {
      "First Semester": [
        { code: "MED101", title: "Introduction to Medicine", unit: 1 },
        { code: "MED102", title: "Medical Biology", unit: 2 },
        { code: "MED103", title: "General Anatomy I", unit: 3 },
      ],
      "Second Semester": [
        { code: "MED104", title: "General Anatomy II", unit: 3 },
        { code: "MED105", title: "Biochemistry I", unit: 2 },
        { code: "MED107", title: "Medical Ethics", unit: 4 },
      ],
    },
    "200L": {
      "First Semester": [
        { code: "MED201", title: "Human Physiology I", unit: 3 },
        { code: "MED202", title: "Pathology I", unit: 2 },
        { code: "MED203", title: "Pharmacology I", unit: 2 },
      ],
      "Second Semester": [
        { code: "MED204", title: "Human Physiology II", unit: 4 },
        { code: "MED205", title: "Pathology II", unit: 2 },
        { code: "MED206", title: "pharmacology II", unit: 2},
      ],
    },
    "300L": {
      "First Semester": [
        { code: "MED301", title: "Clinical Medicine I", unit: 3},
        { code: "MED302", title: "Pharmacology II", unit: 2 },
        { code: "MED303", title: "Microbiology", unit: 2 },
      ],
      "Second Semester": [
        { code: "MED304", title: "Clinical Medicine II", unit: 3 },
        { code: "MED305", title: "Surgical Techniques", unit: 2 },
        { code: "MED306", title: "Medical Statistics", unit: 4}, 
      ],
    },
  },

  Nursing: {
    "100L": {
      "First Semester": [
        { code: "NUR101", title: "Introduction to Nursing", unit: 2 },
        { code: "NUR102", title: "Basic Human Anatomy", unit: 2 },
        { code: "NUR105", title: "Health Assessment", unit: 4},
      ],
      "Second Semester": [
        { code: "NUR103", title: "Foundations of Nursing", unit: 3 },
        { code: "NUR104", title: "Nutrition in Healthcare", unit: 2 },
        { code: "NUR106", title: "Pharmacology for Nurses", unit: 4},
      ],
    },
    "200L": {
      "First Semester": [
        { code: "NUR201", title: "Medical-Surgical Nursing I", unit: 1 },
        { code: "NUR202", title: "Pathophysiology", unit: 2 },
        { code: "NUR205", title: "Mental Health Nursing", unit: 3},
      ],
      "Second Semester": [
        { code: "NUR203", title: "Medical-Surgical Nursing II", unit: 2 },
        { code: "NUR204", title: "Community Health Nursing", unit: 2 },
        { code: "NUR206", title: "Nursing Research", unit: 4},
      ],
    },
    "300L": {
      "First Semester": [
        { code: "NUR301", title: "Maternal & Child Health", unit: 3 },
        { code: "NUR302", title: "Pharmacology for Nurses", unit: 2 },
        { code: "NUR305", title: "Advanced Nursing Practice", unit: 4},
      ],
      "Second Semester": [
        { code: "NUR303", title: "Nursing Ethics and Law", unit: 4 },
        { code: "NUR304", title: "Mental Health Nursing", unit: 3 },
        { code: "NUR306", title: "Leadership in Nursing", unit: 4}
      ],
    },
  },

  Physiology: {
    "100L": {
      "First Semester": [
        { code: "PSG101", title: "Intro to Physiology", unit: 2 },
        { code: "PSG102", title: "Biological Chemistry", unit: 2 },
        { code: "PSG105", title: "Human Anatomy", unit: 3},
      ],
      "Second Semester": [
        { code: "PSG103", title: "Body Systems", unit: 3 },
        { code: "PSG104", title: "Cell Biology", unit: 2 },
        { code: "PSG106", title: "Research Methods", unit: 1},
      ],
    },
    "200L": {
      "First Semester": [
        { code: "PSG201", title: "Neurophysiology", unit: 3 },
        { code: "PSG202", title: "Endocrinology", unit: 2 },
        { code: "PSG205", title: "Cardiovascular Physiology", unit: 3},
      ],
      "Second Semester": [
        { code: "PSG203", title: "Cardiovascular Physiology", unit: 3 },
        { code: "PSG204", title: "Respiratory Physiology", unit: 4 },
        { code: "PSG206", title: "Renal Physiology", unit: 3},
      ],
    },
    "300L": {
      "First Semester": [
        { code: "PSG301", title: "Renal Physiology", unit: 2 },
        { code: "PSG302", title: "Digestive System", unit: 2 },
        { code: "PSG305", title: "Reproductive Physiology", unit: 4},
      ],
      "Second Semester": [
        { code: "PSG303", title: "Reproductive Physiology", unit: 2 },
        { code: "PSG304", title: "Physiology of Exercise", unit: 2 },
        { code: "PSG306", title: "Clinical Physiology", unit: 4},
      ],
    },
  },
  
    Anatomy: {
    "100L": {
      "First Semester": [
        { code: "ANA101", title: "Introduction to Anatomy", unit: 1 },
        { code: "ANA102", title: "Human Biology", unit: 2 },
        { code: "ANA103", title: "Cell Structure & Function", unit: 2 },
      ],
      "Second Semester": [
        { code: "ANA104", title: "Skeletal System", unit: 2 },
        { code: "ANA105", title: "Histology Basics", unit: 3 },
        { code: "ANA106", title: "Muscular System", unit: 3 },
      ],
    },
    "200L": {
      "First Semester": [
        { code: "ANA201", title: "Gross Anatomy I", unit: 3 },
        { code: "ANA202", title: "Embryology", unit: 4 },
        { code: "ANA203", title: "Anatomical Terminologies", unit: 3 },
      ],
      "Second Semester": [
        { code: "ANA204", title: "Gross Anatomy II", unit: 4 },
        { code: "ANA205", title: "Neuroanatomy", unit: 2 },
        { code: "ANA206", title: "Lymphatic System", unit: 3 },
      ],
    },
    "300L": {
      "First Semester": [
        { code: "ANA301", title: "Microscopic Anatomy", unit: 4 },
        { code: "ANA302", title: "Functional Anatomy", unit: 3 },
        { code: "ANA303", title: "Endocrine Anatomy", unit: 3 },
      ],
      "Second Semester": [
        { code: "ANA304", title: "Radiological Anatomy", unit: 3 },
        { code: "ANA305", title: "Clinical Anatomy", unit: 3 },
        { code: "ANA306", title: "Regional Anatomy", unit: 4 },
      ],
    },
  },

  MLS: {
    "100L": {
      "First Semester": [
        { code: "MLS101", title: "Intro to Medical Lab Science", unit: 3 },
        { code: "MLS102", title: "General Chemistry", unit: 2 },
        { code: "MLS103", title: "Basic Lab Equipments", unit: 2 },
      ],
      "Second Semester": [
        { code: "MLS104", title: "Laboratory Techniques", unit: 3 },
        { code: "MLS105", title: "Intro to Microbiology", unit: 2 },
        { code: "MLS106", title: "Biostatistics", unit: 2 },
      ],
    },
    "200L": {
      "First Semester": [
        { code: "MLS201", title: "Clinical Biochemistry I", unit: 3 },
        { code: "MLS202", title: "Hematology I", unit: 2 },
        { code: "MLS203", title: "Instrumentation in Lab", unit: 2 },
      ],
      "Second Semester": [
        { code: "MLS204", title: "Clinical Biochemistry II", unit: 3 },
        { code: "MLS205", title: "Parasitology", unit: 2 },
        { code: "MLS206", title: "Virology", unit: 2 },
      ],
    },
    "300L": {
      "First Semester": [
        { code: "MLS301", title: "Immunology", unit: 3 },
        { code: "MLS302", title: "Hematology II", unit: 2 },
        { code: "MLS303", title: "Molecular Biology", unit: 2 },
      ],
      "Second Semester": [
        { code: "MLS304", title: "Medical Microbiology", unit: 3 },
        { code: "MLS305", title: "Cytology & Histopathology", unit: 2 },
        { code: "MLS306", title: "Quality Assurance in Lab", unit: 2 },
      ],
    },
  },
};
  


  // Sample students
 const studentList = {
  Medicine: {
    "100L": [
      { _id: "med_100L_001", name: "Amina Bello", matricNumber: "NBU/100/001" },
      { _id: "med_100L_002", name: "David Ojo", matricNumber: "NBU/100/002" },
      { _id: "med_100L_003", name: "Fatima Umar", matricNumber: "NBU/100/003" },
      { _id: "med_100L_004", name: "John Okeke", matricNumber: "NBU/100/004" },
      { _id: "med_100L_005", name: "Grace Eze", matricNumber: "NBU/100/005" },
      { _id: "med_100L_006", name: "Samuel Olatunji", matricNumber: "NBU/100/006" },
      { _id: "med_100L_007", name: "Zainab Musa", matricNumber: "NBU/100/007" },
      { _id: "med_100L_008", name: "Peter Obi", matricNumber: "NBU/100/008" },
      { _id: "med_100L_009", name: "Chinyere Umeh", matricNumber: "NBU/100/009" },
      { _id: "med_100L_010", name: "Ibrahim Sani", matricNumber: "NBU/100/010" },
      { _id: "med_100L_011", name: "Maryam Abdullahi", matricNumber: "NBU/100/011" },
      { _id: "med_100L_012", name: "Victor Etim", matricNumber: "NBU/100/012" },
      { _id: "med_100L_013", name: "Ngozi Eze", matricNumber: "NBU/100/013" },
      { _id: "med_100L_014", name: "Emmanuel Ojo", matricNumber: "NBU/100/014" },
      { _id: "med_100L_015", name: "Kelechi Okafor", matricNumber: "NBU/100/015" },
    ],
    "200L": [
      { _id: "med_200L_001", name: "Chinedu Okafor", matricNumber: "NBU/200/001" },
      { _id: "med_200L_002", name: "Aisha Mohammed", matricNumber: "NBU/200/002" },
      { _id: "med_200L_003", name: "Bolu Adeyemi", matricNumber: "NBU/200/003" },
      { _id: "med_200L_004", name: "Emeka Nwosu", matricNumber: "NBU/200/004" },
      { _id: "med_200L_005", name: "Maryam Suleiman", matricNumber: "NBU/200/005" },
      { _id: "med_200L_006", name: "Tunde Balogun", matricNumber: "NBU/200/006" },
      { _id: "med_200L_007", name: "Victoria James", matricNumber: "NBU/200/007" },
      { _id: "med_200L_008", name: "Ibrahim Abdullahi", matricNumber: "NBU/200/008" },
      { _id: "med_200L_009", name: "Kemi Adedoyin", matricNumber: "NBU/200/009" },
      { _id: "med_200L_010", name: "Samuel Etim", matricNumber: "NBU/200/010" },
      { _id: "med_200L_011", name: "Esther Obi", matricNumber: "NBU/200/011" },
      { _id: "med_200L_012", name: "Oluwaseun Adeola", matricNumber: "NBU/200/012" },
      { _id: "med_200L_013", name: "Daniel Okon", matricNumber: "NBU/200/013" },
      { _id: "med_200L_014", name: "Ngozi Emeh", matricNumber: "NBU/200/014" },
      { _id: "med_200L_015", name: "Michael Ibe", matricNumber: "NBU/200/015" }
    ],
    "300L": [
      { _id: "med_300L_001", name: "Abdulrahman Musa", matricNumber: "NBU/300/001" },
      { _id: "med_300L_002", name: "Chioma Nwankwo", matricNumber: "NBU/300/002" },
      { _id: "med_300L_003", name: "Oluwatosin Afolabi", matricNumber: "NBU/300/003" },
      { _id: "med_300L_004", name: "Ifeanyi Uche", matricNumber: "NBU/300/004" },
      { _id: "med_300L_005", name: "Zainab Lawal", matricNumber: "NBU/300/005" },
      { _id: "med_300L_006", name: "Chuka Eze", matricNumber: "NBU/300/006" },
      { _id: "med_300L_007", name: "Patience Yakubu", matricNumber: "NBU/300/007" },
      { _id: "med_300L_008", name: "Aliyu Abdulkadir", matricNumber: "NBU/300/008" },
      { _id: "med_300L_009", name: "Blessing Akpan", matricNumber: "NBU/300/009" },
      { _id: "med_300L_010", name: "Chika Okorie", matricNumber: "NBU/300/010" },
      { _id: "med_300L_011", name: "Femi Alabi", matricNumber: "NBU/300/011" },
      { _id: "med_300L_012", name: "Rukayat Bello", matricNumber: "NBU/300/012" },
      { _id: "med_300L_013", name: "Emmanuel Udo", matricNumber: "NBU/300/013" },
      { _id: "med_300L_014", name: "Opeyemi Ajayi", matricNumber: "NBU/300/014" },
      { _id: "med_300L_015", name: "Janet Nnamdi", matricNumber: "NBU/300/015" }
    ],
  },

  Nursing: {
    "100L": [
      { _id: "nur_100L_001", name: "Abigail Johnson", matricNumber: "NBU/NUR/100/001" },
      { _id: "nur_100L_002", name: "Musa Ali", matricNumber: "NBU/NUR/100/002" },
      { _id: "nur_100L_003", name: "Oluwaseun Bakare", matricNumber: "NBU/NUR/100/003" },
      { _id: "nur_100L_004", name: "Grace Udoh", matricNumber: "NBU/NUR/100/004" },
      { _id: "nur_100L_005", name: "Hassan Usman", matricNumber: "NBU/NUR/100/005" },
      { _id: "nur_100L_006", name: "Esther Ekanem", matricNumber: "NBU/NUR/100/006" },
      { _id: "nur_100L_007", name: "David Ayeni", matricNumber: "NBU/NUR/100/007" },
      { _id: "nur_100L_008", name: "Chiamaka Okoro", matricNumber: "NBU/NUR/100/008" },
      { _id: "nur_100L_009", name: "Ibrahim Bello", matricNumber: "NBU/NUR/100/009" },
      { _id: "nur_100L_010", name: "Mary Akintola", matricNumber: "NBU/NUR/100/010" },
      { _id: "nur_100L_011", name: "Kelvin Eze", matricNumber: "NBU/NUR/100/011" },
      { _id: "nur_100L_012", name: "Ruth Adepoju", matricNumber: "NBU/NUR/100/012" },
      { _id: "nur_100L_013", name: "Chukwudi Nnaji", matricNumber: "NBU/NUR/100/013" },
      { _id: "nur_100L_014", name: "Aisha Yusuf", matricNumber: "NBU/NUR/100/014" },
      { _id: "nur_100L_015", name: "Peter Okafor", matricNumber: "NBU/NUR/100/015" }
    ],
    "200L": [
      { _id: "nur_200L_001", name: "Fatima Sani", matricNumber: "NBU/NUR/200/001" },
      { _id: "nur_200L_002", name: "Emmanuel Ojo", matricNumber: "NBU/NUR/200/002" },
      { _id: "nur_200L_003", name: "Blessing Udofia", matricNumber: "NBU/NUR/200/003" },
      { _id: "nur_200L_004", name: "Joshua Adeyinka", matricNumber: "NBU/NUR/200/004" },
      { _id: "nur_200L_005", name: "Ngozi Ike", matricNumber: "NBU/NUR/200/005" },
      { _id: "nur_200L_006", name: "Ifeoma Chukwu", matricNumber: "NBU/NUR/200/006" },
      { _id: "nur_200L_007", name: "Abubakar Hassan", matricNumber: "NBU/NUR/200/007" },
      { _id: "nur_200L_008", name: "Vivian Umeh", matricNumber: "NBU/NUR/200/008" },
      { _id: "nur_200L_009", name: "Samuel Oladele", matricNumber: "NBU/NUR/200/009" },
      { _id: "nur_200L_010", name: "Khadijat Bello", matricNumber: "NBU/NUR/200/010" },
      { _id: "nur_200L_011", name: "Chidera Nwachukwu", matricNumber: "NBU/NUR/200/011" },
      { _id: "nur_200L_012", name: "Patience Okon", matricNumber: "NBU/NUR/200/012" },
      { _id: "nur_200L_013", name: "Tosin Adewale", matricNumber: "NBU/NUR/200/013" },
      { _id: "nur_200L_014", name: "Idris Abdullahi", matricNumber: "NBU/NUR/200/014" },
      { _id: "nur_200L_015", name: "Rebecca Anya", matricNumber: "NBU/NUR/200/015" }
    ],
    "300L": [
      { _id: "nur_300L_001", name: "Helen Obinna", matricNumber: "NBU/NUR/300/001" },
      { _id: "nur_300L_002", name: "Joseph Akpan", matricNumber: "NBU/NUR/300/002" },
      { _id: "nur_300L_003", name: "Zainab Abdulkareem", matricNumber: "NBU/NUR/300/003" },
      { _id: "nur_300L_004", name: "Christopher Adeyemi", matricNumber: "NBU/NUR/300/004" },
      { _id: "nur_300L_005", name: "Amaka Eze", matricNumber: "NBU/NUR/300/005" },
      { _id: "nur_300L_006", name: "Ibrahim Usman", matricNumber: "NBU/NUR/300/006" },
      { _id: "nur_300L_007", name: "Precious Chika", matricNumber: "NBU/NUR/300/007" },
      { _id: "nur_300L_008", name: "Oluwadamilola Ogunleye", matricNumber: "NBU/NUR/300/008" },
      { _id: "nur_300L_009", name: "Favour Etuk", matricNumber: "NBU/NUR/300/009" },
      { _id: "nur_300L_010", name: "Abdullahi Musa", matricNumber: "NBU/NUR/300/010" },
      { _id: "nur_300L_011", name: "Gloria Nwachukwu", matricNumber: "NBU/NUR/300/011" },
      { _id: "nur_300L_012", name: "Michael Adebanjo", matricNumber: "NBU/NUR/300/012" },
      { _id: "nur_300L_013", name: "Salamatu Aliyu", matricNumber: "NBU/NUR/300/013" },
      { _id: "nur_300L_014", name: "Hope Udo", matricNumber: "NBU/NUR/300/014" },
      { _id: "nur_300L_015", name: "Emeka Ndukwe", matricNumber: "NBU/NUR/300/015" }
    ],
  },

  Physiology: {
    "100L": [
      { _id: "phy_100L_001", name: "Abiola Kareem", matricNumber: "NBU/PHY/100/001" },
      { _id: "phy_100L_002", name: "Chukwuemeka Obi", matricNumber: "NBU/PHY/100/002" },
      { _id: "phy_100L_003", name: "Fatima Ahmed", matricNumber: "NBU/PHY/100/003" },
      { _id: "phy_100L_004", name: "Samuel Adebayo", matricNumber: "NBU/PHY/100/004" },
      { _id: "phy_100L_005", name: "Oluchi Nwosu", matricNumber: "NBU/PHY/100/005" },
      { _id: "phy_100L_006", name: "Ibrahim Lawal", matricNumber: "NBU/PHY/100/006" },
      { _id: "phy_100L_007", name: "Grace Chukwuka", matricNumber: "NBU/PHY/100/007" },
      { _id: "phy_100L_008", name: "Oluwadare Ayomide", matricNumber: "NBU/PHY/100/008" },
      { _id: "phy_100L_009", name: "Zainab Yusuf", matricNumber: "NBU/PHY/100/009" },
      { _id: "phy_100L_010", name: "Chidi Okorie", matricNumber: "NBU/PHY/100/010" },
      { _id: "phy_100L_011", name: "Ruth Akpan", matricNumber: "NBU/PHY/100/011" },
      { _id: "phy_100L_012", name: "Michael Oladipo", matricNumber: "NBU/PHY/100/012" },
      { _id: "phy_100L_013", name: "Aisha Ibrahim", matricNumber: "NBU/PHY/100/013" },
      { _id: "phy_100L_014", name: "Chinonso Eze", matricNumber: "NBU/PHY/100/014" },
      { _id: "phy_100L_015", name: "David Owolabi", matricNumber: "NBU/PHY/100/015" }
    ],
    "200L": [
      { _id: "phy_200L_001", name: "Maryann Okeke", matricNumber: "NBU/PHY/200/001" },
      { _id: "phy_200L_002", name: "Bashir Sulaiman", matricNumber: "NBU/PHY/200/002" },
      { _id: "phy_200L_003", name: "Emeka Nnamani", matricNumber: "NBU/PHY/200/003" },
      { _id: "phy_200L_004", name: "Kemi Ogunleye", matricNumber: "NBU/PHY/200/004" },
      { _id: "phy_200L_005", name: "Ifeanyi Okoro", matricNumber: "NBU/PHY/200/005" },
      { _id: "phy_200L_006", name: "Favour Nwachukwu", matricNumber: "NBU/PHY/200/006" },
      { _id: "phy_200L_007", name: "Oluwaseun Adekunle", matricNumber: "NBU/PHY/200/007" },
      { _id: "phy_200L_008", name: "Zainab Bello", matricNumber: "NBU/PHY/200/008" },
      { _id: "phy_200L_009", name: "Sani Abubakar", matricNumber: "NBU/PHY/200/009" },
      { _id: "phy_200L_010", name: "Esther Udo", matricNumber: "NBU/PHY/200/010" },
      { _id: "phy_200L_011", name: "Chika Ike", matricNumber: "NBU/PHY/200/011" },
      { _id: "phy_200L_012", name: "Peter Ajibola", matricNumber: "NBU/PHY/200/012" },
      { _id: "phy_200L_013", name: "Rukayat Sule", matricNumber: "NBU/PHY/200/013" },
      { _id: "phy_200L_014", name: "Femi Ajayi", matricNumber: "NBU/PHY/200/014" },
      { _id: "phy_200L_015", name: "Chinyere Obinna", matricNumber: "NBU/PHY/200/015" }
    ],
    "300L": [
      { _id: "phy_300L_001", name: "Ahmed Adamu", matricNumber: "NBU/PHY/300/001" },
      { _id: "phy_300L_002", name: "Ogechi Eneh", matricNumber: "NBU/PHY/300/002" },
      { _id: "phy_300L_003", name: "Ibrahim Musa", matricNumber: "NBU/PHY/300/003" },
      { _id: "phy_300L_004", name: "Florence Adeola", matricNumber: "NBU/PHY/300/004" },
      { _id: "phy_300L_005", name: "Chidubem Nweke", matricNumber: "NBU/PHY/300/005" },
      { _id: "phy_300L_006", name: "Blessing Amos", matricNumber: "NBU/PHY/300/006" },
      { _id: "phy_300L_007", name: "Olamide Adebisi", matricNumber: "NBU/PHY/300/007" },
      { _id: "phy_300L_008", name: "Daniel Okon", matricNumber: "NBU/PHY/300/008" },
      { _id: "phy_300L_009", name: "Salma Yusuf", matricNumber: "NBU/PHY/300/009" },
      { _id: "phy_300L_010", name: "Emmanuel Okafor", matricNumber: "NBU/PHY/300/010" },
      { _id: "phy_300L_011", name: "Janet Ojo", matricNumber: "NBU/PHY/300/011" },
      { _id: "phy_300L_012", name: "Collins Nwafor", matricNumber: "NBU/PHY/300/012" },
      { _id: "phy_300L_013", name: "Aminat Sulaiman", matricNumber: "NBU/PHY/300/013" },
      { _id: "phy_300L_014", name: "Chika Nnamdi", matricNumber: "NBU/PHY/300/014" },
      { _id: "phy_300L_015", name: "Opeyemi Alabi", matricNumber: "NBU/PHY/300/015" }
    ],
  },

  Anatomy: {
    "100L": [
      { _id: "ana_100L_001", name: "Tosin Adebayo", matricNumber: "NBU/ANA/100/001" },
      { _id: "ana_100L_002", name: "Chinwe Nwachukwu", matricNumber: "NBU/ANA/100/002" },
      { _id: "ana_100L_003", name: "Ibrahim Usman", matricNumber: "NBU/ANA/100/003" },
      { _id: "ana_100L_004", name: "Grace Obi", matricNumber: "NBU/ANA/100/004" },
      { _id: "ana_100L_005", name: "Samuel Oladipo", matricNumber: "NBU/ANA/100/005" },
      { _id: "ana_100L_006", name: "Zainab Abubakar", matricNumber: "NBU/ANA/100/006" },
      { _id: "ana_100L_007", name: "David Etim", matricNumber: "NBU/ANA/100/007" },
      { _id: "ana_100L_008", name: "Chika Eze", matricNumber: "NBU/ANA/100/008" },
      { _id: "ana_100L_009", name: "Oluwatobi Adekunle", matricNumber: "NBU/ANA/100/009" },
      { _id: "ana_100L_010", name: "Fatima Sulaiman", matricNumber: "NBU/ANA/100/010" },
      { _id: "ana_100L_011", name: "Michael Akpan", matricNumber: "NBU/ANA/100/011" },
      { _id: "ana_100L_012", name: "Ngozi Ike", matricNumber: "NBU/ANA/100/012" },
      { _id: "ana_100L_013", name: "Peter Udo", matricNumber: "NBU/ANA/100/013" },
      { _id: "ana_100L_014", name: "Maryam Ahmed", matricNumber: "NBU/ANA/100/014" },
      { _id: "ana_100L_015", name: "Olamide Balogun", matricNumber: "NBU/ANA/100/015" }
    ],
    "200L": [
      { _id: "ana_200L_001", name: "Emmanuel Nwafor", matricNumber: "NBU/ANA/200/001" },
      { _id: "ana_200L_002", name: "Rukayat Bello", matricNumber: "NBU/ANA/200/002" },
      { _id: "ana_200L_003", name: "Chinedu Okeke", matricNumber: "NBU/ANA/200/003" },
      { _id: "ana_200L_004", name: "Aisha Yusuf", matricNumber: "NBU/ANA/200/004" },
      { _id: "ana_200L_005", name: "Ifeoma Obi", matricNumber: "NBU/ANA/200/005" },
      { _id: "ana_200L_006", name: "Femi Ajibola", matricNumber: "NBU/ANA/200/006" },
      { _id: "ana_200L_007", name: "Blessing Uche", matricNumber: "NBU/ANA/200/007" },
      { _id: "ana_200L_008", name: "Idris Abdullahi", matricNumber: "NBU/ANA/200/008" },
      { _id: "ana_200L_009", name: "Helen Okon", matricNumber: "NBU/ANA/200/009" },
      { _id: "ana_200L_010", name: "Oluwatosin Adeyemi", matricNumber: "NBU/ANA/200/010" },
      { _id: "ana_200L_011", name: "Zainab Lawal", matricNumber: "NBU/ANA/200/011" },
      { _id: "ana_200L_012", name: "Christopher James", matricNumber: "NBU/ANA/200/012" },
      { _id: "ana_200L_013", name: "Gloria Umeh", matricNumber: "NBU/ANA/200/013" },
      { _id: "ana_200L_014", name: "Suleiman Musa", matricNumber: "NBU/ANA/200/014" },
      { _id: "ana_200L_015", name: "Amaka Okafor", matricNumber: "NBU/ANA/200/015" }
    ],
   "300L": [
      { _id: "ana_300L_001", name: "Adeola Ogunleye", matricNumber: "NBU/ANA/300/001" },
      { _id: "ana_300L_002", name: "Chukwuemeka Nnamdi", matricNumber: "NBU/ANA/300/002" },
      { _id: "ana_300L_003", name: "Zainab Hassan", matricNumber: "NBU/ANA/300/003" },
      { _id: "ana_300L_004", name: "Tunde Alabi", matricNumber: "NBU/ANA/300/004" },
      { _id: "ana_300L_005", name: "Ngozi Okechukwu", matricNumber: "NBU/ANA/300/005" },
      { _id: "ana_300L_006", name: "Ibrahim Adamu", matricNumber: "NBU/ANA/300/006" },
      { _id: "ana_300L_007", name: "Esther Chika", matricNumber: "NBU/ANA/300/007" },
      { _id: "ana_300L_008", name: "Olumide Adebisi", matricNumber: "NBU/ANA/300/008" },
      { _id: "ana_300L_009", name: "Fatima Ali", matricNumber: "NBU/ANA/300/009" },
      { _id: "ana_300L_010", name: "Emeka Obinna", matricNumber: "NBU/ANA/300/010" },
      { _id: "ana_300L_011", name: "Patience Yakubu", matricNumber: "NBU/ANA/300/011" },
      { _id: "ana_300L_012", name: "Kemi Adeola", matricNumber: "NBU/ANA/300/012" },
      { _id: "ana_300L_013", name: "Sani Mohammed", matricNumber: "NBU/ANA/300/013" },
      { _id: "ana_300L_014", name: "Chidera Ibe", matricNumber: "NBU/ANA/300/014" },
      { _id: "ana_300L_015", name: "Michael Eze", matricNumber: "NBU/ANA/300/015" }
   ],
  },

  MLS: {
   "100L": [
      { _id: "mls_100L_001", name: "Abdulrahman Sulaiman", matricNumber: "NBU/MLS/100/001" },
      { _id: "mls_100L_002", name: "Gloria Okeke", matricNumber: "NBU/MLS/100/002" },
      { _id: "mls_100L_003", name: "Ibrahim Adamu", matricNumber: "NBU/MLS/100/003" },
      { _id: "mls_100L_004", name: "Esther Chukwu", matricNumber: "NBU/MLS/100/004" },
      { _id: "mls_100L_005", name: "Samuel Adeyemi", matricNumber: "NBU/MLS/100/005" },
      { _id: "mls_100L_006", name: "Maryam Lawal", matricNumber: "NBU/MLS/100/006" },
      { _id: "mls_100L_007", name: "Chinedu Eze", matricNumber: "NBU/MLS/100/007" },
      { _id: "mls_100L_008", name: "Ruth Udo", matricNumber: "NBU/MLS/100/008" },
      { _id: "mls_100L_009", name: "Tunde Bakare", matricNumber: "NBU/MLS/100/009" },
      { _id: "mls_100L_010", name: "Zainab Usman", matricNumber: "NBU/MLS/100/010" },
      { _id: "mls_100L_011", name: "Michael Obi", matricNumber: "NBU/MLS/100/011" },
      { _id: "mls_100L_012", name: "Ngozi Nwafor", matricNumber: "NBU/MLS/100/012" },
      { _id: "mls_100L_013", name: "Peter Adekunle", matricNumber: "NBU/MLS/100/013" },
      { _id: "mls_100L_014", name: "Aisha Ibrahim", matricNumber: "NBU/MLS/100/014" },
      { _id: "mls_100L_015", name: "Oluwaseun Ajayi", matricNumber: "NBU/MLS/100/015" }
    ],
   "200L": [
      { _id: "mls_200L_001", name: "Helen Nwachukwu", matricNumber: "NBU/MLS/200/001" },
      { _id: "mls_200L_002", name: "Idris Mohammed", matricNumber: "NBU/MLS/200/002" },
      { _id: "mls_200L_003", name: "Chiamaka Eze", matricNumber: "NBU/MLS/200/003" },
      { _id: "mls_200L_004", name: "Opeyemi Ogunleye", matricNumber: "NBU/MLS/200/004" },
      { _id: "mls_200L_005", name: "Blessing Uche", matricNumber: "NBU/MLS/200/005" },
      { _id: "mls_200L_006", name: "Suleiman Abubakar", matricNumber: "NBU/MLS/200/006" },
      { _id: "mls_200L_007", name: "Glory Chika", matricNumber: "NBU/MLS/200/007" },
      { _id: "mls_200L_008", name: "Emeka Obi", matricNumber: "NBU/MLS/200/008" },
      { _id: "mls_200L_009", name: "Aminat Bello", matricNumber: "NBU/MLS/200/009" },
      { _id: "mls_200L_010", name: "Daniel Etim", matricNumber: "NBU/MLS/200/010" },
      { _id: "mls_200L_011", name: "Kemi Adeola", matricNumber: "NBU/MLS/200/011" },
      { _id: "mls_200L_012", name: "Femi Alabi", matricNumber: "NBU/MLS/200/012" },
      { _id: "mls_200L_013", name: "Patience Yakubu", matricNumber: "NBU/MLS/200/013" },
      { _id: "mls_200L_014", name: "Bashir Lawal", matricNumber: "NBU/MLS/200/014" },
      { _id: "mls_200L_015", name: "Janet Okon", matricNumber: "NBU/MLS/200/015" }
   ],
   
   "300L": [
      { _id: "mls_300L_001", name: "David Olatunji", matricNumber: "NBU/MLS/300/001" },
      { _id: "mls_300L_002", name: "Chioma Okorie", matricNumber: "NBU/MLS/300/002" },
      { _id: "mls_300L_003", name: "Ibrahim Musa", matricNumber: "NBU/MLS/300/003" },
      { _id: "mls_300L_004", name: "Florence Adeyemi", matricNumber: "NBU/MLS/300/004" },
      { _id: "mls_300L_005", name: "Chidubem Nweke", matricNumber: "NBU/MLS/300/005" },
      { _id: "mls_300L_006", name: "Blessing Amos", matricNumber: "NBU/MLS/300/006" },
      { _id: "mls_300L_007", name: "Olamide Adebisi", matricNumber: "NBU/MLS/300/007" },
      { _id: "mls_300L_008", name: "Daniel Okon", matricNumber: "NBU/MLS/300/008" },
      { _id: "mls_300L_009", name: "Salma Yusuf", matricNumber: "NBU/MLS/300/009" },
      { _id: "mls_300L_010", name: "Emmanuel Okafor", matricNumber: "NBU/MLS/300/010" },
      { _id: "mls_300L_011", name: "Janet Ojo", matricNumber: "NBU/MLS/300/011" },
      { _id: "mls_300L_012", name: "Collins Nwafor", matricNumber: "NBU/MLS/300/012" },
      { _id: "mls_300L_013", name: "Aminat Sulaiman", matricNumber: "NBU/MLS/300/013" },
      { _id: "mls_300L_014", name: "Chika Nnamdi", matricNumber: "NBU/MLS/300/014" },
      { _id: "mls_300L_015", name: "Opeyemi Alabi", matricNumber: "NBU/MLS/300/015" }
   ],
  }
};


 // 🔍 Get available courses for a department, level, and semester
  const getAvailableCourses = () => {
    return courseData?.[department]?.[level]?.[semester] ?? [];
  };

  // 🎯 Handle course selection and safely parse course JSON
  const handleCourseChange = (e) => {
    const value = e.target.value?.trim();
    setSelectedCourse(value);

    if (!value) {
      setCourse(null);
      return;
    }

    try {
      const parsedCourse = JSON.parse(value);
      setCourse(parsedCourse);
    } catch (error) {
      console.error("❌ Failed to parse selected course:", error);
      alert("Invalid course selection. Please try again.");
      setCourse(null);
    }
  };

  // 🎓 Automatically assign grade based on score
  const autoGrade = (score) => {
    if (typeof score !== "number" || isNaN(score)) return "";
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
  };

  // ✏️ Handle score change for each student
  const handleScoreChange = (studentId, value) => {
    const score = parseInt(value);
    const updatedResults = results.map((student) =>
      student._id === studentId
        ? { ...student, score, grade: autoGrade(score) }
        : student
    );
    setResults(updatedResults);
  };

  // 📥 Load students for selected course
  const loadStudentList = () => {
    if (!selectedCourse) {
      alert("Please select a course first.");
      return;
    }

    let courseObj;
    try {
      courseObj = JSON.parse(selectedCourse);
    } catch (error) {
      console.error("❌ Failed to parse selected course:", error);
      alert("Invalid course data.");
      return;
    }

    const selectedStudents = studentList[department]?.[level];
    if (!Array.isArray(selectedStudents) || selectedStudents.length === 0) {
      alert("No students found for this department and level.");
      return;
    }

    const initialResults = selectedStudents.map((student) => ({
      ...student,
      score: "",
      unit: courseObj.unit || "",
      grade: "",
    }));

    setResults(initialResults);
    setShowConfirmation(false);
  };

  // ✅ Submit scores
  const submitScores = () => {
    const gradePointMap = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };

    if (!course) {
      alert("Please select a course before submitting.");
      return;
    }

    for (const student of results) {
      const score = parseInt(student.score);
      if (isNaN(score) || score < 0 || score > 100) {
        alert(`❌ Invalid score for ${student.name}. Must be between 0 and 100.`);
        return;
      }
    }

    const finalResults = results.map((student) => ({
      ...student,
      courseCode: course.code,
      courseTitle: course.title,
      gradePoint: gradePointMap[student.grade] ?? 0,
    }));

    console.log("📦 Submitted Results:", finalResults);

    setTimeout(() => {
      setShowConfirmation(true);
      setResults([]);
      setCourse(null);
      setSelectedCourse("");
    }, 1000);
  };

  // 📌 UI Return
  return (
    <div className="container">
      <div className="upload-header">
        <img src={logo} alt="Northbridge university Logo" className="image-result" />
        <h1>Lecturer Dashboard: Upload Results</h1>
      </div>

      {/* Filters */}
      <div className="filters">
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          <option value="Medicine">Medicine</option>
          <option value="Physiology">Physiology</option>
          <option value="Nursing">Nursing</option>
          <option value="Anatomy">Anatomy</option>
          <option value="MLS">MLS</option>
        </select>

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Select Level</option>
          <option value="100L">100L</option>
          <option value="200L">200L</option>
          <option value="300L">300L</option>
        </select>

        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Select Semester</option>
          <option value="First Semester">First Semester</option>
          <option value="Second Semester">Second Semester</option>
        </select>

        <select value={selectedCourse} onChange={handleCourseChange}>
          <option value="">Select Course</option>
          {getAvailableCourses().map((course, i) => (
            <option key={i} value={JSON.stringify(course)}>
              {course.code} - {course.title}
            </option>
          ))}
        </select>
        
        <button onClick={loadStudentList}>Load Students</button>
      </div>

      {/* Student Table */}
      {course && results.length > 0 && (
  <div className="table-container">
    <h3>
      {course.code} - {course.title} (Unit: {course.unit})
    </h3>
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Matric Number</th>
          <th>Score</th>
          <th>Unit</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {results.map((student) => (
          <tr key={student._id}>
            <td data-label="Student Name">{student.name}</td>
            <td data-label="Matric Number">{student.matricNumber}</td>
            <td data-label="Score">
              <input
                type="number"
                value={student.score}
                onChange={(e) => handleScoreChange(student._id, e.target.value)}
                min="0"
                max="100"
              />
            </td>
            <td data-label="Unit">
              <input type="number" value={student.unit} readOnly />
            </td>
            <td data-label="Grade">
              <input className="grade-input" type="text" value={student.grade} readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="submit-btn" onClick={submitScores}>
      Submit Results
    </button>
  </div>
)}

      {/* Confirmation */}
      {showConfirmation && (
        <div id="confirmation" className="confirmation">
          ✅ Results uploaded successfully!
        </div>
      )}
    </div>
  );
}

export default UploadResult;