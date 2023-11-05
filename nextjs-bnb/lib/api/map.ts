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

// 구글 장소 검색 api
export const searchPlacesAPI = (keyword: string) =>
  axios.get<{description: string; placeId: string}[]> (
    `/api/maps/places?keyword=${keyword}`
  );

// placeId로 장소 정보 가져오기
export const getPlaceAPI = (placeId: string) => 
  axios.get<{location: string; latitude: number; longitude: number}> (
    `/api/maps/places/${placeId}`
  );