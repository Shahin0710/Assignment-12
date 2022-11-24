import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/SidebarContext';

const SidebarNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 8,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 18,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});



const MobileSidebar = function () {
    const navigate = useNavigate();
    const {sidebarOpen, handleSidebar} = React.useContext(AuthContext);

    const handleHome = () => {
        handleSidebar();
        navigate('/');
    };

    const handleBlog = () => {
        handleSidebar();
        navigate('/blog');
    };

    const handleReport = () => {
        handleSidebar();
        navigate('/report');
    };

    return (
        <Drawer open={sidebarOpen} onClose={handleSidebar} sx={{ height: '100%' }}>
            <Toolbar />
            <SidebarNav component="nav" disablePadding>
                <MenuItem onClick={handleHome} sx={{ m: 2 }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem onClick={handleBlog} sx={{ m: 2 }}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>

                <MenuItem onClick={handleReport} sx={{ m: 2 }}>
                    <ListItemIcon>
                        <ReportProblemIcon />
                    </ListItemIcon>
                  <Typography textAlign="center">Report</Typography>
                </MenuItem>
            </SidebarNav>
        </Drawer>
    );
};
export default MobileSidebar;
