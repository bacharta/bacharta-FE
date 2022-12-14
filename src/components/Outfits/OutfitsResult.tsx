import React from 'react';
import styled from 'styled-components';

import {
  UserSelectState,
  OutfitsWeatherState,
} from '../../pages/Outfits/Data/UserOutfitsData';

import { ReactComponent as Coat } from '../../assets/oufitImages/coat.svg';
import { ReactComponent as CottonPants } from '../../assets/oufitImages/cottonPants.svg';
import { ReactComponent as FieldJumper } from '../../assets/oufitImages/fieldJumper.svg';
import { ReactComponent as Gloves } from '../../assets/oufitImages/gloves.svg';
import { ReactComponent as HoodJumper } from '../../assets/oufitImages/hoodJumper.svg';
import { ReactComponent as HoodTshirt } from '../../assets/oufitImages/hoodTshirt.svg';
import { ReactComponent as Jacket } from '../../assets/oufitImages/jacket.svg';
import { ReactComponent as Jeans } from '../../assets/oufitImages/Jeans.svg';
import { ReactComponent as ThickTshirt } from '../../assets/oufitImages/thickTshirt.svg';
import { ReactComponent as KnittedHat } from '../../assets/oufitImages/knittedHat.svg';
import { ReactComponent as LongSleeve } from '../../assets/oufitImages/llongSleeve.svg';
import { ReactComponent as Muffler } from '../../assets/oufitImages/muffler.svg';
import { ReactComponent as OnePiece } from '../../assets/oufitImages/onePiece.svg';
import { ReactComponent as PaddedJumper } from '../../assets/oufitImages/paddedJumper.svg';
import { ReactComponent as Shirt } from '../../assets/oufitImages/shirt.svg';
import { ReactComponent as Shorts } from '../../assets/oufitImages/shorts.svg';
import { ReactComponent as ShortSleeveShirt } from '../../assets/oufitImages/shortSleeveShirt.svg';
import { ReactComponent as ShortSleeveTShirt } from '../../assets/oufitImages/shortSleeveTShirt.svg';
import { ReactComponent as Skirt } from '../../assets/oufitImages/skirt.svg';
import { ReactComponent as Sleeveless } from '../../assets/oufitImages/sleeveless.svg';
import { ReactComponent as Sweater } from '../../assets/oufitImages/sweater.svg';
import { ReactComponent as ThickCottonPants } from '../../assets/oufitImages/ThickCottonPants.svg';
import { ReactComponent as ThinCardigan } from '../../assets/oufitImages/thinCardigan.svg';
import { ReactComponent as TrenchCoat } from '../../assets/oufitImages/trenchCoat.svg';
import { useRecoilState } from 'recoil';
const OutfitsResult = () => {
  const [userSelect] = useRecoilState(UserSelectState);
  const [weather] = useRecoilState(OutfitsWeatherState);

  const userSensibleTemp = weather.main.temp + Number(userSelect.userTemp);
  const weatherClothes = () => {
    if (userSensibleTemp >= 4 && userSensibleTemp < 9) {
      return EARY_WINTER;
    }
    if (userSensibleTemp >= 9 && userSensibleTemp < 12) {
      return FALL;
    }
    if (userSensibleTemp >= 12 && userSensibleTemp < 17) {
      return EARLY_FALL;
    }
    if (userSensibleTemp >= 17 && userSensibleTemp < 20) {
      return EARLY_SPRING;
    }
    if (userSensibleTemp >= 20 && userSensibleTemp <= 23) {
      return SPRING;
    }
    if (userSensibleTemp >= 23 && userSensibleTemp < 28) {
      return EARY_SUMMER;
    }
    if (userSensibleTemp >= 28) {
      return SUMMER;
    }
    return WINTER;
  };

  const todayRecommendOutfits = weatherClothes();

  return (
    <Wrap>
      {todayRecommendOutfits.map((outfits) => {
        return (
          <Recommend key={outfits.id}>
            <ImageWrap>{outfits.outfitImage}</ImageWrap>
            <OutfitName>{outfits.outfitType}</OutfitName>
          </Recommend>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'space-between')}
  background-color: ${(props) => props.theme.white};
  padding: 40px 70px;
  width: 100%;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.lowModalShadow};
`;

const Recommend = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'space-between')}
  flex-direction: column;
`;
const ImageWrap = styled.div`
  width: 130px;
  height: 130px;
  padding: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.ligthGrey};
`;
const OutfitName = styled.p`
  color: ${(props) => props.theme.mainColor};
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
`;

const WINTER = [
  {
    id: 0,
    outfitType: '??????',
    outfitImage: <PaddedJumper />,
  },
  {
    id: 1,
    outfitType: '????????? ??????',
    outfitImage: <ThickCottonPants />,
  },
  {
    id: 2,
    outfitType: '?????????',
    outfitImage: <Muffler />,
  },
  {
    id: 3,
    outfitType: '?????? ??????',
    outfitImage: <KnittedHat />,
  },
  {
    id: 4,
    outfitType: '??????',
    outfitImage: <Gloves />,
  },
];

const EARY_WINTER = [
  {
    id: 0,
    outfitType: '??????',
    outfitImage: <Coat />,
  },
  {
    id: 1,
    outfitType: '????????? ??????',
    outfitImage: <TrenchCoat />,
  },
  {
    id: 2,
    outfitType: '??????',
    outfitImage: <Sweater />,
  },
  {
    id: 3,
    outfitType: '?????? ??????',
    outfitImage: <FieldJumper />,
  },
  {
    id: 4,
    outfitType: '??????',
    outfitImage: <Gloves />,
  },
];

const FALL = [
  {
    id: 0,
    outfitType: '????????? ??????',
    outfitImage: <TrenchCoat />,
  },
  {
    id: 1,
    outfitType: '??????',
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: '??????',
    outfitImage: <FieldJumper />,
  },
  {
    id: 3,
    outfitType: '?????????',
    outfitImage: <Jeans />,
  },
  {
    id: 4,
    outfitType: '?????? ??????',
    outfitImage: <HoodJumper />,
  },
];

const EARLY_FALL = [
  {
    id: 0,
    outfitType: '??????',
    outfitImage: <Jacket />,
  },
  {
    id: 1,
    outfitType: '??????',
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: '?????????',
    outfitImage: <ThickCottonPants />,
  },
  {
    id: 3,
    outfitType: '?????????',
    outfitImage: <HoodTshirt />,
  },
  {
    id: 4,
    outfitType: '?????????',
    outfitImage: <ThinCardigan />,
  },
];

const EARLY_SPRING = [
  {
    id: 0,
    outfitType: '?????????',
    outfitImage: <Jeans />,
  },
  {
    id: 1,
    outfitType: '?????? ??????',
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: '?????????',
    outfitImage: <ThickTshirt />,
  },
  {
    id: 3,
    outfitType: '?????????',
    outfitImage: <ThinCardigan />,
  },
  {
    id: 4,
    outfitType: '??????',
    outfitImage: <Jacket />,
  },
];

const SPRING = [
  {
    id: 0,
    outfitType: '??????',
    outfitImage: <Shirt />,
  },
  {
    id: 1,
    outfitType: '?????? ?????????',
    outfitImage: <LongSleeve />,
  },

  {
    id: 2,
    outfitType: '?????????',
    outfitImage: <Jeans />,
  },
  {
    id: 3,
    outfitType: '?????? ?????????',
    outfitImage: <ThinCardigan />,
  },

  {
    id: 4,
    outfitType: '?????????',
    outfitImage: <CottonPants />,
  },
];

const EARY_SUMMER = [
  {
    id: 0,
    outfitType: '?????????',
    outfitImage: <ShortSleeveTShirt />,
  },

  {
    id: 1,
    outfitType: '?????? ?????????',
    outfitImage: <CottonPants />,
  },
  {
    id: 2,
    outfitType: '?????? ??????',
    outfitImage: <ShortSleeveShirt />,
  },

  {
    id: 3,
    outfitType: '??????',
    outfitImage: <Skirt />,
  },

  {
    id: 4,
    outfitType: '?????????',
    outfitImage: <CottonPants />,
  },
];

const SUMMER = [
  {
    id: 0,
    outfitType: '?????????',
    outfitImage: <ShortSleeveTShirt />,
  },

  {
    id: 1,
    outfitType: '?????????',
    outfitImage: <Sleeveless />,
  },
  {
    id: 2,
    outfitType: '?????????',
    outfitImage: <OnePiece />,
  },

  {
    id: 3,
    outfitType: '??????',
    outfitImage: <Skirt />,
  },

  {
    id: 4,
    outfitType: '?????????',
    outfitImage: <Shorts />,
  },
];

export default OutfitsResult;
