import { LoaderStyle } from './Loader.styled';

const { ColorRing } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <LoaderStyle>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#B0C4DE', '#778899', '#708090', '#4682B4', '#B0C4DE']}
      />
    </LoaderStyle>
  );
};
