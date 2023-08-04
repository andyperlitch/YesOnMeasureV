/** @jsx jsx */
import { jsx } from "theme-ui";

type EndorsementCardProps = {
  quote: React.ReactNode;
  endorser: string;
  bg: string;
};

const EndorsementCard = ({ quote, endorser, bg }: EndorsementCardProps) => (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: 4,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
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
      {quote}
    </div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [3, 4, 5],
        fontWeight: `medium`,
        lineHeight: 1.125,
      }}
    >
      {endorser}
    </div>
  </div>
);

export default EndorsementCard;
