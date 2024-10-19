import { Stack } from '@mui/material';

export default function MapPage() {
    return (
        <Stack direction="row" style={{ height: '100%' }}>
            <div style={{ height: '100%', minWidth: '250px' }}>Sidebar</div>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'green',
                }}
            >
                Map
            </div>
        </Stack>
    );
}
