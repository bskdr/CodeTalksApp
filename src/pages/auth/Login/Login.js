import {Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleGoSignPage = () => {
    navigation.navigate('SignPage');
  };

  const handleLogin = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı girişi yapıldı',
        type: 'success',
      });
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('email')}
              value={values.email}
              placeholder="Epostanızı giriniz."
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifrenizi giriniz."
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleGoSignPage} />
    </View>
  );
};

export default Login;
