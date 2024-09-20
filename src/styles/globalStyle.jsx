export const btnStyle = {
    color:"secondary.contrastText"
}

export const cardStyle = {
    display:"flex", 
    marginBottom:2,
    height:"200px",
    borderRadius:"1rem",
    boxShadow:"2px 2px 2px black"
}

export const newPostStyle = {
    
        // Default (unfocused) color styles
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "secondary.contrastText",  // Border color when unfocused
          },
          "&:hover fieldset": {
            borderColor: "primary.contrastText",  // Border color on hover when unfocused
          },
          "&.Mui-focused fieldset": {
            borderColor: "green",  // Border color when focused
          },
        },
        "& .MuiInputLabel-root": {
          color: "secondary.contrastText", // Label color when unfocused
        },
        "&:hover .MuiInputLabel-root": {
          color: "primary.contrastText", // Label color on hover
        },
        "& .Mui-focused .MuiInputLabel-root": {
          color: "green", // Label color when focused
        },
        "& .MuiInputBase-input": {
            color: "white", // İçindeki yazının rengi
          },
      
}