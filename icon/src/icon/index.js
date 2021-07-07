import { jsx as _jsx } from 'react/jsx-runtime';
import s from '@/icon/styles/icon.module.css';
const getClass = (props) => {
  const classes = [s.icon];
  switch (props.display) {
    case 'inline':
      classes.push(s.inlineBlock);
      break;
    case 'block':
    default:
      classes.push(s.block);
      break;
  }
  return classes.join(' ');
};
export const Icon = (props) => {
  return _jsx(
    'span',
    Object.assign(
      {
        role: 'img',
        'aria-label': props.title,
        className: getClass(props),
        style: { color: props.color, fontSize: props.size }
      },
      { children: props.children }
    ),
    void 0
  );
};
