import React, { FC, Suspense, useEffect } from 'react';
// import './components/styles/index.scss';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './components/store/store';
import { getProducts, setProductsData } from './components/store/slices/productsSlice';
// import Loading from './components/common/Loading/Loading';
import { Container, ThemeProvider, Typography, createTheme } from '@mui/material';
import Tournaments from './components/pages/Tournaments';
import Tabs from './components/common/Tabs/Tabs';
import Teams from './components/pages/Teams';

const App: FC = () => {
    const selector = useAppSelector((state) => state.productsSlice);
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getProducts());
    }, []);

    // const theme = createTheme({
    //     spacing: ["0", "4px", "8px", "16px", "32px", "64px"],
    //   })
    const palette = {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#20252b',
        },
    };

    const theme = createTheme({
        palette: palette,
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
        },
    });

    const arr = ['Tournaments', 'Teams', 'Players', 'Payouts'];

    if (selector.products.products.length < 1) {
        return <div>Loading...</div>;
    }
    return (
        <Suspense fallback={<div>Loading</div>}>
            <ThemeProvider theme={theme}>
                <Container sx={{ bgcolor: '#0F1215', height: '100vh', minWidth: { xl: 1170 } }}>
                    <Tabs array={arr} />
                    <Routes>
                        <Route path='*' element={<Tournaments />} />
                        <Route path='/teams' element={<Teams />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
