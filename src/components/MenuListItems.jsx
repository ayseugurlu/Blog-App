import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "../assets/logo.webp"





const icon = (name) => `/assets/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/",
    icon: icon("dashboard"),
  },
  {
    title: "My Blogs",
    url: "myblogs",
    icon: icon("myblog"),
  },
  {
    title: "About",
    url: "about",
    icon: icon("about"),
  },
  
];

const btnStyle = {
  color: "secondary.contrastText",
  borderRadius: "1rem",
  transition:"all 0.6s ease-in-out",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "white",
  },
}
const selectedStyle = {
  backgroundColor: "secondary.main",
  color: "primary.main",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "primary.main",
    color: "secondary.contrastText",
  },
}

const MenuListItems = () => {
  const navigate = useNavigate();
  const location = useLocation()
  
  return (
    <div sx={{bgcolor:"primary.main"}}>
     
      <Box component="img" src="https://cdn.pixabay.com/photo/2016/08/16/01/31/colors-1596915_1280.png" sx={{width:"70px",mt: 3, ml:6,cursor:"pointer"}}
        onClick={()=>navigate("/")}
      />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={item.url === location.pathname ? selectedStyle : btnStyle}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "currentcolor",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
