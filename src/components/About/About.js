import { StyledAbout } from "../../styled/About.styled";
import AboutCard from "./AboutCard";

function About({}) {
  const cards = [
    {
      title: "Personal",
      text: "I'm a 24 year old full stack developer. Thanks to growing up around computers and games, problem solving and technology in general has always been a genuine interest of mine, and programming is the perfect outlet for that. ",
    },
    {
      title: "Skills",
      text: "",
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
