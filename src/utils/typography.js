import Typography from 'typography';
import github from 'typography-theme-github';

github.overrideThemeStyles = () => ({
  'h1,h2': {
    borderBottom: 0,
  },
});

const typography = new Typography(github);

export default typography;
