
import type { Chapter, Quiz, Question } from './types';
import { QuestionType } from './types';
import { SuspensionIcon, SteeringIcon, TransmissionIcon } from './components/icons';

const SUSPENSION_QUESTIONS: Question[] = [
  {
    text: "Komponen yang berfungsi meredam osilasi (ayunan) pegas setelah menyerap kejutan dari jalan adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Pegas (Spring)" }, { text: "Shock Absorber" }, { text: "Stabilizer Bar" }, { text: "Control Arm" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Manakah keuntungan utama dari suspensi independen dibandingkan suspensi rigid?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Lebih kuat menahan beban berat" }, { text: "Konstruksi lebih sederhana" }, { text: "Kenyamanan dan handling lebih baik" }, { text: "Biaya perawatan lebih murah" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Fungsi dari 'stabilizer bar' pada sistem suspensi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Menopang berat kendaraan" }, { text: "Menyerap getaran dari jalan" }, { text: "Mengurangi body roll saat berbelok" }, { text: "Menghubungkan roda dengan sasis" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Jenis suspensi yang paling umum digunakan pada roda depan mobil penumpang modern karena desainnya yang ringkas adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Rigid Axle" }, { text: "Leaf Spring" }, { text: "MacPherson Strut" }, { text: "Torsion Beam" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Apa yang akan terjadi jika 'ball joint' pada suspensi mengalami keausan parah?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Rem menjadi tidak pakem" }, { text: "Timbul bunyi berdecit saat berbelok dan handling tidak stabil" }, { text: "Akselerasi kendaraan menurun" }, { text: "Mesin menjadi lebih panas" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Sudut 'camber' negatif pada roda berarti...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Bagian atas roda miring ke luar" }, { text: "Bagian atas roda miring ke dalam" }, { text: "Bagian depan roda miring ke dalam" }, { text: "Roda tegak lurus sempurna" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Apa fungsi utama dari 'control arm' (lengan kontrol)?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Meredam getaran pegas" }, { text: "Menjaga agar roda tetap pada posisinya saat bergerak naik-turun" }, { text: "Mengurangi kemiringan bodi mobil" }, { text: "Memungkinkan roda untuk berbelok" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Jenis pegas yang paling banyak digunakan pada kendaraan komersial seperti truk karena kekuatannya adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Pegas koil (Coil spring)" }, { text: "Pegas daun (Leaf spring)" }, { text: "Batang torsi (Torsion bar)" }, { text: "Pegas udara (Air spring)" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Gejala umum yang menunjukkan shock absorber sudah lemah atau rusak adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Setir terasa berat" }, { text: "Mobil terasa limbung dan memantul berlebihan" }, { text: "Terdengar suara mendengung dari roda" }, { text: "Bahan bakar menjadi boros" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Suspensi aktif (electronic suspension) memiliki kelebihan yaitu...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Sangat murah dan mudah diperbaiki" }, { text: "Tidak memerlukan perawatan sama sekali" }, { text: "Dapat menyesuaikan tingkat kekerasan secara otomatis" }, { text: "Hanya bisa digunakan di jalan lurus" } ],
    correctAnswerIndex: 2,
  }
];

