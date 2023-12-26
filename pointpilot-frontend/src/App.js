import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Drawer, List, ListItem, ListItemText,Divider,ListItemIcon,InboxIcon } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  drawer: {
    width: 240, // 변경 가능한 서랍 폭
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px', // 간격 조정
    justifyContent: 'flex-end', // 닫기 버튼을 오른쪽 끝으로
  },
  // 추가적인 스타일은 여기에 정의
});

function App() {
  const classes = useStyles(); // 스타일 클래스 사용
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow: 1}}>
            PointPilot
          </Typography>
          <Button color="inherit">Login</Button> {/* Login Button */}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon /> {/* 닫기 아이콘 */}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
            <ListItem button key={text} onClick={toggleDrawer(false)}>
              {/* ListItemIcon 추가 */}
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <main>
        <Typography variant="h4" style={{ padding: 20 }}>
          Welcome to PointPilot
        </Typography>
        {/* 여기에 추가 컨텐츠를 넣으세요. */}
      </main>
    </div>
  );
}

export default App;
