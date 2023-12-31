/** @jsx jsx */
import { jsx } from "theme-ui";

type CardProps = {
  children: React.ReactNode;
  bg: string;
};

const Card = ({ children, bg }: CardProps) => (
  <div
    sx={{
      margin: "10px 0",
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 3,
      py: 3,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      // "&:hover": {
      //   color: `white !important`,
      //   transform: `translateY(-5px)`,
      //   boxShadow: `xl`,
      // },
    }}
  >
    <div
      sx={{
        opacity: 0.85,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        p: {
          fontSize: [1, 2],
          color: `white`,
          margin: 0,
          lineHeight: 1.25,
        },
      }}
    >
      {children}
    </div>
  </div>
);

export default Card;
