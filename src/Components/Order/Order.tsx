// import React from 'react';
// import {FormCase, MainOrderCase} from './OrderStyles';
// import {useFormik} from "formik";
//
// const Order = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             surname: '',
//             email: '',
//             country: '',
//             city: '',
//             street: '',
//         },
//         onSubmit: value => {
//             console.log({
//                 name: value.name,
//                 surname: value.surname,
//                 email: value.email,
//                 country: value.country,
//                 city: value.city,
//                 street: value.street,
//             })
//             formik.resetForm()
//             // axios.post("https://ymndjs.herokuapp.com/sendMessage", {
//             //     // axios.post("http://localhost:3010/sendMessage", {
//             //     name: value.name,
//             //     surname: value.surname,
//             //     email: value.email,
//             //     address: value.address,
//             // })
//             //     .then(() => {
//             //         alert('ok!')
//             //     })
//         }
//     })
//
//     return (
//         <MainOrderCase>
//             <form onSubmit={formik.handleSubmit}>
//                 <FormCase>
//                     Name: <input
//                     type={"text"}
//                     placeholder={"Name"}
//                     {...formik.getFieldProps('name')}
//                 />
//
//                 {/*<input type="text" placeholder={'surname'}/>*/}
//                     Surname: <input
//                     type={"text"}
//                     placeholder={"Surname"}
//                     {...formik.getFieldProps('surname')}
//                 />
//
//                 {/*<input type="text" placeholder={'phone'}/>*/}
//                     Email: <input
//                     type={"text"}
//                     placeholder={"Email"}
//                     {...formik.getFieldProps('email')}
//                 />
//
//                 {/*<input type="text" placeholder={'address'}/>*/}
//                     Address: <input
//                     type={"text"}
//                     placeholder={"Country"}
//                     {...formik.getFieldProps('country')}
//                 />
//                     <input
//                         type={"text"}
//                         placeholder={"City"}
//                         {...formik.getFieldProps('city')}
//                     />
//                     <input
//                         type={"text"}
//                         placeholder={"Street"}
//                         {...formik.getFieldProps('street')}
//                     />
//
//                 <button type={'submit'}>ORDER</button>
//
//                 {/*<input type="text" placeholder={'name'}/>*/}
//                 </FormCase>
//             </form>
//         </MainOrderCase>
//     );
// };
//
// export default Order;

import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {FormCase, MainOrderCase} from './OrderStyles';
import {useDispatch} from "react-redux";
import {useMagSelector} from "../../App/store";
import {ItemsType, magAPI} from "../../Api/MagAPI";
import {orderItems} from "../../Utils/MagUtils";
import {orderItemsTC} from "../../Features/ItemsAction";

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
        <h3>Order your magazins</h3>
        <Formik
            initialValues={{
                name: 'mikhail',
                surname: 'yachnik',
                email: 'limerick2011@yandex.by',
                country: 'belarus',
                city: 'brest',
                street: 'gercena',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, action) => {
                // same shape as initial values
                action.resetForm()
                orderItems(itemsInBacket, allItems, dispatch)
                // console.log(values);
                // alert(` Dear ${values.name},
                // your magazins will be send
                // in ${values.city}!
                // Check your ${values.email}
                // to confirm =)`)
                dispatch(orderItemsTC(values.name, values.city, values.email))
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <FormCase>
                        <Field name="name" type={"text"}
                               placeholder={"Name"}/>
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <Field name="surname" type="text" placeholder={'surname'}/>
                        {errors.surname && touched.surname ? (
                            <div>{errors.surname}</div>
                        ) : null}
                        <Field name="email" type="email" placeholder={"Email"}/>
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="country" type={"text"}
                               placeholder={"Country"}/>
                        {errors.country && touched.country ? (
                            <div>{errors.country}</div>
                        ) : null}
                        <Field name="city" type={"text"}
                               placeholder={"City"}/>
                        {errors.city && touched.city ? (
                            <div>{errors.city}</div>
                        ) : null}
                        <Field name="street" type={"text"}
                               placeholder={"Street"}/>
                        {errors.street && touched.street ? (
                            <div>{errors.street}</div>
                        ) : null}


                        <button type="submit">Order</button>
                    </FormCase>
                </Form>
            )}
        </Formik>
    </MainOrderCase>
};