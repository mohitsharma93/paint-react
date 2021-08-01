import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, Point } from "../../types"
import { endStroke } from "../sharedActions"

const initialState:RootState["currentStroke"] = {color: "#000", points: []}

const currentStroke = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload]
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload)
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = []
    })
  }
})

export default currentStroke.reducer;

export const { beginStroke, updateStroke, setStrokeColor } = currentStroke.actions;