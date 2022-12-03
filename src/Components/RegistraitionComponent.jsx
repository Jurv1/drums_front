import { Avatar, Button, Grid, Paper, TextField, Typography, Box, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'
import RegisterLoginSX from '../themes/RegisterLoginSX.js'

import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { fetchRegister, selectAuth } from '../Redux/slices/AuthSlice.js'

export const RegistraitionComponent = (props) => {

    
    const isAuth = useSelector(selectAuth)

    const password = useRef({});

    const dispatch = useDispatch()
    const { register, handleSubmit, setError, watch, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            fullName: ''
        },
        mode: "onChange"
    })

    //password.current = watch("password", ""); ref={register({
    //                    validate: value => value === password.current || "The passwords do not match"
    //                })} 
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        if (!data.payload) {
            return alert("Попробуйте войти еще раз")
        }
        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token) 
            console.log(data.payload.token)
        }

     } 
     //{errors.password_repeat && <p>{errors.password_repeat.message}</p>}
     if (isAuth) return <Navigate to = "/posts" /> 
    return (
        <Grid sx={{ backgroundColor: "#212123", minHeight: "100vh", position: "relative", overflow: "hidden", pt: "60px" }}>
            <Paper elevation={20} sx={RegisterLoginSX}>
                <Grid align='center'>
                    <Avatar>

                    </Avatar>
                    <Typography variant='h4' sx={{ m: 0 }}>
                        Регистрация
                    </Typography>
                    <Typography variant='caption'>
                        Создайте свой аккаунт здесь!
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField InputLabelProps={{ style: { color: '#000' } }} fullWidth label="Имя" sx={{ m: "10px 0 10px 0" }}
                        variant="standard" placeholder='Введите свое имя' error={Boolean(errors.fullName?.message)} helperText={errors.fullName?.message}
                        {...register("fullName", { required: "Укажите имя" })} />

                    <TextField InputLabelProps={{ style: { color: '#000' } }} type="email" fullWidth label="Email" sx={{ m: "10px 0 10px 0" }}
                        variant="standard" placeholder='Введите свою почту' error={Boolean(errors.email?.message)} helperText={errors.email?.message}
                        {...register("email", { required: "Укажите почту" })} />

                    <TextField InputLabelProps={{ style: { color: '#000' } }} name="password" fullWidth type="password" label="Пароль" sx={{ m: "10px 0 10px 0" }}
                        variant="standard" placeholder='Введите свой пароль' error={Boolean(errors.password?.message)} helperText={errors.password?.message}
                        {...register("password", { required: "Укажите пароль" })} />
                    

                    <TextField InputLabelProps={{ style: { color: '#000' } }} name="password_reapeat" fullWidth type="password" label="Подтвердите пароль" sx={{ m: "10px 0 10px 0" }}
                        variant="standard" placeholder='Повторите пароль' />

                    <Box sx={{ textAlign: "center" }}>
                        <FormControlLabel control={<Checkbox name="checkedA" />} label="Я принимаю политику." />
                    </Box>



                    <Box sx={{ textAlign: "center" }}>
                        <Button disabled= {!isValid} type='submit' sx={{ mt: "3px", "&:hover": { backgroundColor: "orange", color: "black" } }} variant="contained"> Зарегистрироваться </Button>
                    </Box>

                </form>

                <Link to="/auth/login">
                    <Box sx={{ textAlign: "center", pt: "3px" }}>
                        <Typography variant='caption'>
                            Уже имею аккаунт
                        </Typography>
                    </Box>
                </Link>
            </Paper>
        </Grid>
    )
}

export default RegistraitionComponent