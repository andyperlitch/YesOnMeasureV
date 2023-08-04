/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "./svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import ProjectsMDX from "../sections/projects.mdx";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <ProjectsMDX />
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="books"
          width={6}
          color="icon_brightest"
          left="85%"
          top="75%"
        />
        <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg
          icon="backpack"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <Svg
          icon="calculator"
          hiddenMobile
          width={24}
          color="rgba(0,0,0,0.2)"
          left="13%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="books"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <Svg
          icon="backpack"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <Svg
          icon="calculator"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <Svg
          icon="backpack"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <Svg
          icon="calculator"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="calculator"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg
        icon="calculator"
        width={12}
        color="#FFEFDD33"
        left="80%"
        top="60%"
      />
      <Svg icon="books" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="books" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

export default Projects;
