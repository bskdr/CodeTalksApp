import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Sign.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleGoLoginPage = () => {
    navigation.goBack();
  };

  const handleSignUp = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor.',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
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
      <Formik initialValues={initialFormValues} onSubmit={handleSignUp}>
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
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz."
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Giriş Yap" theme="secondary" onPress={handleGoLoginPage} />
    </View>
  );
};

export default Sign;
