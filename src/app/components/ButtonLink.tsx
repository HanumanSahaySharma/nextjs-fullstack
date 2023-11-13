import Link from "next/link";
import { FC } from "react";
interface IProps {
  text: string;
  url: string;
  className?:string;
}
const ButtonLink: FC<IProps> = ({ text, url, className }) => {
  return (
    <Link
      href={url}
      className={`inline-flex bg-blue-500 hover:bg-blue-800 py-1.5 px-3 text-white font-semibold rounded-md ${className ? className : ''}`}
    >
      {text}
    </Link>
  );
};
export default ButtonLink;
