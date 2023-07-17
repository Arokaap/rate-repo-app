import { Formik } from 'formik'
import React from 'react'
import { TextInput, View } from 'react-native'

const initialValues = {
  email: '',
  password: ''
}

const LogInPage = () => {
  return (
    <Formik
      initialValues={initialValues} onSubmit={values => {
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <TextInput placeholder='E-mail' value={values.email} onChangeText={handleChange('email')} />
            <TextInput />
          </View>
        )
      }}
    </Formik>
  )
}

export default LogInPage
