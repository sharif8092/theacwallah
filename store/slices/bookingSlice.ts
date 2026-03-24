import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  isOpen: boolean;
  selectedService: string;
}

const initialState: BookingState = {
  isOpen: false,
  selectedService: 'AC Repair',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    openBooking: (state, action: PayloadAction<string | undefined>) => {
      state.isOpen = true;
      if (action.payload) {
        state.selectedService = action.payload;
      }
    },
    closeBooking: (state) => {
      state.isOpen = false;
    },
    setSelectedService: (state, action: PayloadAction<string>) => {
      state.selectedService = action.payload;
    },
  },
});

export const { openBooking, closeBooking, setSelectedService } = bookingSlice.actions;
export default bookingSlice.reducer;
