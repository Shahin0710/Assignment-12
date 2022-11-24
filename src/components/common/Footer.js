import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';

const Footer = function () {
    return (
        <footer>
            <Paper variant="outlined" square sx={{ p: 5, backgroundColor: '#9c27b0', color: 'white'}}>
                <Grid container direction="row" justifyContent="space-between" spacing={3}>
                    <Grid item xs={6} md={4}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <FacebookIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our FaceBook" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <TwitterIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our Twitter" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <InstagramIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our Instagram" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <LinkedInIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our LinkedIn" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <MenuBookIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Read Our Blog" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <CreateIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Please FeedBack" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <List>
                          <ListItem disablePadding  sx={{ mb: 2 }}>
                              <ListItemIcon>
                                <LocationOnIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="150 West Jurain, Shampur, Dhaka" />
                          </ListItem>
                          <ListItem disablePadding  sx={{ mb: 2 }}>
                              <ListItemIcon>
                                <LocalPhoneIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Help line: +880 123456789" />
                          </ListItem>
                          <ListItem disablePadding  sx={{ mb: 2 }}>
                              <ListItemIcon>
                                <EmailIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Email: xyz@gmail.com" />
                          </ListItem>
                          <ListItem disablePadding sx={{ mb: 2 }}>
                              <ListItemIcon>
                              </ListItemIcon>
                              <ListItemText primary="(Available : Sat - Thu, 9:00 AM to 5:00 PM)" />
                          </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5 }}>
                  <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                      <Grid item xs={12}>
                          <Typography variant="body2" align="center">
                              {'Copyright © '} 2022 e Learning School Pvt Ltd. All rights reserved.
                          </Typography>
                      </Grid>
                  </Grid>
                </Box>
            </Paper>
        </footer>
    );
};
export default Footer;
