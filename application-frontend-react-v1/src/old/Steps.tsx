import {Controller, useFormContext} from "react-hook-form";
import {Button, Checkbox, MenuItem, Select, TextField, Typography} from "@mui/material";
import * as React from "react";

const Step1 = ({ control }: { control: any }) => {
    return (
        <>
            <Controller
                control={control}
                name="multiline1"
                defaultValue=""
                rules={{
                    required: 'Field is required',
                    validate: {
                        hasInput: (value) => value && value.trim().length > 0
                    }
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        sx={{ width: '100%' }}
                        id="outlined-multiline-static"
                        label="Multiline1"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                    />
                )}
            />
        </>
    )
};


const Step2 = ({ control }: { control: any }) => {
    return (
        <>
            <Controller
                control={control}
                name="checkbox1"
                defaultValue={false}
                render={({ field }) => (
                    <Checkbox
                        {...field}
                        id="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                    />
                )}
            />
            <Controller
                control={control}
                name="dropdown1"
                defaultValue=""
                render={({ field }) => (
                    <Select
                        {...field}
                        label="Dropdown1"
                        error={Boolean(field.value) && !field.value.trim()}
                        helperText={Boolean(field.value) && !field.value.trim() ? 'Field is required' : ''}
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                )}
            />
        </>
    )
}

export {Step1, Step2, Step22};


const Step22 = ({ control, multilineValue, onCorrect }) => {
    const handleCorrect = () => {
        onCorrect();
    };

    return (
        <>
            <Typography variant="h6">Step 1: Multiline Input</Typography>
            <Typography>{multilineValue}</Typography>
            {multilineValue && (
                <Button variant="outlined" onClick={handleCorrect}>
                    Correct
                </Button>
            )}
            <Box mt={2}>
                <Controller
                    control={control}
                    name="multiline"
                    defaultValue=""
                    rules={{
                        required: 'Field is required',
                        validate: {
                            hasInput: (value) => value && value.trim().length > 0
                        }
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            sx={{ width: '100%' }}
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={10}
                            defaultValue={field.value}
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message || ''}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                        />
                    )}
                />
            </Box>
        </>
    );
};
