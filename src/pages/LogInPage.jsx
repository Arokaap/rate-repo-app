import { Formik, useField } from 'formik'
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <StyledTextInput
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}

const LogInPage = () => {
  return (
    <Formik
      initialValues={initialValues} onSubmit={values => {
        console.log(values)
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='E-mail'
            />
            <FormikInputValue
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}

export default LogInPage
