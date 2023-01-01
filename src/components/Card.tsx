import React from 'react'
import { CardContainer, Image, StyledCard, Title } from './styles/Card.styled'
import { Container } from './styles/stylesUtil/Container.styled'
import { Flex } from './styles/stylesUtil/Flex.styled'
import FeatureImg1 from '../assets/images/illustration-grow-together.svg'
import FeatureImg2 from '../assets/images/illustration-flowing-conversation.svg'
import FeatureImg3 from '../assets/images/illustration-your-users.svg'

const FeatureCards = [
  {
    id: 1,
    title: 'Grow Together',
    body: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    image: FeatureImg1,
  },
  {
    id: 2,
    title: 'Flowing Conversations',
    body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    image: FeatureImg2,
  },
  {
    id: 3,
    title: 'Your Users',
    body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: FeatureImg3,
  },
]


const Card = () => {
  return (
    <StyledCard>
      <Container>
        {
          FeatureCards.map(card=> (
            <CardContainer layout={card.id % 2 === 0 ? 'row-reverse' : ''} key={card.id}>
              <div>
                <Title>
                  {card.title}
                </Title>
                <p>
                  {card.body}
                </p>
              </div>
              <Image src={card.image} />
            </CardContainer>
          ))
        }
      </Container>
    </StyledCard>
  );
}

export default Card