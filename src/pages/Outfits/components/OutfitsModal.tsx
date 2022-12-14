import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationSelect from './LocationSelect';
import TemperatureSelect from './TemperatureSelect';
import clouds from '../../../assets/weatherIcons/clouds.png';
import rain from '../../../assets/weatherIcons/rain.png';
import snow from '../../../assets/weatherIcons/snow.png';
import sun from '../../../assets/weatherIcons/sun.png';
import mist from '../../../assets/weatherIcons/mist.png';
import { useRecoilState } from 'recoil';
import { UserSelectState, OutfitsWeatherState } from '../Data/UserOutfitsData';
import { useNavigate } from 'react-router-dom';
import { tokenStorage } from '../../../storage/storage';
import { useQuery } from '@tanstack/react-query';
import { getLocationWeather } from '../../../api/weatherAPI';
import Loading from '../../../components/Loading/Loading';

export const userLocation = tokenStorage.get('location');

const OutfitsModal = () => {
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isLocationError, setIsLocationError] = useState(false);
  const [weatherIcons, setWeatherIcons] = useState('');

  const [userSelect, setUserSelect] = useRecoilState(UserSelectState);
  const [, setWether] = useRecoilState(OutfitsWeatherState);

  const isActiveModalStatus = () => {
    setIsActiveModal(!isActiveModal);
  };

  const tempSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSelectTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSelect({ ...userSelect, userTemp: event.target.value });
  };

  const handleChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    tokenStorage.set('location', event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: userSelect.userTemp === item,
    onChange: handleSelectTemp,
    value: item,
    name: 'color-radio-button',
    inputProps: { 'aria-label': item },
  });

  useEffect(() => {
    setTimeout(() => setIsLocationError(false), 2000);
  }, [isLocationError]);

  const isGoToResult = () => {
    navigate('/outfits/restult');
  };

  const { isLoading } = useQuery(['getlocationweather'], () => {
    getLocationWeather(userLocation).then((response) => {
      let weatherIcons;
      setWether(response.data);
      switch (response.data.weather[0].main) {
        case 'Clear':
          weatherIcons = sun;
          break;
        case 'Clouds':
          weatherIcons = clouds;
          break;
        case 'Rain':
          weatherIcons = rain;
          break;
        case 'Snow':
          weatherIcons = snow;
          break;
        case 'Mist':
          weatherIcons = mist;
          break;
        case 'Haze':
          weatherIcons = mist;
          break;

        default:
          weatherIcons = sun;
      }
      setWeatherIcons(weatherIcons);
      isActiveModalStatus();
    });
  });

  if (isLoading) return <Loading />;

  return (
    <ModalWrapper onSubmit={tempSubmit}>
      {!isActiveModal ? (
        <LocationSelect
          userLocation={userLocation}
          isActiveModalStatus={isActiveModalStatus}
          handleChangeLocation={handleChangeLocation}
          getLocationWeather={getLocationWeather}
          isLocationError={isLocationError}
        />
      ) : (
        <TemperatureSelect
          weatherIcons={weatherIcons}
          isActiveModalStatus={isActiveModalStatus}
          controlProps={controlProps}
          isGoToResult={isGoToResult}
        />
      )}
    </ModalWrapper>
  );
};
const ModalWrapper = styled.form`
  background-color: ${(props) => props.theme.white};
  margin-top: 150px;
  padding: 30px;
  width: 600px;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.highModalShdow};
`;

export default OutfitsModal;
