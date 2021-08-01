import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit"
import { logger } from "redux-logger";

import currentStroke from '../modules/currentStroke/slice';
import historyIndex from '../modules/historyIndex/slice'
import strokes from '../modules/strokes/slice';
import {projectsList} from '../modules/projectsList/slice';

import {modalVisible} from '../modules/modals/slice';
import { RootState } from "../types";

const middleware = [...getDefaultMiddleware(), logger];

const combineReducer = {
  currentStroke,
  historyIndex,
  strokes,
  modalVisible,
  projectsList
}

export const store = configureStore({ reducer: combineReducer, middleware})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>