import { SectionHeading, BottomContainer } from "./styled";

const Section = ({ title, content, extraContent }) => (
    <>
        <SectionHeading>
            {title}
        </SectionHeading>
        {content}
        <BottomContainer>
            {extraContent}
        </BottomContainer>
    </>
);

export default Section;