import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './redux/calculatorSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer
  },
})