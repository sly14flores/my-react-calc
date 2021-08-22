import { createSlice } from '@reduxjs/toolkit'

const ops = ['+','-','x','/']

const initialState = {
  result: '',
  history: []
}

export const calculatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    append: (state, action) => {
      // If there's a dot don't append any more dots
      if (action.payload === ".") {
        const dots = state.result.match(/\./g)
        if (dots===null) {
          state.result += `${action.payload}`
        }
      // Don't put zero if result is empty
      } else if (action.payload === "0") {
        if (state.result !== "") {
          state.result += `${action.payload}`
        }
      } else {
        state.result += `${action.payload}`        
      }
    },
    clear: (state) => {
      state.result = ''
    },
    operator: (state, action) => {
      // Append operator only if result is not empty and not a dot
      // Don't append operator if last character in the result is an operator
      if (state.result !== "" && state.result !== ".") {
        const lastOp = state.result.charAt(state.result.length-1)
        const i = ops.findIndex(o => o === lastOp)
        if (i<0) {
          state.result += `${action.payload}`
        }
      }
    },
    equals: (state) => {
      // Don't calculate if empty
      if (state.result === "") return
      // If last character is an operator don't calculate
      const lastOp = state.result.charAt(state.result.length-1)
      const i = ops.findIndex(o => o === lastOp)
      if (i > -1) return
      const resultCopy = state.result.replace(/x/g,"*")
      /* eslint-disable no-eval */
      const result = eval(resultCopy)
      state.result = result.toString()
      state.history.push(result)
    },
    clearHistory: (state) => {
      state.history = []
    },
    removeResult: (state, action) => {
      const i = action.payload
      const historyCopy = [...state.history]
      historyCopy.splice(i,1)
      state.history = [...historyCopy]
    }
  }
})

export const {
  append,
  clear,
  operator,
  equals,
  clearHistory,
  removeResult
} = calculatorSlice.actions

export default calculatorSlice.reducer