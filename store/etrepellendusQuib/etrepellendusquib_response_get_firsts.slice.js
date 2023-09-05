import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const etrepellendusquib_get_eweweew_read = createAsyncThunk(
  "etrepellendusquib_response_get_firsts/etrepellendusquib_get_eweweew_read",
  async payload => {
    const response = await apiService.etrepellendusquib_get_eweweew_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const etrepellendusquib_response_get_firstsSlice = createSlice({
  name: "etrepellendusquib_response_get_firsts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(etrepellendusquib_get_eweweew_read.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        etrepellendusquib_get_eweweew_read.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(etrepellendusquib_get_eweweew_read.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  etrepellendusquib_get_eweweew_read,
  slice: etrepellendusquib_response_get_firstsSlice
}
