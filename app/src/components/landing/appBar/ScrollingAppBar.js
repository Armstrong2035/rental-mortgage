import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { header, siteMetadata } from "../../../app/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function ScrollingAppBar() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: siteMetadata.themeColor, overflow: "hidden" }}
    >
      <Toolbar>
        <Box sx={{ mr: 3 }}>
          <Typography>{header.companyName}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "scrollText 15s linear infinite",
              ...typographyStyles.bodyMedium,
              fontSize: "20px",
            }}
          >
            {`${header.projectName} • ${header.projectName} • ${header.projectName} • 
            ${header.projectName} • ${header.projectName} • ${header.projectName} • 
            ${header.projectName} • ${header.projectName} • ${header.projectName} • 
            ${header.projectName} • ${header.projectName} • ${header.projectName} •`}
          </Typography>
        </Box>
      </Toolbar>
      <style>
        {`
          @keyframes scrollText {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); } /* Moves only half the text width so the second half appears immediately */
          }
        `}
      </style>
    </AppBar>
  );
}
