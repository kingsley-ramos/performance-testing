import { Col, Container, Grid, Image, Row } from "@nextui-org/react";

const NavLogo = () => {
  return (
    <Grid.Container
      alignItems="center"
      gap={0}
      justify="flex-start"
      wrap="nowrap"
    >
      <Grid xs={4} md={2}>
        <img
          width="100"
          src="https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg"
          alt="Logo"
        />
      </Grid>
      <Grid>
        <img
          width="150"
          src="https://cms.nhl.bamgrid.com/images/photos/321078680/300x56/cut.png"
          alt="Logo Text"
        />
      </Grid>
    </Grid.Container>
  );
}

export default NavLogo;
