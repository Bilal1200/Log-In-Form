import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../styles/index.module.css'
import { useRouter } from 'next/router'

export default function app() {
  const router = useRouter()
  return (
    <>
  
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '38ch' },
      }}
      noValidate
      autoComplete="off"
    className={styles.Box}>
      <h1 className={styles.h1}>Welcome to login page</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.input1} / >
      <TextField id="outlined-basic" label="Password" variant="outlined"className={styles.input2} />
      <Button variant="contained" className={styles.button} onClick={() => router.push('/video')} style={{textTransform: 'none'}}>Submit
      </Button>
      
    </Box>
    </>
  );
}