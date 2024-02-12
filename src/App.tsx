import React, { FC, Suspense } from 'react';
// import './components/styles/index.scss';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
// import Loading from './components/common/Loading/Loading';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tournaments from './components/pages/Tournaments';
import Tabs from './components/common/Tabs/Tabs';
import Teams from './components/pages/Teams';
import Players from './components/pages/Players';
import Payouts from './components/pages/Payouts';
import Dropdowns from './components/pages/Dropdowns';

export type IPagesName = 'Tournaments' | 'Teams' | 'Players' | 'Payouts' | 'Dropdowns';

const App: FC = () => {
    const palette = {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#20252b',
        },
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#20252b',
            },
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'tab' },
                        style: {
                            fontWeight: 700,
                            lineHeight: 1,
                            fontSize: 30,
                            fontFamily: 'Rubik',
                            textAlign: 'center',
                            color: palette.primary.main,
                            border: '2px solid ',
                            borderColor: palette.secondary.main,
                            padding: '30px 44px',
                            '&:hover': {
                                color: palette.secondary.main,
                                backgroundColor: palette.primary.main,
                            },
                        },
                    },
                ],
            },
        },
        typography: {
            h1: {
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1,
                fontFamily: 'Rubik',
            },
            body1: {
                fontFamily: 'Rubik',
                fontSize: 22,
                fontWeight: 500,
                lineHeight: 1,
                color: 'primary.main',
            },
        },
    });

    const arr: IPagesName[] = ['Tournaments', 'Teams', 'Players', 'Payouts', 'Dropdowns'];

    return (
        <Suspense fallback={<div>Loading</div>}>
            <ThemeProvider theme={theme}>
                <Container sx={{ bgcolor: '#0F1215', height: '100vh', minWidth: { xl: 1170 } }}>
                    <Tabs array={arr} />
                    <Routes>
                        <Route path='*' element={<Tournaments />} />
                        <Route path='/teams' element={<Teams />} />
                        <Route path='/players' element={<Players />} />
                        <Route path='/payouts' element={<Payouts />} />
                        <Route path='/dropdowns' element={<Dropdowns />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
