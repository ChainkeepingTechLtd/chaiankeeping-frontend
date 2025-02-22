// import localFont from 'next/font/local';
import { DM_Sans, Inter, Rubik, Sen, Space_Grotesk } from 'next/font/google';


// export const corsa = localFont({
//     src: [
//         {
//             path: './Corsa-Grotesk-Bold.otf',
//             weight: '700',
//             style: 'normal',
//         },
//     ],
//     variable: '--font-corsa',
// });

export const inter = Inter({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-inter',
});
export const sen = Sen({
    weight: ['400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-sen',
});
export const rubik = Rubik({
    weight: ['400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-rubik',
});
export const space_Grotesk = Space_Grotesk({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-space_Grotesk',
});

export const dmsans = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin-ext', 'latin'],
    variable: '--font-dmsans',
});