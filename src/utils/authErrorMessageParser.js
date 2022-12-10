export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz eposta adresi';
    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/email-already-in-use':
      return 'Email zaten kullanımda';
    case 'auth/weak-password':
      return 'Zayıf şifre';
    case 'auth/wrong-password':
      return 'Şifre hatalı';
    default:
      return errorCode;
  }
}
