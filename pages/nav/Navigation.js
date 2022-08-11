import {
  useTheme,
  Button,
  Col,
  Container,
  Dropdown,
  Grid,
  Row,
} from "@nextui-org/react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.primary.value,
      }}
    >
      <Container fluid nowrap>
        <Row gap={0} justify="space-between" align="center">
          <Col justify="flex-start">
            <Container alignContent="flex-start" fluid>
              <Row gap={0} justify="flex-start">
                <Col>
                  <NavLogo />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <NavLinks />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
