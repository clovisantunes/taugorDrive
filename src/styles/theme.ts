interface Theme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    dark: string;
    error: string;
    title: {
      fontSize: number;
      color: string;
    };
    backgroundWhite: string;
    background: string;
    backgroundBlack: string;
  };
  text: {
    textDark: {
      color: string;
    };
    textWhite: {
      color: string;
    };
  };
  fontWeight: {
    minimum: number;
    medium: number;
    maximum: number;
  };
  border: {
    line: number;
    radius: number;
    color: string;
  };
  dark: boolean;
}

export const theme: Theme = {
  colors: {
    primary: "#7c73e6",
    secondary: "#2a2438",
    white: '#ececec',
    dark: '#233142',
    error: "#dc2f2f",
    title: {
      fontSize: 36,
      color: '#222831',
    },
    backgroundWhite: '#fff',
    background: '#e3e3e3',
    backgroundBlack: '#222831',
  },
  text: {
    textDark: {
      color: '#233142',
    },
    textWhite: {
      color: '#ececec',
    },
  },
  fontWeight: {
    minimum: 300,
    medium: 600,
    maximum: 800,
  },
  border: {
    line: 1,
    radius: 4,
    color: '#e3e3e3',
  },
  dark: false,
};
