import axios from '.';

type GetLocationInfoApiResponse = {
  country: string;
  city: string;
  district: string;
  streetAddress: string;
  detailAddress: string;
  postcode: string;
  latitude: number;
  longitude: number;
};

// 현재 위치 정보 가져오기 api
export const getLocationInfoApi = async ({
  latitude,
  longitude,
} : {
  latitude: number;
  longitude: number;
}) => 
  axios.get<GetLocationInfoApiResponse>(
    `/api/maps/location?latitude=${latitude}&longitude=${longitude}`
  );