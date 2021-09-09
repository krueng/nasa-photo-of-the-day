//theme objects here
export default {
    primaryColor: 'royalblue',
    secondaryColor: 'crimson',
    tertiaryColor: 'mediumseagreen',
    dangerColor: 'orange',
    black: 'black',
    white: 'white',
    breakpoints: {
        mobile: '(max-width: 550px)',
        tablet: '(max-width: 800px)',
    },
    padding: {
        small: '4px',
        medium: '8px',
    }

}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };