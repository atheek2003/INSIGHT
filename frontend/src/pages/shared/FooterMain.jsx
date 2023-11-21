
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterMain = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="WEB TECHNOLOGY MINI PROJECT" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                
              </Footer.Link>
             
            </Footer.LinkGroup>
          </div>
        
         
       
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="INSIGHT"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
           
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;