const STEERING_QUESTIONS: Question[] = [
  {
    text: "Jenis sistem kemudi yang mengubah gerak putar dari steering column menjadi gerak geser secara langsung melalui sepasang roda gigi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Recirculating Ball" }, { text: "Rack and Pinion" }, { text: "Worm and Sector" }, { text: "Power Steering Hidrolik" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Komponen yang menghubungkan ujung steering rack (atau tie rod) ke steering knuckle pada roda adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Steering column" }, { text: "Universal joint" }, { text: "Tie rod end" }, { text: "Pitman arm" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Apa keuntungan utama sistem Electric Power Steering (EPS) dibandingkan Hydraulic Power Steering (HPS)?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Lebih bertenaga saat kecepatan tinggi" }, { text: "Lebih efisien bahan bakar karena tidak membebani mesin terus-menerus" }, { text: "Perawatannya lebih rumit" }, { text: "Feedback ke pengemudi lebih baik" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Jika bagian depan roda saling mengarah ke dalam (seperti kaki manusia yang 'masuk'), ini disebut sudut...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Camber positif" }, { text: "Caster negatif" }, { text: "Toe-in" }, { text: "Toe-out" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Adanya 'free play' atau 'speling' yang berlebihan pada roda kemudi biasanya disebabkan oleh...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Tekanan ban terlalu tinggi" }, { text: "Kampas rem sudah aus" }, { text: "Keausan pada komponen steering linkage (tie rod, ball joint, dll)" }, { text: "Cairan power steering kotor" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Fungsi dari universal joint (cross joint) pada steering column adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Meringankan putaran kemudi" }, { text: "Menyerap getaran dari roda" }, { text: "Memungkinkan transfer putaran meski ada perubahan sudut pada poros" }, { text: "Mengunci posisi kemudi saat parkir" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Pada sistem HPS, komponen yang menghasilkan tekanan hidrolik adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Motor listrik" }, { text: "Pompa power steering" }, { text: "Steering rack" }, { text: "Reservoir tank" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Apa yang terjadi jika sabuk (belt) yang menggerakkan pompa power steering putus?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Rem tidak berfungsi" }, { text: "Mesin akan mati" }, { text: "Kemudi menjadi sangat berat untuk diputar" }, { text: "Lampu indikator oli menyala" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Gejala seperti kemudi yang bergetar saat kecepatan tertentu (shimmy) seringkali disebabkan oleh...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Roda yang tidak balance (tidak seimbang)" }, { text: "Oli mesin kurang" }, { text: "Busi kotor" }, { text: "Air radiator habis" } ],
    correctAnswerIndex: 0,
  },
  {
    text: "Sistem kemudi modern seringkali memiliki 'steering ratio' yang variabel, artinya...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Ukuran roda kemudi bisa diubah" }, { text: "Responsivitas kemudi berubah tergantung kecepatan kendaraan" }, { text: "Hanya bisa digunakan untuk satu arah belok" }, { text: "Sistem kemudi terbuat dari berbagai jenis logam" } ],
    correctAnswerIndex: 1,
  }
];

const TRANSMISSION_QUESTIONS: Question[] = [
  {
    text: "Fungsi utama dari sistem transmisi pada kendaraan adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Menghasilkan tenaga mesin" }, { text: "Mengatur rasio putaran mesin ke roda untuk mendapatkan torsi dan kecepatan" }, { text: "Mengerem laju kendaraan" }, { text: "Mengarahkan laju kendaraan" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Pada transmisi manual, komponen yang berfungsi untuk memutus dan menyambungkan aliran tenaga dari mesin ke transmisi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Gearbox" }, { text: "Poros propeller" }, { text: "Kopling (Clutch)" }, { text: "Diferensial" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Komponen pada transmisi otomatis konvensional yang berfungsi seperti kopling fluida adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Valve Body" }, { text: "Planetary Gear Set" }, { text: "Torque Converter" }, { text: "Solenoid" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Keunggulan utama transmisi jenis CVT (Continuously Variable Transmission) adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Perpindahan gigi sangat terasa hentakannya" }, { text: "Sangat kuat untuk beban berat" }, { text: "Mampu memberikan akselerasi yang halus tanpa jeda perpindahan gigi" }, { text: "Perawatan sangat mudah dan murah" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Fungsi dari diferensial (gardan) adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Menambah tenaga mesin" }, { text: "Memungkinkan roda kiri dan kanan berputar dengan kecepatan berbeda saat berbelok" }, { text: "Mengganti gigi secara otomatis" }, { text: "Memutus putaran mesin" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Pada kendaraan dengan penggerak roda depan (FWD), unit yang menggabungkan transmisi dan diferensial disebut...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Gearbox" }, { text: "Transaxle" }, { text: "Transfer case" }, { text: "Axle shaft" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Gejala kopling selip pada transmisi manual adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Pedal kopling terasa sangat keras" }, { text: "Putaran mesin (RPM) naik tinggi tetapi laju kendaraan tidak bertambah signifikan" }, { text: "Sulit memindahkan tuas persneling" }, { text: "Terdengar bunyi keras saat pedal kopling diinjak" } ],
    correctAnswerIndex: 1,
  },
  {
    text: "Apa fungsi dari 'synchronizer' atau 'synchromesh' pada gearbox transmisi manual?",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Melumasi roda gigi" }, { text: "Menambah rasio gigi" }, { text: "Menyamakan putaran gigi sebelum terhubung agar perpindahan mulus" }, { text: "Mendinginkan oli transmisi" } ],
    correctAnswerIndex: 2,
  },
  {
    text: "Pada transmisi otomatis, komponen yang berfungsi sebagai 'otak' yang mengatur tekanan hidrolik untuk perpindahan gigi adalah...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Torque converter" }, { text: "Planetary gear" }, { text: "Oil pump" }, { text: "Valve body" } ],
    correctAnswerIndex: 3,
  },
  {
    text: "Transmisi dual-clutch (DCT) menawarkan keuntungan berupa...",
    type: QuestionType.MULTIPLE_CHOICE,
    options: [ { text: "Kenyamanan paling tinggi di antara semua transmisi" }, { text: "Harga paling murah" }, { text: "Perpindahan gigi yang sangat cepat" }, { text: "Tidak memerlukan oli sama sekali" } ],
    correctAnswerIndex: 2,
  }
];

