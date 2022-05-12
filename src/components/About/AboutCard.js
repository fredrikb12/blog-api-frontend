import { StyledAboutCard } from "../../styled/AboutCard.styled";

function AboutCard({ title, text }) {
  return (
    <StyledAboutCard>
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledAboutCard>
  );
}

export default AboutCard;
