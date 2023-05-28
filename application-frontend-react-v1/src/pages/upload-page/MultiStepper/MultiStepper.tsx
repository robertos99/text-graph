import * as React from 'react';
import {useForm, Controller, useFormContext} from 'react-hook-form';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, TextField, Checkbox, Select, MenuItem } from "@mui/material";


type FormData = {
    documentBody: string;
    documentTitle: string;
};

export default function MultiStepper() {
    const steps = ['Set Document Body', 'Set Title', 'Confirm Values'];

    const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
        mode: 'onTouched',
        defaultValues: {
            documentBody: '',
            documentTitle: ''
        },
    });

    const [text, setText] = React.useState('');

    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleNext = () => {
        handleSubmit((data) => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        })();
    }

    const handleSave = () => {
        handleSubmit((data) => {
            // POST request on the last step
            fetch('http://localhost:5000/documents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: data.documentTitle,
                    text: data.documentBody
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => console.error('Error:', error));

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div style={{padding: '2%'}}>
            <Box sx={{width: '100%'}}>


                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {activeStep === steps.length //when everything is done. this is the "everything worked card.
                    //TODO right now there is no feedback. it looks like it worked every time.
                    ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 5, mb: 1, textAlign: 'center' }}>
                            All steps completed - You can now analyze the document in the graphs tab.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ mt: 2, mb: 1 }}>


                            {
                                activeStep === 0 ? (
                                    <SetDocumentBodyStep control={control} />
                                ) : activeStep === 1 ? (
                                    <TitleStep control={control} />
                                ) :  (
                                    //<ConfirmValuesStep control={control} text={text} setText={setText} />
                                    <ConfirmValuesStep2 control={control} getValues={getValues} />
                                )
                            }



                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                                {activeStep === steps.length - 1 ?
                                    <Button onClick={handleSave}>Save</Button> :
                                    <Button onClick={handleNext}>Next</Button>
                                }
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}

const SetDocumentBodyStep = ({ control }: { control: any }) => {
    return (
        <>
            <Controller
                control={control}
                name="documentBody"
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
                        label="Insert Text"
                        multiline
                        rows={10}
                        value={field.value} // Use the value prop instead of defaultValue
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                    />
                )}
            />
        </>
    );
};



const TitleStep = ({ control }: { control: any }) => {
    return (
        <>
            <Controller
                control={control}
                name="documentTitle"
                defaultValue=""
                rules={{
                    required: 'Field is required',
                    validate: {
                        hasInput: (value) => value && value.trim().length > 0,
                        maxLength: (value) => value.length <= 100 || 'The title cannot exceed 100 characters'
                    }
                }}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        sx={{ width: '100%' }}
                        label="Title"
                        inputProps={{ maxLength: 100 }}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                    />
                )}
            />
        </>
    );
};



const ConfirmValuesStep = ({ control, text, setText }: { control: any; text: string; setText: (text: string) => void }) => {
    return (
        <>
            <Controller
                control={control}
                name="documentBody"
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
                        label="Confirm"
                        multiline
                        rows={undefined}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                        onChange={(e) => {
                            field.onChange(e);
                            setText(e.target.value);
                        }}
                    />
                )}
            />
        </>
    );
};


const ConfirmValuesStep2 = ({ control, getValues }: { control: any }) => {
// Get the current values from the form.
    const documentTitle = getValues('documentTitle');
    const documentBody = getValues('documentBody');

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Document Title
            </Typography>
            <TextField
                fullWidth
                multiline
                InputProps={{
                    readOnly: true,
                }}
                value={documentTitle}
            />
            <Typography variant="h6" gutterBottom>
                Document Body
            </Typography>
            <TextField
                fullWidth
                multiline
                InputProps={{
                    readOnly: true,
                }}
                value={documentBody}
            />
        </>
    );
};
