    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Drawer from '@mui/material/Drawer';
    import Button from '@mui/material/Button';
    import List from '@mui/material/List';
    import Divider from '@mui/material/Divider';
    import ListItem from '@mui/material/ListItem';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import InboxIcon from '@mui/icons-material/MoveToInbox';
    import MailIcon from '@mui/icons-material/Mail';
import { sections } from '../data/Data';

    export default function SideDrawer({children}) {
    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem>Categories</ListItem>
        </List>
        <Divider />
        <List>
            {sections.map((text, index) => (
            <ListItem key={text.title} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.title} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
            <Button onClick={toggleDrawer('left', true)}>{children}</Button>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
        </div>
    );
    }