import { Link } from "react-router-dom"

const Button = ({ styles, msg, link }) => {
  return (
    <Link to={link} className={`py-[20px] px-[50px] bg-button font-poppins font-[600] ss:text-[20px] text-primary outline-none ${styles} rounded-[10px]`}>
      {msg}
    </Link>
  )
}

export default Button