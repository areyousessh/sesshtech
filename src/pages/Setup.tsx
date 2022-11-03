import { Header } from "../components/header";


export function Setup() {
    return(
        <div className="flex flex-1 flex-col">
            <Header/>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <span className="flex bg-gradient-to-r from-blue-100 to-grey-100 rounded-3xl ml-92 mt-20 w-28 h-10 items-center justify-center"> 
                        <h1 className="text-white-200 text-2xl font-bold">
                            Setup
                        </h1>
                    </span>
                    <span className="flex border-t-2 mt-12 sm:mt-20 lg:mt-20 w-96 justify-center border-orange-100 " />
                    <p className="text-white-200 pl-2 sm:pl-0 lg:pl-0 mt-10">
                        Aqui nesse tópico coloco alguns dos equipamentos que utilizo
                    </p>
                    <h3 className="text-white-200 font-bold pl-2 sm:pl-0 lg:pl-0 mt-10">Computador</h3>
                    <ul className="mt-10 -ml-16">
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Processador-Intel-I5-10400F-Cache-4-3GHz/dp/B0883PYCB4/?_encoding=UTF8&amp;pd_rd_w=qoN4K&amp;content-id=amzn1.sym.07271deb-23ee-498c-8f97-f25954bcc083&amp;pf_rd_p=07271deb-23ee-498c-8f97-f25954bcc083&amp;pf_rd_r=57CAV25BQDYXKWB2946D&amp;pd_rd_wg=CqrNO&amp;pd_rd_r=faf21f78-423c-4e74-89fb-4002f93b8225&amp;ref_=pd_gw_ci_mcx_mr_hp_atf_m&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=da87c75ab4dad5cb46c6062dd02ea898&camp=1789&creative=9325">Processador Intel Core i5-10400F</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/PLACA-GIGABYTE-B560M-AORUS-PRO/dp/B091CV6D3D/ref=sr_1_3?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2KKRHAVE4OV9U&amp;keywords=b460m+aorus+pro&amp;qid=1667435656&amp;qu=eyJxc2MiOiIxLjg4IiwicXNhIjoiMS41NiIsInFzcCI6IjAuMDAifQ%253D%253D&amp;s=computers&amp;sprefix=b460m+aorus+pro%252Ccomputers%252C241&amp;sr=1-3&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=b51a15f12dd5a31dc981635f2e805cb0&camp=1789&creative=9325">Placa Mãe B460M Aorus Pro</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/XPG-PC4-25600-CL16-20-20-U-DIMM-AX4U320016G16A-DT60/dp/B08YRG3H78/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=KQKRVGLWBL7R&amp;keywords=d60G+3200mhz+32gb&amp;qid=1667435746&amp;s=computers&amp;sprefix=d60g+3200mhz+32g%252Ccomputers%252C206&amp;sr=1-1&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=a7682709648cf5271a13237e3b32660d&camp=1789&creative=9325">Memória RAM 32GB XPG D60G 3200MHZ</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/SSD-SATA3-240GB-Kingston-SA400S37/dp/B01N5IB20Q/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=3RHF3H9OGAOQU&amp;keywords=a400+240gb&amp;qid=1667435803&amp;qu=eyJxc2MiOiIxLjA2IiwicXNhIjoiMS4wMCIsInFzcCI6IjAuOTgifQ%253D%253D&amp;s=computers&amp;sprefix=a400+240gb%252Ccomputers%252C197&amp;sr=1-1&amp;ufe=app_do%253Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=aeb2e6a2ac583fdeaf14bc8dd5c2353d&camp=1789&creative=9325">SSD 240GB Sata III Kingston A400</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/SNVS-250G-formato-Leitura-Grava%25C3%25A7%25C3%25A3o/dp/B09DVP94WC/ref=sr_1_4?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=37XNU1B2A3I5V&amp;keywords=a2000+512&amp;qid=1667435841&amp;s=computers&amp;sprefix=a2000+51%252Ccomputers%252C192&amp;sr=1-4&amp;ufe=app_do%253Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=8154562a1155ba59571c395f55ffbcec&camp=1789&creative=9325">SSD NVME Kingston A2000 250GB</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Seagate-BarraCuda-1TB-3-5%25C2%25B4-SATA/dp/B01LNJBA2I/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=1DDNPW6DXTFAX&amp;keywords=barracuda&amp;qid=1667435905&amp;qu=eyJxc2MiOiIyLjk5IiwicXNhIjoiMi41MCIsInFzcCI6IjEuMzcifQ%253D%253D&amp;s=computers&amp;sprefix=barracud%252Ccomputers%252C192&amp;sr=1-1&amp;ufe=app_do%253Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=e94c1702a4d1c0cc9d9100e4aec507d6&camp=1789&creative=9325">2x HD 1TB Sata III Seagate Barracuda</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/PowerColor-Hellhound-Radeon-mem%25C3%25B3ria-alimentada/dp/B09BWYTRXQ/ref=sr_1_4?keywords=hellhound&amp;qid=1667435942&amp;qu=eyJxc2MiOiIwLjAwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sr=8-4&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=a9940e4d2e953e9af951133adb522459&camp=1789&creative=9325">Placa de Video RX6600XT 8GB PowerColor HellHound</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/GAMEMAX-Fonte-Alimenta%25C3%25A7%25C3%25A3o-GM650-PRETA/dp/B084RQ1CHM/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2PW4ZV2YX745Y&amp;keywords=gm650&amp;qid=1667435991&amp;qu=eyJxc2MiOiIwLjcxIiwicXNhIjoiMC4xNSIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=gm650%252Caps%252C200&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=d84e9b45998c540137f89d10c9c7ebf4&camp=1789&creative=9325">Fonte 650W 80Plus PFC Ativo GM650</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.kabum.com.br/produto/113645/gabinete-gamer-sharkoon-rev220-mid-tower-rgb-com-fan-lateral-em-vidro-rev220?gclid=Cj0KCQjwqoibBhDUARIsAH2OpWjjEwiZNOypIoeAHalqbOCZd_nEcuVGt2qfZcEP0pfNLgHYNROnITwaAqU5EALw_wcB">Gabinete Sharkoon Rev220 ATX</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Cooler-para-Processador-Coolermaster-RR-H410-20PC-R1/dp/B0821GBNHM/ref=sr_1_2?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=YHVQOW4INQ27&amp;keywords=ma410p&amp;qid=1667436076&amp;qu=eyJxc2MiOiIyLjU1IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=ma410%252Caps%252C190&amp;sr=8-2&amp;ufe=app_do%253Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=af2fef3e98443f6cd2bcfb434a4c1f2f&camp=1789&creative=9325">Cooler Master MA410P</a>
                        </li>
                        <li className="text-white-200 ml-14 pl-2 sm:pl-0 lg:pl-0">
                            Sistema Operacional MacOS Ventura
                        </li>
                    </ul>
                    <h3 className="text-white-200 font-bold pl-2 sm:pl-0 lg:pl-0 mt-10">Monitores</h3>
                    <ul className="mt-10 -ml-16">
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Monitor-para-Full-UltraWide-LG/dp/B07HJFN4L6/ref=sr_1_1?crid=38WYJJPWVO7XL&amp;keywords=monitor+ultrawide+29&amp;qid=1667436230&amp;qu=eyJxc2MiOiIzLjA2IiwicXNhIjoiMi4yNiIsInFzcCI6IjEuODUifQ%253D%253D&amp;sprefix=monitor+ultra%252Caps%252C220&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=3eceb2101ac6166b56e65b1419f3d777&camp=1789&creative=9325">Monitor 29 Ultrawide LG</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Monitor-Gamemax-Widescreen-Display-GMX27F144Q/dp/B07YF1BQZF/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2WM31BUN34T4E&amp;keywords=monitor+gamemax+27&amp;qid=1667436269&amp;qu=eyJxc2MiOiIxLjMzIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=monitor+gamemax+27%252Caps%252C203&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=f1b036a42d3fb78c794f6fde0bfa3391&camp=1789&creative=9325">Monitor 27 Gamemax 144hz Curvo</a>
                        </li>
                    </ul>
                    <h3 className="text-white-200 font-bold pl-2 sm:pl-0 lg:pl-0 mt-10">Periféricos</h3>
                    <ul className="mt-10 -ml-16">
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a  target="_blank"href="https://www.amazon.com.br/Logitech-LIGHTSPEED-Bot%25C3%25B5es-Program%25C3%25A1veis-12-000/dp/B07GPRWFC5/ref=sr_1_3?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=1HZB7QA3L9VE1&amp;keywords=g203+lightspeed&amp;qid=1667436313&amp;qu=eyJxc2MiOiIxLjM0IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=g203+lightspee%252Caps%252C223&amp;sr=8-3&amp;ufe=app_do%253Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=39849cc3f2b37858fadd11d0c0c15bbb&camp=1789&creative=9325">Mouse Logitech G203 Lightspeed</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://epomaker.com/products/epomaker-gk68xs?variant=31743344607305">Teclado Epomaker GK68</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Widescreen-Tecnologia-Replacement-Logitech-Equipamentos/dp/B01MTTMPKT/ref=sr_1_1_sspa?keywords=c922+pro&amp;qid=1667436385&amp;qu=eyJxc2MiOiIyLjI0IiwicXNhIjoiMS40NyIsInFzcCI6IjEuMTkifQ%253D%253D&amp;sprefix=c922%252Caps%252C205&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.4bddec23-2dcf-4403-8597-e1a02442043d&amp;psc=1&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=d75d59e197f369e5b44c9ade0d4a6916&camp=1789&creative=9325">Webcam Logitech C922 Pro</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Microfone-din%25C3%25A2mico-mesa-Arcano-NABUC/dp/B07WHMFPLJ/ref=sr_1_1?keywords=arcano+nabuc&amp;qid=1667436416&amp;qu=eyJxc2MiOiIwLjgyIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=arcano+na%252Caps%252C213&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=8b5f9757435603d9838f9cc77e11d232&camp=1789&creative=9325">Microfone Arcano Nabuc</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Headset-Gamer-Corsair-Wireless-Surround/dp/B07X9W721J/ref=sr_1_1?crid=18ENEK6AQDLX&amp;keywords=hs70+pro+wireless&amp;qid=1667436446&amp;qu=eyJxc2MiOiIwLjg4IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%253D%253D&amp;sprefix=hs70%252Caps%252C201&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=87a0de45190f2df60babbe7ac032e035&camp=1789&creative=9325">Headset Corsair HS70 Wireless</a>
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            Iphone XR 128GB Coral
                        </li>
                        <li className="text-white-200 -ml-20 pl-2 sm:pl-0 lg:pl-0">
                            <a target="_blank" href="https://www.amazon.com.br/Apple-MLWK3BE-A-AirPods-Pro/dp/B09KM7KSZN/ref=sr_1_1_sspa?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2864XEEHLQ3OF&amp;keywords=airpods+pro&amp;qid=1667436500&amp;qu=eyJxc2MiOiIzLjU2IiwicXNhIjoiMi40OCIsInFzcCI6IjIuMjAifQ%253D%253D&amp;sprefix=airpods+pr%252Caps%252C210&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&amp;psc=1&_encoding=UTF8&tag=areyousessh-20&linkCode=ur2&linkId=6e25f2e8f3d282387353a6d144a24066&camp=1789&creative=9325">Airpods Pro</a>
                        </li>
                    </ul>
                    <span className="mt-20"></span>
                </div>
                    
        </div>
    )
   
}