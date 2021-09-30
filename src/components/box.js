import styled from 'styled-components';
import {compose, color, size, space} from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(compose(space, color, size));

export default Box;
