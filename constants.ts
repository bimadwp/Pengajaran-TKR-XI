
import type { Chapter, Quiz, Question } from './types';
import { QuestionType } from './types';
import { SuspensionIcon, SteeringIcon, TransmissionIcon } from './components/icons';

const SUSPENSION_QUESTIONS: Question[] = [
  {
    text: "Fungsi utama suspensi pada kendaraan adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Mengurangi gesekan roda dengan jalan" },
      { text: "Meredam getaran akibat permukaan jalan" },
      { text: "Menambah kecepatan kendaraan" },
      { text: "Mengurangi konsumsi bahan bakar" }
    ],
    correctAnswerIndex: 1,
  },
  {
    text: "Manakah di bawah ini yang termasuk jenis suspensi independen?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
        { text: "Leaf spring (pegas daun)" },
        { text: "Rigid axle (poros kaku)" },
        { text: "MacPherson strut" },
        { text: "Poros puntir (torsion beam)" }
    ],
    correctAnswerIndex: 2,
  },
  {
    text: "Komponen yang berfungsi meredam osilasi pegas adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Control arm" },
      { text: "Stabilizer bar" },
      { text: "Shock absorber (peredam kejut)" },
      { text: "Bushing" }
    ],
    correctAnswerIndex: 2,
  },
  {
    text: "Jelaskan perbedaan utama antara suspensi rigid dan suspensi independen!",
    type: QuestionType.ESSAY,
  },
  {
    text: "Sebutkan tiga contoh kerusakan umum pada sistem suspensi!",
    type: QuestionType.ESSAY,
  },
];

const STEERING_QUESTIONS: Question[] = [
  {
    text: "Fungsi utama sistem kemudi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Mengatur kecepatan kendaraan" },
      { text: "Mengatur arah laju kendaraan" },
      { text: "Mengerem kendaraan" },
      { text: "Menjaga kestabilan saat parkir" }
    ],
    correctAnswerIndex: 1,
  },
  {
    text: "Jenis sistem kemudi yang paling umum digunakan pada kendaraan ringan modern adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
        { text: "Recirculating Ball" },
        { text: "Worm and Sector" },
        { text: "Rack and Pinion" },
        { text: "Pitman Arm" }
    ],
    correctAnswerIndex: 2,
  },
   {
    text: "Apa nama komponen yang menghubungkan steering rack dengan knuckle roda?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
        { text: "Steering column" },
        { text: "Tie rod end" },
        { text: "Idler arm" },
        { text: "Universal joint" }
    ],
    correctAnswerIndex: 1,
  },
  {
    text: "Jelaskan prinsip kerja Power Steering hidrolik!",
    type: QuestionType.ESSAY,
  },
  {
    text: "Sebutkan gejala-gejala kerusakan pada sistem kemudi!",
    type: QuestionType.ESSAY,
  },
];

const TRANSMISSION_QUESTIONS: Question[] = [
  {
    text: "Fungsi utama sistem transmisi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Menghasilkan tenaga dari mesin" },
      { text: "Mendinginkan mesin" },
      { text: "Mengatur rasio putaran mesin ke roda" },
      { text: "Menyalakan mesin" }
    ],
    correctAnswerIndex: 2,
  },
  {
    text: "Komponen pada transmisi manual yang berfungsi untuk memutus dan menghubungkan putaran mesin adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Gearbox" },
      { text: "Kopling (clutch)" },
      { text: "Poros propeller" },
      { text: "Diferensial" }
    ],
    correctAnswerIndex: 1,
  },
  {
    text: "Pada transmisi otomatis konvensional, komponen yang menggantikan fungsi kopling adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [
      { text: "Planetary gear set" },
      { text: "Valve body" },
      { text: "Torque converter" },
      { text: "CVT belt" }
    ],
    correctAnswerIndex: 2,
  },
  {
    text: "Jelaskan fungsi gigi mundur (reverse gear) pada transmisi!",
    type: QuestionType.ESSAY,
  },
  {
    text: "Apa perbedaan mendasar antara transmisi manual dan transmisi otomatis jenis CVT?",
    type: QuestionType.ESSAY,
  },
];


