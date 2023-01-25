import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div className="w-full flex justify-center flex-col items-center mt-7">
      <form className="w-96 flex flex-col items-center gap-3 mt-8">
        <h2 className="text-xl mb-4">Форма входа</h2>
        <input type="text" placeholder="your@email.ru" className="border border-gray-400 w-full rounded-2xl p-3 focus:border-red-500 focus:outline-none" />
        <input type="password" placeholder="Пароль"  className="border border-gray-400 w-full rounded-2xl p-3 focus:border-red-500 focus:outline-none" />
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full max-w-max">Войти</button>
        <h6>Нет аккаунта? <Link to="/register" className="text-red-600">Зарегестрируйтесь</Link></h6>
      </form>
    </div>
  )
}

export default LoginPage
