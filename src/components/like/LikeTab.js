import React, { useState } from "react";
import OfficeLike from "./OfficeLike";
import OfficeTellLike from "./OfficeTellLike";

import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Text } from "../../elements/index";

const LikeTab = () => {
  const tabTitle = ["오피스", "공유오피스"];
  const tab = {
    0: <OfficeLike tabTitle={tabTitle} />,
    1: <OfficeTellLike tabTitle={tabTitle} />,
  };
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <React.Fragment>
      <Tabs
        value={activeTab}
        textColor="primary"
        TabIndicatorProps={{ style: { background: "#3E00FF", top: "0px" } }}
      >
        {/* tab 메뉴 */}
        {tabTitle.map((title, idx) => {
          return (
            <Grid
              key={idx}
              width="100%"
              height="50px"
              textAlign="center"
              fontWeight="bold"
              fontSize="14px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _onClick={() => onClickTab(idx)}
              color={activeTab === idx ? "#3E00FF" : "#E5E5EC"}
            >
              <Text bold cursor="pointer">
                찜한{title}
              </Text>
            </Grid>
          );
        })}
      </Tabs>
      <div>
        {/* 해당 콘텐츠 */}
        {tab[activeTab]}
      </div>
    </React.Fragment>
  );
};

export default LikeTab;
