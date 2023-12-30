import React from 'react'
import {Form,Formik} from 'formik'
import CustomInput from './CustomInput';
import { advancedcSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

const onSubmit= async(values,actions)=>{
  console.log(values);
  console.log(actions);
  await new Promise((resolve)=>{
      setTimeout(resolve,1000)
  })
  actions.resetForm()
}
const PortalForm = () => {
  return (
    <>
     <Formik
       initialValues={{ username: '', university: '', isAcepted: false}}
       onSubmit={onSubmit }
       validationSchema={advancedcSchema}
     >
       {({isSubmitting}) => (
         <Form>
           <CustomInput 
           label="Kullanci Adi" 
           name="username" 
           type="text"
           placeholder="Kullanıcı Adınıza Giriniz..." />
           <CustomSelect
           label="Kullanci Adi" 
           name="university" 
           placeholder="Kullanıcı Universitenizi seçiniz..."
           >
            <option value="">Lütfen Universitenizi seçiniz..</option>
            <option value="bdu">Bakı Dövlət Universiteti</option>
            <option value="gdu">Gəncə Dövlət Universiteti</option>
            <option value="sdu">Sumqayit Dövlət Universiteti</option>
            <option value="texniki">Texniki  Universiteti</option>
           </CustomSelect>
           <CustomCheckbox type="checkbox" name="isAcepted"/>
           <button disabled={isSubmitting}  type='submit'>Kaydet</button>
           <Link className='formLink' to='/'>Ana sayfaya git</Link>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm