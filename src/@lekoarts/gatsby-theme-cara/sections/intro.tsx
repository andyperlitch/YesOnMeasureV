/** @jsx jsx */
import { jsx } from "theme-ui";

const Intro = () => (
  <div
    sx={{
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: ["column", "column", "column", "row"],
      margin: "0 auto",
    }}
  >
    <img
      src="/button.png"
      alt="Yes on V. SupportOurScottsValleySchools.com"
      width={300}
      height={300}
      sx={{
        marginRight: [0, 0, 0, 20],
      }}
    />
    <div
      sx={{
        marginTop: [30, 30, 30, 0],
      }}
    >
      <h2
        sx={{
          fontSize: 20,
          color: (theme) => theme.colors?.textMuted,
          padding: 0,
          margin: 0,
          letterSpacing: 2,
          fontWeight: "light",
          textAlign: ["center", "center", "center", "left"],
        }}
      >
        SupportOurScottsValleySchools.com
      </h2>
      <h1
        sx={{
          fontSize: [35, 35, 35, 42],
          margin: 0,
          textShadow: "0 0 3px black",
          textAlign: ["center", "center", "center", "left"],
        }}
      >
        Vote{" "}
        <strong sx={{ color: (theme) => theme.colors?.primary }}>Yes</strong> on{" "}
        <strong sx={{ color: (theme) => theme.colors?.secondary }}>
          Measure V
        </strong>
      </h1>
      <ul
        sx={{
          marginTop: [30, 30, 30, 0],
          listStyleType: "none",
          fontSize: [20, 20, 24, 24],
          padding: 20,
          borderRadius: 20,
          textAlign: ["center", "center", "center", "left"],
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <li>
          <strong>Mail-In</strong> voting on{" "}
          <span
            sx={{
              color: (theme) => theme.colors?.primary,
              fontWeight: "bolder",
            }}
          >
            October 24, 2023
          </span>
        </li>
        <li>
          <strong>Support</strong> teachers, staff, and counselors
        </li>
        <li>
          <strong>Maintain</strong> STEAM Programs
        </li>
        <li>
          <strong>Continue</strong> mental health services
        </li>
      </ul>
    </div>
  </div>
);

export default Intro;
