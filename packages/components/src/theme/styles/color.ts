const interaction = {
  SUCCESS: '#00E65A',
  ALERT: '#FFB201',
  BACKGROUND: '#F5F9FB',
  ERROR: '#FF0000',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

const palette = {
  RED_50: '#F9DFE3',
  RED_500: '#FF0039',
  LIGHTGREY_100: '#E5EBF0',
  LIGHTGREY_200: '#BCCAD0',
  LIGHTGREY_500: '#5D6E76',
  BLUE_300: '#4F81FC',
  BLUE_500: '#0149FF',
  BLUE_700: '#0041CF',
  BLUE_900: '#00328C',
  DARKGREY_500: '#1F2025',
  DARKGREY_700: '#121317',
};

const color = {
  ...palette,
  ...interaction,
};

export { color };

export type TColor = { [key in TPalette]: string };

type TPalette =
  | 'RED_50'
  | 'RED_500'
  | 'LIGHTGREY_100'
  | 'LIGHTGREY_200'
  | 'LIGHTGREY_500'
  | 'BLUE_300'
  | 'BLUE_500'
  | 'BLUE_700'
  | 'BLUE_900'
  | 'DARKGREY_500'
  | 'DARKGREY_700'
  | 'SUCCESS'
  | 'ALERT'
  | 'BACKGROUND'
  | 'ERROR'
  | 'WHITE'
  | 'BLACK';