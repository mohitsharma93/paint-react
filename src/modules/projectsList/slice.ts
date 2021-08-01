import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../types';

type ProjectListState = {
  error: string | null,
  pending: boolean,
  projects: Project[]
}

const initialState: ProjectListState = {
  error: null,
  pending: false,
  projects: []
}

const slice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    getProjectsListSuccess: (
      state,
      action: PayloadAction<Project[]>
    ) => {
      state.error = null;
      state.pending = false;
      state.projects = action.payload
    },
    getProjectsListFailed: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.pending = false;
      state.projects = [];
    }
  }
})

export const projectsList = slice.reducer;

export const { getProjectsListFailed, getProjectsListSuccess } = slice.actions