import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    data: localStorage.getItem('data')!='undefined' ? JSON.parse(localStorage.getItem('data')) : {},       // JSON.parse() converts string to object
}

export const leadGenerate = createAsyncThunk("auth/signup", async (data) => {
    try {
        let res = axiosInstance.post("lead/generate", data); 
        toast.promise(res, {
            loading: 'Submitting your details...',
            success: (data) => data?.data?.message || 'Successfully Submitted',
            error: 'Failed to submit',
        })

        res = await res;
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


const LeadSlice = createSlice({
    name: 'lead',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(leadGenerate.fulfilled, (state, action) => {
            localStorage.setItem('data', JSON.stringify(action.payload.data));
            state.data = action.payload.data;
        })
    }
})

export const {} = LeadSlice.actions;
export default LeadSlice.reducer;