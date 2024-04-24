import { Page } from "../../Components/Layout";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EmployeeSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The first name is required field'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('The last name is required field'),
    email: Yup.string().email('Invalid email').required('The email is required field'),
    sin: Yup.string().required('The SIN is required field'),
    address: Yup.string().required('The address is required field'),
    city: Yup.string().required('The city is required field'),
    province: Yup.string().required('The province is required field'),
    postal: Yup.string().required('The postal is required field'),
});

export default function NewEmployees() {
    return (
        <Page>
            <div className="pt-8">
                <h1 className="text-2xl font-bold mb-8">Add Employees</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        sin: '',
                        address: '',
                        city: '',
                        province: '',
                        postal: '',
                    }}
                    validationSchema={EmployeeSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="pb-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                        <Field name="firstName" id="firstName" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.firstName && touched.firstName ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.firstName}</span> : null}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2">
                                        <Field name="lastName" id="lastName" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.lastName && touched.lastName ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.lastName}</span> : null}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <Field id="email" name="email" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.email && touched.email ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.email}</span> : null}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="sin" className="block text-sm font-medium leading-6 text-gray-900">Social Insurance Number</label>
                                    <div className="mt-2">
                                        <Field id="sin" name="sin" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.sin && touched.sin ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.sin}</span> : null}
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                    <div className="mt-2">
                                        <Field name="address" id="address" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.address && touched.address ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.address}</span> : null}
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div className="mt-2">
                                        <Field name="city" id="city" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.city && touched.city ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.city}</span> : null}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                    <div className="mt-2">
                                        <Field name="province" id="province" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.province && touched.province ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.province}</span> : null}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div className="mt-2">
                                        <Field name="postal" id="postal" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    {errors.postal && touched.postal ? <span className="absolute text-xs font-medium text-red-700 pt-1">{errors.postal}</span> : null}
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-semibold" type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Page>
    )
}
