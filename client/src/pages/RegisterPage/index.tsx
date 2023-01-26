import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = handleSubmit(data => {
    console.log(data)
    axios.get(`/test`);
  })

  return (
    <div className="w-full flex justify-center flex-col items-center mt-7">
      <form className="w-96 flex flex-col items-center gap-3 mt-8" onSubmit={onSubmit}>
        <h2 className="text-xl mb-4">Форма регистрации</h2>
        <input
          type="text"
          placeholder="Ваше имя"
          className="border border-gray-400 w-full rounded-2xl p-3 focus:border-red-500 focus:outline-none"
          {...register('name', { required: true, maxLength: 20, minLength: 5 })}
        />
        {errors.name ? (
          <span className="text-red-800 text-xs -mt-2">
            Длина имени должна быть от 5 до 20 символов
          </span>
        ) : null}
        <input
          type="text"
          placeholder="your@email.ru"
          className="border border-gray-400 w-full rounded-2xl p-3 focus:border-red-500 focus:outline-none"
          {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
        />
        {errors.email ? (
          <span className="text-red-800 text-xs -mt-2">
            Введите адрес электронной почты (your@email.ru)
          </span>
        ) : null}
        <input
          type="password"
          placeholder="Пароль"
          className="border border-gray-400 w-full rounded-2xl p-3 focus:border-red-500 focus:outline-none"
          {...register('password', { required: true, minLength: 8, maxLength: 16 })}
        />
        {errors.password ? (
          <span className="text-red-800 text-xs -mt-2">
            Длина имени должна быть от 8 до 16 символов
          </span>
        ) : null}
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full max-w-max"
        >
          Зарегестрируйтесь
        </button>
        <h6>Есть аккаунта? <Link to="/login" className="text-red-600">Войдите</Link></h6>
      </form>
    </div>
  )
}

export default RegisterPage
