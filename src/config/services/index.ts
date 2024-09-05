import axios from 'axios';
import Config from 'react-native-config';
import api from '../api';

axios.defaults.headers.common['authorization'] = Config.BasicAuth;

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

interface ServicePropType {
  data: any;
  token: string;
}

export const uploadProfilePictureService = async ({
  data,
  token,
}: ServicePropType) => axios.put(api.SignUp, data, {headers: {token: token}});
