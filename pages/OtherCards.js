import { Card, Container, Row, Grid, Link, Text } from "@nextui-org/react";

export const OtherCards = ({ image, heading, link, text }) => (
  <Grid.Container alignItems="center" wrap="nowrap" style={{margin: '10px 0'}}>
    <Grid xs={4} md={3}>
      <img width="100%" src={image} alt="Banner" />
    </Grid>
    <Grid>
      <Link href={link}>
        <Container>
          <Row>
            <Text size={16} weight="bold">
              {heading}
            </Text>
          </Row>
          <Row>
            <Text size={14} color="#AAA">
              {text}
            </Text>
          </Row>
        </Container>
      </Link>
    </Grid>
  </Grid.Container>
);

export default OtherCards;
