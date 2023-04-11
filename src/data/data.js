import uuid from "react-uuid";

export const allPosts = [
  {
    id: 1,
    img: "https://nairametrics.com/wp-content/uploads/2021/09/FG-to-use-space-technology-to-boost-Agriculture-e1631547776336.jpg?resize=750,375",
    category: "Economy",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 123,
  },
  {
    id: 2,
    img: "https://nairametrics.com/wp-content/uploads/2018/05/Transcorp.jpg?resize=750,375",
    category: "Politics",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 123,
  },
  {
    id: 3,
    img: "https://nairametrics.com/wp-content/uploads/2018/08/Standard-Alliance-Insurance.jpg?resize=1140,570",
    category: "Economy",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 124,
  },
  {
    id: 4,
    img: "https://www.kemifilani.ng/wp-content/uploads/2023/03/Jandor-Sanwo.jpg",
    category: "Politics",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 123,
  },
  {
    id: 5,
    img: "https://www.thesun.co.uk/wp-content/uploads/2023/04/raheem-sterling-chelsea-action-oleksandr-773699388.jpg?w=1280&quality=44",
    category: "Sport",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 123,
  },
  {
    id: 6,
    img: "https://www.kemifilani.ng/wp-content/uploads/2023/04/Alex-Ekubo-threatens-legal-action-on-Chioma-Akpotha-over-the-crying-video-she-posted-of-him-Kemi-Filani-blog-1536x768.jpg",
    category: "Entertainment",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 125,
  },
  {
    id: 7,
    img: "https://www.kemifilani.ng/wp-content/uploads/2023/04/Bukunmi-Oluwasina-jubilates-as-Biola-Bayo-welcomes-son-1536x768.jpg",
    category: "Entertainment",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 124,
  },
  {
    id: 8,
    img: "https://www.thesun.co.uk/wp-content/uploads/2023/04/DD-COMP-REAL-MADRID-V-CHELSEA-PREVIEW.jpg?w=1280&quality=44",
    category: "Sport",
    title: "Lorem ipsum dolor sit amet",
    postDate: "1 hour ago",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliqui natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores? Praesentium, sequi",
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    author: 124,
  },
];

export const categories = ["Sport", "Entertaiment", "Politics"];

export const users = [
  {
    id: "123",
    name: "Yage",
    password: "password",
    email: "yage@mail.com",
    profilePics:
      "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/320922094_3364904700497472_2921202699435699251_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGtKwKrL61pXozWjmLO_FR8Poy9KARHAtw-jL0oBEcC3BJqZ0HQ1aI6Yc5VU-3Uwouwefu4RsTF-ouuDoP4lSqo&_nc_ohc=UMk-j1rQN0UAX88k4IB&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&oh=00_AfAKemVPsjAuC6BNJXzNfN0PKvrdhZH4C-qVrCDsWfApXQ&oe=643A238D",
  },
  {
    id: "124",
    name: "Bunmi",
    password: "password",
    email: "bunmi@mail.com",
    profilePics:
      "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-1/271587912_2559878350810199_481746809846955540_n.jpg?stp=dst-jpg_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz9xlzXuy5T9wLB4X1I1FNswg8FPGY0myzCDwU8ZjSbCSMTYVrU7yZc7EUJ-HnSBxyQh45MGt45T-UcO1C_wBk&_nc_ohc=QKU6TR6d04YAX8mUTHi&_nc_ht=scontent.flos3-2.fna&oh=00_AfCafX1scjJfL44kUVzzpahvvuvddnVJGCBbVHt2bEChzQ&oe=643A0170",
  },
  {
    id: "125",
    name: "Ayo",
    password: "password",
    email: "ayo@mail.com",
    profilePics:
      "https://scontent.flos3-1.fna.fbcdn.net/v/t1.6435-1/73044108_10212077727777585_593375239753170944_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeE5rRKwH_wan-ijnPJ407Tj8W27GZhWbZzxbbsZmFZtnHS6a3lw3KkVsajAAcSSax7mzbqxp9isNZPYTfr9aL0p&_nc_ohc=plr61jIdGlMAX-ABBWH&_nc_ht=scontent.flos3-1.fna&oh=00_AfCmv3LDOvEv_059EklbvgDS5D3PSqTfuiG0nu_q06Ygrw&oe=645D4173",
  },
];
