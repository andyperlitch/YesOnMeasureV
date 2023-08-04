/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src//elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "./svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import Intro from "../sections/intro";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="pencil"
          hiddenMobile
          width={56}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <Svg
          icon="apple"
          width={48}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
        />
        <Svg icon="books" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="backpack"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <Svg
          icon="pencil"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <Svg icon="cap" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg
          icon="calculator"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <Svg
          icon="books"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <Svg icon="cap" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg
          icon="backpack"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="cap"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <Svg icon="cap" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="cap" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg
        icon="backpack"
        width={8}
        color="icon_darkest"
        left="95%"
        top="90%"
      />
      <Svg
        icon="backpack"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <Svg
        icon="pencil"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <Svg icon="cap" width={64} color="icon_green" left="95%" top="5%" />
      <Svg
        icon="books"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <Svg icon="books" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="books" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg
        icon="apple"
        width={16}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <Svg
        icon="apple"
        width={8}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
);

export default Hero;
