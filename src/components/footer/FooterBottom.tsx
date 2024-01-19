import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MasterCardIcon,
  VisaCardIcon,
  YoutubeIcon,
} from "../../assets/icons";

const FooterBottom = () => {
  return (
    <section className="w-full bg-color-2-500 p-6">
      <div className="max-w-3xl flex items-center gap-9 md:justify-between m-auto flex-wrap flex-col md:flex-row">
        <div className="flex items-center justify-center gap-5 ">
          <FacebookIcon />
          <LinkedinIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="flex items-center justify-center gap-5">
          <VisaCardIcon />
          <MasterCardIcon />
          <VisaCardIcon />
          <MasterCardIcon />
        </div>
        <div className="flex items-center justify-center gap-6">
          <figure>
            <legend className="text-[10px] text-white">Powered by</legend>
            <img src="/footer/footer-vtex-logo.png" alt="vtex logo" />
          </figure>
          <figure>
            <legend className="text-[10px] text-white pt-1">
              Developed by
            </legend>
            <img src="/footer/footer-maeztra-logo.png" alt="maeztra logo" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
