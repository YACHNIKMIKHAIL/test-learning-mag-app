import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {FormCase, MainOrderCase} from './OrderStyles';
import {useDispatch} from "react-redux";
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";
import {orderItems} from "../../Utils/MagUtils";
import {orderItemsTC} from "../../Features/ItemsAction";
import {Button, TextField} from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    country: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    street: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const Order = () => {
    const itemsInBacket = useMagSelector<ItemsType[]>(state => state.items.byedItems.bItems)
    const allItems = useMagSelector<ItemsType[]>(state => state.items.items)
    const dispatch = useDispatch()

    return <MainOrderCase>
        <h3 style={{
            backgroundColor: 'hotpink',
            borderRadius: '10px',
            padding: '5px 10px'
        }}
        >Order your magazins </h3>
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                country: '',
                city: '',
                street: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, action) => {
                // same shape as initial values
                action.resetForm()
                orderItems(itemsInBacket, allItems, dispatch)
                dispatch(orderItemsTC(values.name, values.city, values.email))
            }}
        >
            {({errors, touched, values, handleChange}) => (
                <Form>
                    <FormCase>
                        <FormControl>
                            <TextField
                                fullWidth
                                variant="filled"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                id="surname"
                                name="surname"
                                label="Surname"
                                type="text"
                                value={values.surname}
                                onChange={handleChange}
                                error={touched.surname && Boolean(errors.surname)}
                                helperText={touched.surname && errors.surname}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                id="country"
                                name="country"
                                label="Country"
                                type="text"
                                value={values.country}
                                onChange={handleChange}
                                error={touched.country && Boolean(errors.country)}
                                helperText={touched.country && errors.country}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                id="city"
                                name="city"
                                label="City"
                                type="text"
                                value={values.city}
                                onChange={handleChange}
                                error={touched.city && Boolean(errors.city)}
                                helperText={touched.city && errors.city}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                id="street"
                                name="street"
                                label="Street"
                                type="text"
                                value={values.street}
                                onChange={handleChange}
                                error={touched.street && Boolean(errors.street)}
                                helperText={touched.street && errors.street}
                            />
                            <Button variant="contained"
                                    size="small"
                                    type="submit"
                                    style={{backgroundColor: 'rgba(115,77,230,0.7)'}}
                            >
                                <AddCardIcon/> <AddIcon/> <LocalShippingIcon/>
                            </Button>
                        </FormControl>
                    </FormCase>
                </Form>
            )}
        </Formik>
    </MainOrderCase>
};
