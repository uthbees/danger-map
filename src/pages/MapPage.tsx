import { Paper, Stack } from '@mui/material';

export default function MapPage() {
    return (
        <Stack
            direction="row"
            style={{ height: '100%', backgroundColor: 'green' }}
        >
            <Paper
                style={{
                    height: '100%',
                    minWidth: '250px',
                    backgroundColor: 'white',
                }}
                elevation={6}
                square
            ></Paper>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                }}
            >
                Map
            </div>
        </Stack>
    );
}
