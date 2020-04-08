const typography: ITypography = {
  headings: [
    {
      hero: {
        fontSize: 48,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 56,
      },
      h1: {
        fontSize: 36,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 40,
      },
      h2: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 36,
      },
      h3: {
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 32,
      },
      h4: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 24,
      },
      h5: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 20,
      },
      h6: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 16,
      },
    },
    {
      hero: {
        fontSize: 64,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 72,
      },
      h1: {
        fontSize: 48,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 56,
      },
      h2: {
        fontSize: 36,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 40,
      },
      h3: {
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 36,
      },
      h4: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 24,
      },
      h5: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 20,
      },
      h6: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 16,
      },
    },
  ],
  text: {
    titles: {
      fontSize: 11,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 12,
    },
    subtitles: {
      fontSize: 12,
      lineHeight: 12,
    },
    lead: {
      fontSize: 16,
      lineHeight: 24,
    },
    body: {
      fontSize: 14,
      lineHeight: 20,
    },
    small: {
      fontSize: 12,
      lineHeight: 18,
    },
    tiny: {
      fontSize: 10,
      lineHeight: 16,
    },
    button: {
      fontSize: 12,
      fontFamily: 'Montserrat-Bold',

      lineHeight: 16,
      textTransform: 'uppercase',
    },
  },
};

export { typography };

interface ITypography {
  headings: Headings[];
  text: {
    [key: string]: any;
  };
}

interface Headings {
  [key: string]: any;
}

type Heading = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
