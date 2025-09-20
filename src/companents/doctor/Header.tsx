import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: "primary.main" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Avatar src="https://i.pravatar.cc/40?img=5" />
      </Toolbar>
    </AppBar>
  );
}
