import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, required, label }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        fullWidth
        required={required}
        render={({ field }) => <TextField {...field} label={label} fullWidth />}
      />
    </Grid>
  );
}

export default FormInput;
