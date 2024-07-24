import undrawCodeTyping from '../assets/undraw_code_typing.svg';
import Github from '../assets/Github.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Mail1 from '../assets/Mail1.svg';

function ContactHome() {
    return (
        <div className='mb-0'>
            <div className="flex w-full justify-between items-start bg-transparent p-5">
                <p className="text-white text-6xl md:text-[145px] font-light font-['M PLUS 2']">THANK YOU</p>
                <img src={undrawCodeTyping} alt="Coding Icon" className="w-32 md:w-[250px] h-auto pt-5" />
            </div>
            <div className="text-white text-[53px] font-normal font-['Monda'] pl-5">Get in Touch :</div>
            <div className='flex flex-col space-y-14 pt-5'>
                <a className='flex' href='#'>
                    <img src={Mail1} alt="Mail" className='pl-5' />
                    <div className="text-white text-[43px] font-normal font-['Monda'] pl-5">psriganesh2005@gmail.com</div>
                </a>
                <a className='flex' href='#'>
                    <img src={LinkedIn} alt="Mail" className='pl-5' />
                    <div className="text-white text-[43px] font-normal font-['Monda'] pl-5 pt-4">Sriganesh Prakash</div>
                </a>
                <a className='flex' href='#'>
                    <img src={Github} alt="Mail" className='pl-5' />
                    <div className="text-white text-[43px] font-normal font-['Monda'] pl-5 pt-5">Sriganesh01</div>
                </a>
            </div>
            <div className="text-white text-[125px] font-normal font-LondrinaOutline flex justify-end items-baseline mb-0">SRIGANESH.P</div>
        </div>
    );
}

export default ContactHome;
