// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo:
      "https://pyxis.nymag.com/v1/imgs/2d8/3e2/db94e97f6da7f002c53361ae8cba853049-f9-lede.rsquare.w400.jpg",
    fullname: "Dominic Toretto",
    job: "Web Developer",
    location: "Bandung",
    skills: ["HTML", "CSS", "Javascript"],
    desc: "Pengembang Web yang bersemangat dan berorientasi pada detail dengan dasar yang kuat dalam teknologi front-end dan back-end. Mahir dalam menerjemahkan konsep desain ke situs web yang berfungsi penuh, memastikan pengalaman pengguna yang lancar. Mahir berkolaborasi dengan tim lintas fungsi untuk mendorong keberhasilan proyek. Menunjukkan keahlian dalam HTML, CSS, JavaScript, dan kemahiran dalam kerangka kerja populer seperti React dan Node.js. Kemampuan yang terbukti untuk memecahkan masalah dan mengoptimalkan kode untuk meningkatkan kinerja situs. Berkomitmen untuk terus mengikuti perkembangan tren industri dan terus meningkatkan keterampilan untuk memberikan solusi web yang inovatif dan berkualitas tinggi. Bersemangat untuk menyumbangkan kemahiran teknis dan keterampilan pemecahan masalah yang kreatif kepada tim pengembangan yang dinamis.",
  },
  {
    id: 2,
    photo:
      "https://i.pinimg.com/originals/ef/a9/f4/efa9f4823a2871e21e3b97e330a0fd8d.jpg",
    fullname: "Brian O'Conner",
    job: "Front End Developer",
    location: "Yogyakarta",
    skills: ["Javascript", "React.js", "next.js"],
    desc: "Pengembang Front-End yang berpengalaman dan berorientasi pada detail dengan hasrat untuk menciptakan antarmuka yang menarik secara visual dan ramah pengguna. Mahir dalam HTML, CSS, dan JavaScript, dengan dasar yang kuat dalam desain web responsif dan kompatibilitas lintas-browser. Mahir berkolaborasi dengan tim lintas fungsi untuk mewujudkan konsep desain dan meningkatkan pengalaman pengguna secara keseluruhan. Terampil dalam memanfaatkan kerangka kerja dan perpustakaan front-end modern, seperti React.js, untuk membuat aplikasi web yang dinamis dan interaktif. Terus mengikuti perkembangan tren dan teknologi yang muncul dalam lanskap pengembangan front-end yang terus berkembang.",
  },
  {
    id: 3,
    photo:
      "https://i.pinimg.com/originals/21/af/c5/21afc51ec9c9e0de509c3f8daf104065.jpg",
    fullname: "Letty Ortiz",
    job: "Back End Developer",
    location: "Padang",
    skills: ["Java", "Python", "PHP"],
    desc: "Pengembang Back-End yang berpengalaman dan berorientasi pada detail dengan hasrat untuk menciptakan solusi yang kuat dan terukur. Mahir dalam merancang, mengimplementasikan, menguji, dan memelihara aplikasi dan database sisi server. Mahir berkolaborasi dengan tim lintas fungsi untuk mendorong keberhasilan proyek. Terampil dalam memanfaatkan berbagai bahasa pemrograman, kerangka kerja, dan database untuk menghasilkan kode berkualitas tinggi, efisien, dan aman. Berkomitmen untuk selalu mengikuti perkembangan teknologi dan tren industri untuk meningkatkan kinerja proyek. Kemampuan yang terbukti untuk menganalisis kebutuhan pengguna dan mengubahnya menjadi solusi perangkat lunak yang andal dan efisien.",
  },
  {
    id: 4,
    photo:
      "https://c8.alamy.com/compfr/pmbnay/jordana-brewster-car-mia-toretto-dans-furious-7-la-poursuite-de-l-exploitation-globale-dans-la-franchise-imparable-construit-sur-la-vitesse-james-wan-dirige-ce-chapitre-de-la-serie-a-succes-pmbnay.jpg",
    fullname: "Mia Toretto",
    job: "Android Developer",
    location: "Batam",
    skills: ["Java", "Kotlin"],
    desc: "Pengembang Android yang berorientasi pada hasil dengan pengalaman 3 tahun dalam merancang, mengimplementasikan, menguji, dan memelihara aplikasi seluler inovatif. Mahir berkolaborasi dengan tim lintas fungsi untuk menganalisis kebutuhan pengguna dan memberikan solusi perangkat lunak berkualitas tinggi. Keahlian yang terbukti dalam bahasa pemrograman Java dan Kotlin, serta pemahaman mendalam tentang Android SDK, prinsip desain UI/UX, dan praktik terbaik pengembangan seluler.",
  },
  {
    id: 5,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIluOQyjT-NCEJtJeLVJNScDODU0BbqFPOwbVb7hXjkidoCt3A96kvuMHL-V8QWhn9Ccs&usqp=CAU",
    fullname: "Roman Pearce",
    job: "iOS Developer",
    location: "Makassar",
    skills: ["Swift", "Objective-C"],
    desc: "Pengembang iOS yang berdedikasi dan terampil dengan rekam jejak yang terbukti dalam menciptakan aplikasi seluler yang dinamis dan inovatif. Mahir dalam Swift dan Objective-C, dengan pemahaman mendalam tentang iOS SDK. Mahir berkolaborasi dengan tim lintas fungsi untuk menentukan, merancang, dan mengirimkan fitur baru. Berpengalaman dalam siklus hidup pengembangan seluler penuh, mulai dari konsep hingga penerapan.",
  },
  {
    id: 6,
    photo: "https://i1.sndcdn.com/artworks-000415916679-gpv31f-t500x500.jpg",
    fullname: "Tej Parker",
    job: "Game Developer",
    location: "Malang",
    skills: ["C++", "C#"],
    desc: "Pengembang Game yang antusias dan berketerampilan tinggi dengan hasrat untuk menciptakan pengalaman bermain game yang mendalam dan menarik. Rekam jejak yang terbukti berhasil menghadirkan game berkualitas tinggi mulai dari konsep hingga rilis, memanfaatkan keterampilan teknis yang kuat dan pemecahan masalah yang kreatif. Mahir dalam berbagai bahasa pemrograman dan alat pengembangan game, dengan pemahaman mendalam tentang prinsip-prinsip desain game. Mahir berkolaborasi dengan tim lintas fungsi untuk mewujudkan ide-ide inovatif dan mencapai pencapaian proyek. Berkomitmen untuk terus mengikuti tren dan teknologi industri untuk secara konsisten menghadirkan pengalaman bermain game mutakhir.",
  },
  {
    id: 7,
    photo:
      "https://openpsychometrics.org/tests/characters/test-resources/pics/FF/5.jpg",
    fullname: "Han Lue",
    job: "Data Scientist",
    location: "Manado",
    skills: ["Python", "R", "SQL"],
    desc: "Ilmuwan Data yang berorientasi pada hasil dan sangat terampil dengan rekam jejak yang terbukti dalam memanfaatkan analitik tingkat lanjut dan pembelajaran mesin untuk mengekstraksi wawasan berharga dari kumpulan data yang kompleks. Memiliki dasar yang kuat dalam analisis statistik dan pemrograman, saya unggul dalam mengubah data mentah menjadi strategi bisnis yang dapat ditindaklanjuti. Dengan ketelitian terhadap detail dan hasrat terhadap inovasi, saya telah berhasil menerapkan model prediktif dan solusi berbasis data yang berkontribusi pada peningkatan proses pengambilan keputusan. Berpengalaman dalam memanfaatkan beragam alat dan bahasa, termasuk Python, R, dan SQL, saya mahir merancang dan mengimplementasikan saluran data ujung ke ujung. Kemampuan saya untuk mengkomunikasikan konsep teknis yang kompleks kepada pemangku kepentingan non-teknis, ditambah dengan komitmen terhadap pembelajaran berkelanjutan, menempatkan saya sebagai aset berharga dalam mendorong inisiatif berbasis data dalam organisasi.",
  },
  {
    id: 8,
    photo:
      "https://openpsychometrics.org/tests/characters/test-resources/pics/FF/6.jpg",
    fullname: "Gisele Yashar",
    job: "UI/UX Designer",
    location: "Jakarta",
    skills: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Sketch",
      "Adobe Illustrator",
      "MockFlow",
    ],
    desc: "Desainer UI/UX yang penuh gairah dan berorientasi pada detail dengan rekam jejak yang terbukti dalam menciptakan pengalaman digital yang menarik dan intuitif. Mahir dalam memadukan kreativitas dengan fungsionalitas untuk menghasilkan desain yang menarik secara visual dan ramah pengguna. Terampil dalam melakukan riset pengguna, wireframing, pembuatan prototipe, dan berkolaborasi dengan tim lintas fungsi untuk mewujudkan konsep. Mahir dalam alat desain standar industri dan berkomitmen untuk selalu mengikuti tren desain yang sedang berkembang. Unggul dalam menerjemahkan ide-ide kompleks menjadi antarmuka yang mulus dan berpusat pada pengguna. Bersemangat untuk menyumbangkan keahlian dalam meningkatkan pengalaman pengguna untuk proyek-proyek inovatif.",
  },
  {
    id: 9,
    photo:
      "https://pics.craiyon.com/2023-07-18/759dd0272c9649edae47059f5d7c97a8.webp",
    fullname: "Luke Hobbs",
    job: "Software Developer",
    location: "Balikpapan",
    skills: ["Java", "Python", "JavaScript", "Git", "Scrum", "Selenium"],
    desc: "Pengembang Perangkat Lunak yang berpengalaman dan berorientasi pada hasil dengan latar belakang yang kuat dalam merancang, menerapkan, menguji, dan memelihara solusi perangkat lunak inovatif. Mahir dalam berbagai bahasa pemrograman dan kerangka kerja, dengan kemampuan tajam untuk beradaptasi dengan teknologi baru. Mahir berkolaborasi dengan tim lintas fungsi untuk menganalisis kebutuhan pengguna dan menghadirkan aplikasi perangkat lunak berkualitas tinggi. Rekam jejak yang terbukti berhasil menerjemahkan kebutuhan bisnis menjadi solusi teknis. Bersemangat untuk mengikuti tren industri dan terus meningkatkan keterampilan untuk mendorong keberhasilan proyek.",
  },
  {
    id: 10,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2KS4EN9LHzssp_Gv1ARdwXdPw4N_LTQT_gPnX_jwb9DcTO5XkbJPjwjI_XDQ5j920oc&usqp=CAU",
    fullname: "Deckard Shaw",
    job: "Mobile App Developer",
    location: "Surakarta",
    skills: ["Swift", "Kotlin", "Flutter "],
    desc: "Pengembang Aplikasi Seluler yang berorientasi pada hasil dengan pengalaman 5 tahun dalam merancang, mengembangkan, dan memelihara aplikasi seluler mutakhir untuk platform iOS dan Android. Mahir dalam pengembangan asli dan lintas platform, memanfaatkan beragam teknologi dan kerangka kerja.",
  },
  {
    id: 11,
    photo:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e637597-0f5f-4110-b4bb-604f040208c5/dg9ve8i-6e7d3b43-f6fd-4263-8451-eb313aabe829.jpg/v1/crop/w_92,h_92,x_0,y_12,scl_0.11979166666667,q_70,strp/mila_kunis_by_rhyleah187_dg9ve8i-92s.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcLzJlNjM3NTk3LTBmNWYtNDExMC1iNGJiLTYwNGYwNDAyMDhjNVwvZGc5dmU4aS02ZTdkM2I0My1mNmZkLTQyNjMtODQ1MS1lYjMxM2FhYmU4MjkuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mVkf4BLPPQbcCKxrENckS7nvvfC8e7l4hL8y-Dx5Soo",
    fullname: "Ramsey",
    job: "Machine Learning Engineer",
    location: "Bogor",
    skills: ["Python ", "TensorFlow", "PyTorch"],
    desc: "Insinyur Pembelajaran Mesin yang berorientasi pada hasil dengan rekam jejak yang terbukti dalam mengembangkan dan menerapkan solusi pembelajaran mesin inovatif untuk memecahkan masalah yang kompleks. Mahir dalam merancang dan menerapkan model yang dapat diskalakan, memanfaatkan latar belakang yang kuat dalam matematika, statistik, dan pemrograman. Mahir dalam memanfaatkan berbagai algoritme dan kerangka kerja pembelajaran mesin untuk mengekstrak wawasan bermakna dari data. Berpengalaman berkolaborasi dengan tim lintas fungsi untuk memberikan solusi yang selaras dengan tujuan bisnis. Bersemangat untuk mengikuti perkembangan tren kecerdasan buatan dan terus meningkatkan keterampilan melalui pembelajaran berkelanjutan.",
  },
  {
    id: 12,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ey31lpi_u5e_FHkztle-pbTw2uAFeCHqj4BPKbq2-Kg-ASyRC0ns38gecArZDyoG6qo&usqp=CAU",
    fullname: "Jakob Toretto",
    job: "Artificial Intelligence Engineer",
    location: "Ende",
    skills: ["Python", "PyTorch", "TensorFlow"],
    desc: "Insinyur AI yang berdedikasi dan berorientasi pada hasil dengan latar belakang yang kuat dalam pembelajaran mesin dan kecerdasan buatan. Mahir dalam mengembangkan dan menerapkan algoritma mutakhir untuk memecahkan masalah yang kompleks. Berpengalaman di seluruh siklus hidup proyek AI, mulai dari definisi masalah dan pengumpulan data hingga pelatihan dan penerapan model. Mahir memanfaatkan berbagai bahasa pemrograman dan kerangka kerja, termasuk Python, TensorFlow, dan PyTorch. Menunjukkan kemampuan untuk berkolaborasi dengan tim lintas fungsi untuk memberikan solusi inovatif yang memenuhi tujuan bisnis. Rekam jejak yang terbukti dalam merancang dan mengimplementasikan sistem AI yang skalabel dan efisien. Bersemangat untuk menyumbangkan keahlian teknis dan semangat terhadap AI untuk mendorong kemajuan teknologi.",
  },
];

export default function handler(req, res) {
  if (req.query.id) {
    res.status(200).json({
      status: true,
      message: "Get data success",
      data: listData?.find((item) => item?.id === parseInt(req.query.id)),
    });
  } else {
    res
      .status(200)
      .json({ status: true, message: "Get data success", data: listData });
  }
}
