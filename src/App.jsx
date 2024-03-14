import facbook from "./assets/facebook.svg";
import gasell from "./assets/gasell.svg";
import em from "./assets/em.svg";
import "@fontsource-variable/montserrat";

export default function App() {
  return (
    <section>
      <footer className="relative">
        {/* desktop */}
        <div className="w-full h-[498px]   px-10 hidden xl:block  pt-14 bg-[#89BF50] fixed bottom-0 text-[#FFFFFF] ">
          <div className="flex justify-between gap-8 2xl:gap-14">
            <div className="flex justify-between w-full gap-14  ">
              <div className="text-[20px] font-[400] text-nowrap">
                <h4 className="text-[32px] font-[600]">Kontakt</h4>
                <p className="mt-5 ">Egestam Mattsson El & Data AB</p>
                <p>Ridspögatan 15a</p>
                <p>213 77 Malmö</p>
                <p className="mt-5"> Tel: 040-6170166</p>
                <p>E-post: info@emeldata.se</p>
                <p className="mt-5"> Integritetspolicy</p>
              </div>
              <div className="text-[16px] mt-[70px] font-[400]  flex flex-col gap-2 text-nowrap">
                <p className=" text-[18px] font-[600]">Meny</p>
                <p>Hem</p>
                <p>Hållbarhet</p>
                <p>Tjänter</p>
                <p>Kontakta oss</p>
                <p>Jobba med oss</p>
              </div>
              <div className="text-[16px] mt-[70px] font-[400] flex flex-col gap-2 text-nowrap">
                <p className="text-[18px] font-[600]">Din integritet</p>
                <p>Integritetspolicy</p>
                <p>Cookiepolicy</p>
                <div className="flex  items-center gap-2">
                  {" "}
                  <img
                    src={facbook}
                    width={32}
                    height={32}
                    alt="facbook"
                  />{" "}
                  Facebook
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full gap-14 ">
              <div className="text-[18px] font-[400] flex flex-col gap-2">
                <p className="text-[32px] font-[600]">Gasellvinnare</p>
                <img src={gasell} width={268} height={128} alt="gasell" />{" "}
                <p className="text-[12px] font-[300] xl:w-[284px]">
                  Med målet att vara marknadsledande, kombinerar Egestam och
                  Mattsson expertkunskap, engagemang och innovation för att
                  bygga varaktiga kundrelationer och leverera arbete med fokus
                  på kvalitet, miljömedvetenhet och säkerhet.
                </p>
              </div>
              <div className="text-[18px] mt-[100px] mr-12 2xl:mr-28 ">
                <img
                  src={em}
                  width={164}
                  height={104}
                  alt="em"
                  className=" min-w-[164px] h-[104px]"
                />{" "}
              </div>
            </div>
          </div>
          <div className="bg-white h-[1px] absolute bottom-20 right-0 opacity-20 w-full" />
          <p className="mt-[88px] text-[20px] font-[400] text-center">
            Copyright © 2024 All rights reserved.
          </p>
        </div>
        {/* below tab screen */}
        <div className="flex   px-6 md:px-0 md:items-end md:pb-[40px]  md:justify-start xl:hidden  h-[618px] md:h-[597px] bg-[#89BF50] w-full fixed bottom-0 text-[#FFFFFF] ">
          <div className="flex flex-col   md:px-8 ">
            <div className="md:text-[16px]  font-[400] text-nowrap">
              <img
                src={em}
                width={164}
                height={104}
                alt="em"
                className="min-w-[164px] md:hidden mt-3 h-[104px]"
              />{" "}
              <p className="text-[32px] mt-3 mb-1 md:mt-0 font-[600]">
                Kontakt
              </p>
              <p className="md:mt-1">Egestam Mattsson El & Data AB</p>
              <p>Ridspögatan 15a</p>
              <p>213 77 Malmö</p>
              <p className="mt-2"> Tel: 040-6170166</p>
              <p>E-post: info@emeldata.se</p>
            </div>
            <div className="flex gap-16 md:gap-20">
              <div className="md:text-[16px] mt-[45px] font-[400]  flex flex-col gap-2 text-nowrap">
                <p className="md:text-[18px] font-[600]">Meny</p>
                <p>Vårt erbjudande</p>
                <p>Hållbarhet</p>
                <p>Jobba hos oss</p>
                <p>Om oss</p>
                <p>Kontakta oss</p>
              </div>
              <div className="bg-white h-[1px] absolute -left-10  mx-10  bottom-[295px] md:bottom-[255px]  opacity-20 w-full md:w-[50%]" />
              <div className="md:text-[16px] mt-[45px] font-[400] flex flex-col gap-2 text-nowrap">
                <p className="md:text-[18px] font-[600]">Din integritet</p>
                <p>Integritetspolicy</p>
                <p>Cookiepolicy</p>
                <div className="flex  items-center gap-2">
                  {" "}
                  <img
                    src={facbook}
                    width={32}
                    height={32}
                    alt="facbook"
                  />{" "}
                  Facebook
                </div>
              </div>
            </div>
          </div>
          <div className="absolute hidden md:block right-32 bottom-48">
            <img
              src={em}
              width={164}
              height={104}
              alt="em"
              className=" min-w-[164px] h-[104px]"
            />{" "}
          </div>
        </div>
      </footer>
    </section>
  );
}
