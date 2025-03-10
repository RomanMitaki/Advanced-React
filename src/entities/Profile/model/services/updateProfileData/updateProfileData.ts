import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { validateProfileData } from '@/entities/Profile/model/services/validateProfileData/validateProfileData';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<Array<ValidateProfileError>>
>(
    'profile/updateProfileData = ',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData as Profile);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
