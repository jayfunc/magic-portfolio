import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Zhe",
  lastName: "Fang",
  name: `Zhe Fang`,
  role: "",
  avatar: "/images/avatar.png",
  email: "zhefang.zf@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jayfunc",
  },
  {
    name: "Stack Overflow",
    icon: "stackoverflow",
    link: "https://stackoverflow.com/users/11048731/jayfunc",
  },
  {
    name: "Bluesky",
    icon: "bluesky",
    link: "https://bsky.app/profile/jayfunc.bsky.social",
  },
  {
    name: "Bilibili",
    icon: "bilibili",
    link: "https://space.bilibili.com/36159702",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Capture. Embrace. Explore.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">BetterLyrics</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/betterlyrics",
  },
  subline: (
    <>
      Enjoying capturing moments with <a href="/gallery">pen</a> and camera, bracing the nature with enthusiasm, and exploring the world with curiosity.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Enjoying capturing moments with pen and camera, bracing the nature with enthusiasm, and exploring the world with curiosity.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Example company",
        timeframe: "2022 - Present",
        role: "Example role",
        achievements: [
          <>
            Example achievement 1.
          </>,
          <>
            Example achievement 2.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "https://github.com/jayfunc/BetterLyrics/blob/dev/Promotion/banner.png?raw=true",
            alt: "Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Example",
        description: <>Studied example.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: ".NET",
        description: (
          <>Example description.</>
        ),
        tags: [
          {
            name: ".NET",
            icon: "dotnet",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "https://github.com/jayfunc/BetterLyrics/blob/dev/Promotion/banner.png?raw=true",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about anything...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Painting gallery - ${person.name}`,
  description: `A painting collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/2020-09-02.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/2020-07-20.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2019-12-08.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2019-01-25.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2018-08-07.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2018-08-06.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2018-07-19.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2018-03-24.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/2018-01-02.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/2017-09-24.webp",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
