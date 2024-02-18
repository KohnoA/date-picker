import { createGlobalStyle } from 'styled-components';

import openSansBold from '@/assets/fonts/OpenSans-Bold.woff';
import openSansRegular from '@/assets/fonts/OpenSans-Regular.woff';
import openSansSemibold from '@/assets/fonts/OpenSans-SemiBold.woff';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: 'Open-sans';
    src: url(${openSansRegular});
  }

  @font-face {
    font-weight: 600;
    font-family: 'Open-sans';
    src: url(${openSansSemibold});
  }

  @font-face {
    font-weight: 700;
    font-family: 'Open-sans';
    src: url(${openSansBold});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Open-Sans', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.black};
  }
`;
