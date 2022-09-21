import {Box, CircularProgress, CircularProgressProps, Typography} from "@mui/material";

const CircularProgressWithLabel = (props: Omit<CircularProgressProps, "color"> & { value: number, color: string }) => {
    return (

        <Box sx={{
            position: 'relative',
            display: 'flex',
            marginBottom: "33px",
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <CircularProgress size={75} thickness={5} variant="determinate" {...props} color={undefined}
                              sx={{color: props.color}}/>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    sx={{fontWeight: "bolder", fontSize: 20}}
                >{`${props.value}%`}</Typography>
            </Box>
        </Box>
    );
};

export default CircularProgressWithLabel;