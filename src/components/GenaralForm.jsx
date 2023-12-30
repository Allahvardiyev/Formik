import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';
const onSubmit= async(values,actions)=>{
  await new Promise((resolve)=>{
      setTimeout(resolve,1000)
  })
  actions.resetForm()
}

const GenaralForm = () => {
  const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: '',
      age:'',
      password:'',
      confirmPassword:'',
    },
    validationSchema:basicSchema,
    onSubmit,
  });
  
  return (<form onSubmit={handleSubmit}>
    <div className='inputDiv'>
      <label>Email</label>
      <input 
      type="email" 
       value={values.email}
       onChange={handleChange}
       id='email'
       placeholder='Mail adresinizi girin...'
       className={errors.email? 'input-error':''}
      />
      {errors.email &&<p className='error'>{errors.email}</p>}
    </div>
    <div className='inputDiv'>
      <label>Yaş</label>
      <input 
      type="number" 
       value={values.age}
       onChange={handleChange}
       id='age'
       placeholder='Yaşınıza girin...'
       className={errors.age? 'input-error':''}
      />
      {errors.age &&<p className='error'>{errors.age}</p>}
    </div>
    <div className='inputDiv'>
      <label>Şifrə</label>
      <input 
      type="password" 
       value={values.password}
       onChange={handleChange}
       id='password'
       placeholder='Şifrənizi giriniz...'
       className={errors.password? 'input-error':''}
      />
      {errors.password &&<p className='error'>{errors.password}</p>}
    </div>
    <div className='inputDiv'>
      <label>Şifrə Təkrar</label>
      <input 
      type="password" 
       value={values.confirmPassword}
       onChange={handleChange}
       id='confirmPassword'
       placeholder='Şifrənizi təkrar giriniz...'
       className={errors.confirmPassword? 'input-error':''}
      />
      {errors.confirmPassword &&<p className='error'>{errors.confirmPassword}</p>}
    </div>
    <button disabled={isSubmitting} type='submit'>Kaydet</button>
    <Link className='formLink' to='/portal'>Portal sayfasina git</Link>
  </form>
  )
}

export default GenaralForm