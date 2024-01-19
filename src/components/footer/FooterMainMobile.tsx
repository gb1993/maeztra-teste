import { useState } from "react";
import { footerMenu } from "../../api";

const FooterMainMobile = () => {
  const [openDetails, setOpenDetails] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (id: number) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="flex justify-center flex-col gap-4 pt-10 md:flex-row md:gap-[270px]">
      {footerMenu.map((item, i) => (
        <details
          key={i}
          open={openDetails[i]}
          onToggle={() => handleToggle(i)}
          className="footer-details"
        >
          <summary className="list-none flex items-center justify-between font-bold text-base cursor-pointer">
            <span>{item.title}</span>
            <span>{openDetails[i] ? "-" : "+"}</span>
          </summary>
          <ul className="flex flex-col gap-2 md:gap-6">
            {item.subItems.map((subitem, j) => (
              <li key={j}>
                <a href={subitem.link} className="text-xs">
                  {subitem.text}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default FooterMainMobile;
