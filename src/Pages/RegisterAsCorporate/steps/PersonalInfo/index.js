// ** React Imports
import { useState } from 'react';


// ** Third Party Components
import * as yup from 'yup'
import { useForm} from 'react-hook-form'
// import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref(`password`), null], 'Passwords must match'),
  fullName:yup.string().required(),
  mobileNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')
}).required();


const PersonalInfo = ({formData , setFormData , page , setPage}) => {
  const { register , formState:{errors}} = useForm(
    {resolver: yupResolver(schema)}); 

  return (
    <div>
      <div className='my-3 input_'>
        <input 
        name="username"
        {...register("username")} 
        placeholder="User name"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        type="text"
        />
        <p style={{color:"red"}}>{errors.username?.message}</p>
      </div>
      <div className='my-3 input_'>
        <input 
        name='password'
        {...register("password")} 
        placeholder="Password" 
        type="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
        />
        <p style={{color:"red"}}>{errors.password?.message}</p>
      </div>
      <div className='my-3 input_'>
          <input 
          name="confirmPassword"
          {...register("confirmPasswod")} 
          placeholder="Confirm Password" 
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
          />
          <p style={{color:"red"}}>{errors.confirmPasswod?.message}</p>
      </div>
    </div>
  )
}

export default PersonalInfo;

/*
<Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='username'>
              Username
            </Label>
            <Controller
              id='username'
              name='username'
              control={control}
              render={({ field }) => <Input placeholder='johndoe' invalid={errors.username && true} {...field} />}
            />
            {errors.username && <FormFeedback>{errors.username.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email`}>
              Email
            </Label>
            <Controller
              control={control}
              id='email'
              name='email'
              render={({ field }) => (
                <Input type='email' placeholder='john.doe@email.com' invalid={errors.email && true} {...field} />
              )}
            />
            {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for='password'>
              Password
            </Label>
            <Controller
              id='password'
              name='password'
              control={control}
              render={({ field }) => <Input type='password' invalid={errors.password && true} {...field} />}
            />
            {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for='confirmPassword'>
              Confirm Password
            </Label>
            <Controller
              control={control}
              id='confirmPassword'
              name='confirmPassword'
              render={({ field }) => <Input type='password' invalid={errors.confirmPassword && true} {...field} />}
            />
            {errors.confirmPassword && <FormFeedback>{errors.confirmPassword.message}</FormFeedback>}
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
          </Button>
        </div>
      </Form>
      */