import { FaGoogle, FaGithub, FaFacebook,FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            
            <div className='p-4 space-y-3 mb-6 border'>
                <h2 className="text-2xl font-semibold">Find Us On</h2>
                <a href='' className="btn btn-outline text-base w-full rounded-t-lg">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href='' className="btn text-base btn-outline w-full rounded-t-lg">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>

                <a href='' className="btn text-base btn-outline w-full rounded-t-lg">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>


            {/* Q-Zone */}

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
              <img src= {qZone1} alt="" />
              <img src= {qZone2} alt="" />
              <img src= {qZone3} alt="" />
            </div>

            {/* amazing news */}
            <div className='bg-[#05001dc4] text-white text-center mb-10 py-16 rounded '>
                <h2 className='text-3xl font-semibold'>Create an Amazing Newspaper</h2>
                <p className='my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='bg-[#D72050] px-4 py-3 rounded text-lg'>Learn More</button>
            </div>



        </div>
    );
};

export default RightSideNav;