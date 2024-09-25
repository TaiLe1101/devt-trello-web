import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

export default function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        display: "flex",
      }}
    >
      {/* Column */}
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
        }}
      >
        <Box
          sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Column title</Typography>
        </Box>
        <Box sx={{}}>Main</Box>
        <Box
          sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Footer
        </Box>
      </Box>
    </Box>
  );
}
