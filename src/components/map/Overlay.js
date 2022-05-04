import React from "react";
import { Grid, Text } from "../../elements/index";
import pin from '../../static/images/pin.svg';

const Overlay = (props) => {
  const { position } = props;
  //console.log(position?.estate[0]?.type, "????")
  //console.log(position?.level, "????")
  if(position?.level===2){
    return(
      <React.Fragment>
        <Grid  display="flex" justifyContent="center" alignItems="center" width="100px"position="relative" height="30px" bg="#6E2EF6" borderRadius="100px">
            <Grid  width="30px"  justifyContent="center" display="flex" alignItems="center" left="0"  height="30px" border="1px solid #6E2EF6"
             borderRadius="30px" position="absolute" bg="#fff">
               <Text>99</Text>
             </Grid>
             <Text color="#fff" bold textIndent="28px"size="14px">응암동 225</Text>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <img src={pin} alt="핀이미지"/>
        </Grid>
      </React.Fragment>
    )
  }else
  return (
    <React.Fragment>
      <Grid
        width="54px"
        height="65px"
        borderRadius="8px"
        bg="#000"
        color="#fff"
        position="relative"
      >
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="10px 0"
        >
          <Text bold size="10px">
            {position?.title}
          </Text>
          <Text bold size="14px">
            999만
          </Text>
        </Grid>

        <Grid
          width="27px"
          height="16px"
          position="absolute"
          top="-5px"
          right="-10px"
          bg="#fff"
          borderRadius="27px"
          border="1px solid #ccc"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#000" size="8px">
            999
          </Text>
        </Grid>
        <Grid
          width="54px"
          height="20px"
          position="absolute"
          bottom="0"
          bg="#fff"
          borderRadius="0 0 8px 8px"
          border="1px solid #000"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#000" size="10px">
            999
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Overlay;