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
    desc: "Passionate and detail-oriented Web Developer with a solid foundation in front-end and back-end technologies. Proficient in translating design concepts into fully functional websites, ensuring a seamless user experience. Adept at collaborating with cross-functional teams to drive project success. Demonstrated expertise in HTML, CSS, JavaScript, and proficiency in popular frameworks such as React and Node.js. Proven ability to troubleshoot and optimize code for improved site performance. Committed to staying updated on industry trends and continuously enhancing skills to deliver innovative and high-quality web solutions. Eager to contribute technical proficiency and creative problem-solving skills to a dynamic development team.",
  },
  {
    id: 2,
    photo:
      "https://i.pinimg.com/originals/ef/a9/f4/efa9f4823a2871e21e3b97e330a0fd8d.jpg",
    fullname: "Brian O'Conner",
    job: "Front End Developer",
    location: "Yogyakarta",
    skills: ["Javascript", "React.js", "next.js"],
    desc: "Experienced and detail-oriented Front-End Developer with a passion for crafting visually appealing and user-friendly interfaces. Proficient in HTML, CSS, and JavaScript, with a strong foundation in responsive web design and cross-browser compatibility. Adept at collaborating with cross-functional teams to bring design concepts to life and enhance overall user experience. Skilled in utilizing modern front-end frameworks and libraries, such as React.js, to create dynamic and interactive web applications. Continuously staying updated with emerging trends and technologies in the ever-evolving landscape of front-end development.",
  },
  {
    id: 3,
    photo:
      "https://i.pinimg.com/originals/21/af/c5/21afc51ec9c9e0de509c3f8daf104065.jpg",
    fullname: "Letty Ortiz",
    job: "Back End Developer",
    location: "Padang",
    skills: ["Java", "Python", "PHP"],
    desc: "Experienced and detail-oriented Back-End Developer with a passion for crafting robust and scalable solutions. Proficient in designing, implementing, testing, and maintaining server-side applications and databases. Adept at collaborating with cross-functional teams to drive project success. Skilled in utilizing a variety of programming languages, frameworks, and databases to deliver high-quality, efficient, and secure code. Committed to staying current with emerging technologies and industry trends to enhance project performance. Proven ability to analyze user requirements and transform them into reliable and efficient software solutions.",
  },
  {
    id: 4,
    photo:
      "https://c8.alamy.com/compfr/pmbnay/jordana-brewster-car-mia-toretto-dans-furious-7-la-poursuite-de-l-exploitation-globale-dans-la-franchise-imparable-construit-sur-la-vitesse-james-wan-dirige-ce-chapitre-de-la-serie-a-succes-pmbnay.jpg",
    fullname: "Mia Toretto",
    job: "Android Developer",
    location: "Batam",
    skills: ["Java", "Kotlin"],
    desc: "Results-driven Android Developer with 3 years of experience in designing, implementing, testing, and maintaining innovative mobile applications. Adept at collaborating with cross-functional teams to analyze user requirements and deliver high-quality software solutions. Proven expertise in Java and Kotlin programming languages, along with a deep understanding of Android SDK, UI/UX design principles, and mobile development best practices.",
  },
  {
    id: 5,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIluOQyjT-NCEJtJeLVJNScDODU0BbqFPOwbVb7hXjkidoCt3A96kvuMHL-V8QWhn9Ccs&usqp=CAU",
    fullname: "Roman Pearce",
    job: "iOS Developer",
    location: "Makassar",
    skills: ["Swift", "Objective-C"],
    desc: "Dedicated and skilled iOS developer with a proven track record of creating dynamic and innovative mobile applications. Proficient in Swift and Objective-C, with a deep understanding of the iOS SDK. Adept at collaborating with cross-functional teams to define, design, and ship new features. Experienced in the full mobile development lifecycle, from concept to deployment.",
  },
  {
    id: 6,
    photo: "https://i1.sndcdn.com/artworks-000415916679-gpv31f-t500x500.jpg",
    fullname: "Tej Parker",
    job: "Game Developer",
    location: "Malang",
    skills: ["C++", "C#"],
    desc: "Enthusiastic and highly skilled Game Developer with a passion for creating immersive and engaging gaming experiences. Proven track record of successfully delivering high-quality games from concept to release, utilizing strong technical skills and creative problem-solving. Proficient in a variety of programming languages and game development tools, with a deep understanding of game design principles. Adept at collaborating with cross-functional teams to bring innovative ideas to life and achieve project milestones. Committed to staying abreast of industry trends and technologies to consistently deliver cutting-edge gaming experiences.",
  },
  {
    id: 7,
    photo:
      "https://openpsychometrics.org/tests/characters/test-resources/pics/FF/5.jpg",
    fullname: "Han Lue",
    job: "Data Scientist",
    location: "Manado",
    skills: ["Python", "R", "SQL"],
    desc: "Results-driven and highly skilled Data Scientist with a proven track record of leveraging advanced analytics and machine learning to extract valuable insights from complex datasets. Possessing a solid foundation in statistical analysis and programming, I excel in transforming raw data into actionable business strategies. With a keen eye for detail and a passion for innovation, I have successfully implemented predictive models and data-driven solutions that have contributed to enhanced decision-making processes. Experienced in utilizing a diverse range of tools and languages, including Python, R, and SQL, I am adept at designing and implementing end-to-end data pipelines. My ability to communicate complex technical concepts to non-technical stakeholders, coupled with a commitment to continuous learning, positions me as a valuable asset in driving data-driven initiatives within organizations.",
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
    desc: "Passionate and detail-oriented UI/UX Designer with a proven track record of creating engaging and intuitive digital experiences. Adept at blending creativity with functionality to deliver visually appealing and user-friendly designs. Skilled in conducting user research, wireframing, prototyping, and collaborating with cross-functional teams to bring concepts to life. Proficient in industry-standard design tools and committed to staying abreast of emerging design trends. Excels in translating complex ideas into seamless, user-centric interfaces. Eager to contribute expertise in enhancing user experiences for innovative projects.",
  },
  {
    id: 9,
    photo:
      "https://pics.craiyon.com/2023-07-18/759dd0272c9649edae47059f5d7c97a8.webp",
    fullname: "Luke Hobbs",
    job: "Software Developer",
    location: "Balikpapan",
    skills: ["Java", "Python", "JavaScript", "Git", "Scrum", "Selenium"],
    desc: "Experienced and results-driven Software Developer with a strong background in designing, implementing, testing, and maintaining innovative software solutions. Proficient in various programming languages and frameworks, with a keen ability to adapt to emerging technologies. Adept at collaborating with cross-functional teams to analyze user needs and deliver high-quality software applications. Proven track record of successfully translating business requirements into technical solutions. Passionate about staying abreast of industry trends and continuously enhancing skills to drive project success.",
  },
  {
    id: 10,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2KS4EN9LHzssp_Gv1ARdwXdPw4N_LTQT_gPnX_jwb9DcTO5XkbJPjwjI_XDQ5j920oc&usqp=CAU",
    fullname: "Deckard Shaw",
    job: "Mobile App Developer",
    location: "Surakarta",
    skills: ["Swift", "Kotlin", "Flutter "],
    desc: "Results-oriented Mobile App Developer with 5 years of experience in designing, developing, and maintaining cutting-edge mobile applications for iOS and Android platforms. Proficient in both native and cross-platform development, utilizing a diverse set of technologies and frameworks.",
  },
  {
    id: 11,
    photo:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e637597-0f5f-4110-b4bb-604f040208c5/dg9ve8i-6e7d3b43-f6fd-4263-8451-eb313aabe829.jpg/v1/crop/w_92,h_92,x_0,y_12,scl_0.11979166666667,q_70,strp/mila_kunis_by_rhyleah187_dg9ve8i-92s.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcLzJlNjM3NTk3LTBmNWYtNDExMC1iNGJiLTYwNGYwNDAyMDhjNVwvZGc5dmU4aS02ZTdkM2I0My1mNmZkLTQyNjMtODQ1MS1lYjMxM2FhYmU4MjkuanBnIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mVkf4BLPPQbcCKxrENckS7nvvfC8e7l4hL8y-Dx5Soo",
    fullname: "Ramsey",
    job: "Machine Learning Engineer",
    location: "Bogor",
    skills: ["Python ", "TensorFlow", "PyTorch"],
    desc: "Results-driven Machine Learning Engineer with a proven track record of developing and implementing innovative machine learning solutions to solve complex problems. Proficient in designing and deploying scalable models, leveraging a strong background in mathematics, statistics, and programming. Adept at utilizing a variety of machine learning algorithms and frameworks to extract meaningful insights from data. Experienced in collaborating with cross-functional teams to deliver solutions that align with business objectives. Passionate about staying current with emerging trends in artificial intelligence and continuously enhancing skills through ongoing learning.",
  },
  {
    id: 12,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ey31lpi_u5e_FHkztle-pbTw2uAFeCHqj4BPKbq2-Kg-ASyRC0ns38gecArZDyoG6qo&usqp=CAU",
    fullname: "Jakob Toretto",
    job: "Artificial Intelligence Engineer",
    location: "Ende",
    skills: ["Python", "PyTorch", "TensorFlow"],
    desc: "Dedicated and results-oriented AI Engineer with a strong background in machine learning and artificial intelligence. Proficient in developing and implementing cutting-edge algorithms to solve complex problems. Experienced in the entire AI project lifecycle, from problem definition and data collection to model training and deployment. Adept at utilizing a variety of programming languages and frameworks, including Python, TensorFlow, and PyTorch. Demonstrated ability to collaborate with cross-functional teams to deliver innovative solutions that meet business objectives. Proven track record in designing and implementing scalable and efficient AI systems. Eager to contribute technical expertise and passion for AI to drive advancements in technology.",
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
