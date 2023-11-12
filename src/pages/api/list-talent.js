// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Satou Kazuma",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 2,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Aqua",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 3,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Darkness",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Megumin",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Wolbach",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 6,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Sylvia",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 7,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Yunyun",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 8,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Eris",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 9,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Wiz",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 10,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Beldia",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 11,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Chomusuke",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 12,
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fullname: "Hans",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
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
