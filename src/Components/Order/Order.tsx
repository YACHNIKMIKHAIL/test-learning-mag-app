import React from 'react';
import {FormCase, MainOrderCase} from './OrderStyles';
import {useFormik} from "formik";

const Order = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            country: '',
            city: '',
            street: '',
        },
        onSubmit: value => {
            console.log({
                name: value.name,
                surname: value.surname,
                email: value.email,
                country: value.country,
                city: value.city,
                street: value.street,
            })
            formik.resetForm()
            // axios.post("https://ymndjs.herokuapp.com/sendMessage", {
            //     // axios.post("http://localhost:3010/sendMessage", {
            //     name: value.name,
            //     surname: value.surname,
            //     email: value.email,
            //     address: value.address,
            // })
            //     .then(() => {
            //         alert('ok!')
            //     })
        }
    })

    return (
        <MainOrderCase>
            <form onSubmit={formik.handleSubmit}>
                <FormCase>
                    Name: <input
                    type={"text"}
                    placeholder={"Name"}
                    {...formik.getFieldProps('name')}
                />

                {/*<input type="text" placeholder={'surname'}/>*/}
                    Surname: <input
                    type={"text"}
                    placeholder={"Surname"}
                    {...formik.getFieldProps('surname')}
                />

                {/*<input type="text" placeholder={'phone'}/>*/}
                    Email: <input
                    type={"text"}
                    placeholder={"Email"}
                    {...formik.getFieldProps('email')}
                />

                {/*<input type="text" placeholder={'address'}/>*/}
                    Address: <input
                    type={"text"}
                    placeholder={"Country"}
                    {...formik.getFieldProps('country')}
                />
                    <input
                        type={"text"}
                        placeholder={"City"}
                        {...formik.getFieldProps('city')}
                    />
                    <input
                        type={"text"}
                        placeholder={"Street"}
                        {...formik.getFieldProps('street')}
                    />

                <button type={'submit'}>ORDER</button>

                {/*<input type="text" placeholder={'name'}/>*/}
                </FormCase>
            </form>
        </MainOrderCase>
    );
};

export default Order;