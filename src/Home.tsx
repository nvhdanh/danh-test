import { Button, Stack } from '@mui/joy';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const buttons = [
    { text: 'Web Worker', link: '/web-worker' },
    { text: 'Grid Layout', link: '/grid-layout' },
    { text: 'Lazy Loading', link: '/lazy-loading' },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Stack direction={'row'} columnGap={2} p={2} alignItems={'center'}>
        {buttons.map((btn) => (
          <Button
            key={btn.link}
            variant="outlined"
            onClick={() => navigate(btn.link)}
          >
            {btn.text}
          </Button>
        ))}
      </Stack>
      <Outlet />
    </>
  );
};

export default Home;
