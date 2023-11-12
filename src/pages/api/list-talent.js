// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/2/22/Kazuma-anime.png/revision/latest/top-crop/width/200/height/150?cb=20180328150146",
    fullname: "Satou Kazuma",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/1/14/Aqua-anime.png/revision/latest/top-crop/width/200/height/150?cb=20180328145536",
    fullname: "Aqua",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/d/d9/Darkness-anime.png/revision/latest/top-crop/width/200/height/150?cb=20180502130740",
    fullname: "Darkness",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/3/3f/Megumin-anime.png/revision/latest/top-crop/width/200/height/150?cb=20180328143334",
    fullname: "Megumin",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/b/b3/Wolbach_Anime.jpg/revision/latest/top-crop/width/200/height/150?cb=20230405202017",
    fullname: "Wolbach",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/0/02/Sylvia-anime.png/revision/latest/top-crop/width/200/height/150?cb=20210319135408",
    fullname: "Sylvia",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/c/c0/Yunyun-anime.png/revision/latest/top-crop/width/200/height/150?cb=20180328170203",
    fullname: "Yunyun",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/c/cc/Eris_Anime.png/revision/latest/top-crop/width/200/height/150?cb=20210319135959",
    fullname: "Eris",
    jojob: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/c/cb/Wiz-anime.png/revision/latest/smart/width/371/height/332?cb=20180328171357",
    fullname: "Wiz",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/4/40/Beldia-anime.png/revision/latest/smart/width/371/height/332?cb=20180328175528",
    fullname: "Beldia",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/a/ad/Chomusuke_Anime.png/revision/latest/smart/width/371/height/332?cb=20230921104255",
    fullname: "Chomusuke",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    photo:
      "https://static.wikia.nocookie.net/konosuba/images/6/69/Hans_Anime.png/revision/latest/smart/width/371/height/332?cb=20170317125327",
    fullname: "Hans",
    job: "Web Developer",
    location: "Tangerang",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function handler(req, res) {
  res
    .status(200)
    .json({ status: true, message: "Get data success", data: listData });
}
