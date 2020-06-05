import styled from 'styled-components';
import { Box } from 'grid-styled';
import { media } from 'utils/style-helpers';
import cellStyles from './cellStyles';


const DefaultCell = styled(Box)`
  ${cellStyles}
  > section > .cell-label {
    ${media.desktop`display: none;`}
  }
`;

export default DefaultCell;
