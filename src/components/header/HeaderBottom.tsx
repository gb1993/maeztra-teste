import { headerMenu } from "../../api/";

const HeaderBottom = () => {
  return (
    <section className="w-full p-2.5 hidden lg:block">
      <ul className="w-full flex items-center justify-center gap-24">
        {headerMenu.map((item) => (
          <a key={item.id} href={item.link}>
            <li
              className={`flex items-center justify-center gap-2 text-sm; ${
                item.text === "Novidades"
                  ? "text-color-1-500"
                  : "text-color-2-500"
              }`}
            >
              {item.icon && <item.icon />} {item.text}
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default HeaderBottom;
