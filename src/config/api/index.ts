import Config from 'react-native-config';

type ApiTypes = {
  SignUp: string | undefined; // to do remove undefined and define in config
};

export default ((): ApiTypes => {
  return {
    SignUp: Config.SignUp,
  };
})();
