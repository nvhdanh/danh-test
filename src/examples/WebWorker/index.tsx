import { Box, Stack, Typography } from '@mui/joy'
import BlockUI from './BlockUI/BlockUI'
import NonBlockUI from './NonBlockUI/NonBlockUI'

const WebWorker = () => {
  return (
    <Box>
      <Typography textAlign={'center'} fontWeight={'bold'} fontSize={'lg'}>
        Click on the "Perform Heavy Calculation" then keep clicking the "Inc
        Counter"
      </Typography>
      <Stack
        direction={'row'}
        columnGap={3}
        width={1200}
        margin={'auto'}
        mt={3}
      >
        <Box flex={1}>
          <BlockUI />
        </Box>
        <Box flex={1}>
          <NonBlockUI />
        </Box>
      </Stack>
    </Box>
  )
}

export default WebWorker