export const CHAPTERS: Chapter[] = [
  {
    id: 'suspensi',
    title: 'Bab I: Sistem Suspensi',
    icon: SuspensionIcon,
    content: {
      imageUrl: 'https://placehold.co/800x400/1e293b/94a3b8?text=Sistem+Suspensi+Kendaraan',
      summary: 'Sistem suspensi adalah rangkaian komponen yang menghubungkan roda dengan sasis kendaraan. Fungsinya lebih dari sekadar memberikan kenyamanan; sistem ini krusial untuk keselamatan berkendara. Tugas utamanya adalah menyerap getaran dan guncangan dari permukaan jalan, menjaga agar roda selalu memiliki traksi optimal, serta mengontrol dinamika pergerakan bodi kendaraan (body roll, pitch, dan dive) saat bermanuver, berakselerasi, atau mengerem. Suspensi yang baik menyeimbangkan antara kenyamanan (soft) dan pengendalian (stiff).',
      subSections: [
        {
          title: 'Jenis-Jenis Suspensi',
          text: 'Secara umum, ada dua kategori besar: Suspensi Dependen (Rigid), di mana roda kiri dan kanan terhubung oleh satu poros kaku, sehingga gerakan satu roda mempengaruhi roda lainnya. Tipe ini sangat kuat dan biasa dipakai di kendaraan niaga. Kategori kedua adalah Suspensi Independen, di mana setiap roda bisa bergerak bebas. Ini memberikan kenyamanan dan handling superior. Contoh populernya adalah MacPherson Strut (umum di roda depan), Double Wishbone (kinerja tinggi), dan Multi-Link (kenyamanan dan handling optimal).',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Suspensi+Dependen+vs+Independen',
        },
        {
          title: 'Komponen Utama dan Fungsinya',
          text: 'Suspensi terdiri dari: 1) Pegas (Spring): Menopang berat mobil dan menyerap guncangan awal. Jenisnya ada pegas koil, pegas daun, dan batang torsi. 2) Peredam Kejut (Shock Absorber): Meredam osilasi atau ayunan dari pegas agar kendaraan tidak terus memantul. 3) Lengan Kontrol (Control Arm): Menghubungkan knuckle roda ke sasis dan mengatur geometri pergerakan roda. 4) Ball Joint: Bekerja seperti sendi, memungkinkan roda berbelok dan bergerak naik-turun. 5) Stabilizer Bar: Mengurangi kemiringan bodi mobil (body roll) saat berbelok dengan menghubungkan suspensi kiri dan kanan.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Komponen-Komponen+Suspensi',
        },
        {
          title: 'Geometri Roda (Wheel Alignment)',
          text: 'Untuk kinerja suspensi dan kemudi yang optimal, serta mencegah keausan ban yang tidak merata, geometri roda harus diatur dengan benar. Ada tiga pengaturan utama: 1) Camber: Sudut kemiringan roda bagian atas jika dilihat dari depan. 2) Caster: Sudut kemiringan sumbu putar kemudi jika dilihat dari samping. 3) Toe (Toe-in/Toe-out): Perbedaan jarak antara roda bagian depan dan belakang jika dilihat dari atas. Pengaturan yang tepat memastikan stabilitas, respons kemudi yang baik, dan umur pakai ban yang panjang.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Camber,+Caster,+Toe',
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
      summary: 'Sistem kemudi berfungsi untuk mengubah input putaran dari roda kemudi (steering wheel) oleh pengemudi menjadi gerakan sudut pada roda depan, sehingga memungkinkan kendaraan untuk berbelok. Sistem kemudi modern dirancang untuk menjadi presisi, responsif, dan memberikan feedback yang cukup kepada pengemudi. Selain itu, sistem bantuan tenaga (power steering) telah menjadi standar untuk meringankan usaha yang dibutuhkan untuk memutar kemudi.',
      subSections: [
        {
          title: 'Jenis Sistem Kemudi',
          text: 'Jenis yang paling dominan pada mobil penumpang saat ini adalah Rack and Pinion. Sistem ini sederhana, ringan, dan memberikan feeling kemudi yang direct. Roda gigi pinion yang terhubung ke poros kemudi menggerakkan batang bergerigi (rack) ke kiri atau kanan. Gerakan rack ini diteruskan oleh tie rod untuk membelokkan roda. Jenis yang lebih tua, Recirculating Ball, lebih kuat dan tahan lama, sehingga masih digunakan pada beberapa truk dan SUV besar.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Diagram+Rack+and+Pinion',
        },
        {
          title: 'Power Steering: HPS vs EPS',
          text: 'Power steering membantu meringankan putaran kemudi. Ada dua jenis utama: 1) Hydraulic Power Steering (HPS) menggunakan pompa yang digerakkan oleh mesin untuk mensirkulasikan fluida bertekanan tinggi yang membantu menggerakkan steering rack. 2) Electric Power Steering (EPS) menggunakan motor listrik untuk memberikan bantuan. EPS lebih unggul karena lebih efisien (hanya bekerja saat dibutuhkan), tidak membebani mesin, dan memungkinkan integrasi dengan fitur bantuan pengemudi canggih (ADAS).',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Perbandingan+HPS+vs+EPS',
        },
        {
          title: 'Diagnosa Umum Sistem Kemudi',
          text: 'Beberapa masalah umum pada sistem kemudi meliputi: 1) Kemudi terasa berat, bisa disebabkan oleh tekanan ban kurang, level fluida HPS rendah, atau masalah pada pompa/motor. 2) Speling (free play) berlebih, biasanya akibat keausan pada tie rod end, ball joint, atau steering rack. 3) Bunyi tidak normal saat berbelok, bisa berasal dari pompa HPS yang kekurangan fluida atau kerusakan pada komponen suspensi/kemudi. 4) Roda tidak lurus setelah berbelok, mengindikasikan perlunya wheel alignment.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Diagnosa+Masalah+Kemudi',
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
      summary: 'Sistem transmisi adalah komponen vital dalam powertrain yang berfungsi untuk memanipulasi torsi dan kecepatan putaran yang dihasilkan mesin sebelum disalurkan ke roda. Dengan adanya transmisi, kendaraan dapat mulai bergerak dari diam (membutuhkan torsi besar), melaju dengan kecepatan tinggi (membutuhkan putaran tinggi), dan berjalan efisien di berbagai kondisi. Transmisi pada dasarnya adalah sebuah gearbox dengan berbagai pilihan rasio gigi.',
      subSections: [
        {
          title: 'Transmisi Manual (MT)',
          text: 'Pada transmisi manual, pengemudi secara aktif memilih rasio gigi menggunakan tuas persneling dan pedal kopling. Kopling (clutch) berfungsi sebagai saklar mekanis untuk memutus sementara aliran tenaga dari mesin ke gearbox, sehingga memungkinkan perpindahan gigi yang mulus. Di dalam gearbox, terdapat rangkaian roda gigi dan synchronizer yang menyamakan putaran gigi sebelum terhubung untuk mencegah suara kasar (gearknock).',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=Mekanisme+Transmisi+Manual',
        },
        {
          title: 'Jenis-Jenis Transmisi Otomatis',
          text: 'Transmisi otomatis modern sangat beragam: 1) Otomatis Konvensional (AT): Menggunakan torque converter sebagai pengganti kopling dan planetary gear set untuk rasio gigi. Perpindahan diatur secara hidrolik. 2) CVT (Continuously Variable Transmission): Tidak memiliki gigi fisik, melainkan menggunakan sepasang puli dan sabuk baja untuk menciptakan rasio yang variabel secara tak terbatas, hasilnya adalah akselerasi yang sangat halus. 3) DCT (Dual-Clutch Transmission): Secara mekanis mirip transmisi manual, tetapi memiliki dua kopling yang bekerja secara otomatis untuk gigi ganjil dan genap, memungkinkan perpindahan gigi yang sangat cepat.',
          imageUrl: 'https://placehold.co/600x300/1e293b/94a3b8?text=AT,+CVT,+dan+DCT',
        },
        {
          title: 'Komponen Drivetrain Lainnya',
          text: 'Tenaga dari transmisi disalurkan ke roda melalui drivetrain. Pada mobil RWD (Rear-Wheel Drive), tenaga disalurkan melalui poros propeller ke diferensial (gardan) belakang, lalu ke roda melalui as roda (axle shaft). Pada mobil FWD (Front-Wheel Drive), transmisi dan diferensial digabung menjadi satu unit kompak yang disebut transaxle. Untuk mobil 4WD/AWD, terdapat transfer case yang membagi tenaga ke roda depan dan belakang.',
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

// Combine questions from all chapters for the final evaluation
const allQuestions = [
    ...SUSPENSION_QUESTIONS,
    ...STEERING_QUESTIONS,
    ...TRANSMISSION_QUESTIONS,
];

export const FINAL_EVALUATION_QUIZ: Quiz = {
  title: 'Evaluasi Akhir',
  questions: allQuestions.sort(() => Math.random() - 0.5).slice(0, 20) // Shuffle and take 20 random questions
};
