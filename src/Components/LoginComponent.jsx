import { Button, Grid, Paper, TextField, Typography, Box, FormControlLabel, Checkbox, } from '@mui/material'
import React from 'react'
import RegisterLoginSX from '../themes/RegisterLoginSX.js'
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form'
import { fetchAuth, selectAuth } from '../Redux/slices/AuthSlice.js';
import { Navigate } from 'react-router-dom';

export const LoginComponent = (props) => {

    const isAuth = useSelector( selectAuth )

    const dispatch = useDispatch()
    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: "onChange"
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))

        if (!data.payload){
            return alert("Попробуйте войти еще раз")
        }
        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            console.log(data.payload.token)
        } 
    
    }

    if (isAuth) return <Navigate to = "/posts" /> 
    return (
        <>
            <Grid sx={{ backgroundColor: "#212123", minHeight: "100vh", position: "relative", overflow: "hidden", pt: "60px" }}>
                <Paper elevation={20} sx={RegisterLoginSX}>
                    <Grid align='center'>
                        <Typography variant='h4' sx={{ m: 0 }}>
                            Авторизация
                        </Typography>
                        <Typography variant='caption'>
                            Войдите в свой аккаунт OnlyDrums
                        </Typography>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField InputLabelProps={{ style: { color: '#000' } }} type="email" fullWidth label="Email" sx={{ m: "10px 0 10px 0" }}
                            variant="standard" placeholder='Введите свою почту' error={Boolean(errors.email?.message)} helperText={errors.email?.message}
                            {...register("email", { required: "Укажите почту" })} />
                        <TextField InputLabelProps={{ style: { color: '#000' } }} fullWidth type="password" label="Пароль" sx={{ m: "10px 0 10px 0" }}
                            variant="standard" placeholder='Введите свой пароль' error={Boolean(errors.password?.message)} helperText={errors.password?.message}
                            {...register("password", { required: "Укажите пароль" })} />
                        <Box sx={{ textAlign: "center" }}>
                            <Button disabled = {!isValid} type='submit' sx={{ mt: "3px", "&:hover": { backgroundColor: "orange", color: "black" } }} variant="contained"> Войти </Button>
                        </Box>

                    </form>
                </Paper>
            </Grid>
        </>
    )
}

export default LoginComponent