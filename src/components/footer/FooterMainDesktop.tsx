import { footerMenu } from "../../api";

const FooterMainDesktop = () => {
  return (
    <div className="flex justify-center gap-[270px] pt-10">
      {footerMenu.map((item, i) => (
        <div key={i}>
          <h3 className="font-base font-bold text-color-2-500 mb-6">
            {item.title}
          </h3>
          <ul className="flex flex-col gap-6">
            {item.subItems.map((subitem, i) => (
              <a href={subitem.link} key={i + 20}>
                <li className="text-xs whitespace-nowrap">{subitem.text}</li>
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMainDesktop;
