import *as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema=yup.object().shape({
 email:yup
 .string()
 .email('Gecerli email giriniz')
 .required('Email girmek zorunludur'),

 age:yup
 .number()
 .positive('Lütfən pozitif bir yas giriniz')
 .integer('Lütfən yaşınızı tam sayı olarak giriniz')
 .required('Yaş girmeniz zorunludur'),

 password:yup
 .string()
 .min(5,'Lütfən minimum 5 karakter giriniz')
.matches(passwordRules,{
    message:'Lütfən en az 1 böyük harf 1 kişik harf ve 1 sayi giriniz'
})
.required('Şifrə girmək zorunludur'),

confirmPassword:yup
.string()
.oneOf([yup.ref('password')],'Şifrələr eşleşmiyor')
.required('Tekrar şifrə girmək zorunludur'),
})



export const advancedcSchema=yup.object().shape({
    username:yup
    .string()
    .min(3, 'Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır')
    .required('Kullanıcı adı zorunludur'),
   
    university:yup
    .string()
    .oneOf(['bdu','gdu','sdu','texniki'],'Lütfən universitenizi seciniz')
   .required('Lütfen universitenizi seçiniz'),
    isAcepted:yup
    .boolean().
    oneOf([true],'Kullanim koşullari kabul edilsin')
   })