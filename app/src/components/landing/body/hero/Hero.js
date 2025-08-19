import HeroText from "./HeroText";
import { Box, Container, Grid } from "@mui/material";
import SubText1 from "./SubText1";
import HeroImage from "./HeroImage";

export default function Hero({ isDesktop, heroImage }) {
  return (
    <Grid container spacing={isDesktop ? 10 : 3}>
      <Grid item size={{ sm: 12, md: 12, lg: 8 }}>
        <HeroText isDesktop={isDesktop} />
      </Grid>

      <Grid item size={{ sm: 12, md: 12, lg: 4 }}>
        <SubText1 isDesktop={isDesktop} />
      </Grid>

      {/* <Grid item size={{ sm: 12, md: 12, lg: 12 }}>
        <HeroImage heroImage={heroImage} isDesktop={isDesktop} />
      </Grid> */}
    </Grid>
  );
}
