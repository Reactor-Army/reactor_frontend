import {useDispatch} from "react-redux"; //, useSelector
import React, {useEffect} from "react";
import {fetchAdsorbents} from "../../redux/adsorbentsSlice";

import {AdsorbentCard} from "../../components/Card/AdsorbentCard/AdsorbentCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";

export function AdsorbentList({adsorbents}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbents());
  }, []);

  if (!adsorbents || !adsorbents.length) {
    return <CircularProgress />;
  }
  return (
    <ListContainer>
      {adsorbents.length &&
        adsorbents.map(
          ({nombre, particulaT, sBet, vBet, pHCargaCero}, index) => (
            <AdsorbentCard
              headerBackgroundColor={appColors.adsorbentCardHeader}
              bodyBackgroundColor={appColors.adsorbentCardBody}
              header={nombre}
              particleSize={particulaT}
              sBet={sBet}
              vBet={vBet}
              ph={pHCargaCero}
              key={index}
            />
          ),
        )}
    </ListContainer>
  );
}
