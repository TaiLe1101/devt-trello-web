import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import GroupIcon from "@mui/icons-material/Group";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Card({ card }) {
  return (
    <MuiCard
      sx={{
        cursor: "grab",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {card?.cover && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          <Button size="small" startIcon={<GroupIcon />}>
            {card?.members?.length || 0}
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            {card?.comments?.length || 0}
          </Button>
          <Button size="small" startIcon={<AttachmentIcon />}>
            {card?.attachments?.length || 0}
          </Button>
        </CardActions>
      )}
    </MuiCard>
  );
}
