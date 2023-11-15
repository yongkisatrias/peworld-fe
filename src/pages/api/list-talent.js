// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/VinDieselMarch09.jpg?w=144",
    fullname: "Dominic Toretto",
    job: "Web Developer",
    location: "Bandung",
    skills: ["HTML", "CSS", "Javascript", "React", "Node.js"],
    desc: "Enthusiastic and detail-oriented web developer with a robust proficiency in both front-end and back-end technologies. Experienced in transforming design concepts into fully functional websites, prioritizing a seamless user experience. Collaborative team player with a track record of success in cross-functional projects. Adept at leveraging HTML, CSS, and JavaScript, along with expertise in popular frameworks like React and Node.js. Demonstrated ability to troubleshoot and optimize code for enhanced site performance. Committed to staying abreast of industry trends and continuously enhancing skills to deliver innovative and high-quality web solutions. Dedicated to contributing technical expertise and creative problems-solving to dynamic development teams.",
  },
  {
    id: 2,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeYt20CHtda-h1piXY3RB-BrPAqlCM0UERA&usqp=CAU",
    fullname: "Brian O'Conner",
    job: "Front End Developer",
    location: "Jakarta",
    skills: ["HTML", "CSS", "Javascript", "React.js"],
    desc: "Dedicated and detail-focused Front-End Developer with a fervor for crafting visually striking and intuitive user interfaces. Well-versed in the trinity of web development languages—HTML, CSS, and JavaScript—possessing a robust proficiency in responsive web design and ensuring seamless cross-browser compatibility. A collaborative team player, adept at working with cross-functional teams to actualize design concepts and enhance overall user experience. Specialized in harnessing the power of modern front-end frameworks and libraries, particularly adept with React.js, to engineer dynamic and interactive web applications. A keen observer of the ever-evolving front-end development landscape, committed to staying abreast of emerging trends and technologies. Passionate about translating innovative ideas into tangible, user-centric solutions, contributing to a dynamic and cutting-edge digital environment.",
  },
  {
    id: 3,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Michelle_Rodriguez_2010.jpg",
    fullname: "Letty Ortiz",
    job: "Back End Developer",
    location: "Yogyakarta",
    skills: ["Java", "Python", "PHP"],
    desc: "Experienced, detail-oriented Back-End Developer with a passion for creating robust and scalable solutions. Proficient in designing, implementing, testing, and maintaining server-side applications and databases. Adept at collaborating with cross-functional teams to drive project success. Skilled in utilizing a variety of programming languages, frameworks, and databases to produce high-quality, efficient, and secure code. Committed to always following technological developments and industry trends to improve project performance. Proven ability to analyze user needs and convert them into reliable and efficient software solutions.",
  },
  {
    id: 4,
    photo:
      "https://media.glamour.com/photos/60d117f29140d7ac45fdfac3/1:1/w_636,h_636,c_limit/Jordana-Brewster-site-river-promo.jpg",
    fullname: "Mia Toretto",
    job: "Android Developer",
    location: "Malang",
    skills: ["Java", "Kotlin"],
    desc: "Results-oriented Android developer with 3 years of experience in designing, implementing, testing and maintaining innovative mobile applications. Adept at collaborating with cross-functional teams to analyze user needs and deliver high-quality software solutions. Proven expertise in the Java and Kotlin programming languages, as well as a deep understanding of the Android SDK, UI/UX design principles, and mobile development best practices.",
  },
  {
    id: 5,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmj8-pq56q41b1j6uZjb6XvLBblY0OSpqt_XjJc_rx3KJ86MMx0-DY5B8W0vBawTnwkw&usqp=CAU",
    fullname: "Vince",
    job: "iOS Developer",
    location: "Balikpapan",
    skills: ["Swift", "Objective-C"],
    desc: "Dedicated and skilled iOS developer with a proven track record of creating dynamic and innovative mobile applications. Proficient in Swift and Objective-C, with a deep understanding of the iOS SDK. Adept at collaborating with cross-functional teams to define, design, and deliver new features. Experienced in the full mobile development lifecycle, from concept to deployment.",
  },
  {
    id: 6,
    photo:
      "https://cps-static.rovicorp.com/2/Open/Getty_Images_406/Person/469009/_derived_jpg_q90_310x470_m0/Johnny%20Strong.jpg",
    fullname: "Leon",
    job: "Game Developer",
    location: "Manado",
    skills: ["C++", "C#"],
    desc: "Enthusiastic and highly skilled Game Developer with a passion for creating immersive and engaging gaming experiences. Proven track record of successfully delivering high-quality games from concept to release, leveraging strong technical skills and creative problem solving. Proficient in a variety of programming languages and game development tools, with a deep understanding of game design principles. Adept at collaborating with cross-functional teams to realize innovative ideas and achieve project milestones. Committed to keeping up with industry trends and technology to consistently deliver cutting-edge gaming experiences.",
  },
  {
    id: 7,
    photo:
      "https://m.media-amazon.com/images/M/MV5BOTU2ZTdhN2YtYTRhNi00MTk1LTg2Y2MtMDc5MDM2OWM0YWMyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    fullname: "Jesse",
    job: "Data Scientist",
    location: "Padang",
    skills: ["Python", "R", "SQL"],
    desc: "Results-oriented and highly skilled Data Scientist with a proven track record of leveraging advanced analytics and machine learning to extract valuable insights from complex data sets. Having a strong foundation in statistical analysis and programming, I excel at turning raw data into actionable business strategies. With an eye for detail and a passion for innovation, I have successfully implemented predictive models and data-driven solutions that contribute to improving decision-making processes. Experienced in leveraging a variety of tools and languages, including Python, R, and SQL, I am adept at designing and implementing end-to-end data pipelines. My ability to communicate complex technical concepts to non-technical stakeholders, coupled with a commitment to continuous learning, positions me as a valuable asset in driving data-driven initiatives within the organization.",
  },
  {
    id: 8,
    photo:
      "https://www.globalgiftgala.com/globalgiftgala/wp-content/uploads/2021/10/rick-yune.jpg",
    fullname: "Johnny Tran",
    job: "UI/UX Designer",
    location: "Batam",
    skills: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Sketch",
      "Adobe Illustrator",
      "MockFlow",
    ],
    desc: "Passionate, detail-oriented UI/UX designer with a proven track record of creating engaging and intuitive digital experiences. Proficient in combining creativity with functionality to produce designs that are visually appealing and user-friendly. Skilled in conducting user research, wireframing, prototyping, and collaborating with cross-functional teams to bring concepts to life. Proficient in industry standard design tools and committed to staying current with emerging design trends. Excel at translating complex ideas into seamless, user-centric interfaces. Passionate about contributing expertise in improving user experience for innovative projects.",
  },
  {
    id: 9,
    photo: "https://www.famousbirthdays.com/headshots/thom-barry-4.jpg",
    fullname: "Agent Bilkins",
    job: "Software Developer",
    location: "Makassar",
    skills: ["Java", "Python", "JavaScript", "Git", "Scrum", "Selenium"],
    desc: "Experienced, results-oriented Software Developer with a strong background in designing, implementing, testing and maintaining innovative software solutions. Proficient in a variety of programming languages and frameworks, with a keen ability to adapt to new technologies. Adept at collaborating with cross-functional teams to analyze user needs and deliver high-quality software applications. Proven track record of successfully translating business needs into technical solutions. Passionate about keeping up with industry trends and continually improving skills to drive project success.",
  },
  {
    id: 10,
    photo: "https://www.famousbirthdays.com/faces/levine-ted-image.jpg",
    fullname: "Sergeant Tanner",
    job: "Mobile App Developer",
    location: "Surakarta",
    skills: ["Swift", "Kotlin", "Flutter "],
    desc: "Results-oriented Mobile App Developer with 5 years of experience in designing, developing and maintaining cutting-edge mobile applications for iOS and Android platforms. Proficient in native and cross-platform development, leveraging a variety of technologies and frameworks.",
  },
  {
    id: 11,
    photo:
      "https://www.etonline.com/sites/default/files/styles/max_640x640/public/images/2022-09/Tyrese_Gibson_GettyImages-1388672370_1280.jpg?h=c673cd1c",
    fullname: "Roman Pearce",
    job: "Machine Learning Engineer",
    location: "Bogor",
    skills: ["Python ", "TensorFlow", "PyTorch"],
    desc: "Results-oriented Machine Learning Engineer with a proven track record of developing and implementing innovative machine learning solutions to solve complex problems. Proficient in designing and implementing scalable models, leveraging a strong background in mathematics, statistics, and programming. Proficient in leveraging various machine learning algorithms and frameworks to extract meaningful insights from data. Experience collaborating with cross-functional teams to deliver solutions that align with business objectives. Passionate about keeping up with developments in artificial intelligence trends and continuously improving skills through continuous learning.",
  },
  {
    id: 12,
    photo:
      "https://d3uqdomqytryhw.cloudfront.net/r/image/ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5Lld5SnpNenBjTDF3dlkyOXVZVzR0ZVRKckxYTjBiM0poWjJVdGQxd3ZabWxzWlhOY0wyTXdYQzgxT1Z3dmJHNHRNakl6TnkxcGJuUmxjblpwWlhjdE1pMDJNRFEyWm1NNU1qRTNOelJqTG1wd1p5SXNJbWx0WVdkbFhDOXFjR1ZuSWwwLjB5bW51ei12YkUxb3dHaG5wUThIZFdlTms2WDNJa2kxT0c5X0NlSzdYSGc=/resize=800x800/image.jpg",
    fullname: "Tej Parker",
    job: "Artificial Intelligence Engineer",
    location: "Ende",
    skills: ["Python", "PyTorch", "TensorFlow"],
    desc: "Dedicated and results-oriented AI engineer with a strong background in machine learning and artificial intelligence. Proficient in developing and applying advanced algorithms to solve complex problems. Experienced across the entire AI project lifecycle, from problem definition and data collection to model training and deployment. Proficient in utilizing a variety of programming languages and frameworks, including Python, TensorFlow, and PyTorch. Demonstrated ability to collaborate with cross-functional teams to deliver innovative solutions that meet business objectives. Proven track record in designing and implementing scalable and efficient AI systems. Eager to contribute technical expertise and passion for AI to drive technological progress.",
  },
  {
    id: 13,
    photo:
      "https://c.wallhere.com/photos/2c/8a/devon_aoki_digital_art_face_portrait_ArtStation_celebrity_long_hair_red_lipstick-2117637.jpg!s1",
    fullname: "Suki",
    job: "Web Developer",
    location: "Ubud",
    skills: ["HTML", "CSS", "Javascript", "React", "Node.js"],
    desc: "Dedicated and detail-oriented Web Developer with a fervent passion for crafting seamless online experiences. Boasting a robust foundation in both front-end and back-end technologies, I specialize in translating design concepts into fully functional websites. My proficiency extends to HTML, CSS, and JavaScript, with expertise in popular frameworks like React and Node.js. I thrive in collaborative, cross-functional environments, working seamlessly with diverse teams to drive project success. I excel at troubleshooting and optimizing code, consistently enhancing site performance. My commitment to staying abreast of industry trends reflects in my continuous efforts to improve and innovate, ensuring the delivery of high-quality web solutions. Committed to contributing technical prowess and creative problem-solving skills, I am eager to bring my passion for development to dynamic teams, where I can leverage my skills to create impactful and innovative digital solutions.",
  },
  {
    id: 14,
    photo: "https://www.aceshowbiz.com/images/photo/james_remar.jpg",
    fullname: "Markham",
    job: "Front End Developer",
    location: "Sabang",
    skills: ["HTML", "CSS", "Javascript", "React.js"],
    desc: "Results-driven Front-End Developer with extensive experience and meticulous attention to detail. Committed to crafting visually stunning and intuitive user interfaces. Well-versed in HTML, CSS, and JavaScript, and adept at implementing responsive web design principles and ensuring cross-browser compatibility. Collaborative team player with a proven track record of translating design concepts into compelling user experiences. Proficient in utilizing modern front-end frameworks like React.js to develop dynamic and interactive web applications. Continuously stay abreast of emerging trends and technologies in the dynamic field of front-end development to ensure cutting-edge solutions. Passionate about optimizing user engagement and consistently enhancing the overall digital experience.",
  },
  {
    id: 15,
    photo:
      "https://s.yimg.com/ny/api/res/1.2/u8GzsmqoqpjzRcJz_Lw4wQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/shefinds_255/67e4aa88a1f4740f5dd6f3ba9c6dabc5",
    fullname: "Monica Fuentes",
    job: "Back End Developer",
    location: "Semarang",
    skills: ["Java", "Python", "PHP"],
    desc: "Results-driven Back-End Developer with a strong dedication to crafting resilient and scalable solutions. Experienced in the end-to-end development process, from conceptualization and design to testing and maintenance of server-side applications and databases. A meticulous professional with a keen eye for detail, consistently delivering high-quality code. Collaborative team player, adept at working across disciplines to ensure the success of projects. Proficient in leveraging a diverse set of programming languages, frameworks, and databases to create efficient and secure software. Committed to staying abreast of technological advancements and industry trends to enhance project performance. Demonstrated ability to analyze user requirements and translate them into robust and efficient software solutions. Passionate about optimizing backend processes to improve overall system performance. Adaptable and quick to learn, dedicated to continuous improvement in both individual skills and project outcomes.",
  },
  {
    id: 16,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMwDCsb1WLTEbW1q1JTsFn-l96vv3KdLNBQ&usqp=CAU",
    fullname: "Orange Julius",
    job: "Android Developer",
    location: "Merauke",
    skills: ["Java", "Kotlin"],
    desc: "Results-driven Android developer with a track record of 3 years in conceptualizing, implementing, testing, and sustaining cutting-edge mobile applications. Proficient in Java and Kotlin programming languages, showcasing a proven ability to deliver high-quality software solutions. Adept at collaborating with cross-functional teams to dissect user requirements and ensure the delivery of exceptional mobile applications. Possesses a profound understanding of the Android SDK, UI/UX design principles, and adheres to mobile development best practices. Committed to continuous learning and staying abreast of emerging technologies to enhance the efficiency and innovation of Android app development.",
  },
  {
    id: 17,
    photo:
      "https://nairobiwire.com/wp-content/uploads/2022/02/michael-ealy-biography.jpg",
    fullname: "Slap Jack",
    job: "iOS Developer",
    location: "Surabaya",
    skills: ["Swift", "Objective-C"],
    desc: "Experienced and proficient iOS Developer with a demonstrated history of crafting dynamic and innovative mobile applications. Specialized in Swift and Objective-C, showcasing an in-depth mastery of the iOS SDK. Recognized for the ability to collaborate seamlessly with cross-functional teams to conceptualize, design, and implement new features. Well-versed in the entire mobile development lifecycle, from initial concept to final deployment. A track record of delivering high-quality and user-centric applications in alignment with project goals and industry best practices. Passionate about staying updated with the latest trends and technologies in iOS development to consistently bring cutting-edge solutions to projects.",
  },
  {
    id: 18,
    photo:
      "https://cms.asset.catchplay.com/CO0007/CO0007-400.jpg?hash=1454326643",
    fullname: "Carter Verone",
    job: "Game Developer",
    location: "Medan",
    skills: ["C++", "C#"],
    desc: "Passionate and skilled Game Developer, dedicated to crafting captivating and immersive gaming adventures. A proven achiever in bringing top-notch games from conception to launch, I blend technical prowess with creative problem-solving. Proficient in diverse programming languages and game development tools, I possess a profound comprehension of game design principles. A collaborative team player, adept at working across functions to transform innovative concepts into reality and meet project milestones. Committed to staying abreast of industry trends and technological advancements, my goal is to consistently deliver cutting-edge gaming experiences that captivate and thrill players.",
  },
  {
    id: 19,
    photo:
      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/lucas-black-1300-24-03-2017-12-31-37.jpg",
    fullname: "Sean Boswell",
    job: "Data Scientist",
    location: "Denpasar",
    skills: ["Python", "R", "SQL"],
    desc: "Results-driven and highly proficient Data Scientist with a demonstrated history of harnessing advanced analytics and machine learning techniques to distill meaningful insights from intricate data sets. Armed with a solid foundation in statistical analysis and programming, I specialize in transforming raw data into actionable business strategies. Meticulous attention to detail, coupled with a fervor for innovation, has fueled my success in implementing predictive models and data-driven solutions that significantly enhance decision-making processes. My expertise extends to a diverse array of tools and languages, with proficiency in Python, R, and SQL. I possess a knack for designing and implementing end-to-end data pipelines, ensuring seamless data flow and processing. A key strength lies in my ability to effectively communicate complex technical concepts to non-technical stakeholders, fostering a collaborative environment that bridges the gap between data science and business objectives.",
  },
  {
    id: 20,
    photo:
      "https://pbs.twimg.com/profile_images/1031814234034778112/Ad3G7t2G_400x400.jpg",
    fullname: "Han Lue",
    job: "UI/UX Designer",
    location: "Bekasi",
    skills: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Sketch",
      "Adobe Illustrator",
      "MockFlow",
    ],
    desc: "Enthusiastic and meticulous UI/UX designer, showcasing a demonstrable history of crafting immersive and user-friendly digital experiences. Adept at seamlessly merging creativity with functionality, resulting in visually captivating designs. Experienced in the entire design process, from comprehensive user research to wireframing, prototyping, and successful collaboration with diverse teams. Proficient in utilizing industry-standard design tools and dedicated to staying abreast of evolving design trends. Excels in transforming intricate concepts into streamlined, user-centric interfaces. Devoted to leveraging expertise to enhance user experiences across innovative projects.",
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
