import './App.css';
import  'remixicon/fonts/remixicon.css';
import Details from './pages/Details';


function App() {
  const data = [
    {
      menu:[
        {
          title: 'menu1',
          icon: 'ri-kick-fill'
        },
        {
          title: 'menu2',
          icon: 'ri-kick-fill'
        },
        {
          title: 'menu3',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu4',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu5',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu6',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu7',
          icon: 'ri-kick-line',
        }
      ]
    }
  ]
  return (

    <>
{/* ----------------section start navbar----------------  */}
       
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex md:order-1">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
          </div>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <i class="ri-shopping-cart-2-fill"></i>
                </a>
              </li>
              <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <i className="ri-heart-fill"></i>
              </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <i className="ri-account-circle-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <hr/>

{/* ----------------section  navbar close ----------------  */}

{/* ----------------section start icon open ----------------  */}
<div className="flex content-center justify-center mt-10">
          {data[0].menu.map((item, index) => (
            <li class="liiconmenu" key={index}>
              <a
                href='#'
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page">
                <i className={`text-black text-3xl ${item.icon}`}></i>
              </a>
            </li>
          ))}
      </div>

{/* ----------------section  icon close  ----------------  */}







{/* ----------------section start info   ----------------  */}
<div className='info'>

<img
  src="https://www.techtalkthai.com/wp-content/uploads/2018/12/techtalkthai_2018_cpu_04-600x400.jpg"
  alt="cpu img"
  className="object-cover centered-image"
/>
</div>
<h1>CPU คืออะไร</h1>
<p>
  CPU คือหน่วยประมวลผลกลางของคอมพิวเตอร์เปรียบเหมือนสมองที่คอยทำหน้าที่ในการตัดสินใจหรือคำนวณข้อมูลคำสั่งที่ได้รับมา เป็นหัวใจหลักในการประมวลผล CPU นั้นย่อมาจาก Central Processing Unit ทำหน้าที่ประมวลผลข้อมูลเชิงตรรกะ โดยมีกระบวนการพื้นฐานคือ 
  1.อ่านชุดคำสั่ง 2.ตีความชุดคำสั่ง 3.ประมวลผลชุดคำสั่ง 4.อ่านข้อมูลจากหน่วยความจำ 5.เขียนข้อมูลและส่งผลการประมวล
  ปัจจุบัน CPU อยู่ในรูปแบบของ Socket มีรูปลักษณะเป็นแผ่นสี่เหลี่ยมจัตุรัสทำด้วยเซรามิก ด้านบนกรอบของซีพียูจะบอกรายละเอียดสเปคของซีพียูตัวนั้นๆเมื่อประกอบกับเมนบอร์ดจะดูเหมือนอยู่ในตลับและต้องถูกครอบทับอีกทีด้วยพัดลมหรือชุดน้ำระบายความร้อน
</p>






<div className='info'>

<img
  src="https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT-970-80.jpg.webp"
  alt="ram img"
  className="object-cover centered-image"
/>
</div>
<h1>RAM คืออะไร</h1>
<p>
  Ram (Random-access memory) หรือ แรม เป็นหน่วยความจำหลักของคอมพิวเตอร์ ซึ่งเป็นองค์ประกอบสำคัญที่มีผลต่อประสิทธิภาพการทำงานโดยรวม ทั้งยังส่งผลต่อความเร็วในการทำงานของระบบคอมพิวเตอร์ ไม่ว่าอุปกรณ์ชนิดนั้นจะเป็นสมาร์ทโฟน, แท็บเล็ต, คอมพิวเตอร์ หรืออุปกรณ์ใดๆ ที่จำเป็นต้องอ่านและเขียนคำสั่งไปยังหน่วยความจำ
  RAM จัดว่าเป็นหน่วยความจำชั่วคราว (Short-Term Memory) โดยการทำงานของมันนั้นจะเป็นการเขียนหรือบันทึกข้อมูลแบบสุ่ม ซึ่งหน่วยความจำชนิดนี้จะสามารถบันทึกข้อมูลลงในตำแหน่งต่างๆ ได้อย่างอิสระ ทั้งนี้ก็เพื่อเพิ่มความเร็วในการบันทึกและอ่านข้อมูล จึงเป็นที่มาของคำว่า Random access ขณะเดียวกันก็ทำให้มันแตกต่างจากหน่วยความจำประเภทอื่นๆ
  อย่างสิ้นเชิง เมื่อเทียบกับฮาร์ดไดร์ฟ (Hard Drive) หรือ SSD (ที่รู้จักกันในนามของ Direct Access Memory) สิ่งที่ทำให้มันแตกต่างจากหน่วยความจำที่เข้าถึงได้โดยตรงนั่นก็คือ เมื่อมีการตัดกระแสไฟฟ้าหรือปิดคอมพิวเตอร์ ข้อมูลที่อยู่ภายใน Ram ก็จะหายไปอย่างสมบูรณ์
</p>






<div className='info'>

<img
  src="https://www.jib.co.th/img_master/product/original/2022102111444255915_1.jpg"
  alt="mb img"
  className="object-cover centered-image"
/>
</div>
<h1>Mainboard คืออะไร</h1>
<p>
  เมนบอร์ด (Mainboard)หรือที่เรียกอีกชื่อว่า มาเธอร์บอร์ด (Motherboard) คือ แผงวงจรขนาดใหญ่ที่รวบรวมเอาส่วนประกอบหลัก ๆ ที่สำคัญของคอมพิวเตอร์เข้าไว้ด้วยกัน มีลักษณะลักษณะเป็นแผ่น circuit board รูปร่างสีเหลี่ยมผืนผ้า ซึ่งเต็มไปด้วยวงจรอิเล็กทรอนิกส์ที่ซับซ้อน ดังนั้นเมนบอร์ดจึงเป็นเสมือนกับศูนย์กลางในการทำงานและเป็นศูนย์กลางในการ เชื่อมต่อกับอุปกรณ์อื่น ๆ ไม่ว่าจะเป็นซีพียู แรม ฮาร์ดดิสก์ ซีดีรอม ฟล็อปปี้ดิสก์ การ์ดต่าง ๆ
  ความสำคัญของเมนบอร์ดเหมือน CPU แต่ความสำคัญ อยู่ที่เมนบอร์ดเป็นตัวเชื่อมต่อการทำงานทุกอย่างของเครื่งอคอมพิวเตอร์ไม่ ว่าจะเป็น RAM,CPU หรือแม้แต่การ์ด VGA เป็นต้น ต่างก็ต้องพึ่งพา เมนบอร์ดในการส่งผ่านข้อมูล
</p>






<div className='info'>

<img
  src="https://img.advice.co.th/images_nas/advice_activity/202010021921882746.jpg"
  alt="hd img"
  className="object-cover centered-image"
/>
</div>
<h1>Harddisk คืออะไร</h1>
<p>
  Harddisk คืออุปกรณ์คอมพิวเตอร์ที่บรรจุข้อมูล แบบไม่ลบเลือน HDD ย่อมาจาก Hard Disk Drive มีลักษณะเป็นจานโลหะซึ่งจะหมุนอย่างรวดเร็วเมื่อทำงาน เมื่อติดตั้งเข้ากับตัวคอมพิวเตอร์สามารถทำได้ผ่านการต่อเข้ากับเมนบอร์ด อีกทั้งยังสามารถต่อใช่งานจากภายนอกได้ผ่านทางสาย USB ซึ่งทำให้การใช้ฮาร์ดดิสสะดวกยิ่งขึ้นเมื่อไม่ได้ใช้คอมพิวเตอร์ของตนเอง ขนาดของฮาร์ดดิสปัจจุบันนิยมกันอยู่ 2 ขนาดคือ 3.5นิ้ว ที่นิยมใช้ในคอมพิวเตอร์ตั้งโต๊ะทั่วไปและ 2.5นิ้ว ที่จะใช้กับ Notebook
</p>




<div className='info'>

<img
  src="https://cdn.thewirecutter.com/wp-content/media/2021/02/ssd-2048px-0101-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
  alt="ssd img"
  className="object-cover centered-image"
/>
</div>
<h1>SSD คืออะไร</h1>
<p>
  SSD คืออุปกรณ์จัดเก็บข้อมูลชนิดหนึ่งที่ใช้กับคอมพิวเตอร์หรือโน๊ตบุ๊คเพื่อจัดเก็บข้อมูลแบบถาวรเหมือนกับฮาร์ดดิส SSD นั้นย่อมาจาก Solid State Drive ซึ่งมีลักษณะการทำงานคล้ายกับ Flash Drive โดยใช้หน่วยความจำแบบ Flash Memory Chips ซึ่งเปลี่ยนมาจากจานแม่เหล็กของฮาร์ดดิสทำให้มีเร็วและเสถียรกว่า SSD ถูกสร้างมาเพื่อทดแทนฮาร์ดดิสก์ทำให้เร็วและทนทานต่อแรงกระแทกมากกว่าฮาร์ดดิสก์ที่ใช้จานหมุน ด้วยขนาดที่เล็กไม่มีจานหมุนภายในทำให้กินไฟน้อย เมื่อนำไปลงวินโดว์จะทำให้ใช้เวลาเปิดเครื่องน้อยลง ปัจจุบัน SSD นั้นมีความจุตั้งแต่ 128GB ไปจนถึงหลาย TB
</p>




<div className='info'>
  
<img
  src="https://www.gagangtech.com/wp-content/uploads/2021/12/1.-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD.jpg"
  alt="gc img"
  className="object-cover centered-image"
/>
</div>
<h1>การ์ดจอ คืออะไร</h1>
<p>
  การ์ดจอ (Graphic Card) มีลักษณะเป็นแผงวงจรแบบหนึ่ง ภายในประกอบไปด้วยอุปกรณ์หลายชิ้น โดยส่วนใหญ่เป็นอุปกรณ์ที่ทำงานเกี่ยวกับการประมวลผลด้านภาพ เช่น ซิปประมวลผลกราฟิก (GPU) อินเทอร์เฟซ (Interface) หน่วยความจำบนตัวการ์ด (VIRAM) ตัวแปลงสัญญาณสู่จอภาพ เป็นต้น ทั้งนี้การ์ดจอยังมีชื่อเรียกหลายอย่าง เช่น การ์ดแสดงผล กราฟิกการ์ด ฯลฯ 
</p>




<div className='info'>
  
<img
  src="https://geekflare.com/wp-content/uploads/2023/01/What-is-an-RGB-Power-Supply-Unit.png"
  alt="gc img"
  className="object-cover centered-image"
/>
</div>
<h1>Power supply unit คืออะไร</h1>
<p>
  Power supply unit แหล่งจ่ายไฟในคอมพิวเตอร์ ทำหน้าที่แปลงพลังงานจากเต้าเสียบที่มาให้พลังงานกับที่คอมพิวเตอร์ต้องการ มันจะส่งพลังงานผ่านสายเคเบิลไปยังเมนบอร์ดและส่วนประกอบอื่นๆ ถ้าคุณวางแผนจะเปิดเคสคอมเพื่อซ่อมแซม หรือสำรวจอะไรก็ตาม ขอแนะนำให้ถอดปลั๊กไฟ หรือปิดสวิตช์ด้านหลังก่อนเสมอ นอกจากนี้ควรแตะกับโลหะอื่นๆ ก่อนเพื่อคลายประจุที่อยู่ในตัว เพื่อป้องกันไม่ให้อุปกรณ์ในคอมพิวเตอร์ได้รับความเสียหาย
</p>
{/* ----------------section  end info  ----------------  */}
    </>
  );
}

export default App;
