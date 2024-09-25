import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <FormControl size="small">
      <InputLabel id="light-dark-mode-label">Mode</InputLabel>
      <Select
        labelId="light-dark-mode-label"
        id="light-dark-mode"
        value={mode}
        label="Mode"
        onChange={(event) => setMode(event.target.value)}
      >
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            <Typography>System</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" />
            <Typography>Light</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />
            <Typography>Dark</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
