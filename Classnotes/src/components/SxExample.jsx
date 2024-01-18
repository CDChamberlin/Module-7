import { Box, styled } from "@mui/material";

const styles = {
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '2em',
    boarderRadius: '1em',
    border: '1px solid darkslategray',
    margin: '1em 0'
}

const StyledDiv = styled('div')(styles)

export default function SxExample() {
    return(
        <Box sx={{bgcolor:'#efefef', minWidth:300, boxShadow:1}}>
            <StyledDiv>This div includes styles</StyledDiv>
        </Box>
    )
    
}