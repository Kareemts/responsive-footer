import facbook from "./assets/facebook.svg";
import gasell from "./assets/gasell.svg";
import em from "./assets/em.svg";

export default function App() {
  return (
    <section>
      <footer className="relative">
        {/* desktop */}
        <div className="w-full h-[498px]  px-10 hidden lg:block  pt-20 bg-[#89BF50] fixed bottom-0 text-[#FFFFFF] ">
          <div className="flex     2xl:justify-center">
            <div className="flex gap-20  ">
              <div className="text-[20px] font-[400] text-nowrap">
                <h4 className="text-[32px] font-[600]">Kontakt</h4>
                <p className="mt-5">Egestam Mattsson El & Data AB</p>
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
              <div className="text-[18px] mt-[70px] font-[400] flex flex-col gap-2 text-nowrap">
                <p className="text-[16px] font-[600]">Din integritet</p>
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
            <div className="flex  xl:gap-36">
              <div className="text-[18px] font-[400] ml-6 flex flex-col gap-2">
                <p className="text-[32px] font-[600]">Gasellvinnare</p>
                <img src={gasell} width={268} height={128} alt="gasell" />{" "}
                <p className="text-[12px] font-[300] w-[284px]">
                  Med målet att vara marknadsledande, kombinerar Egestam och
                  Mattsson expertkunskap, engagemang och innovation för att
                  bygga varaktiga kundrelationer och leverera arbete med fokus
                  på kvalitet, miljömedvetenhet och säkerhet.
                </p>
              </div>
              <div className="text-[18px] mt-[100px] ">
                <img
                  src={em}
                  width={164}
                  height={104}
                  alt="em"
                  className="w-[164px] h-[104px]"
                />{" "}
              </div>
            </div>
          </div>
          <div className="bg-white h-[1px] absolute bottom-20 right-0 opacity-20 w-[80%]" />
          <p className="mt-20 text-[20px] font-[400] text-end mr-[250px]">
            Copyright © 2024 All rights reserved.
          </p>
        </div>
        {/* below tab screen */}
        <div className="flex  justify-center px-5 items-center md:justify-start lg:hidden h-[597px] bg-[#89BF50] w-full fixed bottom-0 text-[#FFFFFF] ">
          <div className="flex flex-col  px-5 md:px-8 mt-28">
            <div className="md:text-[16px] relative font-[400] text-nowrap">
              <div className="absolute  md:hidden left-0 -top-36">
                <img
                  src={em}
                  width={164}
                  height={104}
                  alt="em"
                  className="min-w-[164px] h-[104px]"
                />{" "}
              </div>
              <h4 className="text-[32px] font-[600]">Kontakt</h4>
              <p className="md:mt-1">Egestam Mattsson El & Data AB</p>
              <p>Ridspögatan 15a</p>
              <p>213 77 Malmö</p>
              <p className=""> Tel: 040-6170166</p>
              <p>E-post: info@emeldata.se</p>
            </div>
            <div className="flex gap-16">
              <div className="md:text-[16px] mt-[45px] font-[400]  flex flex-col gap-2 text-nowrap">
                <p className="md:text-[18px] font-[600]">Meny</p>
                <p>Vårt erbjudande</p>
                <p>Hållbarhet</p>
                <p>Jobba hos oss</p>
                <p>Om oss</p>
                <p>Kontakta oss</p>
              </div>
              <div className="bg-white h-[1px] absolute -left-10 md:left-0 mx-10  bottom-64 opacity-20 w-[90%] md:w-[45%]" />
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
              className="min-w-[164px] h-[104px]"
            />{" "}
          </div>
        </div>
      </footer>
    </section>
  );
}
