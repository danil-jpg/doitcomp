import { ButtonPropsVariantOverrides } from '@mui/material';

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.png?as=webp' {
    const value: any;
    export = value;
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare module '*.jpg?as=webp' {
    const value: any;
    export = value;
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        tab: true;
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        poster: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        poster?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        poster: true;
        h3: false;
    }
}
