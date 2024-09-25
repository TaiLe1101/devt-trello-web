import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function App() {
  return (
    <>
      <p>Hello</p>
      <Button variant="contained" startIcon={<AccessAlarmIcon />}>
        Hello World
      </Button>
    </>
  );
}

export default App;
