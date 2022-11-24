import Groups2Icon from '@mui/icons-material/Groups2';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            width: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(5.5),
            },
        }),
    },
}));

const SidebarNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 20,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 12,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

// A STYLE SHEET
const useStyles = makeStyles()((theme) => {
   return {
     navLink: {
        textDecoration: 'none',
        color: 'inherit',
     },
     navLinkActive: {
        textDecoration: 'none',
        color: '#9c27b0',
     },
   };
 });

const Sidebar = function () {
    const { classes } = useStyles();
    const location = useLocation();

    return (
        <Drawer variant="permanent" open={true} maxheight="xs">
            <SidebarNav component="nav" disablePadding>
                <NavLink to="/"
                    className={
                        location.pathname === '/'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                                <NavLink to="/courses"
                    className={
                        location.pathname === '/courses'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HistoryEduIcon />
                            </ListItemIcon>
                            <ListItemText primary='Courses' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to="/blog"
                    className={
                        location.pathname === '/blog'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary='Blog' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to="/report"
                    className={
                        location.pathname === '/report'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ReportProblemIcon />
                            </ListItemIcon>
                            <ListItemText primary='Report' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to="/team"
                    className={
                        location.pathname === '/team'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Groups2Icon />
                            </ListItemIcon>
                            <ListItemText primary='Team' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to="/support"
                    className={
                        location.pathname === '/support'
                            ? classes.navLinkActive
                            : classes.navLink
                    }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2, mb: 15 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SupportAgentIcon />
                            </ListItemIcon>
                            <ListItemText primary='Support' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </SidebarNav>
        </Drawer>
    );
};

export default Sidebar;
