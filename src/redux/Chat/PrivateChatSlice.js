import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    privateChats: [],
    Chat: {}
}

export const privateChatSlice = createSlice({
    name: 'privateChat',
    initialState,
    reducers: {
        setPrivateChats(state, action){
            state.privateChats = action.payload;
        },
        setPrivateChat(state, action){
            state.Chat = action.payload;
        }
    }
});

export const {setPrivateChats, setPrivateChat} = privateChatSlice.actions;

export default privateChatSlice.reducer;