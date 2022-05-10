import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

// global theme
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff', // white
    footer: '#00333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Put GlobalStyles Here, no need wrap */}
        <GlobalStyles />
        <Header />
        <Container>
          hi
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
