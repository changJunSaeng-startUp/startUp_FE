import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../elements/index";
import { XScrollDrag } from "../shared/home";
import { actionCreators as officeActions } from "../../redux/modules/office";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/configStore";
import img01 from "../../assets/1.jpg";
import img02 from "../../assets/2.jpg";
const PlaceList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(officeActions.getHotDB());
  }, []);

  return (
    <React.Fragment>
      <Grid overflow="hidden" width="100%">
        <XScrollDrag>
          <FlexBox>
            <Grid
              width="160px"
              height="180px"
              borderRadius="8px"
              position="relative"
              overflow="hidden"
            >
              <Image
                padding="180px"
                src={img01}
                shape="rectangle"
                position="absolute"
              />
              <Grid
                position="absolute"
                bottom="0"
                width="100%"
                height="68px"
                bg="rgba(0, 0, 0, 0.35)"
                padding="8px 16px 16px"
                // _onClick={() => {
                //   history.push(`/detail/${HotList[0]?.estateid}`);
                // }}
              >
                <Grid
                  width="42px"
                  height="20px"
                  bg="#fff"
                  borderRadius="42px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text size="10px">을지로</Text>
                </Grid>
                <Grid fontSize="10px" padding="4px">
                  <Text color="#fff" bold>
                    힙한 직장인들의 성지 힙지로라 불리는 을지로 오피스
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </FlexBox>
        </XScrollDrag>
      </Grid>
    </React.Fragment>
  );
};
const FlexBox = styled.div`
  width: 1000px;
  display: flex;
  margin: 16px 0 0 0;
  gap: 10px;
`;
export default PlaceList;
