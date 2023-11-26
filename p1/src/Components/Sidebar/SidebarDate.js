import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import LogoutIcon from '@mui/icons-material/Logout';




export const SidebarDate = [
    {
        title: "Home",
        icon: <HouseIcon />,
        link: "/Home"
    },
    {
        title: "Notification",
        icon: <NotificationsOutlinedIcon />,
        link: "/Notification"
    },
    {
        title: "Shop",
        icon: <FavoriteBorderOutlinedIcon />,
        link: "/Shop"
    },
    {
        title: "Coversation",
        icon: <MailOutlineOutlinedIcon />,
        link: "/Coversation"
    },
    {
        title: "Wallet",
        icon: <WalletIcon />,
        link: "/Wallet"
    },
    {
        title: "Subscription",
        icon: <StarsOutlinedIcon />,
        link: "/Subscription"
    },
    {
        title: "My Profile",
        icon: <PermIdentityOutlinedIcon />,
        link: "/My Profile"
    },
    {
        title: "Settinge",
        icon: <SettingsOutlinedIcon />,
        link: "/Settinge"
    },
 ]
