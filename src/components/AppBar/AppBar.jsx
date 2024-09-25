import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import { ReactComponent as TrelloLogoIcon } from "~/assets/trello.svg";
import Profiles from "~/components/AppBar/Menus/Profiles";
import Recent from "~/components/AppBar/Menus/Recent";
import Starred from "~/components/AppBar/Menus/Starred";
import Templates from "~/components/AppBar/Menus/Templates";
import Workspaces from "~/components/AppBar/Menus/Workspaces";
import ModeSelect from "~/components/ModeSelect/ModeSelect";

export default function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloLogoIcon}
            inheritViewBox
            sx={{ color: "white" }}
            fontSize="small"
          />
          <Typography
            variant="span"
            sx={{ fontSize: "1.2rem", fontWeight: 700, color: "white" }}
          >
            Trello
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 0.5,
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": {
                border: "none",
              },
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          size="small"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      display: searchValue ? "block" : "none",
                    }}
                    fontSize="small"
                    onClick={() => setSearchValue("")}
                  />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": {
              color: "white",
            },
            "& input": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "& fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge color="secondary" sx={{ cursor: "pointer" }}>
            <HelpOutlineIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}
