/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;

  return <Box as="footer" variant="footer"></Box>;
};

export default Footer;
