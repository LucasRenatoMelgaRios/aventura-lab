import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    min-height: 100vh;
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
    }
  }

  /* Form elements */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[300]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray[400]};
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    html {
      color: ${({ theme }) => theme.colors.gray[100]};
      background-color: ${({ theme }) => theme.colors.backgroundDark};
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme.colors.primary[900]};
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.gray[800]};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray[600]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;