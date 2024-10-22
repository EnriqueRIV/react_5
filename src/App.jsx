import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log(errors);

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className='card'>
        <form onSubmit={handleSubmit(submit)}>
          <div className='errorsMsg'>
            {errors.userName && <p>{errors.userName.message}</p>}
            {errors.email && <p>{errors.email.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label>User Name</label>
            <input
              className={errors.userName ? 'error' : ''}
              {...register('userName', { required: 'User Name is required' })}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              className={errors.email ? 'error' : ''}
              {...register('email', {
                required: 'E-mail is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'You must enter a correct email'
                }
              })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className={errors.password ? 'error' : ''}
              type='password'
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^[0-9]{2}[A-Za-z]{4}$/,
                  message:
                    'Password must have first 2 numbers, then uppercase, lowercase, lenght 6 characters'
                }
              })}
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