export const CHAPTERS: Chapter[] = [
  {
    id: 'suspensi',
    title: 'Bab I: Sistem Suspensi',
    icon: SuspensionIcon,
    content: {
      imageUrl: 'https://placehold.co/800x400/1e293b/94a3b8?text=Sistem+Suspensi+Kendaraan',
      summary: 'Sistem suspensi adalah kumpulan komponen vital yang menghubungkan roda dengan bodi kendaraan. Fungsi utamanya adalah menyerap kejutan dari permukaan jalan yang tidak rata, meredam getaran, serta menjaga agar roda tetap kontak dengan jalan. Hal ini tidak hanya meningkatkan kenyamanan berkendara secara signifikan, tetapi juga krusial untuk pengendalian (handling) dan stabilitas kendaraan, terutama saat bermanuver atau mengerem.',
      subSections: [
        {
          title: 'Jenis Suspensi',
          text: 'Secara fundamental, suspensi terbagi menjadi dua kategori utama. Pertama, Suspensi Dependen (Rigid Axle), di mana roda kiri dan kanan pada satu poros terhubung secara kaku. Gerakan pada satu roda akan mempengaruhi roda lainnya. Tipe ini sangat kuat dan awet, biasa digunakan pada kendaraan komersial atau SUV ladder-frame. Kedua, Suspensi Independen, di mana setiap roda dapat bergerak secara vertikal tanpa mempengaruhi roda di seberangnya. Ini memberikan kenyamanan dan handling yang lebih baik. Contoh populernya adalah MacPherson Strut, Double Wishbone, dan Multi-Link.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Suspensi+Dependen+vs+Independen',
        },
        {
          title: 'Komponen Utama',
          text: 'Sistem suspensi terdiri dari beberapa komponen kunci. Pegas (Coil Spring, Leaf Spring, Torsion Bar) berfungsi menopang berat kendaraan dan menyerap kejutan awal. Peredam Kejut (Shock Absorber) bertugas meredam osilasi atau ayunan dari pegas. Lengan Kontrol (Control Arm) menghubungkan sasis ke knuckle roda dan mengatur pergerakannya. Ball Joint bekerja seperti sendi pada manusia, memungkinkan roda berbelok dan bergerak naik-turun. Stabilizer Bar mengurangi body roll (kemiringan bodi) saat berbelok.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Komponen-Komponen+Suspensi',
        },
        {
          title: 'Cara Kerja',
          text: 'Ketika roda kendaraan mengenai gundukan, pegas akan terkompresi untuk menyerap energi benturan. Setelah melewati gundukan, pegas akan berekspansi kembali. Tanpa peredam kejut, pegas akan terus berosilasi (memantul), membuat kendaraan tidak stabil. Di sinilah peredam kejut berperan penting dengan mengubah energi kinetik dari osilasi pegas menjadi energi panas melalui fluida hidrolik di dalamnya, sehingga gerakan kendaraan cepat kembali stabil dan terkendali.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Ilustrasi+Cara+Kerja+Suspensi',
        },
      ]
    },
    quiz: {
      title: 'Latihan Bab I: Suspensi',
      questions: SUSPENSION_QUESTIONS,
    }
  },
  {
    id: 'kemudi',
    title: 'Bab II: Sistem Kemudi',
    icon: SteeringIcon,
    content: {
      imageUrl: 'https://placehold.co/800x400/1e293b/94a3b8?text=Sistem+Kemudi+Modern',
      summary: 'Sistem kemudi adalah mekanisme yang memungkinkan pengemudi untuk mengontrol dan mengarahkan laju kendaraan. Sistem ini menerjemahkan putaran roda kemudi oleh pengemudi menjadi gerakan sudut pada roda depan kendaraan. Sistem kemudi yang baik harus responsif, presisi, dan memberikan umpan balik (feedback) yang cukup kepada pengemudi mengenai kondisi jalan.',
      subSections: [
        {
          title: 'Jenis Sistem Kemudi',
          text: 'Jenis yang paling umum pada mobil modern adalah Rack and Pinion. Sistem ini terdiri dari roda gigi pinion yang terhubung ke poros kemudi dan batang bergerigi yang disebut rack. Saat kemudi diputar, pinion bergerak sepanjang rack, mendorong tie rod untuk membelokkan roda. Sistem ini ringan, responsif, dan memberikan feel yang baik. Jenis lainnya adalah Recirculating Ball, yang lebih kompleks namun sangat kuat, biasa digunakan pada truk dan kendaraan berat.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Diagram+Rack+and+Pinion',
        },
        {
          title: 'Komponen Utama',
          text: 'Alur kerja sistem kemudi dimulai dari Roda Kemudi (Steering Wheel). Putarannya diteruskan melalui Kolom Kemudi (Steering Column) yang seringkali dilengkapi fitur teleskopik dan tilt. Universal Joint memungkinkan transfer putaran meskipun kolom kemudi tidak lurus. Inti sistem adalah Steering Gear (misal, rack and pinion) yang mengubah gerak putar menjadi gerak geser. Terakhir, Tie Rod dan Tie Rod End menghubungkan steering gear ke Steering Knuckle di roda, yang berfungsi sebagai engsel untuk membelokkan roda.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Komponen+Sistem+Kemudi',
        },
        {
          title: 'Power Steering',
          text: 'Power steering diciptakan untuk meringankan usaha memutar kemudi. Terdapat dua jenis utama. Power Steering Hidrolik (HPS) menggunakan pompa yang digerakkan mesin untuk menekan fluida hidrolik yang membantu mendorong steering rack. Electric Power Steering (EPS) menggunakan motor listrik yang terpasang pada kolom kemudi atau steering rack. EPS lebih efisien karena hanya aktif saat dibutuhkan, sehingga tidak membebani mesin dan lebih hemat bahan bakar.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Perbandingan+HPS+vs+EPS',
        },
      ]
    },
    quiz: {
      title: 'Latihan Bab II: Kemudi',
      questions: STEERING_QUESTIONS,
    }
  },
  {
    id: 'transmisi',
    title: 'Bab III: Sistem Transmisi',
    icon: TransmissionIcon,
    content: {
      imageUrl: 'https://placehold.co/800x400/1e293b/94a3b8?text=Sistem+Transmisi+dan+Powertrain',
      summary: 'Sistem transmisi atau sistem pemindah tenaga adalah jantung dari powertrain kendaraan. Fungsinya adalah untuk mengatur dan menyalurkan tenaga dari mesin ke roda penggerak. Transmisi memungkinkan pengubahan torsi dan kecepatan putar melalui berbagai rasio gigi, sehingga kendaraan bisa berakselerasi dari diam, melaju dengan kecepatan tinggi di jalan tol, atau menanjak dengan kuat, semuanya dengan putaran mesin yang efisien.',
      subSections: [
        {
          title: 'Transmisi Manual (MT)',
          text: 'Pada transmisi manual, pengemudi memiliki kontrol penuh atas perpindahan gigi. Komponen kuncinya adalah Kopling (Clutch) yang berfungsi untuk memutus dan menghubungkan aliran tenaga dari mesin ke gearbox. Saat pedal kopling diinjak, tenaga terputus, memungkinkan pengemudi memindahkan tuas persneling untuk memilih rasio gigi yang berbeda. Di dalam gearbox, terdapat rangkaian roda gigi dan synchronizer yang memastikan perpindahan gigi berlangsung mulus.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Mekanisme+Transmisi+Manual',
        },
        {
          title: 'Transmisi Otomatis (AT)',
          text: 'Transmisi otomatis melakukan perpindahan gigi tanpa intervensi pengemudi. Jenis konvensional menggunakan Torque Converter sebagai pengganti kopling, yang mentransfer tenaga melalui fluida. Planetary Gear Set menyediakan berbagai rasio gigi yang diatur oleh sistem hidrolik (Valve Body). Jenis lain yang populer adalah CVT (Continuously Variable Transmission), yang tidak menggunakan roda gigi, melainkan sepasang puli yang terhubung oleh sabuk baja. CVT mampu menciptakan rasio yang tak terhingga, menghasilkan akselerasi yang sangat halus dan efisiensi bahan bakar yang optimal.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Torque+Converter+dan+CVT',
        },
        {
          title: 'Komponen Pemindah Tenaga Lainnya',
          text: 'Setelah transmisi, tenaga disalurkan lebih lanjut. Pada kendaraan RWD (Rear-Wheel Drive), Poros Propeller mentransfer putaran ke gardan belakang. Diferensial (Gardan) adalah komponen cerdas yang memungkinkan roda kiri dan kanan berputar dengan kecepatan berbeda saat berbelok. Dari diferensial, Axle Shaft (as roda) akan memutar roda. Pada kendaraan FWD (Front-Wheel Drive), transmisi, diferensial, dan as roda terintegrasi dalam satu unit yang disebut transaxle.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Diagram+Drivetrain+RWD',
        },
      ]
    },
    quiz: {
      title: 'Latihan Bab III: Transmisi',
      questions: TRANSMISSION_QUESTIONS,
    }
  }
];

export const FINAL_EVALUATION_QUIZ: Quiz = {
  title: 'Evaluasi Akhir',
  questions: [
    SUSPENSION_QUESTIONS[0],
    SUSPENSION_QUESTIONS[1],
    STEERING_QUESTIONS[0],
    STEERING_QUESTIONS[1],
    TRANSMISSION_QUESTIONS[0],
    TRANSMISSION_QUESTIONS[1],
    SUSPENSION_QUESTIONS[2],
    STEERING_QUESTIONS[2],
    TRANSMISSION_QUESTIONS[2],
  ].sort(() => Math.random() - 0.5) // Shuffle questions
};
