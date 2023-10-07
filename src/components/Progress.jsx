import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, {
    linearProgressClasses
  } from "@mui/material/LinearProgress";
  
  import styled from "styled-components";
  
  const StyledLinearProgressBar = styled(LinearProgress)({
	[`&.${linearProgressClasses.determinate}`]: { backgroundColor: "red" },
	[`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar1Determinate}`]: { backgroundColor: "#000" }
});
  
  


export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);
  

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // if (oldProgress === 100) {
        //   return 0;
        // }
        const diff = 1;
        return oldProgress + diff;
      });
    }, 47);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <Box sx={{ width: '100%' }}>
      <StyledLinearProgressBar  variant="determinate" value={progress} />
    </Box>
  );
}