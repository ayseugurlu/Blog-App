import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Container } from "@mui/material";

export default function Calendar() {
  return (
    <Container sx={{backgroundColor:"#ffb07c",borderRadius:3,mt:5,width:"100%",color:"white"}}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
             sx={{
            color: "#000", // Text color for calendar
            "& .MuiTypography-root": { color: "white",fontSize:"16px" }, // Text color for days, months
            "& .MuiPickersDay-root": { color: "white",fontSize:"14px" }, // Color for individual day numbers
            "& .MuiPickersDay-root.Mui-selected": { backgroundColor: "seagreen", color: "white" }, // Selected day color
          }}
        />
      </LocalizationProvider>
    </Container>
  );
}
