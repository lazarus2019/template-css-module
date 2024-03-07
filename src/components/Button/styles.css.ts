import { style, globalStyle } from '@vanilla-extract/css';

export const dangerType = style({
  display: 'block',
  color: 'blue',
});

globalStyle('body', {
  margin: 0,
});
