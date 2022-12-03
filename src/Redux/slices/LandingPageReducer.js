import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    mainTexts:[
        {
            mainText: 'OnlyDrums - место, где ты можешь делиться своими открытиями в сфере драмминга, находить и загружать ноты для нужных песен.'
        }
    ],
    buttonTexts: [
        {
            buttonText: 'стать частью корабля',
        }
    ]
}


const landingPageSlice = createSlice({
    name: 'landing',
    initialState,
    reducer: {}
})

export const LandingPageReducer = landingPageSlice.reducer