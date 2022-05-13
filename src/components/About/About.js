import { StyledAbout } from "../../styled/About.styled";
import AboutCard from "./AboutCard";

function About() {
  const cards = [
    {
      title: "Personal",
      text: `I'm a ${
        new Date().getFullYear() - 1998
      } year old full stack developer. Thanks to growing up around computers and games, problem solving and technology in general has always been a genuine interest of mine, and programming is the perfect outlet for that. `,
    },
    {
      title: "Skills",
      text: "I have experience with the following technologies/areas: HTML, CSS, JavaScript, Jest, React.js, Styled Components, Firebase/Firestore, Node.js, Express, MongoDB",
    },
    {
      title: "This blog",
      text: "This blog is powered by a REST API, built with Node, Express, and MongoDB. Its front-end is built with React.js, and styled with Styled Components. This is the first REST API I've built!",
    },
  ];
  return (
    <StyledAbout>
      <h1>About Me</h1>
      <div>
        {cards.map((card, index) => {
          return <AboutCard key={index} title={card.title} text={card.text} />;
        })}
      </div>
    </StyledAbout>
  );
}

export default About;
