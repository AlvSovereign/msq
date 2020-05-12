const heading = {
  HERO: [
    {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 56,
    },
    {
      fontSize: 64,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 72,
    },
  ],
  H1: [
    {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 36,
    },
    {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 48,
    },
  ],
  H2: [
    {
      fontSize: 32,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 32,
    },
    {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 36,
    },
  ],
  H3: [
    {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 24,
    },
    {
      fontSize: 28,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 28,
    },
  ],
  H4: [
    {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 20,
    },
    {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 24,
    },
  ],
  H5: [
    {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 16,
    },
    {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 20,
    },
  ],
  H6: [
    {
      fontSize: 12,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 12,
    },
    {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 16,
    },
  ],
};

const input = {
  LABEL: {
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
    lineHeight: 14,
  },
  TEXT: {
    fontSize: 16,
    fontFamily: 'Geomanist-Medium',
    lineHeight: 16,
  },
};

const text = {
  TITLE: {
    fontSize: 11,
    fontFamily: 'Geomanist-Bold',
    lineHeight: 12,
  },
  SUBTITLE: {
    fontSize: 12,
    fontFamily: 'Geomanist-Bold',
    lineHeight: 12,
  },
  LEAD: {
    fontSize: 16,
    fontFamily: 'Geomanist-Light',
    lineHeight: 16,
  },
  BODY1: {
    fontSize: 14,
    fontFamily: 'Geomanist-Book',
    lineHeight: 14,
  },
  BODY2: {
    fontSize: 12,
    fontFamily: 'Geomanist-Book',
    lineHeight: 12,
  },
  SMALL: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    lineHeight: 12,
  },
  TINY: {
    fontSize: 10,
    fontFamily: 'Geomanist',
    lineHeight: 10,
  },
  BUTTON: {
    fontSize: 12,
    fontFamily: 'Montserrat-ExtraBold',
    letterSpacing: 1.5,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
};

const typography = {
  ...heading,
  ...input,
  ...text,
};

export { typography };

export type TTypography = { [key in TTextTypes]: any };

type TTextTypes =
  | 'HERO'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'LABEL'
  | 'TEXT'
  | 'TITLE'
  | 'SUBTITLE'
  | 'LEAD'
  | 'BODY1'
  | 'BODY2'
  | 'SMALL'
  | 'TINY'
  | 'BUTTON';
