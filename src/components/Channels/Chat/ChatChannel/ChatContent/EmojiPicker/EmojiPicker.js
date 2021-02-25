import React from 'react';
import { Picker } from 'emoji-mart'

const EmojiPicker = ({ style, select }) => (
  <Picker
    theme='dark'
    title='Pick your emoji…'
    emoji='point_up'
    style={style}
    onSelect={select}
    native
    exclude={['nature', 'objects', 'places', 'foods', 'symbols']}
  />
);

export default EmojiPicker;